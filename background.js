let updateID = "";
let loadedI18n = false;
let i18nObject = {};

const updateNotification = () => {
    chrome.tabs.create({
        url: "https://github.com/kaonasi-biwa/Twitter-UI-Customizer/releases",
    });
    chrome.notifications.onClicked.removeListener(updateNotification);
};

const updateCheck = async () => {
    const githubVersion = await fetch("https://api.github.com/repos/kaonasi-biwa/Twitter-UI-Customizer/releases/latest", { cache: "no-store" })
        .then((res) => res.json())
        .then((json) => json.tag_name);
    const extensionVersion = await chrome.runtime.getManifest().version;
    if (!chrome.notifications.onClicked.hasListener(updateNotification) && githubVersion.replace(/\r?\n/g, "") != extensionVersion.replace(/\r?\n/g, "")) {
        chrome.notifications.create(`aaa${Math.floor(Math.random() * 9007199254740992) + 1}`, {
            type: "basic",
            title: chrome.i18n.getMessage("extensionName"),
            message: chrome.i18n.getMessage("notificationMessage", [extensionVersion.replace(/\r?\n/g, ""), githubVersion.replace(/\r?\n/g, "")]),
            iconUrl: "icon/icon128.png",
        });
        chrome.notifications.onClicked.addListener(updateNotification);
        chrome.notifications.onClosed.addListener(() => chrome.notifications.onClicked.removeListener(updateNotification));
    }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type == "clientInfo") {
        deviceMessage(message.endpoint, sendResponse);
    } else if (message.type == "update") {
        if (message.updateType == "iconClick") chrome.notifications.onClicked.removeListener(updateNotification);
        update1(message.updateType);
    } else if (message.type == "getI18n") {
        returnI18n(sendResponse);
    }
    return true;
});

const update1 = async (updateType) => {
    updateID = updateType;
    chrome.storage.sync.get("TUIC", async (settingT) => {
        const isWebstore = !(await chrome.runtime.getManifest()).update_url?.includes("google.com");
        const setting = settingT.TUIC ?? {
            iconClick: isWebstore,
            runBrowser: isWebstore,
            openTwitter: isWebstore,
        };
        if (setting[updateID]) {
            updateCheck();
        }
    });
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
            res(JSON.stringify(i18nObject));
        } else {
            chrome.alarms.create({ when: Date.now() + 250 });
        }
    };
    chrome.alarms.onAlarm.addListener(waitFunc);
    waitFunc();
};

const getI18n = async () => {
    i18nObject = {};
    const langList = await fetch(chrome.runtime.getURL("./i18n/_langList.json"), { cache: "no-store" }).then((res) => res.json());
    for (const elem of langList) {
        i18nObject[elem] = Object.assign(
            await fetch(chrome.runtime.getURL(`./i18n/${elem}.json`), {
                cache: "no-store",
            }).then((res) => res.json()),
            await fetch(chrome.runtime.getURL(`./i18n/ti18n/${elem}.json`), {
                cache: "no-store",
            }).then((res) => res.json()),
        );
    }
    loadedI18n = true;
};

chrome.notifications.onClicked.removeListener(updateNotification);
update1("runBrowser");
getI18n();
