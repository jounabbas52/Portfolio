import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/config/site';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="px-6 pb-28 sm:px-10 lg:px-16 lg:pb-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Portfolios</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              Selected work
            </h2>
          </div>
          <p className="max-w-sm text-ink/55">
            Live management systems, each running in production — office operations, school
            administration and clinic workflows.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <a
                href={project.href}
                target={project.href.startsWith('http') ? '_blank' : undefined}
                rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative block h-full overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_60px_-30px_rgba(10,10,15,0.35)]"
              >
                {/* Gradient key art */}
                <div
                  className="relative mb-7 flex h-52 items-end overflow-hidden rounded-2xl p-5"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
                  }}
                >
                  <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(120%_90%_at_80%_0%,rgba(255,255,255,0.45),transparent_60%)]" />
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                  <span className="relative rounded-full bg-black/25 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={22}
                    className="mt-1 shrink-0 text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink"
                  />
                </div>

                <p className="mt-3 leading-relaxed text-ink/55">{project.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink/55"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
