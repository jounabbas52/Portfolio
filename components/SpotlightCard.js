'use client';

import { useCallback, useRef } from 'react';

/**
 * A glass panel that follows the pointer.
 *
 * Two effects, both driven by the same pointermove handler writing CSS custom
 * properties — no React state, so no re-render per frame:
 *
 *   --mx / --my  the spotlight position (see `.spotlight` in globals.css)
 *   --rx / --ry  tilt angles, applied here as a 3D transform
 *
 * `tilt={false}` keeps the spotlight but drops the rotation, for panels that
 * are too wide for a tilt to read as anything but a wobble.
 */
export default function SpotlightCard({
  as: Tag = 'div',
  tilt = true,
  strength = 6,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  const onPointerMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el) return;

      // Coarse pointers (touch) fire this once on tap — tilting then looks
      // like a glitch, so only fine pointers get the 3D treatment.
      const fine = window.matchMedia('(pointer: fine)').matches;
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);

      if (tilt && fine) {
        const px = x / rect.width - 0.5;
        const py = y / rect.height - 0.5;
        el.style.setProperty('--ry', `${px * strength}deg`);
        el.style.setProperty('--rx', `${-py * strength}deg`);
      }
    },
    [tilt, strength]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }, []);

  return (
    <Tag
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`spotlight transition-transform duration-500 ease-out ${className}`}
      style={{
        transform: tilt
          ? 'perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))'
          : undefined,
        transformStyle: tilt ? 'preserve-3d' : undefined,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
