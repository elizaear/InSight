/* ==========================================================================
   decoder.js — the Label decoder: paste an ingredient list, see what's known.
   ========================================================================== */

(function () {
  const form = document.getElementById("decoder-form");
  const input = document.getElementById("decoder-input");
  const exampleButton = document.getElementById("decoder-example");
  const resultsContainer = document.getElementById("decoder-results");

  const EXAMPLE_LABEL =
    "Ingredients: Aqua (Water), Glycerin, Niacinamide, Sodium Hyaluronate, " +
    "Cetearyl Alcohol, Methylparaben, Sodium Benzoate, Citric Acid, Parfum (Fragrance, Limonene, Linalool)";

  // Build a lookup table once: every searchable name → its ingredient.
  const termLookup = new Map();
  INGREDIENTS.forEach((ingredient) => {
    getSearchTerms(ingredient).forEach((term) => termLookup.set(normaliseText(term), ingredient));
  });

  /**
   * Splits a label into separate ingredients on commas, semicolons and new lines,
   * but NOT on commas inside brackets, e.g. "Parfum (Fragrance, Limonene)" stays together.
   */
  function splitLabel(text) {
    const withoutHeading = text.replace(/^\s*(ingredients|contains)\s*:/i, "");
    const parts = [];
    let current = "";
    let depth = 0;

    for (const char of withoutHeading) {
      if (char === "(" || char === "[") depth++;
      if (char === ")" || char === "]") depth = Math.max(0, depth - 1);

      if (depth === 0 && /[,;\n•]/.test(char)) {
        parts.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    parts.push(current);

    return parts.map((part) => part.replace(/\.$/, "").trim()).filter(Boolean);
  }

  /** Finds the ingredient for one label item, checking the words inside brackets too. */
  function matchItem(item) {
    const insideBrackets = [...item.matchAll(/[(\[]([^)\]]*)[)\]]/g)]
      .flatMap((match) => match[1].split(/[,/]/));
    const outsideBrackets = item.replace(/[(\[][^)\]]*[)\]]/g, "");

    const candidates = [outsideBrackets, item, ...insideBrackets].map(normaliseText).filter(Boolean);

    // 1. Exact match, e.g. "glycerin"
    for (const candidate of candidates) {
      if (termLookup.has(candidate)) return termLookup.get(candidate);
    }

    // 2. A known name as a whole word inside a longer item, e.g. "flavour enhancer 621"
    const padded = ` ${candidates.join(" ")} `;
    for (const [term, ingredient] of termLookup) {
      if (padded.includes(` ${term} `)) return ingredient;
    }

    return null;
  }

  function renderResults(items) {
    if (!items.length) {
      resultsContainer.innerHTML = `<p class="empty-state">Paste an ingredient list above to get started.</p>`;
      return;
    }

    const results = items.map((item) => ({ item, ingredient: matchItem(item) }));
    const knownCount = results.filter((result) => result.ingredient).length;

    const rows = results
      .map(({ item, ingredient }) => {
        if (!ingredient) {
          return `
            <li class="decoder-item decoder-item--unknown">
              <span class="decoder-item__name">${escapeHtml(item)}</span>
              <span class="decoder-item__note">Not in our guide yet</span>
            </li>`;
        }
        return `
          <li class="decoder-item">
            <div>
              <a class="decoder-item__name" href="ingredient.html?id=${encodeURIComponent(ingredient.id)}">${escapeHtml(item)}</a>
              <div class="decoder-item__note">${escapeHtml(ingredient.summary)}</div>
            </div>
            ${renderSafetyBadge(ingredient.safety)}
          </li>`;
      })
      .join("");

    resultsContainer.innerHTML = `
      <div class="decoder-summary">
        We found <strong>${items.length}</strong> ingredients and have information on
        <strong>${knownCount}</strong> of them.
      </div>
      <ul class="decoder-list">${rows}</ul>`;
  }

  // ---- Events ----
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResults(splitLabel(input.value));
  });

  exampleButton.addEventListener("click", () => {
    input.value = EXAMPLE_LABEL;
    renderResults(splitLabel(EXAMPLE_LABEL));
  });
})();
