import { UserConfig, defineConfig, PluginOption } from "vite";

import url from "url";
import path from "path";
import * as fs from "fs/promises";

// Vite Plugins
import { viteVueCESubStyle } from "@unplugin-vue-ce/sub-style";
import svgLoader from "vite-svg-loader";
import vitePluginWebExt from "./npm-scripts/vite-plugin/vite-plugin-web-ext";
import vue from "@vitejs/plugin-vue";
//

import { changeManifest } from "./npm-scripts/change-manifest";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const r = (str: string): string => {
    return path.resolve(__dirname, str);
};

const root = r("src");
const outDir = r("dist");

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
                    "ent-options_html": r("src/options/options.html"),
                    "ent-popup_html": r("src/popup/popup.html"),
                    index: r("src/content/index.ts"),
                    background: r("src/background.ts"),
                    //safemode: r("src/shared/options/injectSafeMode.ts"),
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
                async buildStart(options) {
                    await Promise.all([
                        changeManifest(mode),
                        fs.copyFile(r("src/inject.js"), r("dist/inject.js")),
                        fs.copyFile(r("src/safemode.html"), r("dist/safemode.html")),
                        fs.cp(r("src/content/styles"), r("dist/styles"), { recursive: true }),
                        fs.cp(r("_locales"), r("dist/_locales"), { recursive: true }),
                        fs.cp(r("icon"), r("dist/icon"), { recursive: true }),
                    ]);
                    console.log("\x1b[32m✓\x1b[0m Copied injection scripts.");
                },
            },
            {
                name: "buildDate",
                enforce: "post",
                closeBundle() {
                    console.log(new Date().toLocaleString());
                },
            },
            vitePluginWebExt(__dirname, r("dist"), r("dist"), mode === "chromiumCRX" ? "chromium" : mode),
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
