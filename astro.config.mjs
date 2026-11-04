// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live domain. Used for canonical URLs, the sitemap and social cards.
// TODO: replace with the real domain once it's registered.
const SITE_URL = 'https://plainweb.example';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
