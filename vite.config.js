import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
    root,
    build: {
        outDir,
        rollupOptions: {
            input: {
                //"ent-content": resolve(__dirname, "src/content/index.js"),
                "ent-options_html": resolve(__dirname, "src/options/options.html"),
                //"ent-options_js": resolve(__dirname, "src/options/options.js"),
                "ent-popup_html": resolve(__dirname, "src/popup/popup.html"),
                // "ent-popup_js": resolve(__dirname, "src/popup/popup.js"),
            },
            // output: {
            //     inlineDynamicImports: true,
            // },
            // output: {
            //     inlineDynamicImports: false,
            //     // format: ["es"],
            // },
        },
    },
});
