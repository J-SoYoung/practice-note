import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import withReactRouter from "vite-plugin-next-react-router";
import svgrPlugin from "vite-plugin-svgr";
// import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    withReactRouter({
      pageDir: "src/pages",
      extensions: ["js", "jsx", "ts", "tsx"],
      layout: "_layout",
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    // alias: {
    //   "@": path.resolve(__dirname, "./src"),
    // },
  },
});
