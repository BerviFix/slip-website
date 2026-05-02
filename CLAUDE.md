# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Italian-language marketing landing site for the Slip mobile app (Flutter app lives in the parent directory `../`). Built with Nuxt 4, Vue 3, Tailwind, and DaisyUI. Statically prerendered and deployed as static output (`.output/public`, symlinked as `dist/`).

The site sells the app: Italian copy, App Store / Play Store CTAs, payslip-decoder demo. No backend — Nitro is used in prerender-only mode.

## Commands

```bash
npm install          # install deps; runs `nuxt prepare` postinstall
npm run dev          # dev server on http://localhost:3000
npm run build        # production build (SSR-capable output)
npm run generate     # full static prerender
npm run preview      # preview built output locally
```

No test runner, linter, or formatter is configured. There is no `flutter`/Dart tooling here — that is in the parent Flutter project.

## Architecture

### Nuxt 4 layout
Source lives under `app/` (Nuxt 4 `srcDir` convention):
- `app/app.vue` — root, mounts `NuxtLayout` + `NuxtPage`, syncs theme on mount
- `app/layouts/default.vue` — wraps every page with `SiteNav`, `SiteFooter`, `BackToTop`, `SkipLink`; sets canonical URL + `og:url` per route
- `app/pages/` — `index.vue`, `privacy.vue`, `terms.vue` (file-based routing)
- `app/components/` — auto-imported (no manual `import` needed): `AppLogo`, `AppShowcase`, `BackToTop`, `PayslipDecoder`, `Reveal`, `SiteFooter`, `SiteNav`, `SkipLink`, `StoreButtons`, `UiIcon`
- `app/composables/` — auto-imported: `useThemeMode`, `useStoreLinks`, `useInView`
- `app/plugins/theme.client.ts` — client-only plugin that reads stored theme before hydration
- `app/assets/css/main.css` — Tailwind entry

### Theming
Two DaisyUI themes defined in `tailwind.config.ts`: `slip` (light) and `slipdark` (dark). Theme is selected by:
1. Inline `<script>` injected via `nuxt.config.ts` `app.head.script` runs before paint to set `documentElement.dataset.theme` and the `dark` class — prevents FOUC.
2. `app/plugins/theme.client.ts` syncs the same value into Nuxt's `useState('theme')`.
3. `useThemeMode()` composable exposes `theme`, `apply`, `toggle`, `clearPreference`. Persists choice to `localStorage.slip_theme`.

When changing theme logic, all three locations must stay in sync (inline script, plugin, composable) or the page will flash on load.

### Prerendering & SEO
`nuxt.config.ts` sets `routeRules['/'] = { prerender: true }` and `nitro.prerender.crawlLinks = true`, so build crawls from `/` and statically renders all linked routes. The default layout injects per-route canonical URL using `runtimeConfig.public.siteUrl` (env: `NUXT_PUBLIC_SITE_URL`, default `https://slippino.app`). Open Graph, Twitter, JSON-LD (`WebSite`, `Organization`, `MobileApplication`) are configured globally in `nuxt.config.ts`.

### Store links
App Store / Play Store URLs and app IDs are hardcoded in `useStoreLinks()` and in `nuxt.config.ts` `apple-itunes-app` / `google-play-app` meta tags. Update both when IDs change.

## Conventions

- All user-facing copy is **Italian**. Match tone and existing terminology (busta paga, cedolino, IRPEF, INPS, etc.) when adding sections.
- HTML lang is hard-coded to `it` in `nuxt.config.ts`.
- No trailing semicolons in TS files; existing code uses 2-space indent and single quotes.
- Custom Tailwind tokens live under `theme.extend.colors` (`slip-*`, `md-sys-*`) and `boxShadow` (`soft`, `soft-lg`) — prefer these over arbitrary values.
- Components are auto-imported by Nuxt; don't add manual `import` statements for files under `app/components/` or `app/composables/`.
