import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
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
});
