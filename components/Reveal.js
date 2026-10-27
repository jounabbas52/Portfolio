'use client';

import { useEffect, useRef } from 'react';

/**
 * Reveals children as they come into view.
 *
 * TUNED TO BE EARLY AND SHORT, deliberately.
 *
 * The first version waited until 12% of the element had crossed 8% INTO the
 * viewport and then ran for 0.9s. On a tall card -- a case study, a whole
 * experience entry -- that meant the block was well up the screen before it
 * started, and still finishing as you kept scrolling: you arrived at content
 * that was not there yet. The trigger now fires slightly BEFORE the element
 * reaches the fold and the transition is roughly half as long, so the content
 * is already settled by the time it is somewhere you would actually read it.
 *
 * Falls back to visible content when IntersectionObserver is unavailable, and
 * the reduced-motion media query in globals.css neutralises the transform for
 * users who ask for that.
 */

// A tenth of a viewport of lead time. Enough that the element is never caught
// mid-fade where you are looking, not so much that it finishes off-screen and
// the animation is never seen at all.
const LEAD = '0px 0px 10% 0px';

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    const show = () => {
      el.classList.add('is-visible');
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) return show();

        // ALREADY PAST IT.
        //
        // A flick, a scrollbar drag or a jump from the nav can move the page
        // further in one frame than the element is tall. The observer then
        // reports it as not intersecting -- because it is now ABOVE the
        // viewport -- and a naive isIntersecting check would leave that block
        // invisible for the rest of the session. Anything whose bottom is
        // behind us has been scrolled past and must simply be shown.
        if (entry.boundingClientRect.bottom < 0) show();
      },
      { threshold: 0, rootMargin: LEAD }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      // Stagger is for rhythm, not for queueing: the call sites step in 70-90ms
      // increments, which on a six-item list left the last one almost half a
      // second behind the first. Compressed here, in one place, rather than
      // retuning every delay prop on every screen.
      style={{ transitionDelay: `${Math.min(delay * 0.45, 110)}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
