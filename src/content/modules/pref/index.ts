import { TUICColorSettings } from "./colorSettings";
import { TUICSettings } from "./settings";

let config = null;

const getPointerFromKey = (object: object, key: string) => {
    const keys = ["o", ...key.split(".").filter((k) => k !== "")];
    let pointer = { o: object };
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (i === keys.length - 1) {
            return {
                object: pointer,
                key: k,
            };
        } else {
            if (!(k in pointer)) {
                pointer[k] = {};
            }
            pointer = pointer[k];
        }
    }
};

/**
 * TUICのPrefの値を取得します。
 *
 * @param {string} identifier 取得するPrefへのパス(ピリオド区切り)。
 * @param {object} source 使用するPrefのObject。
 * @return {unknown} 取得した値(identifierが空文字ならTUICのPref全体)
 */
export function getPref(identifier: string, source = config) {
    const { object, key } = getPointerFromKey(source, identifier);
    return object[key];
}

/**
 * TUICのPrefの値を設定します。
 *
 * identifierが空文字ならTUICのPref全体が変更されます。
 * @param {string} identifier 取得するPrefへのパス(ピリオド区切り)。
 * @param {string} value 設定する値
 * @param {object} source 使用するPrefのObject。
 */
export function setPref(identifier: string, value: unknown, source = config) {
    if (identifier == "") {
        config = value;
    } else {
        const { object, key } = getPointerFromKey(source, identifier);
        object[key] = value;
    }
}

/**
 * TUICのPrefの値を削除します。
 *
 * @param {string} identifier 取得するPrefへのパス(ピリオド区切り)。
 * @param {object} source 使用するPrefのObject。
 */
export function deletePref(identifier: string, source = config) {
    const { object, key } = getPointerFromKey(source, identifier);
    delete object[key];
}

/**
 * 変更が加えられたTUICのPrefをlocalStorageへ保存します。
 */
export function savePref() {
    localStorage.setItem("TUIC", JSON.stringify(config));
}

/**
 * TUICのPrefのすべての値を文字列として出力します。
 *
 * @return {string} TUICのPrefをJSON.stringify()で文字列にしたもの
 */
export function exportPref(): string {
    return JSON.stringify(config);
}

/**
 * `target` に `source` をマージします。 `target` オブジェクトは上書きされます。
 * @param {object} source マージ元
 * @param {object} target マージ先
 */
export function mergePref(source: object, target: object) {
    for (const i in source) {
        if (!(i in target)) {
            target[i] = source[i];
        } else if (typeof source[i] == "object" && !Array.isArray(source[i])) {
            mergePref(source[i], target[i]);
        }
    }
    return target;
}

/**
 * boolean 値の設定キーを変更します。
 *
 * 値が truthy であれば `replaceValue` に、値が falsy であればキーを変更せず古いキーの削除だけを行います。
 * @param {string} previousKey 変更元のキー
 * @param {string} nextKey 変更先のキー
 * @param {any} replaceValue 置き換える値
 */
const changeBooleanKey = (previousKey: string, nextKey: string, source, replaceValue: string | boolean = true) => {
    if (getPref(previousKey, source) === true) setPref(nextKey, replaceValue, source);
    deletePref(previousKey, source);
};

