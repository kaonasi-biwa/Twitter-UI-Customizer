import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
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
});
