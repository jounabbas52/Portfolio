import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, MessageCircle } from 'lucide-react';
import { site, socials, resume, skillGroups } from '@/config/site';
import PrintButton from '@/components/PrintButton';
import DocumentLinks from '@/components/DocumentLinks';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata = {
  title: `${site.fullName} — Résumé`,
  description: `Résumé and CV for ${site.fullName}, ${site.role}.`,
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 print:max-w-none print:px-0 print:py-0">
      {/* Screen-only toolbar */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-ink/55 transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to portfolio
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <DocumentLinks tone="light" />
          <PrintButton />
        </div>
      </div>

      <article className="rounded-[1.75rem] border border-ink/10 bg-white p-10 print:rounded-none print:border-0 print:p-0">
        {/* Header */}
        <header className="border-b border-ink/10 pb-7">
          <h1 className="font-display text-5xl font-extrabold tracking-[-0.03em]">
            {site.fullName}
          </h1>
          <p className="mt-1.5 text-lg uppercase tracking-[0.12em] text-ink/55">{site.role}</p>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60">
            <li className="flex items-center gap-2">
              <Mail size={14} aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} aria-hidden />
              <a href={whatsappLink()} className="hover:text-ink">
                {site.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} aria-hidden />
              {site.locationFull}
            </li>
          </ul>
        </header>

        <Section title="Profile">
          <p className="leading-relaxed text-ink/70">{resume.summary}</p>
        </Section>

        <Section title="Technical skills">
          <dl className="space-y-3">
            {skillGroups.map((row) => (
              <div key={row.group} className="flex flex-wrap gap-x-4 break-inside-avoid sm:flex-nowrap">
                <dt className="w-28 shrink-0 text-sm font-semibold uppercase tracking-wide text-ink/50">
                  {row.group}
                </dt>
                <dd className="text-ink/70">{row.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Experience">
          <ol className="space-y-7">
            {resume.experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-lg font-bold">{job.role}</h3>
                  <span className="text-sm tabular-nums text-ink/45">{job.period}</span>
                </div>
                <p className="text-ink/55">{job.company}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 leading-relaxed text-ink/70">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/35" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Education">
          <ol className="space-y-5">
            {resume.education.map((item) => (
              <li
                key={item.qualification}
                className="flex flex-wrap items-baseline justify-between gap-x-4 break-inside-avoid"
              >
                <div>
                  <h3 className="font-display text-lg font-bold">{item.qualification}</h3>
                  <p className="text-ink/55">{item.institution}</p>
                  {item.note && <p className="text-sm text-ink/45">{item.note}</p>}
                </div>
                <span className="text-sm tabular-nums text-ink/45">{item.period}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Languages">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-ink/70">
            {resume.languages.map((lang) => (
              <li key={lang.name}>
                {lang.name} <span className="text-ink/45">({lang.level})</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="References">
          <p className="text-ink/70">
            <span className="font-semibold text-ink">{resume.reference.name}</span> —{' '}
            {resume.reference.title}
          </p>
          <p className="mt-1 text-sm text-ink/45">{resume.reference.note}</p>
        </Section>

        <Section title="Links">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-ink/70">
            {socials.map((social) => (
              <li key={social.label}>
                <span className="text-ink/45">{social.label}: </span>
                <a href={social.href} className="hover:text-ink">
                  {social.href.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <p className="mt-10 border-t border-ink/10 pt-5 text-sm text-ink/40">
          Updated {resume.updated}
        </p>
      </article>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-9 break-inside-avoid">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">{title}</h2>
      {children}
    </section>
  );
}
