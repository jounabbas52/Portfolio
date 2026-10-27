import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/config/site';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

/**
 * The depth behind the work grid: what each system had to solve, how it was
 * built, and what can actually be claimed about it.
 *
 * `Figures` shows real outcomes when `caseStudy.outcomes` has any, and falls
 * back to verifiable scope facts until then — so the section is never padded
 * with numbers nobody measured.
 */
export default function CaseStudies() {
  return (
    <section id="case-studies" className="acc-cyan relative px-4 pb-14 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div>
            <SectionLabel index="03">Case studies</SectionLabel>
            <h2 className="mt-4 font-display sm:mt-6 text-[clamp(1.6rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em]">
              How each one was solved.
            </h2>
          </div>
          <p className="max-w-sm text-white/55">
            Screens are easy to make look good. What matters is the problem underneath and the
            decision that answered it.
          </p>
        </Reveal>

        <div className="mt-9 space-y-3 sm:mt-16 sm:space-y-5">
          {projects.map((project, i) => {
            const cs = project.caseStudy;
            const items = cs.outcomes.length ? cs.outcomes : cs.scope;

            return (
              <Reveal key={project.title} delay={i * 80}>
                <article className="glass overflow-hidden rounded-2xl sm:rounded-[1.75rem]">
                  <div className="grid lg:grid-cols-[1fr_0.85fr]">
                    {/* ── Narrative ──────────────────────────── */}
                    <div className="order-2 p-4 sm:p-9 lg:order-1">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span
                          className="text-mono-label tabular-nums"
                          style={{ color: 'rgb(var(--accent-rgb) / 0.85)' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-display text-xl font-bold tracking-tight sm:text-3xl">
                          {project.title}
                        </h3>
                      </div>

                      <dl className="mt-5 space-y-4 sm:mt-7 sm:space-y-6">
                        <div>
                          <dt className="text-mono-label mb-2 text-white/35">The problem</dt>
                          <dd className="text-sm leading-relaxed text-white/60 sm:text-base">{cs.problem}</dd>
                        </div>
                        <div>
                          <dt className="text-mono-label mb-2 text-white/35">The approach</dt>
                          <dd className="text-sm leading-relaxed text-white/60 sm:text-base">{cs.approach}</dd>
                        </div>
                      </dl>

                      <div className="mt-6 sm:mt-8">
                        <p className="text-mono-label mb-3 text-white/35">
                          {cs.outcomes.length ? 'The result' : 'At a glance'}
                        </p>
                        <dl className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
                          {items.map((item) => (
                            <div key={item.label} className="bg-void/70 p-3 sm:p-4">
                              <dt className="sr-only">{item.label}</dt>
                              <dd>
                                <span
                                  className="block font-display text-xl font-bold tracking-tight sm:text-2xl"
                                  style={{ color: 'rgb(var(--accent-rgb))' }}
                                >
                                  {item.value}
                                </span>
                                <span className="mt-1 block text-xs leading-snug text-white/45">
                                  {item.label}
                                </span>
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 sm:mt-8 text-xs font-medium transition-colors sm:px-6 sm:py-3 sm:text-sm duration-300 hover:bg-white/12"
                      >
                        Open the live system
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    </div>

                    {/* ── Evidence ───────────────────────────── */}
                    <div className="relative order-1 min-h-44 overflow-hidden border-b border-white/10 sm:min-h-64 lg:order-2 lg:border-b-0 lg:border-l">
                      <Image
                        src={project.shot}
                        alt={`${project.title} — the live application`}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover object-top brightness-[0.72] contrast-[1.08] saturate-[0.9]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-40 mix-blend-soft-light"
                        style={{ background: 'linear-gradient(200deg, rgb(var(--accent-rgb)), transparent 65%)' }}
                      />
                      {/* Even scrim first, then a directional one that ties
                          the panel back into the narrative column. */}
                      <div aria-hidden className="absolute inset-0 bg-void/35" />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,7,15,0.85),transparent_55%)] lg:bg-[linear-gradient(to_right,rgba(6,7,15,0.9),rgba(6,7,15,0.15)_45%,transparent)]"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
