import browser from "webextension-polyfill";
/* eslint-disable no-unsafe-optional-chaining */

//@ts-expect-error Vite have import.meta.glob
const langRes = import.meta.glob(["../../i18n/*.json", "../../i18n/ti18n/*.json"], { as: "raw", eager: true });
const i18nData = {};

export const TUICI18N = {
    fetch: async function () {
        // await new Promise((resolve) => {
        //     chrome.runtime.sendMessage({ type: "getI18n" }, (response) => {
        //         i18nData = response;
        //         resolve(i18nData);
        //     });
        // });
        return true;
    },
    get: function (key) {
        const lang = document.querySelector("html").getAttribute("lang");
        console.log(i18nData);
        if (Object.entries(i18nData).length === 0) {
            return "404";
        }
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
    fetchA: async () => {
        // i18nObject = {};
        // const langList = await fetch(browser.runtime.getURL("./i18n/_langList.json"), { cache: "no-store" }).then((res) => res.json());
        // for (const elem of langList) {
        //     i18nObject[elem] = Object.assign(
        //         await fetch(browser.runtime.getURL(`./i18n/${elem}.json`), {
        //             cache: "no-store",
        //         }).then((res) => res.json()),
        //         await fetch(browser.runtime.getURL(`./i18n/ti18n/${elem}.json`), {
        //             cache: "no-store",
        //         }).then((res) => res.json()),
        //     );
        // }
        // loadedI18n = true;

        console.log(langRes);
        const langList = JSON.parse(langRes["../../i18n/_langList.json"]);
        for (const elem of langList) {
            console.log(elem);
            console.log(langRes[`../../i18n/${elem}.json`]);
            i18nData[elem] = Object.assign(
                JSON.parse(langRes[`../../i18n/${elem}.json`]), //
                JSON.parse(langRes[`../../i18n/ti18n/${elem}.json`]),
            );
        }
    },
};
