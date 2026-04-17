import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/ecommerce/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "build",
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@lib": path.resolve("./src/lib"),
      "@components": path.resolve("./src/components"),
      "@pages": path.resolve("./src/pages"),
      "@data": path.resolve("./src/data"),
      "@assets": path.resolve("./src/assets"),
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },

  preview: {
    port: 8080,
    open: true,
  },
});
