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
export function getRawPref(identifier: string, source = config) {
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
export function setRawPref(identifier: string, value: unknown, source = config) {
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
export function deleteRawPref(identifier: string, source = config) {
    const { object, key } = getPointerFromKey(source, identifier);
    delete object[key];
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
    if (getRawPref(previousKey, source) === true) setRawPref(nextKey, replaceValue, source);
    deleteRawPref(previousKey, source);
};

export async function updatePref(source = config) {
    const prefVersion_ = getRawPref("prefVersion", source) ?? 0;
    setRawPref("prefVersion", prefVersion);
    switch (prefVersion_) {
        case 0: {
            /*
            if (localStorage.getItem("unsent-tweet-background")) {
                parallelToSerialPref();
            }*/

            if (typeof getRawPref("timeline", source) != "object") setRawPref("timeline", {}, source);

            if (typeof getRawPref("rightSidebar", source) != "object") setRawPref("rightSidebar", {}, source);

            if (typeof getRawPref("XToTwitter", source) != "object") setRawPref("XToTwitter", {}, source);

            if (typeof getRawPref("twitterIcon", source) == "string") {
                const twitterIconPref = getRawPref("twitterIcon", source);
                setRawPref("twitterIcon", {}, source);
                setRawPref("twitterIcon.icon", twitterIconPref, source);
            }

            if (typeof getRawPref("clientInfo", source) == "object") deleteRawPref("clientInfo", source);

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

            if (getRawPref("CSS", source)) localStorage.setItem("TUIC_CSS", getRawPref("CSS"));
            deleteRawPref("CSS", source);

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

            if (typeof getRawPref("visibleButtons", source) == "object" && ~getRawPref("visibleButtons", source).indexOf("downvote-button")) {
                setRawPref(
                    "visibleButtons",
                    getRawPref("visibleButtons", source).filter((elem: string) => elem != "downvote-button"),
                    source,
                );
            }
            if (typeof getRawPref("sidebarButtons", source) == "object" && (~getRawPref("sidebarButtons", source).indexOf("verified-orgs-signup") || ~getRawPref("sidebarButtons", source).indexOf("twiter-blue") || ~getRawPref("sidebarButtons", source).indexOf("circles"))) {
                setRawPref(
                    "sidebarButtons",
                    getRawPref("sidebarButtons", source).filter((elem: string) => elem != "sidebarButtons-circles" && elem != "twiter-blue" && elem != "verified-orgs-signup" && elem != "circles"),
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
        for (const elem in TUICSettings) {
            if (elem == "buttonColor") {
                defaultData.buttonColor = {};
                defaultData.buttonColorLight = {};
                defaultData.buttonColorDark = {};
            } else {
                const defaultReturn = getDefaultPref(elem);
                switch (defaultReturn.type) {
                    case "boolean": {
                        for (const data in defaultReturn.data) {
                            setRawPref(`${elem}.${data}`, defaultReturn.data[data], defaultData);
                        }
                        break;
                    }
                    case "select": {
                        setRawPref(elem, defaultReturn.data, defaultData);
                        break;
                    }
                    case "order": {
                        setRawPref(elem, structuredClone(defaultReturn.data), defaultData);
                        break;
                    }
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

config = JSON.parse(localStorage.getItem("TUIC") ?? JSON.stringify(mergeDefaultPref({})));
