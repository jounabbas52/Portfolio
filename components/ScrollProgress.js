/**
 * Reading-progress bar pinned to the top of the viewport.
 *
 * Driven entirely by a CSS scroll-driven animation (`animation-timeline:
 * scroll(root block)` — see `.scroll-progress` in globals.css). No scroll
 * listener, no state, no re-render: the compositor owns it.
 *
 * `.sd-only` hides it where scroll-driven animations are unsupported, rather
 * than leaving a bar stuck at zero width.
 */
export default function ScrollProgress() {
  return (
    <div
      aria-hidden
      className="sd-only pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] print:hidden"
    >
      <div className="scroll-progress h-full w-full bg-[linear-gradient(90deg,#8b5cf6,#6366f1_45%,#22d3ee_80%,#34d399)] shadow-[0_0_18px_-2px_rgba(99,102,241,0.9)]" />
    </div>
  );
}
