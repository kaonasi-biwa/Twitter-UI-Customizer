import fetch from "node-fetch";
import fs from "fs";
console.log("Hello World!");
console.log(JSON.stringify(["aaa", "bbb"]));

(async () => {
    const locales = JSON.parse(fs.readFileSync("./i18n/_langList.json", "utf8"));
    const i18nObject = {};
    for (const elem of locales) {
        console.log("aaaaa");
        i18nObject[elem] = await (await fetch("https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/3f0ec1fb005f218a7eb60b580fd620541b1a9ad5/docs/json/i18n/" + elem + ".json")).json();
    }
    //https://github.com/fa0311/TwitterInternalAPIDocument/blob/3f0ec1fb005f218a7eb60b580fd620541b1a9ad5/docs/json/i18n/ja.json
    console.log("aiueo");
    console.log(fs.readFileSync("../Twitter-UI-Customizer/i18n/_officalTwitterI18n.json", "utf8"));
    const TUICI18ns = JSON.parse(fs.readFileSync("../Twitter-UI-Customizer/i18n/_officalTwitterI18n.json", "utf8"));

    const TUICWriteI18n = {};
    for (const elem of locales) {
        let tmpObj = {};
        for (const elem2 in TUICI18ns) {
            if (TUICI18ns[elem2] == "g132f681") {
                tmpObj = { [elem2]: i18nObject[elem][TUICI18ns[elem2]].replace("@{screenName}", ""), ...tmpObj };
            } else {
                tmpObj = { [elem2]: i18nObject[elem][TUICI18ns[elem2]], ...tmpObj };
            }
        }
        fs.writeFileSync("./i18n/ti18n/" + elem + ".json", JSON.stringify(tmpObj));
    }
})();
