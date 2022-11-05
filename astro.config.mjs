import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
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
    // storyblock({
    //   accessToken: process.env.STORYBLOCK_TOKEN,
    //   apiOptions: {
    //     region: 'eu'
    //   },
    //   components: {
    //     post: 'layouts/PostStoryblok'
    //   }
    // })
  ],
  markdown: {
    syntaxHighlight: 'prism'
  },
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});