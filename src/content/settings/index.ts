import { DEFAULT_SETTINGS } from "./settings";
import type { Settings, SettingKeys, SettingFullKeys, SettingKeyType, SettingGroupKeys, SettingKeyDefault, SettingGroupChildIds } from "./settings";

// TODO: 暫定的対応
export type { SettingGroupKeys, SettingFullKeys, SettingGroupChildIds } from "./settings";

let settings: Settings = null;

const getPointerFromKey = (object: Record<string, unknown>, key: string) => {
    const keys = ["o", ...key.split(".").filter((k) => k !== "")];
    let pointer: Record<string, unknown> = { o: object };
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
            pointer = pointer[k] as Record<string, unknown>;
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
export function getPref<T extends SettingKeys>(identifier: T, source?: Settings): SettingKeyType<T>;
export function getPref<T>(identifier: string, source?: Settings): T;
export function getPref<T extends SettingKeys>(identifier: T, source: Settings = settings) {
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
export function setPref<T extends SettingFullKeys | "">(identifier: T, value: SettingKeyType<T>, source?: Settings): void;
export function setPref<T>(identifier: string, value: T, source?: Settings): void;
export function setPref(identifier: string, value: unknown, source: Settings = settings) {
    if (identifier == "") {
        settings = value as Settings;
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
export function deletePref<T extends SettingFullKeys>(identifier: T, source?: Settings): void;
export function deletePref(identifier: string, source?: Settings): void;
export function deletePref(identifier: string, source: Settings = settings) {
    const { object, key } = getPointerFromKey(source, identifier);
    delete object[key];
}

/**
 * 変更が加えられたTUICのPrefをlocalStorageへ保存します。
 */
export function savePref() {
    localStorage.setItem("TUIC", JSON.stringify(settings));
}

/**
 * TUICのPrefのすべての値を文字列として出力します。
 *
 * @return {string} TUICのPrefをJSON.stringify()で文字列にしたもの
 */
export function exportPref(): string {
    return JSON.stringify(settings);
}

/**
 * `target` に `source` をマージします。 `target` オブジェクトは上書きされます。
 * @param {object} source マージ元
 * @param {object} target マージ先
 */
export function mergePref<T extends Record<string, any>, U extends Record<string, any>>(source: T, target: U): T & U {
    for (const i in source) {
        if (!(i in target)) {
            (target as T | U)[i] = source[i];
        } else if (typeof source[i] === "object" && !Array.isArray(source[i])) {
            mergePref(source[i], target[i]);
        }
    }
    return target as T & U;
}

/**
 * boolean 値の設定キーを変更します。
 *
 * 値が truthy であれば `replaceValue` に、値が falsy であればキーを変更せず古いキーの削除だけを行います。
 * @param {string} previousKey 変更元のキー
 * @param {string} nextKey 変更先のキー
 * @param {any} replaceValue 置き換える値
 */
const changeBooleanKey = (previousKey: string, nextKey: string, source: Settings, replaceValue: string | boolean = true) => {
    if (getPref(previousKey, source) === true) setPref(nextKey, replaceValue, source);
    deletePref(previousKey, source);
};

export async function updatePref(source: Settings = settings) {
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
            for (const [oldKey, newKey] of Object.entries(boolKeys)) {
                changeBooleanKey(oldKey, newKey, source);
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

            if (typeof getPref("visibleButtons", source) == "object" && getPref<string[]>("visibleButtons", source).includes("downvote-button")) {
                setPref(
                    "visibleButtons",
                    getPref("visibleButtons", source).filter((elem: string) => elem != "downvote-button"),
                    source,
                );
            }
            if (typeof getPref("sidebarButtons", source) == "object" && (getPref<string[]>("sidebarButtons", source).includes("verified-orgs-signup") || getPref<string[]>("sidebarButtons", source).includes("twiter-blue") || getPref<string[]>("sidebarButtons", source).includes("circles"))) {
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
            for (const [oldKey, newKey] of Object.entries(boolKeys)) {
                changeBooleanKey(oldKey, newKey, source);
            }
            // falls through
        }
        case 2: {
            const boolKeys = {
                "tweetDisplaySetting.option.RTNotQuote": "tweetDisplaySetting.buttonsInvisible.RTNotQuote",
                "tweetDisplaySetting.option.noModalbottomTweetButtons": "tweetDisplaySetting.buttonsInvisible.noModalbottomTweetButtons",
                "tweetDisplaySetting.option.noNumberBottomTweetButtons": "tweetDisplaySetting.buttonsInvisible.noNumberBottomTweetButtons",
            };
            for (const [oldKey, newKey] of Object.entries(boolKeys)) {
                changeBooleanKey(oldKey, newKey, source);
            }
            // falls through
        }
        case 3: {
            if (getPref("dateAndTime.options.absolutelyTime", source)) {
                setPref("dateAndTime.dateAboveTweet", "absolutelyToday", source);
            }
            deletePref("dateAndTime.options.absolutelyTime", source);
            // falls through
        }
        case 4: {
            if (getPref("XToTwitter.XToTwitter", source)) {
                setPref("XToTwitter.PwaManifest", true, source);
            }
        }
    }
}

const defaultPref = generateDefaultPref();
function generateDefaultPref() {
    const defaultData = {
        buttonColor: {},
        buttonColorLight: {},
        buttonColorDark: {},
    } as Settings;
    for (const elem in DEFAULT_SETTINGS) {
        if (elem === "buttonColor") continue;
        const prefData = DEFAULT_SETTINGS[elem as SettingGroupKeys];
        switch (prefData.type) {
            case "boolean": {
                for (const data of prefData.values) {
                    setPref(`${elem}.${data.id}`, data.default ?? false, defaultData);
                }
                break;
            }
            case "order": {
                setPref(elem, structuredClone(prefData.default), defaultData);
                break;
            }
            case "select": {
                setPref(elem, prefData.default, defaultData);
                break;
            }
        }
    }
    return defaultData;
}

export function mergeDefaultPref(source: Partial<Settings>): Settings {
    return mergePref(structuredClone(defaultPref), structuredClone(source));
}

export function getDefaultPref(): Settings;
export function getDefaultPref<T extends SettingFullKeys<"boolean" | "order" | "select">>(id: T): SettingKeyDefault<T>;
export function getDefaultPref<T extends SettingFullKeys<"boolean" | "order" | "select">>(id?: T) {
    if (id === undefined) {
        return structuredClone(defaultPref);
    }
    return getPref<SettingKeyDefault<T>>(id, structuredClone(defaultPref));
}

const prefVersion = 5;

/**
 * 指定した設定カテゴリーIDに基づいて値の一覧(CheckboxならCheckboxの全てのID、RadioBox/ListBoxなら値になりうるすべての値)を出力します
 *
 * @param {string} id 設定カテゴリーID
 * @return {string[]} 取得した値一覧
 */
export function getSettingIDs<T extends SettingGroupKeys>(id: T): SettingGroupChildIds<T>[] {
    return DEFAULT_SETTINGS[id].values.map((elem: (typeof DEFAULT_SETTINGS)[T]["values"][number]) => elem.id);
}

/**
 * 指定した設定カテゴリーIDのデータ(全ての値についてのidとi18nをObjectとして羅列するArray)を出力します。
 *
 * @param {string} id 設定カテゴリーID
 * @return {{id:string,i18n:string}[]} 取得したデータ
 */
export function getSettingData<T extends SettingGroupKeys>(id: T): typeof DEFAULT_SETTINGS[T]["values"] {
    return DEFAULT_SETTINGS[id].values;
}

/**
 * 指定した設定のi18nのIDを出力します。
 *
 * @param {string} id 設定カテゴリーID
 * @param {string} id 設定自体のID(設定カテゴリーIDを除く)
 * @return {string} i18nのID
 */
export function getSettingI18n<T extends SettingGroupKeys>(id: T, itemValue: SettingGroupChildIds<T>): (typeof DEFAULT_SETTINGS)[T]["values"][number]["i18n"];
export function getSettingI18n<T>(id: string, itemValue: string): T;
export function getSettingI18n<T extends SettingGroupKeys>(id: T, itemValue: SettingGroupChildIds<T>): (typeof DEFAULT_SETTINGS)[T]["values"][number]["i18n"] {
    return DEFAULT_SETTINGS[id].values.filter((elem) => elem.id == itemValue)[0]?.i18n ?? undefined;
}

settings = JSON.parse(localStorage.getItem("TUIC") ?? JSON.stringify(defaultPref));
