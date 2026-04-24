# Portfolio — Master Context Document

**Owner:** Amogh Raj Godavarthy
**Purpose:** Single source of truth for the portfolio website. Every decision, every piece of content, every constraint in one file. Claude Code reads this; no other context needed.
**Last updated:** April 2026

---

## 1. IDENTITY

- **Full name:** Amogh Raj Godavarthy
- **Display name on site:** "Amogh Raj Godavarthy" (full, no abbreviation)
- **Short form (nav/brand):** "Amogh Raj"
- **Roll number:** SE23UCSE022
- **College:** Mahindra University, Hyderabad
- **Program:** B.Tech Computer Science Engineering
- **Years:** 2023 to 2027 (expected)
- **Role / status:** Computer Science student
- **Tagline (one-liner under hero name):** "Computer Science student. Focused on applied ML and forecasting."
- **Location (displayed):** Hyderabad, India
- **GitHub:** https://github.com/ar-five5
- **LinkedIn:** https://linkedin.com/in/amogh-raj
- **Personal email:** amoghraj55@gmail.com
- **College email:** se23ucse022@mahindrauniversity.edu.in
- **Phone:** `{{PHONE}}` — to be filled in by hand, displayed only on hover/click for privacy
- **Profile photo:** real photo (file to be placed at `src/assets/profile.jpg`)

---

## 2. VISUAL DIRECTION

### Theme: Pure monochrome (from Emergent)
Black and white only. No accent color. Every visual emphasis comes from contrast, typography, and spacing — not hue. Reference feel: Vercel CLI docs, Anthropic docs, Linear's changelog, Rauno Freiberg's portfolio.

### Color tokens (exact values)

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#000000` | Main page background (pure black) |
| `--bg-elev` | `#0A0A0A` | Sidebar, cards (slight elevation from main) |
| `--bg-elev-2` | `#1A1A1A` | Secondary elevated surfaces, pressed states |
| `--bg-muted` | `#1F1F1F` | Muted surfaces |
| `--border` | `#262626` | Default 1px hairline borders |
| `--border-strong` | `#404040` | Focus states, active elements |
| `--text` | `#FAFAFA` | Primary text, "accent" via whiteness |
| `--text-muted` | `#A3A3A3` | Secondary text, labels |
| `--text-dim` | `#737373` | Tertiary text, micro-labels, slash separators |

### Other tokens
- `--radius: 0.3rem` (~5px, sharp)
- `--radius-sm: 0.2rem` (~3px, for pills)
- `--sidebar-w: 340px` (desktop)
- `--content-maxw: 860px` (main content column)
- `--font-sans: "Inter Variable", system-ui, -apple-system, sans-serif`
- `--font-mono: "JetBrains Mono Variable", ui-monospace, monospace`
- `--transition: 200ms ease`

### Rules
- No gradients, no glows, no glassmorphism, no drop shadows beyond whisper-level
- No emojis, no illustrations, no stock imagery
- No icons beyond minimal line icons (lucide-react)
- Grain overlay via SVG noise at 2 to 3% opacity on body
- Custom scrollbar: 6px wide, thumb `#333`, hover `#555`

### Typography hierarchy
- Display (hero name): `clamp(44px, 7vw, 84px)`, weight 700, tracking `-0.03em`, line-height 0.95
- h1 (page titles): `clamp(32px, 5vw, 44px)`, weight 700, line-height 1.1
- h2 (section headings): 22px, weight 600
- h3 (card titles): 17px, weight 600
- Body: 15px, weight 400, line-height 1.65
- Small: 13px, weight 400
- Micro labels (mono uppercase): 10 to 11px, weight 500, letter-spacing 0.12em, `var(--font-mono)`
- Paragraph color: `#D4D7DD` (slight warmth vs pure white headings)

---

## 3. TONE & POSITIONING

- **Primary tone:** balanced. Not over-selling as hero, builder, or researcher. Quiet confidence.
- **10-second impression goal:** "This person is a real CS student with real ML projects, takes their craft seriously, and has taste."
- **What to avoid:** marketing language, "passionate about", "I'm a recent graduate looking for opportunities" cliches
- **What to lean into:** concrete work, specific tools used, specific results achieved

---

## 4. TECH STACK (locked)

