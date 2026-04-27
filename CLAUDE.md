# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (HMR via Vite)
npm run build     # production build
npm run preview   # preview production build locally
npm run lint      # ESLint
npm run test      # run tests once (Vitest)
npm run test:watch   # run tests in watch mode
npm run test:coverage # run tests with coverage report
```

## Testing

Tests use **Vitest** + **@testing-library/react** with a **jsdom** environment. All test files live in `src/test/`.

- `setup.js` — imports `@testing-library/jest-dom` matchers
- `mocks.js` — shared vi.mock() calls for `framer-motion`, `next-themes`, and `three`
- `utils.test.js` — unit tests for `src/lib/utils.js` (`cn`)
- `mock.test.js` — data shape/structure tests for `src/mock.js`
- `pill.test.jsx`, `bg-pattern.test.jsx` — component unit tests
- `About.test.jsx`, `Projects.test.jsx`, `Resume.test.jsx`, `Contact.test.jsx` — page tests
- `Sidebar.test.jsx`, `TopNav.test.jsx` — layout component tests

All page/component tests import `mocks.js` to stub out heavy dependencies (Three.js, framer-motion animations, next-themes).

## Architecture

Single-page React portfolio deployed via `gh-pages`. Routing uses `HashRouter` (required for GitHub Pages static hosting — do not switch to `BrowserRouter`).

**Data layer:** All content lives in `src/data/portfolio.js` as a single exported `portfolio` object. Pages consume it directly — no API, no state management. To update bio, projects, skills, or training, edit only this file.

**Pages & components:**
- `src/pages/Home/Home.jsx` — hero, about, research interests, personal details, skills, training sections
- `src/pages/Projects/Projects.jsx` — project cards derived from `portfolio.projects`
- `src/components/Navbar/Navbar.jsx` — top nav with `NavLink` active-state styling

**Styling:** CSS Modules (`.module.css`) co-located with each component/page. No shared utility classes or CSS variables file — styles are self-contained per component.

**Profile image:** Loaded via `import.meta.glob` in `Home.jsx` targeting `src/assets/profile.jpg`. If the file is absent, an initials placeholder renders instead.

**Animations:** `framer-motion` is installed but not yet wired into any component.
