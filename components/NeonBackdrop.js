/**
 * The hero's light composition: layered gradient streaks with heavy blur and
 * screen blending, which reads as motion-blurred neon. No images, no JS.
 * Decorative only — hidden from assistive tech.
 */
export default function NeonBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Deep base so the streaks have something to glow against */}
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_72%_38%,#1b0b2e_0%,#0b0714_58%,#050309_100%)]" />

      {/* Wide sweeping streaks, each a blurred gradient bar on a slight angle */}
      <div className="absolute inset-0 mix-blend-screen">
        <div className="absolute -left-[22%] top-[16%] h-[20vh] w-[150%] rotate-[-14deg] animate-drift bg-[linear-gradient(90deg,transparent_0%,#7c3aed_18%,#c026d3_42%,#fb7185_62%,#fdba74_80%,transparent_100%)] opacity-70 blur-[70px]" />
        <div className="absolute -left-[18%] top-[32%] h-[12vh] w-[140%] rotate-[-10deg] animate-drift-slow bg-[linear-gradient(90deg,transparent_0%,#38bdf8_14%,#a855f7_44%,#f472b6_70%,transparent_100%)] opacity-60 blur-[55px]" />
        <div className="absolute -left-[10%] top-[52%] h-[26vh] w-[130%] rotate-[-6deg] animate-drift bg-[linear-gradient(90deg,transparent_0%,#4c1d95_20%,#9333ea_50%,#db2777_78%,transparent_100%)] opacity-50 blur-[90px] [animation-delay:-8s]" />
        <div className="absolute left-[30%] top-[8%] h-[70vh] w-[38%] rotate-[18deg] animate-drift-slow bg-[linear-gradient(180deg,transparent_0%,#f97316_30%,#ec4899_60%,transparent_100%)] opacity-35 blur-[80px] [animation-delay:-14s]" />
      </div>

      {/* Hot filaments — thin, bright, barely blurred: these sell the speed */}
      <div className="absolute inset-0 mix-blend-screen">
        <div className="absolute -left-[5%] top-[27%] h-[2px] w-[85%] rotate-[-12deg] animate-shimmer bg-[linear-gradient(90deg,transparent,#fda4af_30%,#fff_52%,#c4b5fd_72%,transparent)] opacity-80 blur-[1.5px]" />
        <div className="absolute left-[8%] top-[41%] h-px w-[70%] rotate-[-9deg] animate-shimmer bg-[linear-gradient(90deg,transparent,#67e8f9_35%,#fff_55%,transparent)] opacity-60 blur-[1px] [animation-delay:-3s]" />
      </div>

      {/* Bloom behind the portrait slot */}
      <div className="absolute right-[6%] top-[12%] h-[52vh] w-[42vh] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.5)_0%,rgba(168,85,247,0.22)_45%,transparent_70%)] blur-[60px] mix-blend-screen" />

      {/* Film grain keeps the large flat gradients from banding */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.16] mix-blend-overlay">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Vignette so the headline always has contrast underneath it */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,3,9,0.92)_0%,rgba(5,3,9,0.55)_38%,transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(5,3,9,0.95),transparent)]" />
    </div>
  );
}
