import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig(({ command, mode, ssrBuild }) => {
    let json = {};
    switch (mode) {
        case "html":
            json = {
                root,
                build: {
                    outDir,
                    rollupOptions: {
                        input: {
                            "ent-options_html": resolve(__dirname, "src/options/options.html"),
                            "ent-popup_html": resolve(__dirname, "src/popup/popup.html"),
                        },
                    },
                },
            };
            break;
        case "content":
            json = {
                root,
                build: {
                    lib: {
                        entry: [resolve(__dirname, "src/content/index.js")],
                        name: "bundle",
                        fileName: "index",
                        formats: ["iife"],
                    },
                    outDir,
                    minify: true,
                },
            };
            break;
        case "background":
            json = {
                root,
                build: {
                    lib: {
                        entry: [resolve(__dirname, "src/background.js")],
                        name: "bundle",
                        fileName: "background",
                        formats: ["iife"],
                    },
                    outDir,
                    minify: true,
                },
            };
            break;
    }

    console.log(json);
    return json;
});
