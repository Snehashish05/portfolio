# React Portfolio

A modern, responsive personal portfolio built with React and Vite.

## What is included

- Hero, About, Projects, Skills, and Contact sections
- Mobile-friendly responsive navigation
- Clean component-based React structure
- Basic automated validation test

## Quick start

1. Install dependencies
2. Start dev server

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev` – Start local development server
- `npm run build` – Build production assets
- `npm run preview` – Preview the production build
- `npm test` – Run lightweight portfolio structure validation

## Share your portfolio as a public link (GitHub Pages)

1. Push this project to a GitHub repository.
2. Ensure your default branch is `main`.
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually under **Actions**).
5. After deployment completes, your portfolio will be live at:

	`https://<your-github-username>.github.io/<your-repo-name>/`

This project already includes `.github/workflows/deploy-pages.yml`, so deployment is automatic on every push to `main`.

## Customize

Edit these files:

- `src/App.jsx` for content (name, project text, links, email)
- `src/App.css` for colors, spacing, and styles
