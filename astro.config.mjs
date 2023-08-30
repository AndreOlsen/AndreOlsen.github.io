import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://andreolsen.github.io',
  experimental: {
      viewTransitions: true,
      assets: true,
  },
});
