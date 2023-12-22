export default {
    // 共通設定
    common: {
        name: "__MSG_extensionName__",
        description: "__MSG_extensionDescription__",
        version: "3.9.1",
        default_locale: "ja",
        content_scripts: [
            {
                matches: ["*://*.twitter.com/*"],
                js: ["inject.js"],
                css: ["./styles/style-tuicSettingPage.css", "./styles/style-polyfillForTwitter.css", "./styles/style-tuicColor.css", "./styles/style-tuicFeatures.css", "./styles/style-tlui.css"],
                run_at: "document_start",
            },
        ],
        options_ui: {
            page: "options/options.html",
            browser_style: true,
        },
    },
    // Firefox設定
    firefox: {
        manifest_version: 2,
        icons: {
            16: "icon/newIcon_TUIC_C_Blue.svg",
            48: "icon/newIcon_TUIC_C_Blue.svg",
            128: "icon/newIcon_TUIC_C_Blue.svg",
        },
        web_accessible_resources: ["*"],
        permissions: ["notifications", "storage", "https://api.github.com/*", "https://abs.twimg.com/*", "alarms"],
        browser_action: {
            default_icon: {
                16: "icon/newIcon_TUIC_C_Blue.svg",
                48: "icon/newIcon_TUIC_C_Blue.svg",
                128: "icon/newIcon_TUIC_C_Blue.svg",
            },
            default_title: "Twitter UI Customizer",
            default_popup: "popup/popup.html",
        },
        background: {
            scripts: ["background.js"],
            type: "module",
        },
        browser_specific_settings: {
            gecko: {
                id: "{e9c237f9-8c89-4f60-aa0d-e17e305398dc}",
            },
        },
        developer: {
            name: "kaonasi_biwa",
            url: "https://github.com/kaonasi-biwa/Twitter-UI-Customizer",
        },
    },
    // Chromium設定
    chromium: {
        manifest_version: 3,
        icons: {
            16: "icon/newIcon_TUIC_C_Blue.png",
            48: "icon/newIcon_TUIC_C_Blue.png",
            128: "icon/newIcon_TUIC_C_Blue.png",
        },
        web_accessible_resources: [
            {
                resources: ["*"],
                matches: ["*://*.twitter.com/*"],
            },
        ],
        permissions: ["notifications", "storage", "alarms"],
        action: {
            default_icon: {
                16: "icon/newIcon_TUIC_C_Blue.png",
                48: "icon/newIcon_TUIC_C_Blue.png",
                128: "icon/newIcon_TUIC_C_Blue.png",
            },
            default_title: "Twitter UI Customizer",
            default_popup: "popup/popup.html",
        },
        background: {
            service_worker: "background.js",
            type: "module",
        },
        host_permissions: ["https://api.github.com/*", "https://abs.twimg.com/*"],
    },
    // chromiumCRX設定
    chromiumCRX: {
        update_url: "https://github.com/${github.repository}/releases/latest/download/crxupdate.xml",
    },
};
