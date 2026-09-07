import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/api/auth": {
        target: process.env.VITE_API_BASE_URL || "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },

      "/api/appointment": {
        target: process.env.VITE_API_BASE_URL || "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },

      "/api/contact": {
        target: process.env.VITE_API_BASE_URL || "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },

      "/api/membership": {
        target: process.env.VITE_API_BASE_URL || "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },

      "/api/forms": {
        target: process.env.VITE_API_BASE_URL || "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  assetsInclude: [
    "**/*.JPG",
    "**/*.jpg",
    "**/*.PNG",
    "**/*.png",
    "**/*.JPEG",
    "**/*.jpeg",
  ],
});