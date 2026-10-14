import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { site, clients } from '@/config/site';
import NeonBackdrop from './NeonBackdrop';
import DocumentLinks from './DocumentLinks';

/**
 * Drop a file named portrait.(png|jpg|jpeg|webp|avif) into /public and it is
 * composited into the hero automatically. Until then the slot renders a
 * designed placeholder, so the page never looks unfinished.
 */
function findPortrait() {
  const dir = path.join(process.cwd(), 'public');
  const candidates = ['png', 'webp', 'avif', 'jpg', 'jpeg'].map((ext) => `portrait.${ext}`);
  try {
    const found = candidates.find((file) => fs.existsSync(path.join(dir, file)));
    return found ? `/${found}` : null;
  } catch {
    return null;
  }
}

export default function Hero() {
  const portrait = findPortrait();

  return (
    <section id="home" className="px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative isolate min-h-[min(94vh,980px)] overflow-hidden rounded-[2rem] bg-ink text-white sm:rounded-[2.75rem]">
        <NeonBackdrop />

        {/* Portrait slot — right half, bleeding off the top */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[58%] md:block lg:w-[52%]">
          {portrait ? (
            <Image
              src={portrait}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 58vw"
              className="object-cover object-[center_top] [mask-image:linear-gradient(to_right,transparent_0%,black_38%,black_100%)] [filter:contrast(1.08)_saturate(1.15)]"
            />
          ) : (
            <PortraitPlaceholder />
          )}
        </div>

        {/* Headline */}
        <div className="relative z-20 flex min-h-[min(94vh,980px)] flex-col justify-center px-6 pb-44 pt-36 sm:px-10 sm:pb-40 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <p
              className="font-display text-3xl font-medium italic tracking-tight text-white/90 sm:text-5xl lg:text-6xl"
              style={{ animation: 'rise 0.9s cubic-bezier(0.22,1,0.36,1) both' }}
            >
              I Am {site.name}
            </p>

            <h1 className="mt-2 font-display text-[clamp(2.75rem,11vw,7.5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em]">
              <span
                className="block text-gradient"
                style={{ animation: 'rise 0.9s cubic-bezier(0.22,1,0.36,1) 0.12s both' }}
              >
                Full Stack
              </span>

              <span
                className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3"
                style={{ animation: 'rise 0.9s cubic-bezier(0.22,1,0.36,1) 0.24s both' }}
              >
                <a
                  href="#projects"
                  aria-label="Jump to selected work"
                  className="group inline-flex h-[0.72em] min-h-14 items-center justify-center rounded-full bg-[linear-gradient(110deg,#a855f7,#ec4899_52%,#fb923c)] px-8 shadow-[0_10px_40px_-10px_rgba(236,72,153,0.95)] transition-transform duration-300 hover:scale-105"
                >
                  <ArrowRight
                    className="h-[42%] w-auto min-h-5 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </a>
                <span className="text-white">Developer</span>
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
              style={{ animation: 'rise 0.9s cubic-bezier(0.22,1,0.36,1) 0.36s both' }}
            >
              {site.tagline}
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              style={{ animation: 'rise 0.9s cubic-bezier(0.22,1,0.36,1) 0.46s both' }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-medium backdrop-blur-xl transition-colors duration-300 hover:bg-white/15"
              >
                View Selected Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              {site.available && (
                <span className="inline-flex items-center gap-2.5 text-sm text-white/55">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Available for new projects
                </span>
              )}
            </div>

            <DocumentLinks
              tone="dark"
              className="mt-5"
              style={{ animation: 'rise 0.9s cubic-bezier(0.22,1,0.36,1) 0.56s both' }}
            />
          </div>
        </div>

        {/* Client strip pinned to the base of the card */}
        <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-sm">
          <div className="mx-auto max-w-6xl overflow-hidden px-6 py-7 sm:px-10 lg:px-16">
            <ul className="flex w-max animate-marquee items-center gap-14 whitespace-nowrap will-change-transform motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
              {[...clients, ...clients].map((client, i) => (
                <li
                  key={`${client.name}-${i}`}
                  aria-hidden={i >= clients.length}
                  className="flex shrink-0 items-center gap-3 text-lg font-medium text-white/45 transition-colors duration-300 hover:text-white/80"
                >
                  <span
                    className="grid h-9 w-9 place-items-center rounded-lg text-xs font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${client.accent}, ${client.accent}55)` }}
                  >
                    {client.name.charAt(0)}
                  </span>
                  {client.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Abstract stand-in: a lit figure built from blurred gradients. */
function PortraitPlaceholder() {
  return (
    <div aria-hidden className="relative h-full w-full">
      <div className="absolute left-[30%] top-[18%] h-[62%] w-[46%] rounded-[50%_50%_45%_55%/60%_55%_45%_40%] bg-[linear-gradient(160deg,rgba(236,72,153,0.55),rgba(88,28,135,0.75)_55%,rgba(5,3,9,0.9))] blur-[2px]" />
      <div className="absolute left-[34%] top-[14%] h-[26%] w-[26%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(253,164,175,0.9),rgba(124,58,237,0.5)_55%,transparent_72%)] blur-[6px]" />
      <div className="absolute left-[29%] top-[16%] h-[64%] w-[3px] rounded-full bg-[linear-gradient(to_bottom,transparent,#fda4af,#c4b5fd,transparent)] opacity-80 blur-[2px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#050309_0%,transparent_45%)]" />
    </div>
  );
}
