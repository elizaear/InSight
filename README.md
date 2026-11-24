# InSight

A plain-English guide to the ingredients in skincare, cosmetics, food, household products and paint, so people can understand what they're using and consuming.

## Features

- **Browse and search** ingredients by name, other names, or food additive number (e.g. `621` or `E621`)
- **Filter by category**: skincare, cosmetics, food, household, paints
- **Ingredient pages**: what it is, why it's used, safety and regulation, myth vs fact, and sources
- **Label decoder**: take or upload a photo of a label (read on-device with Tesseract.js), or paste an ingredient list, and see which ingredients are explained

## Folder structure

```
InSight/
├── index.html               Browse and search page (home)
├── ingredient.html          Single ingredient page (ingredient.html?id=...)
├── decoder.html             Label decoder page
├── about.html               About, safety labels and disclaimer
│
├── assets/
│   ├── css/
│   │   ├── base.css         Colours, fonts, default styles  ← change the theme here
│   │   ├── layout.css       Header, footer, page structure
│   │   └── components.css   Cards, badges, buttons, search box
│   │
│   ├── images/
│   │   └── favicon.svg      Site logo / browser tab icon
│   │
│   └── js/
│       ├── data/            CONTENT — edit these to change what the site says
│       │   ├── ingredients.js     All ingredient information  ← add ingredients here
│       │   ├── categories.js      Product categories
│       │   └── safety-levels.js   The three safety labels
│       │
│       ├── shared/          Code used by every page
│       │   ├── helpers.js         Search, formatting and card-building functions
│       │   └── site-layout.js     Header, menu and footer  ← change the site name here
│       │
│       └── pages/           One script per HTML page
│           ├── home.js
│           ├── ingredient.js
│           ├── decoder.js
│           ├── label-scanner.js   Reads text from label photos (Label decoder page)
│           └── about.js
│
├── docs/
│   └── adding-ingredients.md   How to add a new ingredient (with a template)
│
├── .gitignore
└── README.md
```

**Rule of thumb:** content goes in `assets/js/data/`, looks go in `assets/css/`, and behaviour goes in `assets/js/pages/`.

## Viewing the site on your computer

No installation needed. Double-click `index.html` to open it in your browser.
After editing a file, save it and refresh the browser.

## Publishing with GitHub Pages (free)

1. Push this folder to a GitHub repository.
2. On GitHub, open the repository's **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
4. After a minute or two your site is live at `https://<your-username>.github.io/<repository-name>/`.

## Common edits

| I want to…                 | Edit this file                         |
| -------------------------- | -------------------------------------- |
| Add or change an ingredient | `assets/js/data/ingredients.js` (see `docs/adding-ingredients.md`) |
| Add a category             | `assets/js/data/categories.js`         |
| Rename the site / menu     | `assets/js/shared/site-layout.js` and the `<title>` in each `.html` file |
| Change colours or fonts    | `assets/css/base.css`                  |

## Content note

The starter ingredient entries are written from general regulatory and scientific sources. Before publishing, check each entry and replace the general source links with the exact pages you used. This site is general information only, not medical or professional advice.
