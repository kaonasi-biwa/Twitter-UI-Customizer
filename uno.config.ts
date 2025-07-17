import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
    content: {
        filesystem: [
            "src/{content,shared}/**/*.{ts,tsx,vue}",
        ],
    },
    presets: [
        presetWind4({
            preflights: {
                reset: false,
            },
        }),
    ],
});
