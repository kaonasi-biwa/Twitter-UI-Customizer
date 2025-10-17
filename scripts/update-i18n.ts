import fs from "node:fs/promises";

import { langList, type Locale } from "../i18n/_langList";
import { TUICI18ns } from "../i18n/_officialTwitterI18n";
import { config, type TranslateKey } from "../i18n/_officialTwitterI18nConfig";
import { generatePWAManifest } from "./pwa-manifest/generate-manifest";

(async () => {
    // CLI引数または_langList.tsファイルからロケールを取得
    if (process.argv[2] === "getURL") {
        switch (process.argv[3]) {
            case "latest":
                console.log("https://github.com/fa0311/TwitterInternalAPIDocument/blob/master/docs/json/i18n/ja.json");
                break;
            case "old":
                console.log("https://github.com/fa0311/TwitterInternalAPIDocument/blob/1f9db55ad6a0243f0d20cf1cb46d3a13fd8d6c39/docs/json/i18n/ja.json");
                break;
            default:
                console.log("https://github.com/fa0311/TwitterInternalAPIDocument/blob/legacy-twitter/docs/json/i18n/ja.json");
                break;
        }
    } else {
        // type Locale = string;
        // const locales: Locale[] = process.argv.length === 2 ? JSON.parse(await fs.readFile("./i18n/_langList.json", "utf8")) : process.argv.slice(2);
        const locales: Locale[] = process.argv.length === 2 ? langList : process.argv.slice(2);

        // type TranslateKey = string;
        // // 設定をロード
        // const config: {
        //     oldTranslate: TranslateKey[];
        //     latestTranslate: TranslateKey[];
        //     fixPlural: TranslateKey[];
        //     fixSingular: TranslateKey[];
        //     deleteString: Record<TranslateKey, string[]>;
        // } = JSON.parse(await fs.readFile("./i18n/_officialTwitterI18nConfig.json", "utf8"));

        // i18nデータを格納するオブジェクト
        const i18nObjectNew: Partial<Record<Locale, Record<string, string>>> = {};
        const i18nObject: Partial<Record<Locale, Record<string, string>>> = {};
        const i18nObjectOld: Partial<Record<Locale, Record<string, string>>> = {};

        // 非同期リクエストを使用してi18nデータを取得
        console.log("Fetching i18n...");
        await Promise.all(
            locales
                .map((lang) => [
                    (async () => (i18nObjectNew[lang] = await (await fetch(`https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/master/docs/json/i18n/${lang}.json`)).json()))(),
                    (async () => (i18nObject[lang] = await (await fetch(`https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/legacy-twitter/docs/json/i18n/${lang}.json`)).json()))(),
                    (async () => (i18nObjectOld[lang] = await (await fetch(`https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/1f9db55ad6a0243f0d20cf1cb46d3a13fd8d6c39/docs/json/i18n/${lang}.json`)).json()))(),
                ])
                .flat(),
        );

        // // 翻訳IDをロード
        // const TUICI18ns: Record<string, TranslateKey> = JSON.parse(await fs.readFile("./i18n/_officialTwitterI18n.json", "utf8"));

        //https://github.com/fa0311/TwitterInternalAPIDocument/blob/master/docs/json/i18n/ja.json
        //https://github.com/fa0311/TwitterInternalAPIDocument/blob/legacy-twitter/docs/json/i18n/ja.json
        //https://github.com/fa0311/TwitterInternalAPIDocument/blob/1f9db55ad6a0243f0d20cf1cb46d3a13fd8d6c39/docs/json/i18n/ja.json

        // 並列でi18nファイルを生成
        console.log("Generating i18n...");
        await Promise.all(
            locales.map(async (locale) => {
                const returnObj: Record<string, string> = {};
                for (const [tuicKey, translateID] of Object.entries<TranslateKey>(TUICI18ns)) {
                    if (i18nObject[locale][translateID] || i18nObjectOld[locale][translateID] || i18nObjectNew[locale][translateID]) {
                        let translatedText = "";
                        if (config.oldTranslate.includes(translateID)) {
                            translatedText = i18nObjectOld[locale][translateID];
                        } else if (config.latestTranslate.includes(translateID)) {
                            translatedText = i18nObjectNew[locale][translateID];
                        } else {
                            translatedText = i18nObject[locale][translateID];
                        }

                        if (translateID in config.deleteString) {
                            for (const delString of config.deleteString[translateID]) {
                                if (typeof delString === "string") {
                                    translatedText = translatedText.replaceAll(delString, "");
                                } /* else if (typeof delString === "object" && delString.text) {
                                    const index = delString.replaceIndex;
                                    let doingIndex = 1;
                                    const regExp = new RegExp(delString.text.source, "g" + delString.text.flags.replace("g", ""));
                                    const delStringCount = translatedText.match(regExp).length;
                                    translatedText = translatedText.replace(regExp, (match) => {
                                        if (index > 0 && doingIndex === index) {
                                            return match;
                                        } else if (index < 0 && doingIndex === delStringCount - index + 1) {
                                            return match;
                                        } else if (index === 0) {
                                            return "";
                                        }
                                        doingIndex += 1;
                                    });
                                }*/
                            }
                        }

                        if (config.fixPlural.includes(translateID) && translatedText.includes("(") && translatedText.includes(")") && translatedText.includes(",")) {
                            const openParenIndex = translatedText.indexOf("(");
                            const closeParenIndex = translatedText.lastIndexOf(")");
                            const textBase = translatedText.slice(0, openParenIndex);
                            const textPlural = translatedText.slice(openParenIndex + 1, closeParenIndex).split(",")[2];
                            const textEnd = translatedText.slice(closeParenIndex + 1);
                            translatedText = textBase + textPlural + textEnd;
                        }

                        if (config.fixSingular.includes(translateID) && translatedText.includes("(")) {
                            translatedText = translatedText.slice(0, translatedText.indexOf("("));
                        }

                        returnObj[tuicKey] = translatedText;
                    } else {
                        console.warn(`${process.env.CI === "true" ? "::warning::" : "Warning: "}Translation not found for key "${tuicKey}" (ID: ${translateID}) in locale "${locale}"`);
                    }
                }
                await fs.writeFile(`./i18n/ti18n/${locale}.json`, JSON.stringify(returnObj, undefined, 4));
                await generatePWAManifest(locale, returnObj);
            }),
        );
    }
})();
