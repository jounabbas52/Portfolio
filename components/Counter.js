'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts a stat up the first time it scrolls into view.
 *
 * Values in config/site.js are strings like "1+" or "3.4", so the numeric run
 * is parsed out and whatever sits around it (prefix, "+", "%") is preserved.
 * Decimal places are matched to the target, so 3.4 counts 0.0 → 3.4 rather
 * than jumping integers.
 *
 * Renders the final value on the server and for reduced-motion users, so the
 * number is never missing or stuck at zero.
 */
export default function Counter({ value, duration = 1600, className = '' }) {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  const prefix = match?.[1] ?? '';
  const target = match ? parseFloat(match[2]) : null;
  const suffix = match?.[3] ?? '';
  const decimals = match?.[2].includes('.') ? match[2].split('.')[1].length : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        let raf = 0;
        const start = performance.now();

        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast out of the gate, settles onto the final value
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setDisplay((target * eased).toFixed(decimals));
          if (t < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        el._cancel = () => cancelAnimationFrame(raf);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      el._cancel?.();
    };
  }, [target, duration, decimals]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display === null ? value : `${prefix}${display}${suffix}`}
    </span>
  );
}
