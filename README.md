# Geometry Lab — Interactive Comprehensive Exam Review

Geometry Lab is a static, GitHub Pages-ready study app for a comprehensive geometry exam review sheet. It organizes the review exactly by the 14 listed units and gives each concept a hands-on visual learning card with rules, formulas, and practice prompts.

## What is included

- **14 ordered units** matching the review sheet topic order.
- **Interactive SVG labs** for angles, coordinate formulas, transformations, triangle relationships, similarity, right triangles, trigonometry, quadrilaterals, circles, and area.
- **Study tools** including search, a mastered-concepts progress tracker, random concept jump, dark mode, and Part 2 written-response strategy cards.
- **No build step required**: open `index.html` directly or serve the folder locally.
- **GitHub Pages workflow** included in `.github/workflows/pages.yml` for automatic deployment after the repo is pushed to GitHub.

## Run locally

You can open `index.html` directly in a browser, or run a small local server:

```bash
npm run serve
```

Then open <http://127.0.0.1:4173/>.

## Validate the project

```bash
npm test
```

This checks JavaScript syntax and confirms the HTML can be parsed.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow that deploys the static site from the repository root.

1. Push this repository to GitHub.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to the default branch or run the **Deploy static Geometry Lab to Pages** workflow manually.

The workflow uploads `index.html`, `styles.css`, `script.js`, `README.md`, `.nojekyll`, and other root files as a static Pages artifact.

## File map

- `index.html` — page structure, templates, study toolbar, unit container, and Part 2 area.
- `styles.css` — responsive glassmorphism UI, dark mode variables, cards, controls, and layout.
- `script.js` — concept data, rendering logic, localStorage progress, and all interactive learning labs.
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow.
