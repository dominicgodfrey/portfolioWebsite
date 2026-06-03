// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Personalize once a deploy target is chosen.
  site: "https://dominicgodfrey.com",
});
