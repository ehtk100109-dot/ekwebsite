// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ehtk100109-dot.github.io",
  base: "/ekwebsite/",
  vite: {
    plugins: [tailwindcss()],
  },
});