| Layer | Choice | Notes |
|---|---|---|
| Build | Vite + React (JSX, no TS) | Do not switch to CRA |
| Styling | Tailwind v4 + CSS variables | Tailwind Vite plugin, `@theme inline` block |
| Animation | Motion (`motion/react`) | Premium tier. Page transitions, hover states, scroll reveals, but tasteful |
| Smooth scroll | Lenis (`lenis/react` with `ReactLenis`) | `lerp: 0.08` tuned |
| Routing | react-router-dom v6 with HashRouter | Required for gh-pages |
| Fonts | `@fontsource-variable/inter`, `@fontsource-variable/jetbrains-mono` | Self-hosted, no Google Fonts CDN |
| Icons | lucide-react | Line icons only |
| Deploy | gh-pages | Push to `gh-pages` branch, `dist/` folder |

**Dependencies NOT to add:** shadcn/ui, tailwindcss-animate, framer-motion (old name), styled-components, emotion, any CSS-in-JS lib.

---

## 5. PAGE STRUCTURE

### Persistent across all pages

**Left sidebar** (340px desktop, stacks on mobile <768px):
- Profile photo (real, 140px circle, 1px hairline border). Fallback: "AR" monogram in mono 40px
- Name: **Amogh Raj Godavarthy** (full name, weight 600, 22px, tight tracking)
- Role: "Computer Science Student" (muted, 13px)
- Tagline: "Applied ML · Time-Series Forecasting" (mono micro caps, muted)
- Divider
- "CONTACT" label (mono micro caps, muted)
- Contact items (each with a thin line marker, not colored dots):
  - PERSONAL EMAIL: amoghraj55@gmail.com (mailto)
  - COLLEGE EMAIL: se23ucse022@mahindrauniversity.edu.in (mailto)
  - PHONE: `{{PHONE}}` — hidden by default, revealed on click of "Show phone" link
  - LOCATION: Hyderabad, India
- Divider
- Social row at bottom: "GitHub ↗" and "LinkedIn ↗" as text links, lucide `ArrowUpRight` icon

**Top nav** (sticky, inside main column):
- 4 NavLinks: About / Resume / Projects / Contact
- Mono uppercase, 11px, tracked 0.12em
- Inactive: `text-muted`. Hover: `text`. Active: `text` with 2px white border-bottom.
- Motion `layoutId` on the active indicator so it slides between tabs when switching

### 4 Pages

#### 5.1 About (/)
1. **Hero block** — massive display "Amogh Raj Godavarthy", mono tagline below, one-line description
2. Section `01 / ABOUT` — About Me paragraph (see Section 6)
3. Section `02 / RESEARCH INTERESTS` — pill tags row

#### 5.2 Resume (/resume)
1. h1 "Resume"
2. Section `01 / EDUCATION` — one-liner: "B.Tech CSE @ Mahindra University, Hyderabad · 2023 to 2027"
3. Section `02 / EXPERIENCE` — timeline entries (see Section 6)
4. Section `03 / SKILLS` — 4 subsections: Languages / Frameworks / Tools / ML & Data, each a pill row
5. Section `04 / TRAINING` — stacked, understated: i-Hub IIIT Hyderabad + BITSoM × Masai

#### 5.3 Projects (/projects)
1. h1 "Projects"
2. Subtitle: "Selected work across ML, forecasting, and product building."
3. 4 project cards in this exact order:
   1. OPSD-PowerDesk
   2. Employee Attrition & Salary Prediction
   3. Healthcare ML Models
   4. MOSP — BITSoM PM capstone
4. Each card: title, period (right-aligned mono), tech stack pills, description, highlights with ▸ markers, "View on GitHub →" ghost button

#### 5.4 Contact (/contact)
1. h1 "Contact"
2. Paragraph: "Open to internship opportunities, research collaborations, and interesting problems. Fastest way to reach me is email."
3. Grid of 4 contact method cards: Personal Email / College Email / Phone (hover to reveal) / Location
4. Below grid: 2 ghost buttons — "GitHub ↗" and "LinkedIn ↗"
5. Bottom: "View Resume →" button linking to hosted PDF (link to be added later)

**No footer on any page.**

---

## 6. CONTENT (exact copy)

