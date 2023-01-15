import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://jaludev.com',
  integrations: [
    mdx(), 
    tailwind(), 
    sitemap(), 
    robotsTxt(), 
    preact(),
  ],
  markdown: {
    syntaxHighlight: 'prism'
  }
});