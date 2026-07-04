import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LINES = [
  { prompt: '~', command: 'whoami' },
  { output: 'amogh_raj' },
  { prompt: '~', command: './launch portfolio.sh' },
  { output: 'done.' },
];

const TYPE_SPEED = 32; // ms per character

/**
 * One-time boot sequence shown at the start of a browser session.
 * Skips instantly for repeat page loads in the same tab, and for
 * anyone with prefers-reduced-motion set.
 */
const TerminalIntro = ({ onComplete }) => {
  const [visible, setVisible] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadySeen = sessionStorage.getItem('intro-seen');

    if (prefersReduced || alreadySeen) {
      onComplete();
      return;
    }

    sessionStorage.setItem('intro-seen', '1');
    setVisible(true);
  }, [onComplete]);

  useEffect(() => {
    if (!visible || exiting) return undefined;

    const current = LINES[lineIndex];
    if (!current) {
      const finishTimer = setTimeout(() => setExiting(true), 400);
      return () => clearTimeout(finishTimer);
    }

    if (current.output) {
      const holdTimer = setTimeout(() => setLineIndex((i) => i + 1), 350);
      return () => clearTimeout(holdTimer);
    }

    if (typedChars < current.command.length) {
      const typeTimer = setTimeout(() => setTypedChars((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(typeTimer);
    }

    const advanceTimer = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setTypedChars(0);
    }, 250);
    return () => clearTimeout(advanceTimer);
  }, [visible, lineIndex, typedChars, exiting]);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(onComplete, 700);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [exiting, onComplete]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          style={{ clipPath: 'inset(0 0 0% 0)' }}
        >
          <div className="w-[min(90vw,480px)] font-mono text-sm text-[#A1A1AA]">
            {LINES.slice(0, lineIndex + 1).map((line, i) => {
              const isCurrent = i === lineIndex;
              if (line.output) {
                return (
                  <p key={i} className="mb-3 pl-4 text-white">
                    {line.output}
                  </p>
                );
              }
              const text = isCurrent ? line.command.slice(0, typedChars) : line.command;
              return (
                <p key={i} className="mb-3 flex items-center gap-2">
                  <span className="text-[#555]">{line.prompt}</span>
                  <span className="text-white">{text}</span>
                  {isCurrent && typedChars < line.command.length && (
                    <span className="inline-block h-4 w-[2px] animate-pulse bg-white" />
                  )}
                </p>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalIntro;
