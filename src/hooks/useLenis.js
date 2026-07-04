import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initializes Lenis smooth scrolling for the whole document.
 * Skipped entirely for prefers-reduced-motion so the page behaves
 * like ordinary native scroll for anyone who's asked for that.
 */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    });

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
}
