/* ==========================================================================
   safety-levels.js — the three safety labels used across the site.
   "style" must match a .badge--<style> class in components.css.
   ========================================================================== */

const SAFETY_LEVELS = {
  "generally-safe": {
    label: "Generally safe",
    style: "safe",
    description: "Regulators consider it safe at the amounts normally used in products."
  },
  "use-with-care": {
    label: "Use with care",
    style: "care",
    description: "Safe for most people when used as directed, but it can irritate, cause allergies, or needs handling precautions."
  },
  "restricted": {
    label: "Restricted in places",
    style: "restricted",
    description: "Banned or limited in some countries or some uses. The details explain where and why."
  }
};