### About Me paragraph
> I'm a third-year B.Tech Computer Science student at Mahindra University, Hyderabad. My work sits at the intersection of applied machine learning and real-world systems. I've built end-to-end ML pipelines for energy forecasting, healthcare classification, and HR analytics. Outside coursework I completed a 6-month AI/ML training program at i-Hub, IIIT Hyderabad, and I'm currently part of a product management program with BITSoM × Masai focused on generative and agentic AI.

### Research Interests (pills)
- Time-Series Forecasting
- Applied ML in Energy Systems
- Healthcare ML
- AI Safety & Interpretability
- Agentic AI

### Experience (timeline entries)
**Independent ML Research** — Personal Projects · 2024 to Present
- Built end-to-end ML pipeline for day-ahead electricity load forecasting across 3 European countries using 50k+ hourly OPSD observations
- Developed healthcare classification models (diabetes, heart disease, COVID) on real clinical datasets during i-Hub IIIT-H program
- Built HR analytics system predicting both employee attrition (82% F1) and future salary for ~$2M financial exposure estimate
- Delivered product-focused AI capstone through BITSoM × Masai PM program

### Skills (pill rows)

**LANGUAGES:** Python, C, SQL (MySQL, PostgreSQL), JavaScript, HTML, CSS

**FRAMEWORKS:** React, Streamlit, TensorFlow / Keras, PyTorch (basics), scikit-learn

**TOOLS:** Git & GitHub, Jupyter, VS Code, Linux / WSL

**ML & DATA:** Pandas, NumPy, Seaborn, Matplotlib, spaCy, SARIMA / LSTM / GRU

### Training (understated, at the bottom of Resume)
- AI/ML Training — i-Hub, IIIT Hyderabad · Sep 2024 – Mar 2025
- Product Management with Generative & Agentic AI — BITSoM × Masai · Sep 2025 – Mar 2026

### Projects (in order)

#### Project 1 — OPSD-PowerDesk
- **Title:** OPSD-PowerDesk — Day-Ahead Electricity Load Forecasting
- **Period:** Jan 2025 – Apr 2025
- **Stack:** Python, TensorFlow, SARIMA, LSTM, GRU, Streamlit, CUDA
- **Description:** End-to-end ML pipeline for day-ahead electricity load forecasting across Austria, Belgium, and Bulgaria using 50,000+ hourly OPSD observations.
- **Highlights:**
  - Benchmarked 4 models (SARIMA, LSTM, GRU, Vanilla RNN) on MASE, sMAPE, RMSE
  - CUDA-accelerated training with 80/10/10 time-based data splits
  - Dual anomaly detection (Z-score/IQR/MAD ensemble + Isolation Forest / Random Forest) achieving 85%+ precision
  - Interactive Streamlit dashboard for forecast exploration and anomaly review
- **GitHub:** https://github.com/ar-five5/OPSD-PowerDesk

#### Project 2 — Employee Attrition & Salary Prediction
- **Title:** Employee Attrition & Salary Prediction
- **Period:** Oct 2024
- **Stack:** Pandas, Seaborn, Logistic Regression, Ridge Regression
- **Description:** Multi-step classification and regression pipeline on the IBM HR dataset predicting attrition risk and future salary in one unified view.
- **Highlights:**
  - 82% F1-score on attrition classification
  - Salary regression with RMSE under 5% of mean salary
  - Combined attrition probability and salary predictions to estimate ~$2M annual financial exposure
  - Seaborn dashboards visualizing high-risk workforce segments
- **GitHub:** https://github.com/ar-five5/Employee-Attrition-and-Salary-Prediction

#### Project 3 — Healthcare ML Models
- **Title:** Healthcare ML Models
- **Period:** Sep 2024 – Mar 2025
- **Stack:** Python, scikit-learn, Pandas, Jupyter
- **Description:** Collection of ML projects built during the 6-month AI/ML training program at i-Hub, IIIT Hyderabad. Classification and regression on real clinical datasets.
- **Highlights:**
  - Diabetes risk classification using patient clinical data
  - Heart disease prediction with feature engineering and model comparison
  - COVID-19 regression analysis on public health data
- **GitHub:** https://github.com/ar-five5/Healthcare-ML-Models

