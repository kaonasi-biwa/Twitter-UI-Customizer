import fetch from "node-fetch";
import fs from "fs";

(async () => {
    let locales = [];
    let config = {};
    if (process.argv.length == 2) {
        locales = JSON.parse(fs.readFileSync("./i18n/_langList.json", "utf8"));
    } else {
        for (var i = 2; i < process.argv.length; i++) {
            locales.push(process.argv[i]);
        }
    }
    config = JSON.parse(fs.readFileSync("./i18n/_officialTwitterI18nConfig.json", "utf8"));
    const i18nObjectNew = {};
    const i18nObject = {};
    const i18nObjectOld = {};
    for (const elem of locales) {
        console.log(`Fetching i18n (${elem})...`);
        i18nObjectNew[elem] = await (await fetch("https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/master/docs/json/i18n/" + elem + ".json")).json();
        i18nObject[elem] = await (await fetch("https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/for/kaonasi-biwa/Twitter-UI-Customizer/docs/json/i18n/" + elem + ".json")).json();
        i18nObjectOld[elem] = await (await fetch("https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/d4aa08362ae1ef6ff39e198909c4259292770f41/docs/json/i18n/" + elem + ".json")).json();
    }
    //https://github.com/fa0311/TwitterInternalAPIDocument/blob/master/docs/json/i18n/ja.json
    //https://github.com/fa0311/TwitterInternalAPIDocument/blob/3f0ec1fb005f218a7eb60b580fd620541b1a9ad5/docs/json/i18n/ja.json
    //https://github.com/fa0311/TwitterInternalAPIDocument/blob/d4aa08362ae1ef6ff39e198909c4259292770f41/docs/json/i18n/ja.json
    const TUICI18ns = JSON.parse(fs.readFileSync("./i18n/_officialTwitterI18n.json", "utf8"));
    for (const elem of locales) {
        console.log(`Generating i18n (${elem})...`);
        let tmpObj = {};
        for (const elem2 in TUICI18ns) {
            if (i18nObject[elem][TUICI18ns[elem2]] != undefined || i18nObjectOld[elem][TUICI18ns[elem2]] != undefined || i18nObjectNew[elem][TUICI18ns[elem2]] != undefined) {
                let translatedText = "";
                const translateID = TUICI18ns[elem2];
                if (config.oldTranslate.includes(translateID)) {
                    translatedText = i18nObjectOld[elem][translateID];
                } else if (config.latestTranslate.includes(translateID)) {
                    translatedText = i18nObjectNew[elem][translateID];
                } else {
                    translatedText = i18nObject[elem][translateID];
                }

                if (config.fixPlural.includes(translateID) && translatedText.includes("(") && translatedText.includes(")") && translatedText.includes(",")) {
                    const textBase = translatedText.slice(0, translatedText.indexOf("("));
                    translatedText = textBase + translatedText.slice(translatedText.indexOf("(")).split(",")[2].replace(")", "");
                }

                if (config.fixSingular.includes(translateID) && translatedText.includes("(")) {
                    translatedText = translatedText.slice(0, translatedText.indexOf("("));
                }

                if (translateID in config.deleteString) {
                    for (const delString of config.deleteString[translateID]) {
                        translatedText = translatedText.replace(delString, "");
                    }
                }
                tmpObj = { [elem2]: translatedText, ...tmpObj };
            }
        }
        fs.writeFileSync("./i18n/ti18n/" + elem + ".json", JSON.stringify(tmpObj, undefined, 4));
    }
})();
