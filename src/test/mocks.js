import { vi } from 'vitest';
import React from 'react';

// Cache motion components so the same component type is returned across renders.
// Without this, React unmounts/remounts on every render because the component type changes.
const motionCache = {};

// Mock framer-motion to avoid animation overhead in tests
vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_, tag) => {
        if (!motionCache[tag]) {
          motionCache[tag] = React.forwardRef(({ children, ...props }, ref) => {
            const { initial, animate, exit, transition, layoutId, whileHover, whileTap, ...rest } = props;
            return React.createElement(tag, { ...rest, ref }, children);
          });
          motionCache[tag].displayName = `motion.${tag}`;
        }
        return motionCache[tag];
      },
    }
  ),
  AnimatePresence: ({ children }) => children,
  useAnimation: () => ({ start: vi.fn() }),
  useMotionValue: (v) => ({ get: () => v, set: vi.fn() }),
  useTransform: () => ({ get: vi.fn() }),
}));

// Mock next-themes
vi.mock('next-themes', () => ({
  ThemeProvider: ({ children }) => children,
  useTheme: () => ({ theme: 'dark', setTheme: vi.fn() }),
}));

// Mock three.js canvas rendering
vi.mock('three', () => ({
  Scene: vi.fn(() => ({ fog: null, add: vi.fn(), traverse: vi.fn() })),
  PerspectiveCamera: vi.fn(() => ({
    position: { set: vi.fn() },
    aspect: 1,
    updateProjectionMatrix: vi.fn(),
  })),
  WebGLRenderer: vi.fn(() => ({
    setPixelRatio: vi.fn(),
    setSize: vi.fn(),
    setClearColor: vi.fn(),
    render: vi.fn(),
    dispose: vi.fn(),
    domElement: document.createElement('canvas'),
  })),
  Fog: vi.fn(() => ({ color: '#ffffff' })),
  BufferGeometry: vi.fn(() => ({
    setAttribute: vi.fn(),
    attributes: { position: { array: new Float32Array(100), needsUpdate: false } },
    dispose: vi.fn(),
  })),
  Float32BufferAttribute: vi.fn((arr, n) => arr),
  PointsMaterial: vi.fn(() => ({ dispose: vi.fn() })),
  Points: vi.fn(() => ({ geometry: { dispose: vi.fn() }, material: { dispose: vi.fn() } })),
}));
