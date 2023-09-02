import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import markdoc from "@astrojs/markdoc";
import data from "./src/config.json";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), markdoc({ allowHTML: true })],
  scopedStyleStrategy: "class",
  experimental: {
    assets: true
  },
  site: data.site
});
