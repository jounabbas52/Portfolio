import { ArrowUpRight, Mail } from 'lucide-react';
import { site, socials } from '@/config/site';
import { whatsappLink } from '@/lib/whatsapp';
import DocumentLinks from './DocumentLinks';
import WhatsAppIcon from './WhatsAppIcon';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-24 text-white sm:rounded-[2.75rem] sm:px-10 lg:px-16 lg:py-32">
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/3 left-1/2 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35)_0%,rgba(236,72,153,0.18)_40%,transparent_70%)] blur-3xl"
        />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            Let&apos;s build something
            <span className="block text-gradient">worth shipping.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Have a project in mind, or just want to compare notes? Message me on WhatsApp for the
            quickest reply — or email if you prefer.
          </p>

          {/* Primary actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-medium text-[#04281a] shadow-[0_10px_40px_-10px_rgba(37,211,102,0.95)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>
                WhatsApp
                <span className="ml-2 font-normal opacity-70">{site.whatsappDisplay}</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 font-medium text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/15"
            >
              <Mail size={18} />
              {site.email}
            </a>
          </div>

          {/* CV / Résumé */}
          <div className="mt-10 border-t border-white/10 pt-9">
            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Prefer the paperwork?
            </p>
            <DocumentLinks tone="dark" className="mt-5 justify-center" />
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
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
                    <span className="text-white/35 group-hover:text-white/60">
                      /{social.handle}
                    </span>
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
      </div>
    </section>
  );
}
