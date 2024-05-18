import "bootstrap-icons/font/bootstrap-icons.css";

const isFirefox = "browser" in window;

let setting = {};

const i18nApply = async () => {
    for (const elem of Array.from(document.querySelectorAll(".i18n-t"))) {
        if (elem instanceof HTMLElement) {
            elem.title = chrome.i18n.getMessage(elem.getAttribute("i18n-t-id") ?? "");
        }
    }
    for (const elem of Array.from(document.querySelectorAll(".i18n"))) {
        elem.textContent = chrome.i18n.getMessage(elem.getAttribute("i18n-id") ?? "");
    }
};

window.onload = async () => {
    i18nApply();
    chrome.runtime.sendMessage({ type: "update", updateType: "iconClick" });
    document.getElementById("link1").onclick = () => {
        chrome.tabs.create({ url: "https://twitter.com/settings/display" });
    };
    document.getElementById("link2").onclick = () => {
        chrome.tabs.create({ url: "https://twitter.com/kaonasi_biwa_ar" });
    };
    // document.getElementById("link3").onclick = () => {
    //     chrome.runtime.openOptionsPage();
    // };
    document.getElementById("link4").onclick = () => {
        //chrome.tabs.create({ url: chrome.runtime.getURL("safemode.html") });
        chrome.tabs.create({ url: "https://twitter.com/tuic/safemode" });
    };

    const $link5 = document.getElementById("link5");
    if (isFirefox && $link5 instanceof HTMLAnchorElement) {
        fetch("https://api.github.com/repos/kaonasi-biwa/Twitter-UI-Customizer/releases/latest", { cache: "no-store" })
            .then((res) => res.json())
            .then((json) => json.tag_name)
            .then((version) => {
                if (!version) {
                    return;
                }
                $link5.href = `https://github.com/kaonasi-biwa/Twitter-UI-Customizer/releases/download/${version}/Twitter_UI_Customizer_Firefox.xpi`;
                $link5.hidden = false;
            });
    } // Firefoxの場合のみ有効

    document.getElementById("link6").onclick = () => {
        chrome.tabs.create({ url: "https://github.com/kaonasi-biwa/Twitter-UI-Customizer/blob/main/LICENSE" });
    };

    document.getElementById("link7").onclick = () => {
        chrome.tabs.create({ url: "https://twitter.com/?mx=1" });
    };
    // Firefoxの場合のみ有効

    chrome.storage.sync.get("TUIC", async (settingT) => {
        const updateUrl = chrome.runtime.getManifest().update_url;
        const isWebstore = !(typeof updateUrl === "string" ? updateUrl.includes("google.com") : undefined);
        setting = settingT.TUIC ?? {
            iconClick: isWebstore,
            runBrowser: isWebstore,
            openTwitter: isWebstore,
        };
        const settingList = ["iconClick", "openTwitter", "runBrowser"];
        for (const i of settingList) {
            const elem = document.getElementById(i);
            if (elem instanceof HTMLInputElement) {
                if (setting[i]) {
                    elem.checked = true;
                }
                elem.addEventListener("change", (ev) => {
                    const elem = ev.target as HTMLInputElement;
                    setting[elem.id] = elem.checked;
                    chrome.storage.sync.set({ TUIC: setting });
                });
            }
        }
    });
};
