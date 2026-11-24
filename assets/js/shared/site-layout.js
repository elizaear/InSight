/* ==========================================================================
   site-layout.js — the header and footer that appear on every page.
   Edit the site name, menu links and footer text here, in one place.
   ========================================================================== */

const SITE_NAME = "InSight";

const NAV_LINKS = [
  { page: "home",    label: "Browse",        href: "index.html" },
  { page: "decoder", label: "Label decoder", href: "decoder.html" },
  { page: "about",   label: "About",         href: "about.html" }
];

function renderSiteHeader() {
  const currentPage = document.body.dataset.page;

  const links = NAV_LINKS.map((link) => {
    const isCurrent = link.page === currentPage ? ' aria-current="page"' : "";
    return `<a href="${link.href}"${isCurrent}>${link.label}</a>`;
  }).join("");

  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="site-logo" href="index.html">
          <img src="assets/images/favicon.svg" alt="">
          ${SITE_NAME}
        </a>
        <nav class="site-nav" aria-label="Main">${links}</nav>
      </div>
    </header>
  `;
}

function renderSiteFooter() {
  const year = new Date().getFullYear();

  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <p>
          <strong>General information only.</strong> This site isn't medical or professional advice.
          Always follow product labels, and talk to a doctor or pharmacist about allergies,
          health conditions or pregnancy.
        </p>
        <p>© ${year} ${SITE_NAME}</p>
      </div>
    </footer>
  `;
}

renderSiteHeader();
renderSiteFooter();
