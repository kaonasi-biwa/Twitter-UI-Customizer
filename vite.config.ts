import { resolve } from "path";
import { UserConfig, defineConfig } from "vite";
import myPlugin from "./scripts/vite-plugin";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig(({ command, mode, ssrBuild }) => {
    let json: UserConfig = {};
    switch (mode) {
        case "html":
            json = {
                root,
                base: "/",
                build: {
                    outDir,
                    rollupOptions: {
                        input: {
                            "ent-options_html": resolve(__dirname, "src/options/options.html"),
                            "ent-popup_html": resolve(__dirname, "src/popup/popup.html"),
                            //index: resolve(__dirname, "src/content/index.js"),
                            background: resolve(__dirname, "src/background.js"),
                        },
                        output: {
                            dynamicImportInCjs: true,
                            //inlineDynamicImports: true,
                            format: "es",
                            entryFileNames: "[name].js",
                        },
                        plugins: [],
                    },

                    // lib: {
                    //     entry: [resolve(__dirname, "src/content/index.js")],
                    //     name: "bundle",
                    //     fileName: "index",
                    //     formats: ["iife"],
                    // },
                },
                resolve: {
                    alias: {
                        "@content": "/",
                    },
                },
                plugins: [myPlugin()],
            };
            break;
        case "content":
            json = {
                root,
                //base: "/",
                build: {
                    outDir,
                    lib: {
                        entry: [resolve(__dirname, "src/content/index.js")],
                        name: "bundle",
                        fileName: (format, entryName) => {
                            return "index.js";
                        },
                        formats: ["iife"],
                    },
                },
                plugins: [myPlugin()],
            };
            break;
        // case "content":
        //     json = {
        //         root,
        //         build: {
        //             lib: {
        //                 entry: [resolve(__dirname, "src/content/index.js")],
        //                 name: "bundle",
        //                 fileName: "index",
        //                 formats: ["iife"],
        //             },
        //             outDir,
        //             minify: true,
        //         },
        //     };
        //     break;
        // case "background":
        //     json = {
        //         root,
        //         build: {
        //             lib: {
        //                 entry: [resolve(__dirname, "src/background.js")],
        //                 name: "bundle",
        //                 fileName: "background",
        //                 formats: ["iife"],
        //             },
        //             outDir,
        //             minify: true,
        //         },
        //     };
        //     break;
    }

    console.log(json);
    return json;
});
