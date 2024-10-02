import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "source/index.ts"),
      name: "potree-core",
      fileName: "index.js",
      formats: ["es"], // Output as ESM module
    },
    rollupOptions: {
      external: ["three"], // Mark 'three' as external
      output: {
        dir: path.resolve(__dirname, "dist"),
        entryFileNames: "index.js",
        format: "es",
        generatedCode: "es2015",
      },
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
	plugins: [],
});
