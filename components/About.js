import { about, stats } from '@/config/site';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal delay={80}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
              {about.heading}
            </h2>
          </Reveal>

          <Reveal delay={160} className="space-y-6">
            {about.body.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink/60">
                {para}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={220} as="dl" className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group bg-paper p-8 transition-colors duration-300 hover:bg-white">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-bold tracking-tight text-ink lg:text-5xl">
                  {stat.num}
                </span>
                <span className="mt-2 block text-sm text-ink/50">{stat.label}</span>
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
