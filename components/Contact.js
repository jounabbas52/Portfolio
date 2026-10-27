import { ArrowUpRight, Mail } from 'lucide-react';
import { site, socials } from '@/config/site';
import { whatsappLink } from '@/lib/whatsapp';
import DocumentLinks from './DocumentLinks';
import WhatsAppIcon from './WhatsAppIcon';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="acc-rose relative px-4 pb-14 pt-8 sm:px-10 sm:pb-28 sm:pt-12 lg:px-16 lg:pb-36">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[92vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--accent-rgb)/0.32)_0%,rgb(var(--accent-rgb)/0.14)_42%,transparent_70%)] blur-3xl"
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[clamp(1.75rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          Let&apos;s build something
          <span className="block text-gradient">worth shipping.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/60 sm:mt-6 sm:text-lg">
          Have a project in mind, or just want to compare notes? Message me on WhatsApp for the
          quickest reply — or email if you prefer.
        </p>

        {/* Primary actions */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-[#04281a] sm:px-8 sm:py-4 sm:text-base shadow-[0_10px_40px_-10px_rgba(37,211,102,0.95)] transition-transform duration-300 hover:scale-[1.03]"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] transition-transform duration-700 group-hover:translate-x-full"
            />
            <WhatsAppIcon className="relative h-5 w-5" />
            <span className="relative">
              WhatsApp
              <span className="ml-2 font-normal opacity-70">{site.whatsappDisplay}</span>
            </span>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/18 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl sm:px-8 sm:py-4 sm:text-base transition-colors duration-300 hover:bg-white/14"
          >
            <Mail size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            {site.email}
          </a>
        </div>

        {/* CV / Résumé */}
        <div className="mt-7 border-t border-white/[0.08] pt-6 sm:mt-10 sm:pt-9">
          <p className="text-mono-label text-white/35">Prefer the paperwork?</p>
          <DocumentLinks className="mt-4 justify-center sm:mt-5" />
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:mt-12 sm:gap-x-8 sm:gap-y-3 sm:text-base">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-white/55 transition-colors duration-300 hover:text-white"
              >
                {social.label}
                {social.handle && (
                  <span className="text-white/35 group-hover:text-white/60">/{social.handle}</span>
                )}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
