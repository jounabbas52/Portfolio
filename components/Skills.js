import { Code, Palette, Zap, Smartphone, Database } from 'lucide-react';
import { skillGroups, services } from '@/config/site';
import SectionLabel from './SectionLabel';
import SpotlightCard from './SpotlightCard';
import Reveal from './Reveal';

const icons = {
  code: Code,
  palette: Palette,
  zap: Zap,
  smartphone: Smartphone,
  database: Database,
};

export default function Skills() {
  return (
    <section id="skills" className="acc-emerald relative px-4 py-14 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
      {/* A single soft bloom marks the section without changing the canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[40vh] w-[85vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--accent-rgb)/0.18)_0%,transparent_65%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03">Capabilities</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display sm:mt-6 text-[clamp(1.6rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em]">
            What I bring to the build.
          </h2>
        </Reveal>

        {/* Services */}
        <div className="mt-8 grid gap-3 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Code;
            return (
              <Reveal key={service.title} delay={i * 90}>
                <SpotlightCard className="glass group h-full rounded-2xl p-5 duration-500 hover:border-white/20 sm:rounded-[1.5rem] sm:p-7">
                  <span className="inline-grid h-10 w-10 place-items-center sm:h-12 sm:w-12 rounded-xl bg-[linear-gradient(135deg,rgb(var(--accent-rgb)),rgb(var(--accent-rgb)/0.6))] text-white shadow-[0_8px_26px_-8px_rgb(var(--accent-rgb)/0.9)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold sm:mt-6 sm:text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55 sm:mt-2.5 sm:text-base">{service.body}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* Technical skills, grouped as the CV lists them */}
        <div className="mt-10 border-t border-white/[0.08] pt-8 sm:mt-16 sm:pt-14">
          <h3 className="text-mono-label text-white/40">Technical skills</h3>

          {/* items-start throughout: without it, a row whose chips wrap to two
              lines stretches its grid neighbour, and rounded-full turns the
              stretched chips into ovals. */}
          <dl className="mt-5 grid items-start gap-x-14 gap-y-5 sm:mt-8 sm:gap-y-9 md:grid-cols-2">
            {skillGroups.map((row, i) => (
              <Reveal key={row.group} delay={i * 70} className="sm:flex sm:items-start sm:gap-8">
                <dt className="w-32 shrink-0 font-display text-base font-semibold text-white/85">
                  {row.group}
                </dt>
                <dd className="mt-3 flex flex-wrap items-start gap-2 sm:mt-0">
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-white/70 sm:px-3.5 sm:py-1.5 sm:text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/50 hover:bg-violet/10 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
