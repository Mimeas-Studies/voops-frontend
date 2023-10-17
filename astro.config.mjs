import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

const port = parseInt(process.env.PORT);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  server: {
    host: true,
    port: isNaN(port)?8080:port
  },
});