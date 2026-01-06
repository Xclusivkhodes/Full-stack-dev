import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      // Create a shortcut for the Google API
      "/google-api": {
        target: "https://generativelanguage.googleapis.com",
        changeOrigin: true,
        // Remove the "/google-api" prefix before sending the request to Google
        rewrite: (path) => path.replace(/^\/google-api/, ""),
      },
    },
  },
});
