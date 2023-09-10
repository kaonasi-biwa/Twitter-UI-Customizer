import browser from "webextension-polyfill";

let updateID = "";
let loadedI18n = false;
let i18nObject = {};

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
    if (!browser.notifications.onClicked.hasListener(updateNotification) && githubVersion.replace(/\r?\n/g, "") != extensionVersion.replace(/\r?\n/g, "")) {
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
    if (message.type == "clientInfo") {
        deviceMessage(message.endpoint, sendResponse);
    } else if (message.type == "update") {
        if (message.updateType == "iconClick") browser.notifications.onClicked.removeListener(updateNotification);
        update1(message.updateType);
    } else if (message.type == "getI18n") {
        returnI18n(sendResponse);
    }
    return true;
});

const update1 = async (updateType) => {
    updateID = updateType;
    let settingT = await browser.storage.sync.get("TUIC");

    const updateUrl = chrome.runtime.getManifest().update_url;
    const isWebstore = typeof updateUrl === "string" ? updateUrl.includes("google.com") : undefined;
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

const deviceMessage = async (url, res) => {
    fetch(url, {
        method: "GET",
    })
        .then((response) => {
            if (response && response.ok) {
                response.json().then((json) => {
                    res(json);
                });
            } else {
                res({});
            }
        })
        .catch((error) => {
            res({});
        });
};

const returnI18n = async (res) => {
    const waitFunc = () => {
        if (loadedI18n) {
            res(i18nObject);
        } else {
            browser.alarms.create({ when: Date.now() + 250 });
        }
    };
    browser.alarms.onAlarm.addListener(waitFunc);
    waitFunc();
};

const getI18n = async () => {
    i18nObject = {};
    const langList = await fetch(browser.runtime.getURL("./i18n/_langList.json"), { cache: "no-store" }).then((res) => res.json());
    for (const elem of langList) {
        i18nObject[elem] = Object.assign(
            await fetch(browser.runtime.getURL(`./i18n/${elem}.json`), {
                cache: "no-store",
            }).then((res) => res.json()),
            await fetch(browser.runtime.getURL(`./i18n/ti18n/${elem}.json`), {
                cache: "no-store",
            }).then((res) => res.json()),
        );
    }
    loadedI18n = true;
};

browser.notifications.onClicked.removeListener(updateNotification);
update1("runBrowser");
getI18n();
