# Copilot Instructions - Andre Olsen Portfolio

## Project Overview
This is a personal portfolio website built with **Astro 5**, styled with **Tailwind CSS v4** and **SCSS**, and deployed on GitHub Pages. The site features a custom cursor implementation, smooth scrolling, and custom animations.

## Tech Stack

- **Framework**: Astro 5.16.11 (static site generator)
- **Styling**: Tailwind CSS 4.1.18 + SCSS
- **Vite**: Build tool (integrated with Astro)
- **TypeScript**: Strict mode (via `astro/tsconfigs/strict`)
- **Icons**: astro-icon v0.8.2
- **Image Optimization**: sharp v0.33.5
- **Sitemap**: @astrojs/sitemap v3.7.0
- **Package Manager**: pnpm (enforced via preinstall script)

## Project Structure

```
src/
├── components/      # Reusable Astro components
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Project.astro
│   ├── Skill.astro
│   └── Socials.astro
├── layouts/         # Layout components (shared page structure)
│   └── Layout.astro
├── pages/           # Page routes (each .astro file = URL route)
│   ├── index.astro
│   ├── v2.astro
│   └── 404.astro
├── styles/          # Global styles
│   └── global.css
└── assets/          # Static assets
    └── projects/
```

## Key Configuration Details

### TypeScript Paths
Path aliases are configured in `tsconfig.json` for cleaner imports:
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@pages/*` → `src/pages/*`
- `@assets/*` → `src/assets/*`
- `@styles/*` → `src/styles/*`

### Tailwind CSS v4 Integration
- Uses Tailwind CSS v4 with Vite integration (`@tailwindcss/vite`)
- Custom theme colors defined in `@theme` block in `global.css`:
  - `--color-pale-orange: #FFCB9A`
  - `--color-grey-blue: #17252A`
  - `--color-cyan-green: #D1E8E2`
- Custom utilities defined in `@layer components`
- Custom animations: `fadeInUp` and `wave`
- Utility classes use kebab-case: `bg-grey-blue`, `text-cyan-green`, `animate-fade-in-up`, etc.

### Site Configuration
- **Site URL**: https://andreolsen.github.io
- **Language**: Danish (`lang="da"`)
- **Sitemap**: Automatically generated and submitted

## Styling Approach

1. **Global Styles** (`src/styles/global.css`):
   - Imports Tailwind CSS
   - Defines custom theme variables
   - Defines custom component utilities like `.hover-underline`

2. **Component Styles** (`Layout.astro`):
   - Uses `<style is:global lang="scss">` for scoped SCSS
   - Includes custom cursor implementation with CSS variables
   - Cubic-bezier easing stored in CSS variables: `--bouncy-cubic`

3. **Tailwind Utilities**:
   - Custom colors must use the defined theme (pale-orange, grey-blue, cyan-green)
   - Classes like `scroll-smooth`, `bg-grey-blue`, `text-cyan-green` use custom theme

## Common Patterns

### Astro Component Frontmatter
```astro
---
import '@styles/global.css';
import SomeComponent from '@components/SomeComponent.astro';

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---
```

### Importing Components
- Use path aliases: `import Footer from '@components/Footer.astro'`
- All components are `.astro` files (no framework overhead)

### Styling Components
- Use Tailwind utility classes from custom theme
- For component-specific styles, use `<style>` blocks with SCSS (`lang="scss"`)

## Development Commands

```bash
pnpm dev      # Start development server (http://localhost:3000)
pnpm build    # Build for production
pnpm preview  # Preview production build locally
pnpm astro    # Run Astro CLI commands
```

## Best Practices for This Project

1. **Use Tailwind utilities first** - Only add custom SCSS for animations, pseudo-elements, or complex layouts
2. **Respect the color theme** - Use only the three custom colors (pale-orange, grey-blue, cyan-green)
3. **Leverage path aliases** - Always import from `@components`, `@layouts`, etc., never relative paths
4. **Keep components atomic** - Components should be single-responsibility (Header, Footer, Hero, Project, Skill, Socials)
5. **Optimize images** - Use `sharp` for image processing; consider using Astro's Image component
6. **Static-first approach** - Astro renders to static HTML; add interactivity sparingly with inline `<script>` tags
7. **Accessibility** - Ensure proper semantic HTML and ARIA labels, especially for the custom cursor

## Resources

- [Astro Framework Documentation](https://docs.astro.build/en/getting-started/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/installation)
- [Vite Documentation](https://vitejs.dev/guide/)

## Notes for Copilot

- This is a **static site** - optimize for build time and output size
- The custom cursor (`cursor-none` and JavaScript cursor element) is a key design feature
- Be mindful of GitHub Pages deployment constraints (no server-side rendering)
- When adding new components or pages, follow the existing naming conventions and structure
- Keep dependencies minimal - this project favors Astro's built-in features over additional packages
