/**
 * The eyebrow that heads each section.
 *
 * It names no colour of its own — it reads `--accent` from whichever section
 * it sits in, so the pip, the index and the hairline all take on that
 * section's meaning. Drop it in an `.acc-*` section and it just works.
 */
export default function SectionLabel({ children, index }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-xl sm:gap-3 sm:px-4 sm:py-2">
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span
          className="absolute inline-flex h-full w-full animate-signal rounded-full"
          style={{ background: 'var(--accent, #6366f1)' }}
        />
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full"
          style={{ background: 'var(--accent, #6366f1)' }}
        />
      </span>
      {index && (
        <span
          className="text-mono-label tabular-nums"
          style={{ color: 'rgb(var(--accent-rgb, 99 102 241) / 0.75)' }}
        >
          {index}
        </span>
      )}
      <span className="text-mono-label text-white/70">{children}</span>
    </span>
  );
}
