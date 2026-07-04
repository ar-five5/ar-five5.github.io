import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * Animated count-up number, triggered once when scrolled into view.
 * Respects prefers-reduced-motion by snapping straight to the final value.
 */
const StatCounter = ({ value, prefix = '', suffix = '', label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 90 });
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isInView) {
      if (prefersReduced) {
        setDisplay(value);
        return;
      }
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [isInView, value, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="text-3xl md:text-4xl font-medium tracking-tight text-white tabular-nums">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-[#828282]">{label}</span>
    </div>
  );
};

export default StatCounter;
