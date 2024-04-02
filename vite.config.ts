import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown";
import dynamicImport from "vite-plugin-dynamic-import";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({ include: [/\.tsx$/, /\.md$/] }),
    dynamicImport(),
    mdPlugin({ mode: [Mode.MARKDOWN] }),
    svgr(),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/react-typescript-style-guild/",
});
