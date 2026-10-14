'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { nav, site } from '@/config/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0].href);
  const [stuck, setStuck] = useState(false);

  // Highlight the section currently filling the viewport.
  useEffect(() => {
    const sections = nav
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -45% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Detach from the hero and pin to the top once it is scrolled past.
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile sheet on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`z-50 px-4 transition-all duration-500 sm:px-8 ${
        stuck
          ? 'fixed inset-x-0 top-0 pt-3 sm:pt-4'
          : 'absolute inset-x-0 top-0 pt-5 sm:pt-7'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 transition-all duration-500 ${
          stuck
            ? 'rounded-full border border-white/10 bg-ink/80 px-3 py-2 shadow-[0_18px_50px_-24px_rgba(10,10,15,0.9)] backdrop-blur-2xl'
            : ''
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          className="border-gradient shrink-0 rounded-full px-5 py-2.5 font-display text-lg font-semibold italic tracking-tight transition-transform duration-300 hover:scale-[1.03]"
          style={{ '--tw-gradient-surface': 'rgba(10,10,15,0.55)' }}
        >
          <span className="text-gradient">{site.brand}</span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.07] p-1.5 backdrop-blur-xl">
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-full px-5 py-2 text-sm transition-colors duration-300 ${
                      isActive
                        ? 'bg-white/15 text-white shadow-[0_0_20px_-6px_rgba(168,85,247,0.8)]'
                        : 'text-white/65 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-[linear-gradient(110deg,#a855f7,#ec4899_55%,#fb923c)] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(236,72,153,0.9)] transition-all duration-300 hover:shadow-[0_10px_40px_-6px_rgba(236,72,153,1)] sm:inline-flex"
          >
            Let&apos;s Collaborate
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-full border border-white/15 bg-white/[0.07] p-3 text-white backdrop-blur-xl transition-colors hover:bg-white/15 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-white/12 bg-ink/85 p-3 backdrop-blur-xl lg:hidden"
      >
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-5 py-3.5 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(110deg,#a855f7,#ec4899_55%,#fb923c)] px-5 py-3.5 font-medium text-white"
            >
              Let&apos;s Collaborate <ArrowUpRight size={16} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
