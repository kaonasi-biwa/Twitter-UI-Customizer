import browser from "webextension-polyfill";
/* eslint-disable no-unsafe-optional-chaining */

//@ts-expect-error Vite have import.meta.glob
const langRes = import.meta.glob(["../../i18n/*.json", "../../i18n/ti18n/*.json"], { as: "raw", eager: true });
const i18nData = { en: {}, ja: {} };

export const TUICI18N = {
    fetch: async () => {
        const langList = JSON.parse(langRes["../../i18n/_langList.json"]);
        for (const elem of langList) {
            //console.log(elem);
            //console.log(langRes[`../../i18n/${elem}.json`]);
            i18nData[elem] = Object.assign(
                JSON.parse(langRes[`../../i18n/${elem}.json`]), //
                JSON.parse(langRes[`../../i18n/ti18n/${elem}.json`]),
            );
        }
        return true;
    },
    get: (key) => {
        const lang = document.querySelector("html").getAttribute("lang");

        if (lang in i18nData && key in i18nData[lang]) {
            return i18nData[lang][key];
        } else if (key in i18nData.en) {
            return i18nData.en[key];
        } else if (key in i18nData.ja) {
            return i18nData.ja[key];
        } else {
            return "404";
        }
    },
};
