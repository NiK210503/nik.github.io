import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nikstudiovn.github.io',
  integrations: [tailwind()]
});
