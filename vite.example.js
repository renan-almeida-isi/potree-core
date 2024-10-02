import { defineConfig } from "vite";
import html from "vite-plugin-htmlx";

export default defineConfig({
  publicDir: 'example',
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
