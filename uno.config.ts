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
    rules: [
        ["twcss-text-explicit", {
            "background-color": "rgba(0,0,0,0.00)",
            border: "0 solid black",
            "box-sizing": "border-box",
            color: "rgba(0,0,0,1.00)",
            display: "inline",
            font: '14px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
            "list-style": "none",
            margin: "0px",
            padding: "0px",
            position: "relative",
            "text-align": "start",
            "text-decoration": "none",
            "white-space": "pre-wrap",
            "word-wrap": "break-word",
        }, { layer: "base" }],
        ["twcss-flex", {
            "align-items": "stretch",
            "background-color": "rgba(0,0,0,0.00)",
            border: "0 solid black",
            "box-sizing": "border-box",
            display: "flex",
            "flex-basis": "auto",
            "flex-direction": "column",
            "flex-shrink": 0,
            "list-style": "none",
            margin: "0px",
            "min-height": "0px",
            "min-width": "0px",
            padding: "0px",
            position: "relative",
            "text-decoration": "none",
            "z-index": 0,
        }, { layer: "base" }],
        ["font-tw", { "font-family": '"Segoe UI",Meiryo,system-ui,-apple-system,BlinkMacSystemFont,sans-serif' }],
    ],
});
