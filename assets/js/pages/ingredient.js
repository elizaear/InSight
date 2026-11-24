/* ==========================================================================
   ingredient.js — one ingredient's full page (ingredient.html?id=...).
   ========================================================================== */

(function () {
  const container = document.getElementById("ingredient-detail");
  const ingredient = findIngredientById(getQueryParam("id"));

  if (!ingredient) {
    container.innerHTML = `
      <a class="back-link" href="index.html">← Back to all ingredients</a>
      <p class="empty-state">Sorry, we couldn't find that ingredient.</p>`;
    return;
  }

  document.title = `${ingredient.name} · ${SITE_NAME}`;

  // ---- Small section builders ----

  function renderCodes() {
    if (!ingredient.codes.length) return "";
    const codes = ingredient.codes
      .map((code) => `<span class="code">${escapeHtml(code)}</span> / <span class="code">E${escapeHtml(code)}</span>`)
      .join(", ");
    return `<span>Additive number: ${codes}</span>`;
  }

  function renderMyths() {
    if (!ingredient.myths.length) return "";
    const items = ingredient.myths
      .map((item) => `
        <div class="myth">
          <p class="myth__claim"><span class="myth__label">Myth:</span> ${escapeHtml(item.myth)}</p>
          <p><span class="myth__label">Fact:</span> ${escapeHtml(item.fact)}</p>
        </div>`)
      .join("");
    return `<section class="detail-section"><h2>Myth vs fact</h2>${items}</section>`;
  }

  function renderList(items) {
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function renderSources() {
    if (!ingredient.sources.length) return "<p>No sources listed yet.</p>";
    const links = ingredient.sources
      .map((source) => `<li><a href="${source.url}" target="_blank" rel="noopener">${escapeHtml(source.label)}</a></li>`)
      .join("");
    return `<ul>${links}</ul>`;
  }

  function renderRelated() {
    const related = INGREDIENTS.filter(
      (other) => other.id !== ingredient.id &&
                 other.categories.some((id) => ingredient.categories.includes(id))
    ).slice(0, 3);

    if (!related.length) return "";
    return `
      <section class="detail-section">
        <h2>Related ingredients</h2>
        <div class="card-grid">${related.map(renderIngredientCard).join("")}</div>
      </section>`;
  }

  // ---- Build the page ----

  const safety = SAFETY_LEVELS[ingredient.safety];
  const aliases = ingredient.aliases.length
    ? `<span>Also called ${escapeHtml(ingredient.aliases.join(", "))}</span>`
    : "";

  container.innerHTML = `
    <a class="back-link" href="index.html">← Back to all ingredients</a>

    <header class="detail-header">
      <h1>${escapeHtml(ingredient.name)}</h1>
      <div class="detail-header__meta">
        ${renderSafetyBadge(ingredient.safety)}
        ${aliases}
        ${renderCodes()}
      </div>
      ${renderCategoryTags(ingredient.categories, true)}
      <p class="lead" style="margin-top: 1.25rem">${escapeHtml(ingredient.summary)}</p>
    </header>

    <div class="detail-layout">
      <div>
        <section class="detail-section">
          <h2>What is it?</h2>
          <p>${escapeHtml(ingredient.whatItIs)}</p>
        </section>

        <section class="detail-section">
          <h2>Why is it used?</h2>
          <p>${escapeHtml(ingredient.whyUsed)}</p>
        </section>

        <section class="detail-section">
          <h2>Safety and regulation</h2>
          <div class="callout callout--${safety.style}">
            <p><strong>${escapeHtml(safety.label)}:</strong> ${escapeHtml(safety.description)}</p>
            <p>${escapeHtml(ingredient.safetyNotes)}</p>
          </div>
        </section>

        ${renderMyths()}
      </div>

      <aside>
        <div class="sidebar-box">
          <h3>Commonly found in</h3>
          ${renderList(ingredient.foundIn)}
        </div>
        <div class="sidebar-box">
          <h3>What it does</h3>
          ${renderList(ingredient.functions)}
        </div>
        <div class="sidebar-box">
          <h3>Sources</h3>
          ${renderSources()}
        </div>
        <div class="sidebar-box">
          <h3>Last reviewed</h3>
          <p>${escapeHtml(ingredient.lastReviewed)}</p>
        </div>
      </aside>
    </div>

    ${renderRelated()}
  `;
})();
