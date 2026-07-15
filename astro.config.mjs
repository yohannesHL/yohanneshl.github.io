import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yohanneshl.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    optimizeDeps: {
      include: ['astro/toolbar']
    }
  }
});
