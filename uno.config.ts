import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
    content: {
        filesystem: [
            "src/{content,shared}/**/*.{ts,tsx,vue}",
        ],
    },
    theme: {
        colors: {
            tw: {
                light: {
                    text: "rgba(15,20,25,1.00)",
                    text2: "rgba(83,100,113,1.00)",
                },
                darkblue: {
                    text: "rgba(247,249,249,1.00)",
                },
                dark: {
                    text: "rgba(231,233,234,1.00)",
                },
            },
        },
    },
    presets: [
        presetWind4({
            preflights: {
                reset: false,
            },
        }),
    ],
});
