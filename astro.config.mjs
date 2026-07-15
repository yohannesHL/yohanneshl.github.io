import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yohanneshl.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['astro/toolbar'],
    },
  },
});
