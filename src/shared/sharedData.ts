export const ProcessedClass = "TUICProcessed";

export const ColorData = {
    defaultXColors: {
        buttonColorLight: {
            "not-following": { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
            willFollow: { background: "rgba(39,44,48,1)", border: "rgba(39,44,48,1)", color: "rgba(255,255,255,1)" },
            following: { background: "rgba(255,255,255,0)", border: "rgba(207,217,222,1)", color: "rgba(15,20,25,1)" },
            "un-following": { border: "rgba(253,201,206,1)", color: "rgba(244,33,46,1)", background: "rgba(244,33,46,0.1)" },
            profile: { border: "rgba(207,217,222,1)", background: "rgba(255,255,255,0)", color: "rgba(15,20,25,1)" },
            birthday: { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
            "profile-save": { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
            "unsent-tweet": { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
        },
        buttonColorDark: {
            "not-following": { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(10,20,25,1)" },
            willFollow: { background: "rgba(215,219,220,1)", border: "rgba(215,219,220,1)", color: "rgba(10,20,25,1)" },
            following: { background: "rgba(255,255,255,0)", border: "rgba(83,100,113,1)", color: "rgba(239,244,245,1)" },
            "un-following": { border: "rgba(103,7,15,1)", color: "rgba(244,33,46,1)", background: "rgba(244,33,46,0.1)" },
            profile: { border: "rgba(83,100,113,1)", background: "rgba(255,255,255,0)", color: "rgba(239,243,244,1)" },
            birthday: { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(15,20,25,1)" },
            "profile-save": { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(15,20,25,1)" },
            "unsent-tweet": { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(15,20,25,1)" },
        },
    },
    TUICFixedColor: {
        light: {
            textColor: "rgba(0, 0, 0, 1)",
            containerBackground: "rgb(247, 249, 249)",
            containerBackground2: "rgb(237, 239, 239)",
            colorHover: "#00000040",
            detailBorder: "rgba(0, 0, 0, 0.08)",
        },
        blue: {
            textColor: "rgba(255, 255, 255,1)",
            containerBackground: "rgb(30, 39, 50)",
            containerBackground2: "rgb(40, 49, 60)",
            colorHover: "#ffffff30",
            detailBorder: "rgba(255, 255, 255, 0.08)",
        },
        dark: {
            textColor: "rgba(255, 255, 255,1)",
            containerBackground: "rgb(22, 24, 28)",
            containerBackground2: "rgb(28, 34, 38)",
            colorHover: "#ffffff40",
            detailBorder: "rgba(255, 255, 255, 0.16)",
        },
    },
    defaultTUICColor: {
        colors: {
            "unsent-tweet": {
                background: {
                    normal: [29, 161, 242, 1],
                },
                border: {
                    normal: [29, 161, 242, 1],
                },
                color: {
                    normal: [255, 255, 255, 1],
                },
            },
            "not-following": {
                background: {
                    normal: [255, 255, 255, 0],
                },
                border: {
                    normal: [29, 161, 242, 1],
                },
                color: {
                    normal: [29, 161, 242, 1],
                },
            },
            willFollow: {
                background: {
                    normal: [29, 161, 242, 1],
                },
                border: {
                    normal: [29, 161, 242, 1],
                },
                color: {
                    normal: [255, 255, 255, 1],
                },
            },
            following: {
                background: {
                    normal: [29, 161, 242, 1],
                },
                border: {
                    normal: [29, 161, 242, 1],
                },
                color: {
                    normal: [255, 255, 255, 1],
                },
            },
            "un-following": {
                background: {
                    normal: [255, 0, 0, 1],
                },
                border: {
                    normal: [255, 0, 0, 1],
                },
                color: {
                    normal: [255, 255, 255, 1],
                },
            },
            profile: {
                background: {
                    normal: [255, 255, 255, 0],
                },
                border: {
                    normal: [29, 161, 242, 1],
                },
                color: {
                    normal: [29, 161, 242, 1],
                },
            },
            "profile-save": {
                background: {
                    normal: [29, 161, 242, 1],
                },
                border: {
                    normal: [29, 161, 242, 1],
                },
                color: {
                    normal: [255, 255, 255, 1],
                },
            },
            birthday: {
                background: {
                    normal: [255, 0, 0, 1],
                },
                border: {
                    normal: [255, 0, 0, 1],
                },
                color: {
                    normal: [255, 255, 255, 1],
                },
            },
            blocking: {
                background: {
                    normal: [244, 33, 46, 1],
                },
                border: {
                    normal: [244, 33, 46, 1],
                },
                color: {
                    normal: [255, 255, 255, 1],
                },
            },
            "blocking-unlock": {
                background: {
                    normal: [220, 30, 41, 1],
                },
                border: {
                    normal: [220, 30, 41, 1],
                },
                color: {
                    normal: [255, 255, 255, 1],
                },
            },
            twitterIcon: {
                sidebar: {
                    normal: [29, 161, 242, 1],
                    dark: [255, 255, 255, 1],
                    light: [29, 161, 242, 1],
                },
                favicon: {
                    normal: [29, 161, 242, 1],
                },
            },
        },
    },
};
