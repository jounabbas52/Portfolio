import Link from 'next/link';
import { ArrowLeft, ArrowRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { site, socials, documentVariants } from '@/config/site';
import PrintButton from '@/components/PrintButton';
import DocumentLinks from '@/components/DocumentLinks';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import { whatsappLink } from '@/lib/whatsapp';

/**
 * Renders one of the two documents — the long CV or the condensed résumé.
 *
 * Both routes share this component; everything that differs between them
 * lives in `documentVariants` (config/site.js) so the pages can never drift
 * apart from the PDFs in /public.
 *
 * No backdrop of its own — the site-wide Aurora in app/layout.js is already
 * behind this, which is what makes these pages read as the same site as /.
 * In print the canvas drops away and `.print-sheet` flips the sheet to ink.
 */
export default function DocumentSheet({ variant }) {
  const doc = documentVariants[variant];
  const { data, skills, counterpart } = doc;

  return (
    <main
      id="main"
      className="relative mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-16 print:max-w-none print:px-0 print:py-0"
    >
      {/* Screen-only toolbar */}
      <div className="mb-7 flex items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center gap-1.5 text-xs text-white/55 transition-colors hover:text-white sm:gap-2 sm:text-sm"
        >
          <ArrowLeft
            size={15}
            className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          <span className="sm:hidden">Back</span>
          <span className="hidden sm:inline">Back to portfolio</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <DocumentLinks />
          <PrintButton />
        </div>
      </div>

      {/* Screen-only title band. The switch makes it obvious that two
          different documents exist, and which one you are reading. */}
      <Reveal className="mb-6 print:hidden">
        <SectionLabel>{doc.kind}</SectionLabel>
        <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-white/55 sm:text-lg">
          {doc.blurb}
        </p>
        <DocumentSwitch current={doc.key} />
      </Reveal>

      <article className="print-sheet glass relative overflow-hidden rounded-3xl p-5 shadow-[0_50px_120px_-45px_rgba(0,0,0,0.9)] sm:rounded-[1.75rem] sm:p-10 print:rounded-none print:bg-none print:p-0 print:shadow-none print:backdrop-blur-none">
        {/* Gradient edge along the top of the sheet */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(110deg,#8b5cf6,#6366f1_55%,#22d3ee)] print:hidden"
        />

        {/* Header */}
        <header className="pb-7">
          <h1 className="font-display text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            {site.fullName}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.1em] text-white/55 sm:text-lg sm:tracking-[0.12em]">
            {site.role}
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Mail size={14} aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} aria-hidden />
              <a href={whatsappLink()} className="hover:text-white">
                {site.whatsappDisplay}
              </a>
            </li>
            {/* Street address on the CV, city only on the résumé */}
            <li className="flex items-center gap-2">
              <MapPin size={14} aria-hidden />
              {doc.location}
            </li>
          </ul>

          <div
            aria-hidden
            className="mt-7 h-px bg-[linear-gradient(90deg,#8b5cf6,#6366f1_38%,#22d3ee_68%,rgba(255,255,255,0.12)_100%)]"
          />
        </header>

        <Section title="Profile">
          <div className="space-y-3">
            {data.profile.map((para, i) => (
              <p key={i} className="leading-relaxed text-white/70">
                {para}
              </p>
            ))}
          </div>
        </Section>

        <Section title="Technical skills">
          <dl className="space-y-3">
            {skills.map((row) => (
              <div
                key={row.group}
                className="flex flex-wrap gap-x-4 break-inside-avoid sm:flex-nowrap"
              >
                <dt className="w-full shrink-0 text-xs font-semibold uppercase tracking-wide text-white/50 sm:w-28 sm:text-sm">
                  {row.group}
                </dt>
                <dd className="text-white/70">{row.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Experience">
          <ol className="space-y-7">
            {data.experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-lg font-bold">{job.role}</h3>
                  <span className="text-sm tabular-nums text-white/45">{job.period}</span>
                </div>
                <p className="text-white/55">{job.company}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 leading-relaxed text-white/70">
                      <span
                        aria-hidden
                        className="print-accent mt-2 h-1 w-1 shrink-0 rounded-full bg-[linear-gradient(110deg,#8b5cf6,#6366f1)]"
                      />
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
            {data.education.map((item) => (
              <li
                key={item.qualification}
                className="flex flex-wrap items-baseline justify-between gap-x-4 break-inside-avoid"
              >
                <div>
                  <h3 className="font-display text-lg font-bold">{item.qualification}</h3>
                  <p className="text-white/55">{item.institution}</p>
                  {item.note && <p className="text-sm text-white/45">{item.note}</p>}
                </div>
                <span className="text-sm tabular-nums text-white/45">{item.period}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Languages">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-white/70">
            {data.languages.map((lang) => (
              <li key={lang.name}>
                {lang.name}
                {/* Proficiency levels are a CV detail; the résumé just names them */}
                {doc.showLanguageLevels && lang.level && (
                  <span className="text-white/45"> ({lang.level})</span>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="References">
          {data.reference ? (
            <>
              <p className="text-white/70">
                <span className="font-semibold text-white">{data.reference.name}</span> —{' '}
                {data.reference.title}
              </p>
              <p className="mt-1 text-sm text-white/45">{data.reference.note}</p>
            </>
          ) : (
            <p className="text-white/70">{data.referenceNote}</p>
          )}
        </Section>

        <Section title="Links">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-white/70">
            {socials.map((social) => (
              <li key={social.label}>
                <span className="text-white/45">{social.label}: </span>
                <a href={social.href} className="hover:text-white">
                  {social.href.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        {/* Names the document on paper, the way both PDFs do */}
        <p className="mt-10 flex flex-wrap items-baseline justify-between gap-x-4 border-t border-white/10 pt-5 text-sm text-white/40">
          <span>{doc.kind}</span>
          <span>Updated {data.updated}</span>
        </p>
      </article>

      {/* Screen-only pointer to the other document */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-xl print:hidden">
        <p className="text-sm text-white/55">{counterpart.label}</p>
        <Link
          href={counterpart.path}
          className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white"
        >
          {counterpart.cta}
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* Screen-only footer so the page closes properly */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-white/40 print:hidden">
        <span>
          {site.fullName} — {site.role}
        </span>
        <Link href="/" className="transition-colors hover:text-white">
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}

/** Segmented control linking the two documents. Pure links — one route each. */
function DocumentSwitch({ current }) {
  return (
    <nav
      aria-label="Document format"
      className="mt-5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 backdrop-blur-xl sm:p-1.5"
    >
      {Object.values(documentVariants).map((v) => {
        const isCurrent = v.key === current;
        return (
          <Link
            key={v.key}
            href={v.path}
            aria-current={isCurrent ? 'page' : undefined}
            className={`rounded-full px-4 py-1.5 text-xs transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm ${
              isCurrent
                ? 'bg-[linear-gradient(110deg,rgba(139,92,246,0.35),rgba(99,102,241,0.3))] text-white shadow-[0_0_22px_-6px_rgba(99,102,241,0.9)] ring-1 ring-white/15'
                : 'text-white/55 hover:text-white'
            }`}
          >
            {v.label}
          </Link>
        );
      })}
    </nav>
  );
}

function Section({ title, children }) {
  return (
    <Reveal as="section" className="mt-9 break-inside-avoid">
      <h2 className="text-mono-label mb-4 flex items-center gap-2.5 text-white/40">
        <span
          aria-hidden
          className="print-accent h-px w-6 shrink-0 bg-[linear-gradient(90deg,#8b5cf6,#6366f1)]"
        />
        {title}
      </h2>
      {children}
    </Reveal>
  );
}