export async function updatePref(source = config) {
    const prefVersion_ = getPref("prefVersion", source) ?? 0;
    setPref("prefVersion", prefVersion);
    switch (prefVersion_) {
        case 0: {
            /*
            if (localStorage.getItem("unsent-tweet-background")) {
                parallelToSerialPref();
            }*/

            if (typeof getPref("timeline", source) != "object") setPref("timeline", {}, source);

            if (typeof getPref("rightSidebar", source) != "object") setPref("rightSidebar", {}, source);

            if (typeof getPref("XToTwitter", source) != "object") setPref("XToTwitter", {}, source);

            if (typeof getPref("twitterIcon", source) == "string") {
                const twitterIconPref = getPref("twitterIcon", source);
                setPref("twitterIcon", {}, source);
                setPref("twitterIcon.icon", twitterIconPref, source);
            }

            if (typeof getPref("clientInfo", source) == "object") deletePref("clientInfo", source);

            const boolKeys = {
                "invisibleItems.osusume-user-timeline": "timeline.osusume-user-timeline",
                "invisibleItems.hideOhterRTTL": "timeline.hideOhterRTTL",
                "invisibleItems.verified-rSidebar": "rightSidebar.verified",
                "otherBoolSetting.XtoTwitter": "XToTwitter.XToTwitter",
                "otherBoolSetting.PostToTweet": "XToTwitter.PostToTweet",
                "invisibleItems.twitter-pro-promotion-btn": "tweetDisplaySetting.twitter-pro-promotion-btn",
                "invisibleItems.subscribe-tweets": "tweetDisplaySetting.subscribe-tweets",
                "otherBoolSetting.bottomScroll": "tweetDisplaySetting.bottomScroll",
                "otherBoolSetting.bottomSpace": "tweetDisplaySetting.bottomSpace",
                "otherBoolSetting.RTNotQuote": "tweetDisplaySetting.RTNotQuote",
                "otherBoolSetting.noModalbottomTweetButtons": "tweetDisplaySetting.noModalbottomTweetButtons",
                "otherBoolSetting.noNumberBottomTweetButtons": "tweetDisplaySetting.noNumberBottomTweetButtons",
                "invisibleItems.subscribe-profile": "profileSetting.invisible.subscribe-profile",
                "invisibleItems.profileHighlights": "profileSetting.invisible.profileHighlights",
                "invisibleItems.profileAffiliates": "profileSetting.invisible.profileAffiliates",
                "invisibleItems.verifiedFollowerTab": "profileSetting.invisible.verifiedFollowerTab",
                "otherBoolSetting.smallerSidebarContent": "sidebarSetting.buttonConfig.smallerSidebarContent",
                "otherBoolSetting.sidebarNoneScrollbar": "sidebarSetting.buttonConfig.sidebarNoneScrollbar",
                "otherBoolSetting.faviconSet": "twitterIcon.options.faviconSet",
                "otherBoolSetting.roundIcon": "twitterIcon.options.roundIcon",
            };
            for (const oldKey in boolKeys) {
                changeBooleanKey(oldKey, boolKeys[oldKey], source);
            }

            changeBooleanKey("invisibleItems.discoverMore", "timeline-discoverMore", source, "discoverMore_invisible");
            changeBooleanKey("otherBoolSetting.invisibleTwitterLogo", "twitterIcon", source, "invisible");
            changeBooleanKey("sidebarSetting.buttonConfig.birdGoBackHome", "sidebarSetting.homeIcon", source, "birdGoBack");

            if (getPref("CSS", source)) localStorage.setItem("TUIC_CSS", getPref("CSS"));
            deletePref("CSS", source);

            if (localStorage.getItem("TUIC_IconImg") != null && localStorage.getItem("TUIC_IconImg_Favicon") == null) {
                await new Promise((resolve, reject) => {
                    const element = document.createElement("canvas");
                    element.height = 200;
                    element.width = 200;
                    const context = element.getContext("2d");
                    context.beginPath();
                    context.arc(100, 100, 100, (0 * Math.PI) / 180, (360 * Math.PI) / 180);
                    context.clip();
                    const image = new Image();
                    image.onload = function () {
                        context.beginPath();
                        context.drawImage(image, 0, 0, image.naturalHeight, image.naturalWidth, 0, 0, 200, 200);
                        localStorage.setItem("TUIC_IconImg_Favicon", element.toDataURL());
                        resolve(null);
                    };
                    image.src = localStorage.getItem("TUIC_IconImg");
                });
            }

            if (typeof getPref("visibleButtons", source) == "object" && ~getPref("visibleButtons", source).indexOf("downvote-button")) {
                setPref(
                    "visibleButtons",
                    getPref("visibleButtons", source).filter((elem: string) => elem != "downvote-button"),
                    source,
                );
            }
            if (typeof getPref("sidebarButtons", source) == "object" && (~getPref("sidebarButtons", source).indexOf("verified-orgs-signup") || ~getPref("sidebarButtons", source).indexOf("twiter-blue") || ~getPref("sidebarButtons", source).indexOf("circles"))) {
                setPref(
                    "sidebarButtons",
                    getPref("sidebarButtons", source).filter((elem: string) => elem != "sidebarButtons-circles" && elem != "twiter-blue" && elem != "verified-orgs-signup" && elem != "circles"),
                    source,
                );
            }
            // fall through
        }
        case 1: {
            const boolKeys = {
                "tweetDisplaySetting.twitter-pro-promotion-btn": "tweetDisplaySetting.invisible.twitter-pro-promotion-btn",
                "tweetDisplaySetting.subscribe-tweets": "tweetDisplaySetting.invisible.subscribe-tweets",
                "tweetDisplaySetting.bottomSpace": "tweetDisplaySetting.invisible.bottomSpace",
                "tweetDisplaySetting.bottomScroll": "tweetDisplaySetting.option.bottomScroll",
                "tweetDisplaySetting.RTNotQuote": "tweetDisplaySetting.buttonsInvisible.RTNotQuote",
                "tweetDisplaySetting.noModalbottomTweetButtons": "tweetDisplaySetting.buttonsInvisible.noModalbottomTweetButtons",
                "tweetDisplaySetting.noNumberBottomTweetButtons": "tweetDisplaySetting.buttonsInvisible.noNumberBottomTweetButtons",
                "tweetDisplaySetting.likeToFavo": "tweetDisplaySetting.option.likeToFavo",
                "otherBoolSetting.placeEngagementsLink": "engagementsLink.option.placeEngagementsLink",
                "otherBoolSetting.placeEngagementsLinkShort": "engagementsLink.option.placeEngagementsLinkShort",
                "otherBoolSetting.showLinkCardInfo": "showLinkCardInfo.showLinkCardInfo",
            };
            for (const oldKey in boolKeys) {
                changeBooleanKey(oldKey, boolKeys[oldKey], source);
            }
            // falls through
        }
        case 2: {
            const boolKeys = {
                "tweetDisplaySetting.option.RTNotQuote": "tweetDisplaySetting.buttonsInvisible.RTNotQuote",
                "tweetDisplaySetting.option.noModalbottomTweetButtons": "tweetDisplaySetting.buttonsInvisible.noModalbottomTweetButtons",
                "tweetDisplaySetting.option.noNumberBottomTweetButtons": "tweetDisplaySetting.buttonsInvisible.noNumberBottomTweetButtons",
            };
            for (const oldKey in boolKeys) {
                changeBooleanKey(oldKey, boolKeys[oldKey], source);
            }
        }
    }
}

