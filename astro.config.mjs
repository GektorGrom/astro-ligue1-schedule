import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind()],
  compressHTML: true,
  vite: {
    define: {
      'process.env.AWS_ACCESS_KEY_ID': JSON.stringify(process.env.AWS_ACCESS_KEY_ID),
      'process.env.AWS_SECRET_ACCESS_KEY': JSON.stringify(process.env.AWS_SECRET_ACCESS_KEY),
      'process.env.AWS_REGION': JSON.stringify(process.env.AWS_REGION),
    }
  }
});
