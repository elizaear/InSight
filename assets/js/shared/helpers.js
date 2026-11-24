/* ==========================================================================
   helpers.js — small reusable functions used by every page.
   ========================================================================== */

/** Makes text safe to put inside HTML (stops stray < > & from breaking the page). */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Lower-cases text and strips accents and punctuation, so "Parfum (Fragrance)" → "parfum fragrance". */
function normaliseText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Reads a value from the page address, e.g. ?id=retinol → getQueryParam("id") gives "retinol". */
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/** Finds one ingredient by its id. Returns undefined if there isn't one. */
function findIngredientById(id) {
  return INGREDIENTS.find((ingredient) => ingredient.id === id);
}

/** Finds a category's details (label, icon) by its id. */
function findCategoryById(id) {
  return CATEGORIES.find((category) => category.id === id);
}

/** Every name an ingredient can be searched by: name, aliases, and additive codes (621 and E621). */
function getSearchTerms(ingredient) {
  const codeTerms = ingredient.codes.flatMap((code) => [code, "E" + code]);
  return [ingredient.name, ...ingredient.aliases, ...codeTerms];
}

/** Filters ingredients by a search phrase and a category id ("all" means every category). */
function searchIngredients(query, categoryId) {
  const cleanQuery = normaliseText(query || "");

  return INGREDIENTS.filter((ingredient) => {
    const inCategory = categoryId === "all" || ingredient.categories.includes(categoryId);
    if (!inCategory) return false;
    if (!cleanQuery) return true;

    const searchableText = normaliseText(
      [...getSearchTerms(ingredient), ingredient.summary, ...ingredient.functions].join(" ")
    );
    return searchableText.includes(cleanQuery);
  });
}

/** Sorts ingredients A–Z by name (returns a new list). */
function sortByName(ingredients) {
  return [...ingredients].sort((a, b) => a.name.localeCompare(b.name));
}

/* ---------- Small HTML builders shared by several pages ---------- */

/** HTML for a coloured safety badge. */
function renderSafetyBadge(safetyId) {
  const level = SAFETY_LEVELS[safetyId];
  if (!level) return "";
  return `<span class="badge badge--${level.style}">${escapeHtml(level.label)}</span>`;
}

/** HTML for a row of category tags. Set asLinks to true to make them clickable. */
function renderCategoryTags(categoryIds, asLinks = false) {
  const tags = categoryIds
    .map(findCategoryById)
    .filter(Boolean)
    .map((category) => {
      const text = `${category.icon} ${escapeHtml(category.label)}`;
      return asLinks
        ? `<li><a class="tag" href="index.html?category=${category.id}">${text}</a></li>`
        : `<li><span class="tag">${text}</span></li>`;
    })
    .join("");
  return `<ul class="tag-list">${tags}</ul>`;
}

/** HTML for one ingredient card (used on the home page and as "related" cards). */
function renderIngredientCard(ingredient) {
  const aliases = ingredient.aliases.length
    ? `<p class="card__aliases">Also called ${escapeHtml(ingredient.aliases.slice(0, 3).join(", "))}</p>`
    : "";

  return `
    <a class="card" href="ingredient.html?id=${encodeURIComponent(ingredient.id)}">
      <div class="card__top">
        <h3 class="card__title">${escapeHtml(ingredient.name)}</h3>
        ${renderSafetyBadge(ingredient.safety)}
      </div>
      ${aliases}
      <p class="card__summary">${escapeHtml(ingredient.summary)}</p>
      ${renderCategoryTags(ingredient.categories)}
    </a>
  `;
}
