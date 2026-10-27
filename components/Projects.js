import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/config/site';
import SectionLabel from './SectionLabel';
import SpotlightCard from './SpotlightCard';
import Reveal from './Reveal';

/** "https://school-os.vercel.app/login" → "school-os.vercel.app" */
function host(href) {
  try {
    return new URL(href).host;
  } catch {
    return href;
  }
}

export default function Projects() {
  return (
    <section id="projects" className="acc-cyan relative px-4 pb-14 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div>
            <SectionLabel index="02">Portfolios</SectionLabel>
            <h2 className="mt-4 font-display sm:mt-6 text-[clamp(1.6rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em]">
              Selected work
            </h2>
          </div>
          <p className="max-w-sm text-white/55">
            Live management systems, each running in production — office operations, school
            administration and clinic workflows.
          </p>
        </Reveal>

        {/* Three equal columns on desktop: the set is small enough that a
            uniform row reads as a considered collection, and keeping every
            card the same size stops any one project claiming the page. */}
        <div className="mt-7 grid gap-3 sm:mt-12 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const external = project.href.startsWith('http');

            return (
              <Reveal key={project.title} delay={i * 90} className="min-w-0">
                <SpotlightCard
                  as="a"
                  href={project.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  strength={4}
                  className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-3 duration-500 sm:rounded-[1.5rem] sm:p-4 hover:border-white/20 hover:shadow-[0_30px_70px_-40px_rgb(var(--accent-rgb)/0.65)]"
                >
                  {/* Key art — the real deployed screen, in a browser frame.
                      An abstract gradient says "a developer made something";
                      the actual product says "this is running right now".
                      On hover it pans down the page rather than zooming,
                      which shows more of the real UI instead of less. */}
                  <div className="relative mb-3 flex h-32 flex-col overflow-hidden rounded-xl border border-white/10 bg-void/60 sm:mb-4 sm:h-40">
                    {/* Chrome */}
                    <div className="flex min-w-0 shrink-0 items-center gap-2 border-b border-white/10 bg-white/[0.05] px-2.5 py-1.5">
                      <span className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                      </span>
                      <span className="ml-0.5 min-w-0 truncate rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] text-white/40">
                        {host(project.href)}
                      </span>
                      <span className="ml-auto flex shrink-0 items-center gap-1 rounded-full bg-mint/12 px-2 py-0.5 text-[9px] font-medium text-mint">
                        <span className="h-1 w-1 rounded-full bg-mint" />
                        Live
                      </span>
                    </div>

                    {/* Viewport */}
                    <div className="relative flex-1 overflow-hidden">
                      <Image
                        src={project.shot}
                        alt={`${project.title} — the live application`}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[-14%]"
                      />
                      {/* Accent wash, so the shot still belongs to the page */}
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-45 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-20"
                        style={{ background: 'linear-gradient(135deg, rgb(var(--accent-rgb)), transparent 70%)' }}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-14 bg-[linear-gradient(to_top,rgba(6,7,15,0.85),transparent)]"
                      />
                      <span className="absolute bottom-2 left-2.5 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-medium text-white/85 backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-bold leading-snug tracking-tight">
                      {project.title}
                    </h3>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full sm:h-8 sm:w-8 border border-white/12 bg-white/[0.06] text-white/55 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>

                  {/* Clamped to two lines so every card in the row ends at the
                      same height regardless of how long its blurb is. */}
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/50">
                    {project.description}
                  </p>

                  {/* mt-auto pins the tags to the bottom edge, so the rule
                      above them lines up across all three cards. */}
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-3 sm:pt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-white/50 transition-colors duration-300 group-hover:border-white/25 group-hover:text-white/75"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
