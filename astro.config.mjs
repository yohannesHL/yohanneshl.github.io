import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://yohanneshl.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['astro/toolbar'],
    },
  },
});
