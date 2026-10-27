# Joun Abbas — Portfolio

A developer portfolio built with **Next.js 16** (App Router), **React 19** and **Tailwind CSS v4**.
No animation libraries — every effect is modern CSS.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script          | Does                                |
| --------------- | ----------------------------------- |
| `npm run dev`   | Dev server with hot reload          |
| `npm run build` | Production build (static prerender) |
| `npm start`     | Serve the production build          |

## Routes

| Route     | What it is                                                           |
| --------- | -------------------------------------------------------------------- |
| `/`       | The portfolio — hero, about, work, capabilities, experience, contact |
| `/resume` | Print-optimised résumé/CV, generated from config                     |

## Design

The site is **one continuous dark canvas**. A single `fixed` backdrop
([`components/Aurora.js`](components/Aurora.js)) sits behind every route, and each
section is a translucent glass panel over it — so `/` and `/resume` read as the same
site rather than a designed page next to a plain one. Sections are separated by
spacing, glow and glass, never by a change of background colour.

### The effects, and where they live

| Effect                     | How it works                                                                 |
| -------------------------- | ---------------------------------------------------------------------------- |
| Reading-progress bar       | CSS scroll-driven animation (`animation-timeline: scroll()`), no JS           |
| Timeline rail that fills   | CSS scroll-driven animation (`animation-timeline: view()`), no JS             |
| Rotating gradient borders  | `@property --angle` + `conic-gradient`, masked to a 1px edge (`.ring-conic`)  |
| Pointer spotlight + tilt   | [`SpotlightCard`](components/SpotlightCard.js) writes CSS vars on pointermove |
| Stat count-up              | [`Counter`](components/Counter.js), IntersectionObserver + rAF                |
| Rotating hero stack word   | [`RoleRotator`](components/RoleRotator.js)                                    |
| Scroll reveal              | [`Reveal`](components/Reveal.js), IntersectionObserver                        |
| Card text that resizes     | Container queries (`@container` / `@md:`) in `Projects`                       |

Scroll-driven animations are progressive enhancement: anything depending on them
carries `.sd-only`, which keeps it hidden where the feature is unsupported rather than
leaving a dead element on screen. `prefers-reduced-motion` neutralises all of it, and a
`<noscript>` rule keeps the page readable with JS off.

### Design tokens

Colours, fonts and animation timings live in the `@theme` block at the top of
[`app/globals.css`](app/globals.css). Retinting the whole site is a matter of changing
the accent tokens there and the streak gradients in
[`components/Aurora.js`](components/Aurora.js).

## Making it yours

**All copy lives in [`config/site.js`](config/site.js)** — name, role, email, WhatsApp number,
socials, work, skill groups, services, stats, experience, education, languages and reference.
Edit that one file and both pages update; no component changes needed.

`site.roles` is the list of stack names the hero cycles through — keep them short, they
share one line.

### CV / Résumé downloads

The PDFs live in `public/` and are declared in the `documents` array in `config/site.js`:

```
public/Joun-Abbas-CV.pdf
public/Joun-Abbas-Resume.pdf
```

Replace a file (same name) and the download buttons pick it up. If a declared file is
missing, that button falls back to `/resume` — a print-optimised page built from the same
data — so it is never a dead link.

> Detection runs at build time — rebuild after replacing a file.

### Printing the résumé

`/resume` is authored for the dark canvas, so every colour in it is a light one. The
`.print-sheet` rule in `globals.css` flips the whole article back to ink for print in one
place, keeping the accent marks in colour. **Change the résumé markup and you should
re-check print** (browser print preview, or `Save as PDF` on the page itself).

### Adding your photo

Drop `portrait.png` (or `.jpg` / `.webp` / `.avif`) into `public/`. The hero composites it
into the right-hand slot automatically. Until then the slot renders a designed
stack-orbit instead, so the page never looks unfinished.

### WhatsApp

Set `whatsapp` (digits only, no `+` or spaces) and `whatsappDisplay` in `config/site.js`.
The greeting sent with the link is `whatsappMessage`.

## Structure

```
app/
  layout.js        fonts, metadata, Aurora + ScrollProgress, skip link
  page.js          section composition
  globals.css      tokens, utilities, scroll-driven + print rules
  resume/page.js   printable CV
components/        Aurora, ScrollProgress, Nav, Hero, RoleRotator, About,
                   Counter, Projects, Skills, Experience, Contact, Footer,
                   SpotlightCard, DocumentLinks, Reveal…
config/site.js     ← all content
lib/               documents.js (PDF detection), whatsapp.js (deep link)
```

## Notes

- Fully responsive, with a mobile nav sheet and a nav that condenses on scroll.
- Respects `prefers-reduced-motion`: animations and scroll-reveal are neutralised.
- Keyboard accessible — skip link, visible focus rings, `aria-current` on the active nav item.
