/**
 * The one backdrop for the whole site.
 *
 * Fixed, so every section scrolls over the same composition instead of each
 * one carrying its own panel. Pure CSS/SVG — no images, no JS, no canvas.
 *
 * The composition is deliberately quiet: one deep blue-black field, three
 * very large soft blooms in a single hue family, and texture. There are no
 * diagonal streaks and no bright filaments — those read as decoration, and
 * decoration behind content is what makes a site look templated. Everything
 * here is low-contrast depth; the portrait and the headline do the shouting.
 *
 * Decorative only — hidden from assistive tech.
 */
export default function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden"
    >
      {/* Base field. Two stacked radials give the canvas a lit corner and a
          falloff, so it is never a flat slab of near-black. */}
      <div className="absolute inset-0 bg-[#06070f]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_-10%,color-mix(in_oklab,rgb(var(--acc-r)_var(--acc-g)_var(--acc-b))_22%,#0d1026)_0%,#0d1126_45%,#06070f_78%)]" />

      {/* Blooms. Large, soft, slow, and all within one hue family — the only
          thing separating them is temperature. Blur is what sells the depth:
          at this size a hard edge anywhere would flatten the whole thing. */}
      <div className="absolute inset-0">
        {/* Primary — indigo, upper right, behind the portrait slot */}
        <div className="absolute -top-[18%] right-[-8%] h-[85vh] w-[70vw] animate-drift rounded-full bg-[radial-gradient(circle,rgb(var(--acc-r)_var(--acc-g)_var(--acc-b)_/_0.42)_0%,rgb(var(--acc-r)_var(--acc-g)_var(--acc-b)_/_0.16)_38%,transparent_68%)] blur-[130px]" />

        {/* Secondary — violet, lower left, anchors the diagonal */}
        <div className="absolute bottom-[-25%] left-[-15%] h-[75vh] w-[65vw] animate-drift-slow rounded-full bg-[radial-gradient(circle,rgb(var(--acc-r)_var(--acc-g)_var(--acc-b)_/_0.26)_0%,rgb(var(--acc-r)_var(--acc-g)_var(--acc-b)_/_0.09)_42%,transparent_70%)] blur-[140px]" />

        {/* Spark — a single cool accent, small and dim. One of these on a
            page is interesting; four would be the rainbow we just removed. */}
        <div className="absolute left-[42%] top-[38%] h-[40vh] w-[32vw] animate-float rounded-full bg-[radial-gradient(circle,rgb(var(--acc-r)_var(--acc-g)_var(--acc-b)_/_0.16)_0%,transparent_65%)] blur-[120px]" />
      </div>

      {/* Dot matrix. Finer and dimmer than a line grid — it registers as
          surface texture rather than graph paper, and masks out before it
          can compete with the content sitting on top. */}
      <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(120%_90%_at_50%_0%,#000_15%,transparent_75%)]" />

      {/* Film grain. The single most effective thing here: it breaks up the
          banding that large blurred gradients always produce on 8-bit
          displays, which is most of what separates "designed" from "CSS". */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.18] mix-blend-overlay">
        <filter id="aurora-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aurora-grain)" />
      </svg>

      {/* Vignette. Keeps the left column — where all the copy lives — at full
          contrast no matter how bright the blooms drift. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,7,15,0.82)_0%,rgba(6,7,15,0.38)_44%,transparent_75%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(to_top,rgba(6,7,15,0.9),transparent)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_60px_rgba(6,7,15,0.7)]" />
    </div>
  );
}
