import { about, stats } from '@/config/site';
import SectionLabel from './SectionLabel';
import SpotlightCard from './SpotlightCard';
import Counter from './Counter';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="acc-amber relative px-4 py-14 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="01">About</SectionLabel>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:mt-10 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal delay={80}>
            <h2 className="sd-parallax font-display text-[clamp(1.6rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em]">
              {about.heading}
            </h2>
          </Reveal>

          <Reveal delay={160} className="space-y-4 sm:space-y-6">
            {about.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-white/60 sm:text-lg">
                {para}
              </p>
            ))}
          </Reveal>
        </div>

        {/* Stat bento — each tile is its own glass panel with a spotlight, so
            the row reads as hardware rather than a table. */}
        <dl className="mt-10 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <SpotlightCard
                tilt={false}
                className="glass group h-full overflow-hidden rounded-2xl p-4 sm:rounded-[1.5rem] sm:p-7"
              >
                {/* Accent hairline that grows in on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,rgb(var(--accent-rgb)),rgb(var(--accent-rgb)/0.45),transparent)] transition-transform duration-700 group-hover:scale-x-100"
                />
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    <Counter value={stat.num} />
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-white/45 sm:mt-2 sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </SpotlightCard>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
