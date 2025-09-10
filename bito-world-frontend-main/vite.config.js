import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Re-enabled for proper Tailwind v4 support
  assetsInclude: [
    "**/*.JPG",
    "**/*.jpg",
    "**/*.PNG",
    "**/*.png",
    "**/*.JPEG",
    "**/*.jpeg",
  ],
});
