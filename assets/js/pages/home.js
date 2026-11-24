/* ==========================================================================
   home.js — the Browse page: search box, category buttons, ingredient cards.
   ========================================================================== */

(function () {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const chipsContainer = document.getElementById("category-chips");
  const resultsContainer = document.getElementById("results");
  const resultsCount = document.getElementById("results-count");

  // Start from the page address, so links like index.html?category=food work.
  let activeCategory = getQueryParam("category") || "all";
  searchInput.value = getQueryParam("q") || "";

  function renderChips() {
    const allChip = { id: "all", label: "All", icon: "✨" };

    chipsContainer.innerHTML = [allChip, ...CATEGORIES]
      .map((category) => {
        const pressed = category.id === activeCategory;
        return `
          <button type="button" class="chip" data-category="${category.id}" aria-pressed="${pressed}">
            ${category.icon} ${escapeHtml(category.label)}
          </button>`;
      })
      .join("");
  }

  function renderResults() {
    const matches = sortByName(searchIngredients(searchInput.value, activeCategory));

    resultsCount.textContent =
      matches.length === 1 ? "1 ingredient" : `${matches.length} ingredients`;

    resultsContainer.innerHTML = matches.length
      ? matches.map(renderIngredientCard).join("")
      : `<p class="empty-state">No ingredients match that yet. Try another name or spelling.</p>`;
  }

  /** Keeps the address bar in sync, so a search can be bookmarked or shared. */
  function updateAddressBar() {
    const params = new URLSearchParams();
    if (searchInput.value.trim()) params.set("q", searchInput.value.trim());
    if (activeCategory !== "all") params.set("category", activeCategory);
    const query = params.toString();
    history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
  }

  function refresh() {
    renderChips();
    renderResults();
    updateAddressBar();
  }

  // ---- Events ----
  searchInput.addEventListener("input", refresh);

  searchForm.addEventListener("submit", (event) => event.preventDefault());

  chipsContainer.addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if (!chip) return;
    activeCategory = chip.dataset.category;
    refresh();
  });

  refresh();
})();
