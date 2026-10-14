import { Building2, GraduationCap, Languages, UserRound } from 'lucide-react';
import { resume } from '@/config/site';
import SectionLabel from './SectionLabel';
import DocumentLinks from './DocumentLinks';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            Where I have worked and studied.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          {/* Work */}
          <div>
            <h3 className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
              <Building2 size={14} aria-hidden />
              Work
            </h3>

            <ol className="mt-7 space-y-10">
              {resume.experience.map((job, i) => (
                <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 90}>
                  {/* Timeline rail */}
                  <div className="relative border-l border-ink/12 pl-7">
                    <span
                      aria-hidden
                      className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#a855f7,#ec4899)] ring-4 ring-paper"
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="font-display text-xl font-bold tracking-tight">{job.role}</h4>
                      <span className="text-sm tabular-nums text-ink/45">{job.period}</span>
                    </div>
                    <p className="mt-0.5 text-ink/55">{job.company}</p>

                    <ul className="mt-4 space-y-2.5">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-3 leading-relaxed text-ink/65">
                          <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={160} className="mt-12">
              <p className="text-sm text-ink/45">
                The full history is in the CV — updated {resume.updated}.
              </p>
              <DocumentLinks tone="light" className="mt-5" />
            </Reveal>
          </div>

          {/* Education, languages, reference */}
          <div className="space-y-12">
            <Reveal delay={80}>
              <h3 className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
                <GraduationCap size={14} aria-hidden />
                Education
              </h3>

              <ol className="mt-7 space-y-7">
                {resume.education.map((item) => (
                  <li key={item.qualification} className="border-l border-ink/12 pl-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="font-display font-bold leading-snug">{item.qualification}</h4>
                      <span className="text-sm tabular-nums text-ink/45">{item.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-ink/55">{item.institution}</p>
                    {item.note && <p className="mt-1 text-sm text-ink/45">{item.note}</p>}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
                <Languages size={14} aria-hidden />
                Languages
              </h3>

              <dl className="mt-6 space-y-3">
                {resume.languages.map((lang) => (
                  <div key={lang.name} className="flex items-baseline justify-between gap-4 border-b border-ink/8 pb-3">
                    <dt className="font-medium text-ink/80">{lang.name}</dt>
                    <dd className="text-sm text-ink/50">{lang.level}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={200}>
              <h3 className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
                <UserRound size={14} aria-hidden />
                Reference
              </h3>

              <figure className="mt-6 rounded-[1.5rem] border border-ink/10 bg-white p-6">
                <figcaption>
                  <span className="block font-display font-bold">{resume.reference.name}</span>
                  <span className="block text-sm text-ink/55">{resume.reference.title}</span>
                </figcaption>
                <p className="mt-3 text-sm text-ink/45">{resume.reference.note}</p>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
