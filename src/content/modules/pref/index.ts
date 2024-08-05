/* eslint-disable no-fallthrough */
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
                    image.src = localStorage.getItem(`TUIC_IconImg`);
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
        for (const elem in ids) {
            if (elem == "buttonColor") {
                defaultData.buttonColor = {};
                defaultData.buttonColorLight = {};
                defaultData.buttonColorDark = {};
            } else {
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
    }
    return mergePref(structuredClone(defaultData), structuredClone(source));
}

export function getDefaultPref(id: string) {
    const prefData = ids[id];
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

// Objectの中身はこれに従ってください
type TUICSetting =
    | {
          type: "color"; // 色設定 あとから変更する予定です
          values: { id: string; i18n: string }[];
      }
    | { type: "order"; default: string[]; values: { id: string; i18n: string }[] } // 並び替え
    | { type: "select"; default: string; values: { id: string; i18n: string }[] } //ラジオボタンなどの一つのみ設定するやつ
    | { type: "boolean"; values: { id: string; i18n: string; default: boolean }[] }; //チェックボックスなどの一つ一つがboolean型の設定になるもの
const ids = {
    // 色の設定
    buttonColor: {
        type: "color",
        values: [
            { id: "unsent-tweet", i18n: "settingColors-editUnsetTweet" },
            { id: "not-following", i18n: "settingColors-notFollowingButton" },
            { id: "willFollow", i18n: "settingColors-willFollowButton" },
            { id: "following", i18n: "settingColors-followingButton" },
            { id: "un-following", i18n: "settingColors-unfollowButton" },
            { id: "blocking", i18n: "settingColors-blocking" },
            { id: "blocking-unlock", i18n: "settingColors-blockingUnlock" },
            { id: "profile", i18n: "settingColors-editProfile" },
            { id: "profile-save", i18n: "settingColors-saveProfile" },
            { id: "birthday", i18n: "settingColors-finalDecideButton" },
            { id: "twitterIcon", i18n: "settingColors-twitterIcon" },
            { id: "twitterIconFavicon", i18n: "settingColors-twitterIconFavicon" },
        ],
    },
    // ツイート関連の設定
    visibleButtons: {
        type: "order",
        default: ["reply-button", "retweet-button", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"],
        values: [
            { id: "reply-button", i18n: "bottomTweetButtons-reply" },
            { id: "retweet-button", i18n: "bottomTweetButtons-retweet" },
            { id: "quoteTweet", i18n: "bottomTweetButtons-quoteTweet" },
            { id: "like-button", i18n: "bottomTweetButtons-like" },
            { id: "share-button", i18n: "bottomTweetButtons-share" },
            { id: "tweet_analytics", i18n: "bottomTweetButtons-tweetAnalytics" },
            { id: "boolkmark", i18n: "bottomTweetButtons-bookmark" },
            { id: "url-copy", i18n: "bottomTweetButtons-urlCopy" },
            { id: "userBlock", i18n: "bottomTweetButtons-userBlock" },
            { id: "userMute", i18n: "bottomTweetButtons-userMute" },
            { id: "deleteButton", i18n: "bottomTweetButtons-deleteButton" },
            { id: "sendDM", i18n: "bottomTweetButtons-sendDM" },
            { id: "likeAndRT", i18n: "bottomTweetButtons-likeAndRT" },
        ],
    },
    "tweetDisplaySetting.option": {
        type: "boolean",
        values: [
            { id: "likeToFavo", i18n: "bottomTweetButtons-setting-likeToFavo", default: false },
            { id: "bottomScroll", i18n: "bottomTweetButtons-setting-visibleScrollBar", default: false },
        ],
    },
    "tweetDisplaySetting.buttonsInvisible": {
        type: "boolean",
        values: [
            { id: "RTNotQuote", i18n: "bottomTweetButtons-setting-RTNotQuote", default: false },
            { id: "noModalbottomTweetButtons", i18n: "bottomTweetButtons-setting-noModal", default: false },
            { id: "noNumberBottomTweetButtons", i18n: "bottomTweetButtons-setting-noNumber", default: false },
        ],
    },
    "tweetDisplaySetting.linkCopyURL": {
        type: "select",
        default: "linkCopyURL_twitter",
        values: [
            { id: "linkCopyURL_twitter", i18n: "bottomTweetButtons-setting-linkCopyURL-twitter" },
            { id: "linkCopyURL_X", i18n: "bottomTweetButtons-setting-linkCopyURL-X" },
            { id: "linkCopyURL_vxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-vxTwitter" },
            { id: "linkCopyURL_fxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-fxTwitter" },
        ],
    },
    "tweetDisplaySetting.linkShareCopyURL": {
        type: "select",
        default: "linkShareCopyURL_twitter",
        values: [
            { id: "linkShareCopyURL_twitter", i18n: "bottomTweetButtons-setting-linkCopyURL-twitter" },
            { id: "linkShareCopyURL_X", i18n: "bottomTweetButtons-setting-linkCopyURL-X" },
            { id: "linkShareCopyURL_vxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-vxTwitter" },
            { id: "linkShareCopyURL_fxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-fxTwitter" },
        ],
    },
    "timeline-discoverMore": {
        type: "select",
        default: "discoverMore_nomal",
        values: [
            { id: "discoverMore_nomal", i18n: "timeline-discoverMore-nomal" },
            { id: "discoverMore_detailOpen", i18n: "timeline-discoverMore-detailOpen" },
            { id: "discoverMore_detailClose", i18n: "timeline-discoverMore-detailClose" },
            { id: "discoverMore_invisible", i18n: "timeline-discoverMore-invisible" },
        ],
    },
    fixEngagements: {
        type: "order",
        default: ["likes", "retweets", "quotes"],
        values: [
            { id: "likes", i18n: "bottomTweetButtons-setting-placeEngagementsLink-likes-short" },
            { id: "retweets", i18n: "bottomTweetButtons-setting-placeEngagementsLink-retweets-short" },
            { id: "quotes", i18n: "bottomTweetButtons-setting-placeEngagementsLink-quotes-short" },
        ],
    },
    "engagementsLink.option": {
        type: "boolean",
        values: [
            { id: "placeEngagementsLink", i18n: "bottomTweetButtons-setting-placeEngagementsLink", default: false },
            { id: "placeEngagementsLinkShort", i18n: "fixEngagements-shortName", default: false },
        ],
    },
    showLinkCardInfo: {
        type: "boolean",
        values: [{ id: "showLinkCardInfo", i18n: "bottomTweetButtons-setting-showLinkCardInfo", default: false }],
    },
    tweetTopButton: {
        type: "order",
        default: ["moreMenu"],
        values: [
            { id: "moreMenu", i18n: "sidebarButtons-moremenu" },
            { id: "block", i18n: "bottomTweetButtons-userBlock" },
            { id: "mute", i18n: "bottomTweetButtons-userMute" },
            { id: "delete", i18n: "bottomTweetButtons-deleteButton" },
            { id: "list", i18n: "tweetMoreMenuItems-addMemberOfList" },
            { id: "report", i18n: "XtoTwitter-PostToTweet-reportTweet" },
            { id: "notInterested", i18n: "tweetMoreMenuItems-notInterested" },
        ],
    },
    tweetTopButtonBool: {
        type: "boolean",
        values: [{ id: "noModalbottomTweetButtons", i18n: "bottomTweetButtons-setting-noModal", default: false }],
    },
    "tweetDisplaySetting.tweetMoreMenuItems": {
        type: "boolean",
        values: [
            { id: "notHelpful", i18n: "tweetMoreMenuItems-notHelpful", default: false },
            { id: "notInterested", i18n: "tweetMoreMenuItems-notInterested", default: false },
            { id: "follow", i18n: "tweetMoreMenuItems-follow", default: false },
            { id: "deleteTweet", i18n: "bottomTweetButtons-deleteButton", default: false },
            { id: "highlighOnPin", i18n: "tweetMoreMenuItems-highlighOnPin", default: false },
            { id: "highlightUpsell", i18n: "tweetMoreMenuItems-highlightUpsell", default: false },
            { id: "addMemberOfList", i18n: "tweetMoreMenuItems-addMemberOfList", default: false },
            { id: "userMute", i18n: "bottomTweetButtons-userMute", default: false },
            { id: "muteTalk", i18n: "tweetMoreMenuItems-muteTalk", default: false },
            { id: "leaveTalk", i18n: "tweetMoreMenuItems-leaveTalk", default: false },
            { id: "block", i18n: "bottomTweetButtons-userBlock", default: false },
            { id: "whoCanReply", i18n: "tweetMoreMenuItems-whoCanReply", default: false },
            { id: "engagements", i18n: "tweetMoreMenuItems-engagements", default: false },
            { id: "analytics", i18n: "bottomTweetButtons-tweetAnalytics", default: false },
            { id: "embed", i18n: "XtoTwitter-PostToTweet-menu-embed", default: false },
            { id: "report", i18n: "XtoTwitter-PostToTweet-reportTweet", default: false },
            { id: "hiddenReply", i18n: "tweetMoreMenuItems-hiddenReply", default: false },
            { id: "requestCommunityNote", i18n: "tweetMoreMenuItems-requestCommunityNote", default: false },
            //{ id: "editWithTwitterBlue", i18n: "tweetMoreMenuItems-editWithTwitterBlue", default: false },
        ],
    },
    "tweetDisplaySetting.invisible": {
        type: "boolean",
        values: [
            { id: "bottomSpace", i18n: "bottomTweetButtons-setting-removeSpaceBottomTweet-v2", default: false },
            { id: "twitter-pro-promotion-btn", i18n: "invisibleItems-twitterProPromotionBtn", default: false },
            { id: "subscribe-tweets", i18n: "invisibleItems-subscribeTweets", default: false },
        ],
    },

    // Twitterアイコンの設定
    "twitterIcon.icon": {
        type: "select",
        default: "nomal",
        values: [
            { id: "nomal", i18n: "twitterIcon-normal" },
            { id: "invisible", i18n: "twitterIcon-invisible" },
            { id: "dog", i18n: "twitterIcon-dog" },
            { id: "twitter", i18n: "twitterIcon-twitter" },
            { id: "twitterIcon-X", i18n: "twitterIcon-X" },
            { id: "custom", i18n: "twitterIcon-custom" },
        ],
    },
    "twitterIcon.options": {
        type: "boolean",
        values: [
            { id: "faviconSet", i18n: "twitterIcon-favicon", default: false },
            { id: "roundIcon", i18n: "twitterIcon-roundIcon", default: true },
        ],
    },

    // サイドバーの設定
    sidebarButtons: {
        type: "order",
        default: ["home", "explore", "communities", "notifications", "messages", "lists", "bookmarks", "profile", "moremenu"],
        values: [
            { id: "home", i18n: "sidebarButtons-home" },
            { id: "explore", i18n: "sidebarButtons-explore" },
            { id: "communities", i18n: "sidebarButtons-communities" },
            { id: "notifications", i18n: "sidebarButtons-notifications" },
            { id: "messages", i18n: "sidebarButtons-messages" },
            { id: "bookmarks", i18n: "sidebarButtons-bookmarks" },
            { id: "profile", i18n: "sidebarButtons-profile" },
            { id: "moremenu", i18n: "sidebarButtons-moremenu" },
            { id: "topics", i18n: "sidebarButtons-topics" },
            { id: "lists", i18n: "sidebarButtons-lists" },
            { id: "drafts", i18n: "sidebarButtons-drafts" },
            { id: "connect", i18n: "sidebarButtons-connect" },
            { id: "communitynotes", i18n: "sidebarButtons-communitynotes" },
            { id: "verified-choose", i18n: "sidebarButtons-verified-choose" },
            { id: "display", i18n: "sidebarButtons-display" },
            { id: "muteAndBlock", i18n: "sidebarButtons-muteAndBlock" },
            { id: "premiumTierSwitch", i18n: "sidebarButtons-premiumTierSwitch" },
            { id: "settings", i18n: "sidebarButtons-settings" },
            { id: "spaces", i18n: "sidebarButton-moreMenuItems-spaces" },
            { id: "jobs", i18n: "sidebarButton-moreMenuItems-jobs" },
            { id: "grok", i18n: "sidebarButtons-grok", default: false },
        ],
    },
    "sidebarSetting.buttonConfig": {
        type: "boolean",
        values: [
            { id: "smallerSidebarContent", i18n: "sidebarButton-setting-narrowBetweenButtons", default: true },
            { id: "sidebarNoneScrollbar", i18n: "sidebarButton-setting-sidebarNoneScrollbar", default: false },
        ],
    },
    "sidebarSetting.homeIcon": {
        type: "select",
        default: "normal",
        values: [
            { id: "normal", i18n: "sidebarButton-homeIcon-normal" },
            { id: "birdGoBack", i18n: "sidebarButton-homeIcon-birdGoBack" },
            { id: "TUIC", i18n: "sidebarButton-homeIcon-TUIC" },
        ],
    },
    accountSwitcher: {
        type: "boolean",
        values: [
            { id: "icon", i18n: "sidebarButton-accountSwitcher-Icon", default: false },
            { id: "nameID", i18n: "sidebarButton-accountSwitcher-NameID", default: false },
            { id: "moreMenu", i18n: "sidebarButton-accountSwitcher-MoreMenu", default: false },
        ],
    },
    "sidebarSetting.moreMenuItems": {
        type: "boolean",
        values: [
            { id: "premium", i18n: "sidebarButton-moreMenuItems-premium", default: false },
            { id: "bookmarks", i18n: "sidebarButtons-bookmarks", default: false },
            { id: "communities", i18n: "sidebarButtons-communities", default: false },
            { id: "monetization", i18n: "sidebarButton-moreMenuItems-monetization", default: false },
            //{ id: "pro", i18n: "sidebarButton-moreMenuItems-pro", default: false },
            { id: "verifiedOrgsSignup", i18n: "sidebarButton-moreMenuItems-verifiedOrgsSignup", default: false },
            { id: "ads", i18n: "sidebarButton-moreMenuItems-ads", default: false },
            { id: "jobs", i18n: "sidebarButton-moreMenuItems-jobs", default: false },
            { id: "spaces", i18n: "sidebarButton-moreMenuItems-spaces", default: false },
            { id: "settings", i18n: "sidebarButton-moreMenuItems-settings", default: false },
            //{ id: "separator", i18n: "sidebarButton-moreMenuItems-separator", default: false },
            { id: "followerRequests", i18n: "sidebarButton-moreMenuItems-followerRequests", default: false },
        ],
    },

    // プロフィールの設定
    "profileSetting.tabs": { type: "boolean", values: [{ id: "pinnedTab", i18n: "profileSetting-tabs-pinnedTab", default: false }] },
    "profileSetting.profileInitialTab": {
        type: "select",
        default: "tweets",
        values: [
            { id: "tweets", i18n: "profileSetting-profileInitialTab-tweet" },
            { id: "replies", i18n: "profileSetting-profileInitialTab-reply" },
            { id: "media", i18n: "profileSetting-profileInitialTab-media" },
            { id: "likes", i18n: "profileSetting-profileInitialTab-likes" },
        ],
    },
    "profileSetting.invisible": {
        type: "boolean",
        values: [
            { id: "subscribe-profile", i18n: "invisibleItems-subscribeProfile", default: false },
            { id: "profileHighlights", i18n: "invisibleItems-profileHighlights", default: false },
            { id: "profileArticles", i18n: "invisibleItems-profileArticles", default: false },
            { id: "profileAffiliates", i18n: "invisibleItems-profileAffiliates", default: false },
            { id: "verifiedFollowerTab", i18n: "invisibleItems-verifiedFollowerTab", default: false },
            { id: "followersYouFollowTab", i18n: "invisibleItems-followersYouFollowTab", default: false },
            { id: "profilePagePremium", i18n: "invisibleItems-profilePagePremium", default: false },
        ],
    },
    "profileSetting.followersListButtons": {
        type: "order",
        default: ["followButton", "moremenuButton"],
        values: [
            { id: "followButton", i18n: "profileSetting-followersListButtons-followButton" },
            { id: "moremenuButton", i18n: "sidebarButtons-moremenu" },
            { id: "blockButton", i18n: "bottomTweetButtons-userBlock" },
            { id: "muteButton", i18n: "bottomTweetButtons-userMute" },
            { id: "reportButton", i18n: "profileSetting-followersListButtons-reportButton" },
            { id: "removeFollowerButton", i18n: "profileSetting-followersListButtons-removeFollowerButton" },
        ],
    },

    "profileSetting.followersListButtonsOptions": {
        type: "boolean",
        values: [{ id: "noModalbottomTweetButtons", i18n: "bottomTweetButtons-setting-noModal", default: false }],
    },

    // 非表示設定
    invisibleItems: {
        type: "boolean",
        values: [
            { id: "config-premium", i18n: "invisibleItems-configPremium", default: false },
            { id: "hideBelowDM", i18n: "invisibleItems-hideBelowDM", default: false },
            { id: "verifiedNotifications", i18n: "invisibleItems-verifiedNotifications", default: false },
        ],
    },

    // タイムラインの設定
    timeline: {
        type: "boolean",
        values: [
            { id: "osusume-user-timeline", i18n: "timeline-osusumeUsersOnTL", default: false },
            { id: "hideOhterRTTL", i18n: "timeline-hideOhterRTTL", default: false },
            { id: "hideReply", i18n: "timeline-hideReply", default: false },
            { id: "hideLockedTweet", i18n: "timeline-hideLockedTweet", default: false },
            { id: "accountStart", i18n: "timeline-accountStart", default: false },
        ],
    },

    // X → Twitterの設定
    XToTwitter: {
        type: "boolean",
        values: [
            { id: "XToTwitter", i18n: "XtoTwitter-XtoTwitter", default: false },
            { id: "PostToTweet", i18n: "XtoTwitter-PostToTweet", default: false },
        ],
    },

    // 右サイドバーの設定
    rightSidebar: {
        type: "boolean",
        values: [
            { id: "searchBox", i18n: "rightSidebar-searchBox", default: false },
            { id: "verified", i18n: "rightSidebar-rightSidebarVerified", default: false },
            { id: "space", i18n: "rightSidebar-space", default: false },
            { id: "relevantPeople", i18n: "rightSidebar-relevantPeople", default: false },
            { id: "trend", i18n: "rightSidebar-trend", default: false },
            { id: "osusumeUser", i18n: "rightSidebar-osusumeUser", default: false },
            { id: "links", i18n: "rightSidebar-links", default: false },
        ],
    },

    // ツイート投稿画面の設定
    composetweet: { type: "boolean", values: [{ id: "hideDraft", i18n: "composetweet-hideDraft", default: false }] },

    // DMの設定
    dmPage: { type: "boolean", values: [{ id: "showIcon", i18n: "dmPage-showIcon", default: false }] },

    // その他の設定
    uncategorizedSettings: { type: "boolean", values: [{ id: "disableBackdropFilter", i18n: "uncategorizedSettings-disableBackdropFilter", default: false }] },

    // その他の設定
    performanceSettings: { type: "boolean", values: [{ id: "removeDeletedTweets", i18n: "performanceSettings-removeDeletedTweets", default: true }] },

    // インポート・エクスポートのオプション
    inportExportOptions: { type: "boolean", values: [{ id: "includingCustomCSS", i18n: "inportExportOptions.includingCustomCSS", default: false }] },
} as const;

export type TUICSettingIDs = keyof typeof ids;

/**
 * 指定した設定カテゴリーIDに基づいて値の一覧(CheckboxならCheckboxの全てのID、RadioBox/ListBoxなら値になりうるすべての値)を出力します
 *
 * @param {string} id 設定カテゴリーID
 * @return {string[]} 取得した値一覧
 */
export function getSettingIDs<T extends TUICSettingIDs>(id: T): (typeof ids)[T]["values"][number]["id"][] {
    return ids[id].values.map((elem) => elem.id);
}

/**
 * 指定した設定カテゴリーIDのデータ(全ての値についてのidとi18nをObjectとして羅列するArray)を出力します。
 *
 * @param {string} id 設定カテゴリーID
 * @return {{id:string,i18n:string}[]} 取得したデータ
 */
export function getSettingData<T extends TUICSettingIDs>(id: T): (typeof ids)[T]["values"] {
    return ids[id].values;
}
/**
 * 指定した設定のi18nのIDを出力します。
 *
 * @param {string} id 設定カテゴリーID
 * @param {string} id 設定自体のID(設定カテゴリーIDを除く)
 * @return {string} i18nのID
 */
export function getSettingI18n<T extends TUICSettingIDs>(id: T, itemValue: (typeof ids)[T]["values"][number]["id"]): string {
    return ids[id].values.filter((elem) => elem.id == itemValue)[0]?.i18n ?? undefined;
}

config = JSON.parse(localStorage.getItem("TUIC") ?? JSON.stringify(mergeDefaultPref({})));
