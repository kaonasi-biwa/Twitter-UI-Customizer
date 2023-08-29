let setting = {};

function i18nApply() {
    for (const elem of document.querySelectorAll(".i18n")) {
        elem.textContent = chrome.i18n.getMessage(elem.getAttribute("i18n-id") ?? "");
    }
}

const checkbox = (event) => {
    const elem = event.target;
    setting[elem.id] = elem.checked;
    chrome.storage.sync.set({ TUIC: setting });
};

// export default () => {
window.onload = () => {
    chrome.storage.sync.get("TUIC", async (settingT) => {
        const isWebstore = !(await chrome.runtime.getManifest()).update_url?.includes("google.com");
        setting = settingT.TUIC ?? {
            iconClick: isWebstore,
            runBrowser: isWebstore,
            openTwitter: isWebstore,
        };
        const settingList = ["iconClick", "openTwitter", "runBrowser"];
        for (const i of settingList) {
            if (setting[i]) {
                document.getElementById(i).checked = true;
            }
            document.getElementById(i).addEventListener("change", checkbox);
        }
    });
    i18nApply();
};
// };
