'use client';

import { useMemo, useState } from 'react';
import { Check, MessageCircle, X } from 'lucide-react';
import { estimator } from '@/config/site';
import { whatsappLink } from '@/lib/whatsapp';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

/**
 * A back-of-envelope estimate the visitor assembles themselves.
 *
 * The point is not the number — it is that a client who has spent ninety
 * seconds configuring something has already started the conversation in
 * their head. The WhatsApp button then carries the whole configuration
 * across, so the first message is a brief instead of "how much?".
 *
 * Every figure comes from `estimator` in config/site.js.
 */
export default function Estimator() {
  const [kind, setKind] = useState(estimator.kinds[1].key);
  const [scale, setScale] = useState(estimator.scales[1].key);
  const [picked, setPicked] = useState(() => new Set(['db']));

  const toggle = (key) =>
    setPicked((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const money = (n) => `${estimator.symbol}${n.toLocaleString(estimator.locale)}`;

  /* The cart is derived, never stored: one source of truth (kind, scale,
     picked) and the line items fall out of it. Nothing can drift. */
  const cart = useMemo(() => {
    const round = (n) => Math.round(n / estimator.roundTo) * estimator.roundTo;

    const k = estimator.kinds.find((x) => x.key === kind);
    const s = estimator.scales.find((x) => x.key === scale);
    const feats = estimator.features.filter((f) => picked.has(f.key));

    const baseLine = {
      key: 'base',
      label: `${k.label} · ${s.label}`,
      note: s.blurb,
      amount: round(k.base * s.mult),
      fixed: true,
    };

    const featureLines = feats.map((f) => ({
      key: f.key,
      label: f.label,
      note: f.blurb,
      amount: f.add,
      fixed: false,
    }));

    const lines = [baseLine, ...featureLines];
    const subtotal = lines.reduce((t, l) => t + l.amount, 0);
    const weeksLow = k.weeks + s.weeks + feats.reduce((t, f) => t + f.weeks, 0);

    return {
      lines,
      featureLines,
      subtotal,
      high: round(subtotal * estimator.spread),
      weeksLow,
      weeksHigh: weeksLow + 2,
      kind: k,
      scale: s,
      feats,
    };
  }, [kind, scale, picked]);

  const brief = [
    `Hi Joun — I put a brief together on your site.`,
    ``,
    ...cart.lines.map((l) => `• ${l.label} — ${money(l.amount)}`),
    ``,
    `Estimate: ${money(cart.subtotal)}–${money(cart.high)}`,
    `Timeline: ${cart.weeksLow}–${cart.weeksHigh} weeks`,
    ``,
    `Can we talk it through?`,
  ].join("\n");

  return (
    <section id="estimate" className="acc-amber relative px-4 py-14 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div>
            <SectionLabel index="05">Estimate</SectionLabel>
            <h2 className="mt-4 font-display sm:mt-6 text-[clamp(1.6rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em]">
              What would yours cost?
            </h2>
          </div>
          <p className="max-w-sm text-white/55">
            Rough it out in a few taps. It is a starting range, not a quote — but it means our
            first conversation starts somewhere real.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8 grid gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          {/* ── Controls ─────────────────────────────────────── */}
          <div className="glass rounded-2xl p-4 sm:rounded-[1.75rem] sm:p-9">
            <Field label="What are you building?">
              <div className="grid gap-2 sm:grid-cols-3 sm:gap-2.5">
                {estimator.kinds.map((k) => (
                  <Choice
                    key={k.key}
                    active={kind === k.key}
                    onClick={() => setKind(k.key)}
                    title={k.label}
                    blurb={k.blurb}
                  />
                ))}
              </div>
            </Field>

            <Field label="How big is it?">
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {estimator.scales.map((s) => (
                  <Choice
                    key={s.key}
                    active={scale === s.key}
                    onClick={() => setScale(s.key)}
                    title={s.label}
                    blurb={s.blurb}
                    hideBlurbOnMobile
                  />
                ))}
              </div>
            </Field>

            <Field label="What does it need?">
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-2.5">
                {estimator.features.map((f) => (
                  <Choice
                    key={f.key}
                    active={picked.has(f.key)}
                    onClick={() => toggle(f.key)}
                    title={f.label}
                    blurb={f.blurb}
                    check
                  />
                ))}
              </div>
            </Field>
          </div>

          {/* ── Cart ─────────────────────────────────────────── */}
          <div className="glass relative flex flex-col overflow-hidden rounded-2xl p-4 sm:rounded-[1.75rem] sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
              style={{ background: 'rgb(var(--accent-rgb) / 0.22)' }}
            />

            <div className="relative flex items-baseline justify-between gap-3">
              <p className="text-mono-label text-white/40">Your build</p>
              <span
                className="rounded-full px-2.5 py-1 text-[11px] font-medium tabular-nums"
                style={{
                  color: 'rgb(var(--accent-rgb))',
                  background: 'rgb(var(--accent-rgb) / 0.12)',
                }}
              >
                {cart.lines.length} {cart.lines.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            {/* Line items. Keying by item key means React mounts a fresh node
                when a module is added, which is what replays the entry
                animation — a re-render alone would not. */}
            <ul className="relative mt-4 space-y-px sm:mt-5">
              {cart.lines.map((line) => (
                <li
                  key={line.key}
                  className="cart-line group/line flex items-start gap-2.5 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-white/[0.04] sm:gap-3 sm:px-3 sm:py-3"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      background: line.fixed ? 'rgb(255 255 255 / 0.25)' : 'rgb(var(--accent-rgb))',
                    }}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-white/85">
                      {line.label}
                    </span>
                    <span className="block text-xs leading-snug text-white/40">{line.note}</span>
                  </span>
                  <span className="shrink-0 text-sm tabular-nums text-white/70">
                    {money(line.amount)}
                  </span>
                  {/* Base line cannot be removed — there is no project without it. */}
                  {!line.fixed && (
                    <button
                      type="button"
                      onClick={() => toggle(line.key)}
                      aria-label={`Remove ${line.label}`}
                      className="-my-1 -mr-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white/25 transition-colors hover:bg-white/10 hover:text-white focus-visible:text-white"
                    >
                      <X size={13} />
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {!cart.featureLines.length && (
              <p className="mt-2 rounded-xl border border-dashed border-white/12 px-3 py-4 text-center text-xs text-white/35">
                Add what it needs and it lands here.
              </p>
            )}

            {/* ── Totals ──────────────────────────────────── */}
            <div className="relative mt-5 border-t border-white/10 pt-5 sm:mt-6 sm:pt-6">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-white/40">Subtotal</span>
                <span className="tabular-nums text-white/70">{money(cart.subtotal)}</span>
              </div>

              <p className="text-mono-label mt-5 text-white/40 sm:mt-6">Indicative range</p>
              <p className="mt-2.5 font-display text-[clamp(1.4rem,3vw,2rem)] font-extrabold leading-tight tracking-tight tabular-nums">
                <span className="whitespace-nowrap">{money(cart.subtotal)}</span>
                <span className="text-white/30"> – </span>
                <span className="whitespace-nowrap">{money(cart.high)}</span>
              </p>

              <p className="mt-3 flex items-baseline gap-2 text-sm text-white/65 tabular-nums">
                <span className="font-medium" style={{ color: 'rgb(var(--accent-rgb))' }}>
                  {cart.weeksLow}–{cart.weeksHigh}
                </span>
                weeks, start to launch
              </p>
            </div>

            <a
              href={whatsappLink(brief)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-6 inline-flex sm:mt-7 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-[#04281a] sm:px-7 sm:py-4 sm:text-base transition-transform duration-300 hover:scale-[1.02]"
            >
              <MessageCircle size={18} />
              Send this brief
            </a>

            <p className="relative mt-4 text-xs leading-relaxed text-white/35">
              A starting range only. The real number comes from one call, and it is fixed before
              anything gets built.
            </p>
          </div>

        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <fieldset className="mb-6 last:mb-0 sm:mb-8">
      <legend className="text-mono-label mb-3 text-white/40 sm:mb-4">{label}</legend>
      {children}
    </fieldset>
  );
}

/**
 * One option. Selection is carried by the accent border and a tinted fill
 * rather than a checkbox glyph alone, so the chosen set is readable at a
 * glance from across the card.
 */
function Choice({ active, onClick, title, blurb, check = false, hideBlurbOnMobile = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group relative rounded-xl border p-3 text-left transition-all duration-300 sm:rounded-2xl sm:p-4 ${
        active
          ? 'border-transparent'
          : 'border-white/10 bg-white/[0.03] hover:border-white/22 hover:bg-white/[0.06]'
      }`}
      style={
        active
          ? {
              borderColor: 'rgb(var(--accent-rgb) / 0.55)',
              background: 'rgb(var(--accent-rgb) / 0.10)',
              boxShadow: '0 10px 34px -16px rgb(var(--accent-rgb) / 0.8)',
            }
          : undefined
      }
    >
      <span className="flex items-center justify-between gap-2">
        <span className="font-medium text-white">{title}</span>
        {check && (
          <span
            className={`grid h-4 w-4 shrink-0 place-items-center rounded-[5px] border transition-colors ${
              active ? 'border-transparent' : 'border-white/25'
            }`}
            style={active ? { background: 'rgb(var(--accent-rgb))' } : undefined}
          >
            {active && <Check size={11} strokeWidth={3.5} className="text-void" />}
          </span>
        )}
      </span>
      <span
        className={`mt-1 block text-xs leading-snug text-white/45 ${
          hideBlurbOnMobile ? 'hidden sm:block' : ''
        }`}
      >
        {blurb}
      </span>
    </button>
  );
}

function Row({ label, value }) {
  return (
    <li className="flex items-baseline justify-between gap-4">
      <span className="text-white/40">{label}</span>
      <span className="text-white/75">{value}</span>
    </li>
  );
}
