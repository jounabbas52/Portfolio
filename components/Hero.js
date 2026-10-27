import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { site, clients } from '@/config/site';
import RoleRotator from './RoleRotator';

/**
 * Drop a file named portrait.(png|jpg|jpeg|webp|avif) into /public and it is
 * composited into the hero automatically. Until then the slot renders a
 * designed stack-orbit instead, so the page never looks unfinished.
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
    <section id="home" className="acc-indigo relative isolate min-h-[100svh] overflow-hidden">
      {/* Portrait slot — right half, bleeding off the top */}
      {portrait && (
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[56%] md:block lg:w-[50%]">
          <Image
            src={portrait}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 56vw"
            className="object-cover object-[center_top] [filter:contrast(1.08)_saturate(1.15)] [mask-image:linear-gradient(to_right,transparent_0%,black_38%,black_100%)]"
          />
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-28 pt-28 sm:px-10 sm:pb-36 sm:pt-36 lg:px-16">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ── Copy ───────────────────────────────────────────── */}
          <div>
            {site.available && (
              <p
                className="inline-flex items-center gap-2.5 rounded-full border border-mint/25 bg-mint/[0.08] px-3 py-1.5 text-xs text-mint/90 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-sm"
                style={{ animation: 'rise-blur 0.9s var(--ease-out-expo) both' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-signal rounded-full bg-mint opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                </span>
                Available for new projects
              </p>
            )}

            <p
              className="mt-5 font-display text-xl font-medium italic tracking-tight text-white/75 sm:mt-7 sm:text-3xl"
              style={{ animation: 'rise-blur 0.9s var(--ease-out-expo) 0.1s both' }}
            >
              I Am {site.name}
            </p>

            <h1 className="mt-2 font-display text-[clamp(2.1rem,9vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em]">
              <span
                className="block text-gradient"
                style={{ animation: 'rise-blur 0.9s var(--ease-out-expo) 0.2s both' }}
              >
                Full Stack
              </span>

              <span
                className="block text-white"
                style={{ animation: 'rise-blur 0.9s var(--ease-out-expo) 0.3s both' }}
              >
                Developer
              </span>
            </h1>

            {/* Kinetic subline — the stack cycles through in place */}
            <p
              className="mt-5 flex flex-wrap items-baseline gap-x-2.5 font-display text-lg font-semibold tracking-tight sm:mt-7 sm:gap-x-3 sm:text-2xl"
              style={{ animation: 'rise-blur 0.9s var(--ease-out-expo) 0.38s both' }}
            >
              <span className="text-white/45">Building with</span>
              <RoleRotator words={site.roles} />
            </p>

            <p
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-base lg:text-lg"
              style={{ animation: 'rise-blur 0.9s var(--ease-out-expo) 0.46s both' }}
            >
              {site.tagline}
            </p>

            <div
              className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9"
              style={{ animation: 'rise-blur 0.9s var(--ease-out-expo) 0.56s both' }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.06] px-5 py-2.5 text-sm font-medium backdrop-blur-xl sm:px-7 sm:py-3.5 transition-colors duration-300 hover:bg-white/14"
              >
                View Selected Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* ── Stack orbit ────────────────────────────────────── */}
          {!portrait && <StackOrbit />}
        </div>
      </div>

      {/* Client strip pinned to the base of the section */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/[0.08] bg-gradient-to-t from-void/80 to-transparent backdrop-blur-sm">
        <div className="mx-auto max-w-6xl overflow-hidden px-4 py-3.5 motion-reduce:overflow-x-auto sm:px-10 sm:py-6 lg:px-16">
          <ul className="mask-edges flex w-max animate-marquee items-center gap-7 whitespace-nowrap will-change-transform motion-reduce:animate-none sm:gap-14">
            {[...clients, ...clients].map((client, i) => (
              <li
                key={`${client.name}-${i}`}
                aria-hidden={i >= clients.length}
                className={`group flex shrink-0 items-center gap-2.5 text-sm font-medium text-white/40 transition-colors duration-300 hover:text-white/85 sm:gap-3 sm:text-lg ${
                  i >= clients.length ? 'motion-reduce:hidden' : ''
                }`}
              >
                <span
                  className="grid h-7 w-7 place-items-center rounded-lg text-[11px] font-bold text-white sm:h-9 sm:w-9 sm:text-xs transition-transform duration-300 group-hover:scale-110"
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

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-[6.5rem] left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-2 w-1 animate-float rounded-full bg-white/60" />
        </span>
      </a>
    </section>
  );
}

/**
 * The portrait stand-in: the stack, arranged around a glass core.
 *
 * The marks are placed with trig at render time (deterministic, so it is
 * server-rendered with no hydration mismatch) and left upright — the sense of
 * motion comes from the rotating dashed ring and conic sweep behind them,
 * which is cheaper than counter-rotating every badge and never leaves a
 * glyph upside down. Decorative, so the whole thing is hidden from
 * assistive tech.
 */
function StackOrbit() {
  const ring = clients.slice(0, 6);
  const radius = 44; // percent of the square, measured from the centre

  return (
    <div aria-hidden className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
      {/* Bloom */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(139,92,246,0.16)_45%,transparent_70%)] blur-2xl" />

      {/* Conic sweep — a lighthouse beam behind the ring */}
      <div className="absolute inset-[6%] animate-orbit [animation-duration:14s] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(139,92,246,0.28)_40deg,rgba(99,102,241,0.2)_90deg,transparent_150deg,transparent_360deg)] blur-xl" />

      {/* Guide rings, one of them turning */}
      <div className="absolute inset-[6%] rounded-full border border-white/[0.07]" />
      <div className="absolute inset-[6%] animate-orbit [animation-duration:40s] rounded-full border border-dashed border-white/[0.12]" />
      <div className="absolute inset-[26%] rounded-full border border-white/[0.05]" />

      {/* Core */}
      <div className="absolute inset-[30%]">
        <div className="ring-conic grid h-full w-full place-items-center rounded-full bg-void/85 backdrop-blur-xl">
          <div className="text-center">
            <span className="block text-gradient font-display text-4xl font-extrabold tracking-tight">
              {site.brand}
            </span>
            <span className="text-mono-label mt-1 block text-white/40">Full Stack</span>
          </div>
        </div>
      </div>

      {/* Marks sitting on the ring */}
      {ring.map((client, i) => {
        const rad = ((360 / ring.length) * i - 90) * (Math.PI / 180);
        return (
          <div
            key={client.name}
            className="absolute animate-float"
            style={{
              left: `${50 + radius * Math.cos(rad)}%`,
              top: `${50 + radius * Math.sin(rad)}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <div
              className="grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white/12 bg-void/85 font-display text-base font-bold backdrop-blur-xl"
              style={{ boxShadow: `0 0 30px -10px ${client.accent}` }}
            >
              <span style={{ color: client.accent }}>{client.name.charAt(0)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