let defaultData = null;

export function mergeDefaultPref(source) {
    if (defaultData == null) {
        defaultData = {};
        for (const elem in TUICColorSettings) {
            const prefData = TUICColorSettings[elem];
            const returnObject = { colorType: prefData.default ?? 0 };
            switch (prefData.type) {
                case "color": {
                    for (const elem of prefData.values) {
                        returnObject[elem.type] = {};
                    }
                    break;
                }
                case "colorTemplate": {
                    for (const elem of ["background", "border", "color"]) {
                        returnObject[elem] = {};
                    }
                    break;
                }
            }
            setPref(`changeButtonsColor.${elem}`, structuredClone(returnObject), defaultData);
        }
        for (const elem in TUICSettings) {
            const defaultReturn = getDefaultPref(elem);
            switch (defaultReturn.type) {
                case "boolean": {
                    for (const data in defaultReturn.data) {
                        setPref(`${elem}.${data}`, defaultReturn.data[data], defaultData);
                    }
                    break;
                }
                case "select": {
                    setPref(elem, defaultReturn.data, defaultData);
                    break;
                }
                case "order": {
                    setPref(elem, structuredClone(defaultReturn.data), defaultData);
                    break;
                }
            }
        }
    }
    return mergePref(structuredClone(defaultData), structuredClone(source));
}

export function getDefaultPref(id: string) {
    const prefData = TUICSettings[id];
    switch (prefData.type) {
        case "boolean": {
            const returnObject = {};
            for (const elem of prefData.values) {
                returnObject[elem.id] = elem.default ?? false;
            }
            return { data: returnObject, type: prefData.type };
        }
        case "order": {
            return { data: structuredClone(prefData.default), type: prefData.type };
        }
        case "select": {
            return { data: prefData.default, type: prefData.type };
        }
    }
}

const prefVersion = 3;
export type TUICSettingIDs = keyof typeof TUICSettings;
export type TUICColorIDs = keyof typeof TUICColorSettings;

/**
 * 指定した設定カテゴリーIDに基づいて値の一覧(CheckboxならCheckboxの全てのID、RadioBox/ListBoxなら値になりうるすべての値)を出力します
 *
 * @param {string} id 設定カテゴリーID
 * @return {string[]} 取得した値一覧
 */
export function getSettingIDs<T extends TUICSettingIDs>(id: T): (typeof TUICSettings)[T]["values"][number]["id"][] {
    return TUICSettings[id].values.map((elem) => elem.id);
}

/**
 * 指定した設定カテゴリーIDのデータ(全ての値についてのidとi18nをObjectとして羅列するArray)を出力します。
 *
 * @param {string} id 設定カテゴリーID
 * @return {{id:string,i18n:string}[]} 取得したデータ
 */
export function getSettingData<T extends TUICSettingIDs>(id: T): (typeof TUICSettings)[T]["values"] {
    return TUICSettings[id].values;
}

/**
 * 指定した設定のi18nのIDを出力します。
 *
 * @param {string} id 設定カテゴリーID
 * @param {string} id 設定自体のID(設定カテゴリーIDを除く)
 * @return {string} i18nのID
 */
export function getSettingI18n<T extends TUICSettingIDs>(id: T, itemValue: (typeof TUICSettings)[T]["values"][number]["id"]): string {
    return TUICSettings[id].values.filter((elem) => elem.id == itemValue)[0]?.i18n ?? undefined;
}

/**
 * 色のIDの一覧を出力します。
 *
 * @return {string[]} 色のID一覧
 */
export function getColorIDs(): TUICColorIDs[] {
    return Object.keys(TUICColorSettings) as TUICColorIDs[];
}

/**
 * 色のIDの一覧を出力します。
 *
 * @return {string[]} 色のID一覧
 */
export function getColorTypes(id: TUICColorIDs) {
    if (TUICColorSettings[id]["type"] === "colorTemplate") {
        return ["background", "border", "color"];
    } else {
        return TUICColorSettings[id].values.map((elem) => elem.type);
    }
}

/**
 * 指定した設定のi18nのIDを出力します。
 *
 * @param {string} id 設定カテゴリーID
 * @param {string} id 設定自体のID(設定カテゴリーIDを除く)
 * @return {string} i18nのID
 */
export function getColorI18n<T extends TUICColorIDs>(id: T): string {
    return TUICColorSettings[id].i18n ?? undefined;
}

config = JSON.parse(localStorage.getItem("TUIC") ?? JSON.stringify(mergeDefaultPref({})));
