# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```

## Stack

- **Next.js 16** (App Router) · **React 19** · **Tailwind CSS v4** · **TypeScript**
- **Fonts**: Fraunces (display/italic headings) + Plus Jakarta Sans (body) — loaded via `next/font/google` in `layout.tsx`
  - CSS vars: `--font-fraunces` → Tailwind `font-display`, `--font-dm-sans` (legacy name) → Tailwind `font-sans`
- No additional dependencies beyond Next.js core

## Architecture

This is a **single-page marketing landing app**. The entire page lives in `src/app/page.tsx` as a collection of self-contained function components composed in `<Home>`. There are no routes, no API routes, no state management libraries, and no external data fetching.

**File map:**
- `src/app/page.tsx` — all page sections (marked `"use client"` for scroll/menu state)
- `src/app/layout.tsx` — font loading, `<html lang="es">`, global metadata
- `src/app/globals.css` — Tailwind import, CSS custom properties, scroll-reveal animations, `.premium-card` hover

## Design System

**Brand tokens** (defined in `globals.css` `:root`, consumed via Tailwind):
- `--primary`: `hsl(207, 65%, 28%)` — dark teal blue (headings, nav, backgrounds)
- `--accent`: `hsl(174, 62%, 40%)` — teal green (CTAs, highlights, icons)
- `--background`: `#FCFAF7` — warm off-white

**Tailwind usage**: Brand colors are accessed as `text-primary`, `bg-accent`, `border-primary/10`, etc. Raw hex values are used only for WhatsApp UI colors (`#075E54`, `#E5DDD5`, `#DCF8C6`) and a few one-off shades.

**Typography pattern** — Fraunces italic for editorial spans within headings:
```tsx
<span className="italic font-display font-medium text-primary/40">your text</span>
```

## Scroll Reveal System

CSS classes in `globals.css` + IntersectionObserver in `Home` (not a library):
- `reveal` — base fade-up animation (starts hidden)
- `reveal-left` / `reveal-right` — slide in from sides
- `reveal-scale` — scale from 0.95
- Adding `.active` class triggers the transition

Apply with optional `animationDelay` inline style for staggered effects.

## Section Order

`Nav` → `Hero` → `SocialProof` → `Problem` → `HowItWorks` → `Quote` → `Features` → `FinalCTA` → `Footer`

Anchor IDs: `#problema`, `#como-funciona`, `#capacidad`, `#contacto`

## UI Mockups

`PhoneMockup` and `PanelMockup` / `AlertCardMockup` are fully inline SVG/JSX components — no images. The WhatsApp phone mockup uses hardcoded chat content in Spanish to simulate a patient conversation with Eva.

## Content Language

All user-facing content is in **Spanish (Perú)**. The product is EvaCare+, an AI health agent named "Eva" that communicates with oncology patients via WhatsApp.
