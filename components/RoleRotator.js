'use client';

import { useEffect, useState } from 'react';

/**
 * Cycles the hero subline through the stack, one word at a time.
 *
 * The widest word is rendered once, invisible, to reserve the inline box —
 * without it the line reflows on every swap and the layout jitters. The live
 * word sits on top of that spacer and cross-fades.
 *
 * Renders the first word statically on the server, and stays on it for
 * reduced-motion users.
 */
export default function RoleRotator({ words, interval = 2400, className = '' }) {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      // Fade out, swap at the bottom of the fade, fade back in.
      setShown(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setShown(true);
      }, 320);
    }, interval);

    return () => clearInterval(id);
  }, [words.length, interval]);

  const widest = words.reduce((a, b) => (b.length > a.length ? b : a), '');

  return (
    <span className={`relative inline-grid align-bottom ${className}`}>
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {widest}
      </span>
      <span
        aria-live="polite"
        className={`text-gradient col-start-1 row-start-1 whitespace-nowrap transition-all duration-300 ${
          shown ? 'translate-y-0 opacity-100 blur-0' : '-translate-y-2 opacity-0 blur-sm'
        }`}
      >
        {words[index]}
      </span>
    </span>
  );
}
