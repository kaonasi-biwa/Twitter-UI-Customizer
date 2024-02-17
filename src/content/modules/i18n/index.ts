//@ts-expect-error Vite have import.meta.glob
const langRes = import.meta.glob(["@i18nData/*.json", "@i18nData/ti18n/*.json"], { query: "?raw", import: "default", eager: true });
const i18nData = { en: {}, ja: {} };

export const TUICI18N = {
    fetch: async () => {
        const langList = JSON.parse(langRes["../i18n/_langList.json"]);
        for (const elem of langList) {
            i18nData[elem] = Object.assign(
                JSON.parse(langRes[`../i18n/${elem}.json`]), //
                JSON.parse(langRes[`../i18n/ti18n/${elem}.json`]),
            );
        }
        return true;
    },
    get: (key: string) => {
        const lang = document.querySelector("html").getAttribute("lang");
        for (const _lang of [lang, "en", "ja"]) {
            if (_lang in i18nData && key in i18nData[_lang]) {
                return i18nData[_lang][key];
            }
        }

        return "404";
    },
};
