import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    plugins: [vue(), vuetify({ autoImport: true }), htmlPlugin(loadEnv(mode, "."))],
    base:
      process.env.NODE_ENV === "production" ? "/vite-vue-ts-scaffold/" : "./",
    build: {
      outDir: "dist",
      emptyOutDir: true, 
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          "404": resolve(__dirname, '404.html')
        },
      },
    },
    esbuild: {
      drop: process.env.NODE_ENV === "production" ? ['console', 'debugger'] : [],
    },
  };
});

function htmlPlugin(env: ReturnType<typeof loadEnv>) {
  return {
    name: "html-transform",
    transformIndexHtml: {
      enforce: "pre" as const,
      transform: (html: string): string =>
        html.replace(/<%=(.*?)%>/g, (match, p1) => env[p1] ?? match),
    },
  };
}
