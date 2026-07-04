# Amogh Raj — Portfolio

Personal portfolio site, live at **[ar-five5.github.io](https://ar-five5.github.io/)**.

A single-page app with About, Resume, Projects, and Contact sections, a terminal-style intro animation, particle background, and smooth scrolling.

## Stack

- **React 19** + **Vite** — app framework and build tool
- **react-router-dom** (`HashRouter`) — client-side routing (hash-based, required for GitHub Pages static hosting)
- **Tailwind CSS v3** (+ `tailwindcss-animate`) — styling, dark theme
- **Framer Motion** — page transitions and animations
- **Lenis** — smooth scrolling
- **lucide-react** — icons

## Local development

```bash
npm install       # install dependencies
npm run dev       # start dev server with HMR
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Project structure

```
src/
├── main.jsx          # entry point
├── App.jsx           # router, layout, intro/background chrome
├── index.css         # Tailwind entry + global styles
├── data/
│   └── mock.js       # ALL site content (bio, projects, resume, links) — edit this to update the site
├── pages/            # About, Resume, Projects, Contact
├── components/
│   ├── layout/       # Sidebar, TopNav
│   └── ui/           # visual components (particles, grain, terminal intro, pills, etc.)
├── hooks/            # useLenis, useScrollToTop
└── lib/              # analytics, cn() class helper
```

All content lives in `src/data/mock.js` — pages consume it directly, so text/project updates never require touching component code.

## Deployment

Deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`):

1. Push to `main`
2. The workflow runs `npm ci` and `npm run build`
3. The `dist/` output is uploaded and deployed to GitHub Pages via the official `deploy-pages` action

No manual deploy step and no `gh-pages` package — just push to `main`.
