/**
 * Opt-in analytics loader. Does nothing unless VITE_PLAUSIBLE_DOMAIN
 * is set in a .env file, so the site ships with zero third-party
 * network calls by default.
 *
 * To enable (using https://plausible.io, or any self-hosted instance):
 *   1. Create a .env file in the project root (already gitignored via *.local —
 *      rename to .env.local, or add .env to .gitignore if you want it untracked).
 *   2. Add:  VITE_PLAUSIBLE_DOMAIN=ar-five5.github.io
 *   3. Rebuild. That's it — no code changes needed.
 *
 * Swap the <script> src below for any other privacy-friendly analytics
 * provider (Umami, GoatCounter, Fathom) if you'd rather use one of those —
 * they all follow the same "one script tag" pattern.
 */
export function initAnalytics() {
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  if (!domain) return;

  const script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = domain;
  script.src = 'https://plausible.io/js/script.js';
  document.head.appendChild(script);
}