#### Project 4 — MOSP (schedule_os)
- **Title:** MOSP — AI-Powered Mess Optimization System
- **Period:** Mar 2026
- **Stack:** Product Design, AI Workflow Design, Agentic AI
- **Description:** Capstone project for the BITSoM × Masai Product Management with Gen & Agentic AI program. An opt-in based system that uses AI to predict mess attendance, reduce food waste, and create transparent feedback loops between students, owners, and admins.
- **Highlights:**
  - 13 functional screens designed across 3 user roles (students, owners, admins)
  - Weighted attendance prediction algorithm: 50% current opt-ins, 40% historical average, 10% special-day adjustment
  - Real-time meal feedback with sentiment-tagged reviews
  - Admin-side AI alert system for waste patterns and procurement planning
- **GitHub:** https://github.com/ar-five5/schedule_os

---

## 7. INTERACTION BEHAVIOR

- **Smooth scroll:** Lenis active globally, `lerp: 0.08`, `smoothWheel: true`, `smoothTouch: false`
- **Page transitions:** Motion AnimatePresence with mode="wait". Each page enters with opacity 0 → 1, y 16 → 0, blur(8px) → blur(0), 400ms, cubic-bezier(0.22, 1, 0.36, 1)
- **TopNav active indicator:** Motion `layoutId="nav-indicator"` slides between active tabs
- **Sidebar avatar:** very subtle breathing scale animation (1 → 1.015, 4s infinite ease-in-out). On hover, scales to 1.04 with spring
- **Tagline in sidebar:** one-time typewriter effect on first mount (25ms per char)
- **Scroll reveals:** sections fade + translateY 20 → 0 as they enter viewport, spring easing, 100ms stagger between siblings
- **Project cards:** hover triggers border color change to white + 2px lift + cursor-following radial spotlight at 10% opacity. 250ms ease.
- **All interactive elements:** cursor-pointer, visible :focus-visible outline (2px white, 2px offset)
- **Reduced motion:** respect `prefers-reduced-motion` via Motion's `useReducedMotion`. Disable breathing, tilt, and spotlight; keep essential fades

---

## 8. PERFORMANCE REQUIREMENTS

- 60fps on mid-range laptop. Only animate `transform` and `opacity`, never layout properties
- `will-change` only during active animation, removed after
- Main bundle < 180kb gzipped
- No horizontal scroll at any width
- Responsive: 360px mobile to 1440px+ desktop
- All font files self-hosted (no external requests)
- Lazy-load any component not needed on first paint

---

## 9. VIVA / PRESENTATION NOTES

`ARCHITECTURE.md` at the project root documents every layer in first-person voice:
- Why each tech choice was made (Tailwind v4, HashRouter, Motion, Lenis, monochrome theme)
- The honest tradeoff each choice involved
- Plain-language explanation of non-obvious code

I must be able to defend:
- Why Tailwind v4 + CSS variables over Tailwind v3 + theme.extend
- Why HashRouter for gh-pages compatibility
- Why Lenis instead of native smooth scroll
- Why Motion over framer-motion naming
- Why pure monochrome instead of a colored accent
- Why 4 separate routes instead of a single-page scroll
- Why `@fontsource-variable/*` over Google Fonts CDN

All comments in code must read like I wrote them, not like vendor docs.

---

## 10. DEPLOYMENT

- GitHub repo name: `portfolio`
- Must be public
- `vite.config.js`: `base: '/portfolio/'`
- `package.json`: `"homepage": "https://ar-five5.github.io/portfolio"`, `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
- Deploy command: `npm run deploy`
- GitHub Pages source: `gh-pages` branch, root folder
- Final live URL: `https://ar-five5.github.io/portfolio`
- **Deadline:** Wednesday 22 April 2026, 11:50 PM IST

---

## 11. STRICT DO-NOT RULES

1. Do not introduce shadcn/ui, tailwindcss-animate, or any UI library
2. Do not switch HashRouter to BrowserRouter (will break gh-pages)
3. Do not use Google Fonts CDN — keep Fontsource self-hosted
4. Do not use Tailwind v3 — v4 is locked
5. Do not animate layout properties (width/height/top/left) — only transform/opacity
6. Do not add a command palette or keyboard shortcuts
7. Do not add a footer
8. Do not show CGPA anywhere
9. Do not show personal details like phone without the hover-to-reveal interaction
10. Do not use any colored accent — monochrome only
