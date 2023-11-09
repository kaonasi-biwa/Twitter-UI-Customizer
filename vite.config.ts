import { resolve } from "path";
import { UserConfig, defineConfig } from "vite";
import vitePluginWebExt from "./npm-scripts/vite-plugin/vite-plugin-web-ext";
import path from "path";
import tailwindcss from "tailwindcss";
import svgLoader from "vite-svg-loader";
import Components from "unplugin-vue-components/vite";

import vue from "@vitejs/plugin-vue";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig(({ command, mode, ssrBuild }) => {
    let json: UserConfig = {};
    json = {
        root,
        // base: "/",
        build: {
            outDir,
            emptyOutDir: false,
            sourcemap: true,
            // outDir,

            rollupOptions: {
                // watch: {
                //     // chokidar: {
                //     //     cwd: __dirname,
                //     // },
                //     exclude: ["dist/*"],
                //     // include: ["vite.config.ts", "package.json", "_locales", "i18n", "icon", "npm-scripts", "manifestChange.mjs", "manifestConfigs.json", "src"].map((value) => {
                //     //     return resolve(__dirname, value);
                //     // }),
                // },
                input: {
                    "ent-options_html": resolve(__dirname, "src/options/options.html"),
                    "ent-popup_html": resolve(__dirname, "src/popup/popup.html"),
                    index: resolve(__dirname, "src/content/index.js"),
                    background: resolve(__dirname, "./src/background.ts"),
                    inject: resolve(__dirname, "src/inject.js"),
                    contentOption: resolve(__dirname, "src/shared/options/index.vue"),
                },
                output: {
                    dynamicImportInCjs: true,
                    format: "es",
                    entryFileNames: "[name].js",
                },
                plugins: [],
            },
            minify: false,
        },
        // resolve: {
        //     alias: {
        //         "@content": "/",
        //     },
        // },
        plugins: [vitePluginWebExt(__dirname, path.resolve(__dirname, "dist"), path.resolve(__dirname, "dist"), mode), vue(), svgLoader(), Components({})],
        // };
        // break;
        // case "content":
        //     json = {
        //         root,
        //         build: {
        //             sourcemap: true,
        //             outDir,
        //             lib: {
        //                 entry: [resolve(__dirname, "src/content/index.js")],
        //                 name: "bundle",
        //                 fileName: (format, entryName) => {
        //                     return "index.js";
        //                 },
        //                 formats: ["iife"],
        //             },
        //             minify: false,
        //         },
        //         //plugins: [myPlugin()],
        //     };
        //     break;
    };

    // console.log(json);
    return json;
});
