import browser from "webextension-polyfill";

let updateID = "";

const updateNotification = () => {
    browser.tabs.create({
        url: "https://github.com/kaonasi-biwa/Twitter-UI-Customizer/releases",
    });
    browser.notifications.onClicked.removeListener(updateNotification);
};

const updateCheck = async () => {
    const githubVersion = await fetch("https://api.github.com/repos/kaonasi-biwa/Twitter-UI-Customizer/releases/latest", { cache: "no-store" })
        .then((res) => res.json())
        .then((json) => json.tag_name);
    const extensionVersion = browser.runtime.getManifest().version;
    if (!browser.notifications.onClicked.hasListener(updateNotification) && githubVersion && extensionVersion && githubVersion.replace(/\r?\n/g, "") != extensionVersion.replace(/\r?\n/g, "")) {
        browser.notifications.create(`aaa${Math.floor(Math.random() * 9007199254740992) + 1}`, {
            type: "basic",
            title: browser.i18n.getMessage("extensionName"),
            message: browser.i18n.getMessage("notificationMessage", [extensionVersion.replace(/\r?\n/g, ""), githubVersion.replace(/\r?\n/g, "")]),
            iconUrl: "icon/newIcon_TUIC_C_Blue.png",
        });
        browser.notifications.onClicked.addListener(updateNotification);
        browser.notifications.onClosed.addListener(() => browser.notifications.onClicked.removeListener(updateNotification));
    }
};

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type == "update") {
        if (message.updateType == "iconClick") browser.notifications.onClicked.removeListener(updateNotification);
        update1(message.updateType);
    }
    return true;
});

const update1 = async (updateType) => {
    updateID = updateType;
    const settingT = await browser.storage.sync.get("TUIC");

    const updateUrl = chrome.runtime.getManifest().update_url;
    const isWebstore = !(typeof updateUrl === "string" ? updateUrl.includes("google.com") : undefined);
    console.log(`isWebstore : ${isWebstore}`);
    const setting = settingT.TUIC ?? {
        iconClick: isWebstore,
        runBrowser: isWebstore,
        openTwitter: isWebstore,
    };
    if (setting[updateID]) {
        updateCheck();
    }
};

browser.notifications.onClicked.removeListener(updateNotification);
update1("runBrowser");
