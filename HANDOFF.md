# Facile — Build Handoff / Progress

Living doc to resume work without losing context. Last updated: 2026-06-12.

## What this is
Marketing + commerce site for **Facile**, an NFC "all-in-one link" smart card
(Linktree-style profile on a tap-to-share physical card). Dark, premium aesthetic.
Built faithfully from a **client-approved Figma**, with motion/interactions layered on
top (things Figma can't express), responsive, plus a light/dark theme toggle.

Stack: **Next.js 16.2.9 + React 19.2 + Tailwind v4**, `motion` (Framer Motion
successor), `next-themes`. ⚠️ Custom Next.js build — read `node_modules/next/dist/docs`
before writing Next-specific code.

## Figma source (source of truth)
File key: `ACxTmGarxGmQIE1gWtBasH`. Read via the Figma MCP
(`get_metadata` → `get_design_context` / `get_screenshot` / `download_assets`).

| Page | Frame node | Route |
| --- | --- | --- |
| Landing | `209:2271` | `/` ✅ |
| Products | `209:3004` | `/products` |
| Shops | `210:3607` | `/shops` |
| Features | `211:4388` | `/features` |
| Facile Pay | `244:62` | `/pay` |
| FAQ | `213:5396` | `/faq` |
| Checkout flow | `128:1371`, `131:2244`, `131:2402`, `131:2547`, `131:2713` | `/checkout` |

Landing section → frame: Hero `20:3692` · Marquee `209:2276` · Bento "The card. The
profile." `247:2424` · How It Works `247:2588` · Pricing `209:2360` · Stats+Testimonials
`209:2633` · FAQ `244:1042` · Final CTA `209:2933` · Footer `209:2549` · Nav `74:25`.

## Architecture
- `app/globals.css` — Tailwind v4 `@theme` tokens. Semantic: `background/foreground`,
  `muted(-foreground)`, `border(-strong)`, `card(-foreground)`,
  `panel(-foreground/-muted/-border)`, `primary(-foreground)`, `accent`. **Dark-first**
  (`:root, .dark`) with a `.light` override. Site alternates dark page sections and
  light "panel" sections. Utilities: `.font-display` (SF-Pro stack for big headings),
  `.facile-gradient` (brand conic gradient), `.animate-marquee`.
- `app/layout.tsx` — Inter font, metadata, `ThemeProvider`, global `Navbar` + `Footer`
  wrap every route. So **page files only render their own content.**
- `app/components/ui/*` — `Container` (size sm/md/lg), `Button` (variant + size, `href`
  → Link), `SectionHeading`, `Card` (tone card/panel/plain), `Badge`.
- `app/components/layout/*` — `Navbar` (client, mobile menu), `Footer`, `Wordmark`
  (gradient ring + "facile"), `ThemeToggle` (next-themes, mount-guarded).
- `app/components/motion/*` — `Reveal` (scroll entrance), `Stagger`/`StaggerItem`. Both
  client, both respect `prefers-reduced-motion`. Safe to use inside server components.
- `app/components/sections/*` — landing sections; per-page sections under
  `sections/<route>/`.
- `app/lib/cn.ts` — dependency-free className combiner.

## Conventions (and how subagents build pages)
Foundation-first, then **one subagent per page/section in parallel**. Each agent:
reuses `ui`/`layout`/`motion`/`lib` (never edits them), creates only its own route +
`sections/<route>/` files + `public/<route>/` assets, matches each section's tone
(dark vs light panel) to Figma, adds responsive + tasteful motion, verifies its route
returns HTTP 200. See memory `facile-build-workflow`.

## Status (precise — page agents were cut off by a session limit mid-build)
- ✅ **Landing `/`** — complete, 8 sections faithful to Figma, motion, responsive.
  `pnpm build` passes; verified in browser.
- ✅ **Products `/products`** — complete: route + `sections/products/*` (ProductsHero,
  ProductGrid/ProductCard, products-data) + 8 assets in `public/products/`.
- 🟡 **Shops** — `sections/shops/*` exist (ShopHero, CardVisual, +2) but **no
  `app/shops/page.tsx`**. Needs the route file composing the sections (frame `210:3607`).
- 🟡 **Features** — `sections/features/*` (2 files) exist, **no `app/features/page.tsx`**
  (frame `211:4388`, long page — likely needs more sections too).
- 🟡 **FAQ page** — `sections/faq-page/*` (FaqHero, faq-data, +2) exist, **no
  `app/faq/page.tsx`** (frame `213:5396`).
- 🟡 **Checkout** — only `app/checkout/layout.tsx` (metadata) exists; **no
  `app/checkout/page.tsx`** and **no `sections/checkout/*`** (frames `128:1371`,
  `131:2244/2402/2547/2713`). Build as a client multi-step flow, designed UI only.
- 🔴 **Facile Pay `/pay`** — not started (no files). Frame `244:62`.
- ⏳ Then: responsive QA on all pages; light-mode polish (some sections hardcode colors,
  won't fully adapt to light — default/dark is what the client reviews); deploy to Vercel.

### To finish each 🟡/🔴 page
Wire up `app/<route>/page.tsx` that imports the existing `sections/<route>/*` (for
Shops/Features/FAQ), or run a fresh subagent with the frame node + the foundation
contract (Features/Pay likely need additional sections built; Checkout needs the whole
flow). Confirm each route returns 200, then `pnpm build`. The orphan section files are
committed and safe to build on.

## Run / verify
- Dev: `pnpm dev` → http://localhost:3000 (falls back to **3003** if 3000 busy).
  Current session's server runs on **3003**; log at `/tmp/facile-dev.log`.
- Build: `pnpm build` (also type-checks). Lint: `pnpm lint`.
- Branch: `build/facile-site`.

## Deploy (do at the end — needs the client's Vercel login)
Option A (fastest): client runs `npx vercel` in the project and follows prompts → live
preview URL. Option B: push to a GitHub repo, then connect it on vercel.com for
per-push previews. No env vars / backend required (fully static).

## Resume checklist if interrupted
1. `git status` / check which `app/<route>/page.tsx` files exist.
2. `pnpm dev`, hit each route, look for 500s; tail `/tmp/facile-dev.log`.
3. For any missing/broken page, re-run a subagent with that page's frame node (table
   above) and the foundation contract.
4. `pnpm build` must pass. Then responsive + light-mode polish, then deploy.
