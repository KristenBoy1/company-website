// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://votting-group.com',
  base: '/',
  // @astrojs/sitemap auto-generates sitemap-index.xml + sitemap-0.xml at
  // build time using the `site` URL above. Robots.txt at public/robots.txt
  // points at the resulting index. The Netlify mirror redirects to .com so
  // search engines never see a duplicate.
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
