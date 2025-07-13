let updateID = "";

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
    const extensionVersion = chrome.runtime.getManifest().version;
    if (!chrome.notifications.onClicked.hasListener(updateNotification) && githubVersion && extensionVersion && githubVersion.replace(/\r?\n/g, "") != extensionVersion.replace(/\r?\n/g, "")) {
        chrome.notifications.create(`Twitter-UI-Customizer-${Math.floor(Math.random() * 900719925474099) + 1}`, {
            type: "basic",
            title: chrome.i18n.getMessage("extensionName"),
            message: chrome.i18n.getMessage("notificationMessage", [extensionVersion.replace(/\r?\n/g, ""), githubVersion.replace(/\r?\n/g, "")]),
            iconUrl: "icon/newIcon_TUIC_C_Blue.png",
        });
        chrome.notifications.onClicked.addListener(updateNotification);
        chrome.notifications.onClosed.addListener(() => chrome.notifications.onClicked.removeListener(updateNotification));
    }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type == "update") {
        if (message.updateType == "iconClick") chrome.notifications.onClicked.removeListener(updateNotification);
        update1(message.updateType);
    }
    return true;
});

const update1 = async (updateType) => {
    updateID = updateType;

    chrome.storage.sync.get("TUIC", async (settingT) => {
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
    });
};

chrome.notifications.onClicked.removeListener(updateNotification);
update1("runBrowser");
