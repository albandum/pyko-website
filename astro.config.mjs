// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pyko.com', // Update this to your actual domain
  // For GitHub Pages: https://username.github.io/pyko-website/
  // base: '/pyko-website',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'auto'
  }
});