# Adding a new ingredient

All ingredient content lives in **one file**: `assets/js/data/ingredients.js`.
You don't need to touch any HTML, CSS or other JavaScript to add an ingredient.

## Steps

1. Open `assets/js/data/ingredients.js`.
2. Copy the template below.
3. Paste it inside the `INGREDIENTS = [ ... ]` list, after another ingredient's closing `},`.
4. Fill it in and save.
5. Refresh the website. The new ingredient appears on the Browse page, in search, and in the Label decoder.

## Template

```js
  {
    id: "my-ingredient",              // unique, lowercase, dashes instead of spaces (used in the page address)
    name: "My ingredient",            // the name shown on the page
    aliases: ["Other name", "INCI name"],   // other names people might search or see on labels
    codes: [],                        // food additive numbers WITHOUT the E, e.g. ["621"]. Leave [] if none
    categories: ["food"],             // one or more ids from assets/js/data/categories.js
    functions: ["Preservative"],      // what it does in a product
    safety: "generally-safe",         // "generally-safe", "use-with-care" or "restricted"
    summary: "One sentence that appears on the card.",
    whatItIs: "A short paragraph explaining what it is.",
    whyUsed: "A short paragraph explaining why manufacturers add it.",
    foundIn: ["Product type 1", "Product type 2"],
    safetyNotes: "What the evidence and regulators say. Include any warnings.",
    myths: [
      { myth: "A common claim.", fact: "What the evidence actually says." }
    ],
    sources: [SOURCES.fsanz, { label: "Exact page title", url: "https://..." }],
    lastReviewed: "2026-11"           // year-month you last checked it
  },
```

## Rules that stop the site breaking

- Every `{ ... }` block needs a comma after its closing `}` (except the very last one is optional).
- Text goes inside straight double quotes `"like this"`. If your text contains a double quote, use curly quotes “ ” instead.
- Lists use square brackets: `["one", "two"]`. An empty list is `[]`.
- If the page goes blank after an edit, press **F12** in your browser and open the **Console** tab. It shows the line number of the mistake.

## Writing guidelines

- Write for a 15-year-old: short sentences, no jargon without explanation.
- Say what the evidence shows, not what feels scary or reassuring.
- Mention which country a rule applies to, since rules differ (Australia, EU, US).
- Every safety claim should have a source. Prefer regulators (FSANZ, TGA, AICIS, EFSA, FDA) over blogs.
