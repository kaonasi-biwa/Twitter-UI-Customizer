import { defineConfig, presetWind3 } from "unocss";

export default defineConfig({
    content: {
        filesystem: [
            "src/{content,shared}/**/*.{ts,tsx,vue}",
        ],
    },
    presets: [
        presetWind3(),
    ],
});
