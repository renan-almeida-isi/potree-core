import { defineConfig } from "vite";
import path from "path";
import copy from "rollup-plugin-copy"; // Use this plugin for copying assets
import html from "vite-plugin-htmlx";

export default defineConfig({
  publicDir: 'example',
  build: {
    lib: {
      entry: path.resolve(__dirname, "source/index.ts"),
      name: "potree-core",
      fileName: "index",
      formats: ["es"], // Output as ESM module
    },
    outDir: path.resolve("build"),
    rollupOptions: {
      input: path.resolve(__dirname, "source/index.ts"),
      external: ["three"], // Mark 'three' as external
      output: {
        dir: path.resolve(__dirname, "dist"),
        entryFileNames: "index.ts",
        format: "es",
        generatedCode: "es2015",
      },
    },
  },
  server: {
    port: 5000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    html({
      page: {
        entry: "example/main.ts",
      },
    }),
  ],
});
