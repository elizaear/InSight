/* ==========================================================================
   about.js — fills in the safety label explanations on the About page.
   ========================================================================== */

(function () {
  const legend = document.getElementById("safety-legend");

  legend.innerHTML = Object.keys(SAFETY_LEVELS)
    .map((id) => `
      <div class="legend__item">
        ${renderSafetyBadge(id)}
        <p>${escapeHtml(SAFETY_LEVELS[id].description)}</p>
      </div>`)
    .join("");
})();
