import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
    content: {
        filesystem: [
            "src/{content,shared}/**/*.{ts,tsx,vue}",
        ],
    },
    rules: [
        ["font-tw", { "font-family": '"Segoe UI",Meiryo,system-ui,-apple-system,BlinkMacSystemFont,sans-serif' }],
        ["font-tw2", { "font-family": '"TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif' }],
        ["transition-bgcolor-shadow", { "transition-property": "background-color, box-shadow" }],
    ],
    theme: {
        colors: {
            tw: {
                light: {
                    text: "rgba(15,20,25,1.00)",
                    text2: "rgba(83,100,113,1.00)",
                    border: "rgba(239,243,244,1.00)",
                },
                darkblue: {
                    text: "rgba(247,249,249,1.00)",
                    text2: "rgba(139,152,165,1.00)",
                    border: "rgba(56,68,77,1.00)",
                },
                dark: {
                    text: "rgba(231,233,234,1.00)",
                    text2: "rgba(113,118,123,1.00)",
                    border: "rgba(47,51,54,1.00)",
                },
                accsent: {
                    blue: "rgba(29,155,240,1.00)",
                },
                red: "rgba(244,33,46,1.00)",
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
