import { Building2, GraduationCap, Languages, UserRound } from 'lucide-react';
import { resume } from '@/config/site';
import SectionLabel from './SectionLabel';
import DocumentLinks from './DocumentLinks';
import SpotlightCard from './SpotlightCard';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="acc-violet relative px-4 py-14 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="04">Experience</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display sm:mt-6 text-[clamp(1.6rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em]">
            Where I have worked and studied.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-10 sm:mt-14 sm:gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          {/* Work */}
          <div>
            <Rubric icon={Building2}>Work</Rubric>

            <ol className="mt-5 space-y-7 sm:mt-7 sm:space-y-10">
              {resume.experience.map((job, i) => (
                <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 90}>
                  {/* Timeline rail. The dim track is always there; the bright
                      fill on top is driven by a CSS scroll-driven animation
                      (`.rail-fill`), so it draws itself in as the entry passes
                      through the viewport — no scroll listener involved. */}
                  <div className="relative pl-5 sm:pl-7">
                    <span aria-hidden className="absolute inset-y-0 left-0 w-px bg-white/10" />
                    <span
                      aria-hidden
                      className="rail-fill sd-only absolute inset-y-0 left-0 w-px bg-[linear-gradient(to_bottom,rgb(var(--accent-rgb)),rgb(var(--accent-rgb)/0.55),transparent)]"
                    />
                    <span
                      aria-hidden
                      className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,rgb(var(--accent-rgb)),rgb(var(--accent-rgb)/0.6))] shadow-[0_0_14px_0_rgb(var(--accent-rgb)/0.9)] ring-4 ring-void"
                    />

                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="font-display text-lg font-bold tracking-tight sm:text-xl">{job.role}</h4>
                      <span className="text-sm tabular-nums text-white/45">{job.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-white/55 sm:text-base">{job.company}</p>

                    <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-white/65 sm:gap-3 sm:text-base">
                          <span
                            aria-hidden
                            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={160} className="mt-8 sm:mt-12">
              <p className="text-sm text-white/45">
                The full history is in the CV — updated {resume.updated}.
              </p>
              <DocumentLinks className="mt-5" />
            </Reveal>
          </div>

          {/* Education, languages, reference */}
          <div className="space-y-8 sm:space-y-12">
            <Reveal delay={80}>
              <Rubric icon={GraduationCap}>Education</Rubric>

              <ol className="mt-5 space-y-5 sm:mt-7 sm:space-y-7">
                {resume.education.map((item) => (
                  <li key={item.qualification} className="relative pl-5 sm:pl-7">
                    <span aria-hidden className="absolute inset-y-0 left-0 w-px bg-white/10" />
                    <span
                      aria-hidden
                      className="absolute -left-[3px] top-2 h-1.5 w-1.5 rounded-full bg-white/40 ring-4 ring-void"
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="font-display font-bold leading-snug">{item.qualification}</h4>
                      <span className="text-sm tabular-nums text-white/45">{item.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-white/55">{item.institution}</p>
                    {item.note && <p className="mt-1 text-sm text-white/40">{item.note}</p>}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={140}>
              <Rubric icon={Languages}>Languages</Rubric>

              <dl className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                {resume.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-baseline justify-between gap-4 border-b border-white/[0.08] pb-3"
                  >
                    <dt className="font-medium text-white/80">{lang.name}</dt>
                    <dd className="text-sm text-white/50">{lang.level}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={200}>
              <Rubric icon={UserRound}>Reference</Rubric>

              <SpotlightCard
                as="figure"
                tilt={false}
                className="glass mt-4 rounded-2xl p-4 sm:mt-6 sm:rounded-[1.5rem] sm:p-6"
              >
                <figcaption>
                  <span className="block font-display font-bold">{resume.reference.name}</span>
                  <span className="block text-sm text-white/55">{resume.reference.title}</span>
                </figcaption>
                <p className="mt-3 text-sm text-white/45">{resume.reference.note}</p>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rubric({ icon: Icon, children }) {
  return (
    <h3 className="text-mono-label flex items-center gap-2.5 text-white/40">
      <Icon size={14} aria-hidden />
      {children}
    </h3>
  );
}
