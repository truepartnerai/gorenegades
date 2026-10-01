import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gorenegades.com',
  output: 'static',
  redirects: {
    '/ideas': '/blog'
  }
});
