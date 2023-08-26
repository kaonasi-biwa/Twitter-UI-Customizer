/* eslint-disable no-unsafe-optional-chaining */
let i18nData = {};

export const TUICI18N = {
    fetch: async function () {
        await new Promise((resolve) => {
            chrome.runtime.sendMessage({ type: "getI18n" }, (response) => {
                i18nData = response;
                resolve(i18nData);
            });
        });
        return true;
    },
    get: function (key) {
        const lang = document.querySelector("html").getAttribute("lang");
        if (lang in i18nData && key in i18nData[lang]) {
            return i18nData[lang][key].escapeToUseHTML();
        } else if (key in i18nData.en) {
            return i18nData.en[key].escapeToUseHTML();
        } else if (key in i18nData.ja) {
            return i18nData.ja[key].escapeToUseHTML();
        } else {
            return "404";
        }
    },
};
