import React from 'react';

/**
 * Very subtle animated film-grain layer for atmospheric depth.
 * Pure CSS/SVG, no canvas cost, ignored by screen readers.
 */
const Grain = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-[2] h-full w-full opacity-[0.035] mix-blend-overlay"
  >
    <filter id="grain-filter">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain-filter)" />
  </svg>
);

export default Grain;
