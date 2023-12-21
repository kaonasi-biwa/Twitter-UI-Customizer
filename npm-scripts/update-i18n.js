import fetch from "node-fetch";
import fs from "fs/promises";

(async () => {
    // CLI引数または_langList.jsonファイルからロケールを取得
    if (process.argv[2] == "getURL") {
        switch (process.argv[3]) {
            case "latest":
                console.log("https://github.com/fa0311/TwitterInternalAPIDocument/blob/master/docs/json/i18n/ja.json");
                break;
            case "old":
                console.log("https://github.com/fa0311/TwitterInternalAPIDocument/blob/d4aa08362ae1ef6ff39e198909c4259292770f41/docs/json/i18n/ja.json");
                break;
            default:
                console.log("https://github.com/fa0311/TwitterInternalAPIDocument/blob/for/kaonasi-biwa/Twitter-UI-Customizer/docs/json/i18n/ja.json");
                break;
        }
    } else {
        const locales = process.argv.length == 2 ? JSON.parse(await fs.readFile("./i18n/_langList.json", "utf8")) : process.argv.slice(2);

        // 設定をロード
        const config = JSON.parse(await fs.readFile("./i18n/_officialTwitterI18nConfig.json", "utf8"));

        // i18nデータを格納するオブジェクト
        const i18nObjectNew = {};
        const i18nObject = {};
        const i18nObjectOld = {};

        // 非同期リクエストを使用してi18nデータを取得
        console.log("Fetching i18n...");
        await Promise.all(
            locales
                .map((lang) => [
                    (async () => (i18nObjectNew[lang] = await (await fetch(`https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/master/docs/json/i18n/${lang}.json`)).json()))(),
                    (async () => (i18nObject[lang] = await (await fetch(`https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/for/kaonasi-biwa/Twitter-UI-Customizer/docs/json/i18n/${lang}.json`)).json()))(),
                    (async () => (i18nObjectOld[lang] = await (await fetch(`https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/d4aa08362ae1ef6ff39e198909c4259292770f41/docs/json/i18n/${lang}.json`)).json()))(),
                ])
                .flat(),
        );

        // 翻訳IDをロード
        const TUICI18ns = JSON.parse(await fs.readFile("./i18n/_officialTwitterI18n.json", "utf8"));

        //https://github.com/fa0311/TwitterInternalAPIDocument/blob/master/docs/json/i18n/ja.json
        //https://github.com/fa0311/TwitterInternalAPIDocument/blob/for/kaonasi-biwa/Twitter-UI-Customizer/docs/json/i18n/ja.json
        //https://github.com/fa0311/TwitterInternalAPIDocument/blob/d4aa08362ae1ef6ff39e198909c4259292770f41/docs/json/i18n/ja.json

        // 並列でi18nファイルを生成
        console.log("Generating i18n...");
        await Promise.all(
            locales.map(async (elem) => {
                let tmpObj = {};
                for (const [elem2, translateID] of Object.entries(TUICI18ns)) {
                    if (i18nObject[elem][translateID] || i18nObjectOld[elem][translateID] || i18nObjectNew[elem][translateID]) {
                        let translatedText = "";
                        if (config.oldTranslate.includes(translateID)) {
                            translatedText = i18nObjectOld[elem][translateID];
                        } else if (config.latestTranslate.includes(translateID)) {
                            translatedText = i18nObjectNew[elem][translateID];
                        } else {
                            translatedText = i18nObject[elem][translateID];
                        }

                        if (translateID in config.deleteString) {
                            for (const delString of config.deleteString[translateID]) {
                                if (typeof delString == "string") {
                                    translatedText = translatedText.replaceAll(delString, "");
                                } /* else if (typeof delString == "object" && delString.text) {
                                    console.log("test");
                                    const index = delString.replaceIndex;
                                    let doingIndex = 1;
                                    const delSTringCount = translatedText.match(new RegExp(delString.text, "g"));
                                    translatedText = translatedText.replace(delString, (match) => {
                                        if (index > 0 && doingIndex == index) {
                                            return match;
                                        } else if (index < 0 && doingIndex == delSTringCount - index + 1) {
                                            return match;
                                        } else if (index == 0) {
                                            return "";
                                        }
                                        doingIndex += 1;
                                    });
                                }*/
                            }
                        }

                        if (config.fixPlural.includes(translateID) && translatedText.includes("(") && translatedText.includes(")") && translatedText.includes(",")) {
                            const textBase = translatedText.slice(0, translatedText.indexOf("("));
                            translatedText = textBase + translatedText.slice(translatedText.indexOf("(")).split(",")[2].replace(")", "");
                        }

                        if (config.fixSingular.includes(translateID) && translatedText.includes("(")) {
                            translatedText = translatedText.slice(0, translatedText.indexOf("("));
                        }
                        tmpObj = { [elem2]: translatedText, ...tmpObj };
                    }
                }
                await fs.writeFile(`./i18n/ti18n/${elem}.json`, JSON.stringify(tmpObj, undefined, 4));
            }),
        );
    }
})();
