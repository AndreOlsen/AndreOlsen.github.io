# CLAUDE.md

Personal portfolio: Astro 7 static site, Tailwind v4 (+ SCSS in `.astro` style blocks), deployed to GitHub Pages (`.github/workflows/deploy.yml`). Site is in Danish (`lang="da"`).

## Commands

Package manager is **bun** (`bun.lock`, and CI uses bun). Needs **Node >= 22.12** (see `.nvmrc`).

```bash
bun install
bun run dev      # dev server
bun run build    # production build — run this to verify changes
bun run preview
```

No tests, no linter. `bun run build` is the check.

## Conventions

- Import via path aliases (`tsconfig.json`): `@components/*`, `@layouts/*`, `@pages/*`, `@assets/*`, `@styles/*`. Not relative paths.
- Theme lives in the `@theme` block of [global.css](src/styles/global.css): colors `pale-orange` / `grey-blue` / `cyan-green`, `font-family-mono`, `max-width-content|reading`, animations `fade-in-up` / `wave`. Use these, don't hardcode hex or add new colors casually.
- Tailwind utilities first; custom CSS only for animations, pseudo-elements, `@font-face`.
- Icons come from `astro-icon` — new icons must be added to the `include` list in [astro.config.mjs](astro.config.mjs) or they won't build.
- Static output only: no SSR, no adapters. Interactivity via small inline `<script>` tags.
