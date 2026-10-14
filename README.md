# Joun Abbas — Portfolio

A developer portfolio built with **Next.js 16** (App Router), **React 19** and **Tailwind CSS v4**.

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

| Route     | What it is                                                  |
| --------- | ----------------------------------------------------------- |
| `/`       | The portfolio — hero, about, work, capabilities, experience, contact |
| `/resume` | Print-optimised résumé/CV, generated from config             |

## Making it yours

**All copy lives in [`config/site.js`](config/site.js)** — name, role, email, WhatsApp number,
socials, work, skill groups, services, stats, experience, education, languages and reference. Edit that one
file and both pages update; no component changes needed.

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

### Adding your photo

Drop `portrait.png` (or `.jpg` / `.webp` / `.avif`) into `public/`. The hero composites it
with the neon treatment automatically; until then a designed placeholder renders.

### WhatsApp

Set `whatsapp` (digits only, no `+` or spaces) and `whatsappDisplay` in `config/site.js`.
The greeting sent with the link is `whatsappMessage`.

### Design tokens

Colours, fonts and animation timings live in the `@theme` block at the top of
[`app/globals.css`](app/globals.css). The hero's light composition is pure CSS/SVG in
[`components/NeonBackdrop.js`](components/NeonBackdrop.js) — adjust the streak gradients
there to re-tint the whole hero.

## Structure

```
app/
  layout.js        fonts, metadata, skip link
  page.js          section composition
  globals.css      tokens, utilities, print + reduced-motion rules
  resume/page.js   printable CV
components/        Nav, Hero, NeonBackdrop, About, Projects, Skills,
                   Experience, Contact, Footer, DocumentLinks, Reveal…
config/site.js     ← all content
lib/               documents.js (PDF detection), whatsapp.js (deep link)
```

## Notes

- Fully responsive, with a mobile nav sheet and a nav that pins on scroll.
- Respects `prefers-reduced-motion`: animations and scroll-reveal are neutralised.
- Keyboard accessible — skip link, visible focus rings, `aria-current` on the active nav item.
# Portfolio
