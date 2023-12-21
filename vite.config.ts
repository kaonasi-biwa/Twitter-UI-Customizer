import { resolve } from "path";
import { UserConfig, defineConfig, PluginOption } from "vite";

import path from "path";
import fs from "fs";

// Vite Plugins
import { viteVueCESubStyle } from "@unplugin-vue-ce/sub-style";
import svgLoader from "vite-svg-loader";
import vitePluginWebExt from "./npm-scripts/vite-plugin/vite-plugin-web-ext";
import vue from "@vitejs/plugin-vue";
//

import { changeManifest } from "./npm-scripts/change-manifest";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

const r = (str: string): string => {
    return resolve(__dirname, str);
};

export default defineConfig(({ command, mode }) => {
    let json: UserConfig = {};
    json = {
        root,
        // base: "/",
        build: {
            outDir,
            emptyOutDir: false,
            sourcemap: true,
            // outDir,
            target: "es2022",
            assetsInlineLimit: 0,

            rollupOptions: {
                input: {
                    "ent-options_html": resolve(__dirname, "src/options/options.html"),
                    "ent-popup_html": resolve(__dirname, "src/popup/popup.html"),
                    index: resolve(__dirname, "src/content/index.ts"),
                    background: resolve(__dirname, "./src/background.ts"),
                    //safemode: resolve(__dirname, "src/shared/options/injectSafeMode.ts"),
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
        plugins: [
            {
                name: "copyResources",
                enforce: "post",
                options(options) {
                    // this.addWatch;
                    // console.log("watch");
                    // console.log(options.watch);
                    // if (options.watch) {
                    //     options.watch.include = r("_locales/**");
                    // }
                    // console.log(options.watch);
                },
                buildStart(options) {
                    if (mode === "firefox") {
                        changeManifest("firefox");
                    } else if (mode === "chromium") {
                        //* in changeManifest, chrome instead of chromium
                        changeManifest("chrome");
                    }
                    fs.copyFileSync(r("src/inject.js"), r("dist/inject.js"));
                    fs.copyFileSync(r("src/safemode.html"), r("dist/safemode.html"));
                    fs.cpSync(r("src/content/styles"), "./dist/styles", { recursive: true });
                    fs.cpSync(r("_locales"), r("dist/_locales"), { recursive: true });
                    fs.cpSync(r("icon"), r("dist/icon"), { recursive: true });

                    console.log("\x1b[32m✓\x1b[0m Copied injection scripts.");
                },
                closeBundle() {
                    console.log(new Date().toLocaleString());
                },
            },
            vitePluginWebExt(__dirname, path.resolve(__dirname, "dist"), path.resolve(__dirname, "dist"), mode),
            // Vue Plugins
            vue(),
            svgLoader(),
            viteVueCESubStyle({}) as PluginOption,
        ],
        resolve: {
            alias: [
                { find: "@content", replacement: r("src/content") },
                { find: "@shared", replacement: r("src/shared") },
            ],
        },
    };
    return json;
});
