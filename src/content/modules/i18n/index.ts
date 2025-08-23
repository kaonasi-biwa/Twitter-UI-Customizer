const langRes = import.meta.glob(["@i18nData/_langList.ts", "@i18nData/*.json", "@i18nData/ti18n/*.json"]);
const i18nData = { en: {}, ja: {} };

export const TUICI18N = {
    fetch: async () => {
        const langList = (await langRes["../i18n/_langList.ts"]()) as { default: string[] };
        for (const elem of langList.default) {
            i18nData[elem] = Object.assign(
                (await langRes[`../i18n/${elem}.json`]() as { default: object }).default,
                (await langRes[`../i18n/ti18n/${elem}.json`]() as { default: object }).default,
            );
            if (elem.includes("ja")) {
                console.log(i18nData[elem]);
            }
        }
        return true;
    },
    get: (key: string, selectLang?: string) => {
        const lang = selectLang ?? document.querySelector("html").getAttribute("lang");
        for (const _lang of [lang, "en", "ja"]) {
            if (_lang in i18nData && key in i18nData[_lang]) {
                return i18nData[_lang][key];
            }
        }

        return `TUIC 404: ${key}`;
    },
};
