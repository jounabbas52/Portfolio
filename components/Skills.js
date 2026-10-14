import { Code, Palette, Zap, Smartphone, Database } from 'lucide-react';
import { skillGroups, services } from '@/config/site';
import SectionLabel from './SectionLabel';
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
    <section id="skills" className="px-3 pb-6 sm:px-5">
      <div className="rounded-[2rem] bg-ink px-6 py-24 text-white sm:rounded-[2.75rem] sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel tone="dark">Capabilities</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              What I bring to the build.
            </h2>
          </Reveal>

          {/* Services */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service, i) => {
              const Icon = icons[service.icon] ?? Code;
              return (
                <Reveal key={service.title} delay={i * 90}>
                  <div className="group h-full rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.08]">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[linear-gradient(135deg,#a855f7,#ec4899)] text-white shadow-[0_8px_24px_-8px_rgba(236,72,153,0.9)]">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-white/55">{service.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Technical skills, grouped as the CV lists them */}
          <div className="mt-16 border-t border-white/10 pt-14">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Technical skills
            </h3>

            {/* items-start throughout: without it, a row whose chips wrap to two
                lines stretches its grid neighbour, and rounded-full turns the
                stretched chips into ovals. */}
            <dl className="mt-8 grid items-start gap-x-14 gap-y-9 md:grid-cols-2">
              {skillGroups.map((row, i) => (
                <Reveal key={row.group} delay={i * 70} className="sm:flex sm:items-start sm:gap-8">
                  <dt className="w-32 shrink-0 font-display text-base font-semibold text-white/85">
                    {row.group}
                  </dt>
                  <dd className="mt-3 flex flex-wrap items-start gap-2 sm:mt-0">
                    {row.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/70 transition-colors duration-300 hover:border-white/35 hover:text-white"
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
      </div>
    </section>
  );
}
