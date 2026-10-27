'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { nav, pages, site } from '@/config/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0].href);
  const [condensed, setCondensed] = useState(false);
  const [pill, setPill] = useState(null);

  const listRef = useRef(null);
  const itemRefs = useRef({});

  // Slide the highlight to whichever link is active, measured from the DOM so
  // it stays correct at any font size or zoom level.
  const movePill = useCallback(() => {
    const list = listRef.current;
    const el = itemRefs.current[active];
    if (!list || !el) return;
    setPill({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  }, [active]);

  useEffect(() => {
    movePill();
    window.addEventListener('resize', movePill);

    // The bar condenses and the webfont swaps in after hydration; both move the
    // links under the highlight, so re-measure instead of trusting mount.
    const list = listRef.current;
    const ro =
      list && typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(movePill)
        : null;
    if (ro && list) ro.observe(list);

    return () => {
      window.removeEventListener('resize', movePill);
      ro?.disconnect();
    };
  }, [movePill]);

  // Highlight the section currently filling the viewport. A scroll probe beats
  // an IntersectionObserver here: Work and Experience are taller than any sane
  // threshold band, so ratio-based detection never trips while you read them.
  useEffect(() => {
    let frame = 0;

    const pick = () => {
      frame = 0;
      // Sorted by document position, not by the order of the nav array — the
      // "last one past the probe line" rule below is only correct on a list
      // that is in document order, and reordering config/site.js must not be
      // able to break the highlight.
      const sections = nav
        .map(({ href }) => document.querySelector(href))
        .filter(Boolean)
        .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
      if (!sections.length) return;

      // At the very bottom the last section wins, even if its top never
      // reaches the probe line.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(`#${sections[sections.length - 1].id}`);
        return;
      }

      // Whatever has crossed this line is what you're actually reading.
      const probe = window.innerHeight * 0.35;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= probe) current = section;
      }
      setActive(`#${current.id}`);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Tighten the bar once the hero is behind us.
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
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
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 sm:px-8 ${
        condensed ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-7'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full transition-all duration-500 ${
          condensed
            ? 'border border-white/10 bg-void/70 px-3 py-2 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.95)] backdrop-blur-2xl'
            : 'border border-transparent px-0 py-0'
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          className="ring-conic shrink-0 rounded-full bg-void/70 px-4 py-2 font-display text-base font-semibold italic tracking-tight backdrop-blur-xl transition-transform duration-300 hover:scale-[1.04] sm:px-5 sm:py-2.5 sm:text-lg"
        >
          {/* inline-block + trailing padding: the gradient is painted with
              background-clip:text, which clips to the inline box — and an
              italic final glyph leans out past that box, so its right edge
              loses the fill and reads as a cut-off letter. The padding widens
              the painting box enough to cover the lean. */}
          <span className="text-gradient inline-block pr-[0.2em]">{site.brand}</span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul
            ref={listRef}
            className="relative flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1.5 backdrop-blur-xl"
          >
            {/* The sliding highlight, sized and positioned from the active item */}
            {pill && (
              <li
                aria-hidden
                className="pointer-events-none absolute inset-y-1.5 rounded-full bg-[linear-gradient(110deg,rgba(139,92,246,0.35),rgba(99,102,241,0.3))] shadow-[0_0_22px_-6px_rgba(99,102,241,0.9)] ring-1 ring-white/15 transition-all duration-500 ease-out"
                style={{ left: pill.left, width: pill.width }}
              />
            )}

            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li
                  key={item.href}
                  ref={(el) => {
                    itemRefs.current[item.href] = el;
                  }}
                  className="relative"
                >
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
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
          {/* The standalone document routes, as one segmented control — they
              are two views of the same thing, so they read better paired than
              as two separate buttons competing with the CTA. */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 backdrop-blur-xl xl:flex">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-full px-4 py-2 text-sm text-white/65 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                {page.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,#8b5cf6,#6366f1_55%,#22d3ee)] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.9)] transition-shadow duration-300 hover:shadow-[0_12px_44px_-6px_rgba(99,102,241,1)] sm:inline-flex"
          >
            {/* Sheen that wipes across on hover */}
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative">Let&apos;s Collaborate</span>
            <ArrowUpRight
              size={16}
              className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-full border border-white/12 bg-white/[0.06] p-2.5 text-white backdrop-blur-xl transition-colors hover:bg-white/15 sm:p-3 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        className={`mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-void/90 backdrop-blur-2xl transition-all duration-500 ease-out lg:hidden ${
          open
            ? 'mt-2 max-h-[38rem] p-2 opacity-100'
            : 'pointer-events-none mt-0 max-h-0 p-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 45}ms` : '0ms' }}
                className={`block rounded-xl px-4 py-2.5 text-[0.95rem] text-white/75 transition-all duration-500 hover:bg-white/10 hover:text-white ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Same standalone routes as the desktop segmented control, which
              is hidden below xl — without these they would be unreachable on
              a phone. */}
          <li className="mt-1 flex gap-2 border-t border-white/10 pt-2">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                onClick={() => setOpen(false)}
                className="flex-1 rounded-xl bg-white/[0.05] px-4 py-2.5 text-center text-sm text-white/75 transition-colors hover:bg-white/12 hover:text-white"
              >
                {page.label}
              </Link>
            ))}
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1.5 flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(110deg,#8b5cf6,#6366f1_55%,#22d3ee)] px-4 py-3 text-sm font-medium text-white"
            >
              Let&apos;s Collaborate <ArrowUpRight size={16} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
