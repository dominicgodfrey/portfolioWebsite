# Dominic Sol Godfrey — Portfolio

A personal portfolio with two halves — a **technical portfolio** and a **travel +
photography** experience — over a vaporwave WebGL grid with a glassmorphism UI.
Built on **Astro + React islands** (near-zero JS by default).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the production build
```

## Where things live

| You want to change… | Edit |
| --- | --- |
| Projects (demo/github/tech/date) | `src/data/projects.ts` |
| Certifications & awards | `src/data/certifications.ts` |
| Photos + map pins (lat/lon/date/caption) | `src/data/photos.ts` |
| Which countries are highlighted | `src/data/visited.ts` (ISO alpha-3) |
| Social links | `src/components/SocialLinks.astro` |
| Name / about / hero copy | `src/pages/index.astro` |
| Colours, radii, fonts, spacing | `src/styles/tokens.css` (single source of truth) |

Placeholder images live in `public/images/` — swap the SVGs for real photos
(keep the same paths, or update `src` in the data files).

## The design system

Everything composes from `src/styles/tokens.css`: a tight palette (two neon
accents only), one reusable `.glass` recipe, one large-radius scale. Keeping to
these is what keeps the look tasteful rather than busy.

- **Background** (`src/components/react/GridBackground.tsx`) — a custom WebGL
  shader. Capped DPR, pauses when the tab is hidden, and renders nothing under
  `prefers-reduced-motion` (the CSS gradient on `body` is the fallback).
- **Map** (`src/components/react/TravelMap.tsx`) — MapLibre GL with OpenFreeMap's
  free dark style (no API token). Falls back to MapLibre demo tiles if that ever
  fails. Click empty space → flies to the nearest photo; click a pin → opens it.
- **Gallery ↔ Map sync** — the two are separate React islands that coordinate
  through a nanostore (`src/lib/stores.ts`), not props.

## Still to wire up (placeholders today)

- **Contact form** — set `WEB3FORMS_KEY` in
  `src/components/react/ContactForm.tsx` (free key at web3forms.com). Until then
  it falls back to a `mailto:` link. Update `CONTACT_EMAIL` too.
- **Real photos** — drop images into `public/images/` and update `photos.ts`. A
  future build-time EXIF step (e.g. `exifr`) can auto-fill `lat`/`lon`/`date`.
- **Deploy** — any static host works (Vercel / Netlify / Cloudflare Pages).
  Update `site` in `astro.config.mjs` to the final domain.
