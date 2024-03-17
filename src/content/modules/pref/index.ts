export let config = null;

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
 * @return {unknown} 取得した値(identifierが空文字ならTUICのPref全体)
 */
export function getPref(identifier: string) {
    const { object, key } = getPointerFromKey(config, identifier);
    return object[key];
}

/**
 * TUICのPrefの値を設定します。
 *
 * identifierが空文字ならTUICのPref全体が変更されます。
 * @param {string} identifier 取得するPrefへのパス(ピリオド区切り)。
 * @param {string} value 設定する値
 */
export function setPref(identifier: string, value: unknown) {
    if (identifier == "") {
        config = value;
    } else {
        const { object, key } = getPointerFromKey(config, identifier);
        object[key] = value;
    }
}

/**
 * TUICのPrefの値を削除します。
 *
 * @param {string} identifier 取得するPrefへのパス(ピリオド区切り)。
 */
export function deletePref(identifier: string) {
    const { object, key } = getPointerFromKey(config, identifier);
    delete object[key];
}

/**
 * 変更が加えられたTUICのPrefをlocalStorageへ保存します。
 */
export function save() {
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
const changeBooleanKey = (previousKey: string, nextKey: string, replaceValue: string | boolean = true) => {
    if (getPref(previousKey) === true) setPref(nextKey, replaceValue);
    deletePref(previousKey);
};

export async function updatePref(mergeDefault: boolean = true) {
    const prefVersion = getPref("prefVersion") ?? 0;
    switch (prefVersion) {
        case 0: {
            /*
    if (localStorage.getItem("unsent-tweet-background")) {
        parallelToSerialPref();
    }*/

            if (typeof getPref("timeline") != "object") setPref("timeline", {});

            if (typeof getPref("rightSidebar") != "object") setPref("rightSidebar", {});

            if (typeof getPref("XToTwitter") != "object") setPref("XToTwitter", {});

            if (typeof getPref("twitterIcon") == "string") {
                const twitterIconPref = getPref("twitterIcon");
                setPref("twitterIcon", {});
                setPref("twitterIcon.icon", twitterIconPref);
            }

            if (typeof getPref("clientInfo") == "object") deletePref("clientInfo");

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
                changeBooleanKey(oldKey, boolKeys[oldKey]);
            }

            changeBooleanKey("invisibleItems.discoverMore", "timeline-discoverMore", "discoverMore_invisible");
            changeBooleanKey("otherBoolSetting.invisibleTwitterLogo", "twitterIcon", "invisible");
            changeBooleanKey("sidebarSetting.buttonConfig.birdGoBackHome", "sidebarSetting.homeIcon", "birdGoBack");

            if (getPref("CSS")) localStorage.setItem("TUIC_CSS", getPref("CSS"));
            setPref("CSS", null);

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

            if (typeof getPref("visibleButtons") == "object" && ~getPref("visibleButtons").indexOf("downvote-button")) {
                setPref(
                    "visibleButtons",
                    getPref("visibleButtons").filter((elem: string) => elem != "downvote-button"),
                );
            }
            if (typeof getPref("sidebarButtons") == "object" && (~getPref("sidebarButtons").indexOf("verified-orgs-signup") || ~getPref("sidebarButtons").indexOf("twiter-blue") || ~getPref("sidebarButtons").indexOf("sidebarButtons-circles"))) {
                setPref(
                    "sidebarButtons",
                    getPref("sidebarButtons").filter((elem: string) => elem != "sidebarButtons-circles" && elem != "twiter-blue" && elem != "verified-orgs-signup"),
                );
            }
        }
    }

    if (mergeDefault) {
        setPref("", mergePref(structuredClone(defaultPref), structuredClone(getPref(""))));
    }
}

export const defaultPref = {
    prefVersion: 1,
    buttonColor: {},
    buttonColorLight: {},
    buttonColorDark: {},
    visibleButtons: ["reply-button", "retweet-button", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"],
    sidebarButtons: ["home", "explore", "communities", "notifications", "messages", "lists", "bookmarks", "profile", "moremenu"],
    fixEngagements: ["likes", "retweets", "quotes"],
    tweetTopButton: ["moreMenu"],
    tweetTopButtonBool: {
        noModalbottomTweetButtons: false,
    },
    invisibleItems: {
        hideBelowDM: false,

        verifiedNotifications: false,
    },
    profileSetting: {
        tabs: {
            pinnedTab: false,
        },
        invisible: {
            "subscribe-profile": false,
            profileHighlights: false,
            profileAffiliates: false,
            verifiedFollowerTab: false,
        },
        profileInitialTab: "tweets",
    },
    tweetDisplaySetting: {
        "twitter-pro-promotion-btn": false,
        "subscribe-tweets": false,
        bottomScroll: false,
        bottomSpace: false,
        RTNotQuote: false,
        noModalbottomTweetButtons: false,
        noNumberBottomTweetButtons: false,
        linkCopyURL: "linkCopyURL_twitter",
        linkShareCopyURL: "linkShareCopyURL_twitter",
        likeToFavo: false,
        tweetMoreMenuItems: {
            notHelpful: false,
            hiddenReply: false,
            notInterested: false,
            follow: false,
            addMemberOfList: false,
            userMute: false,
            muteTalk: false,
            leaveTalk: false,
            block: false,
            engagements: false,
            embed: false,
            report: false,
        },
    },
    otherBoolSetting: {
        placeEngagementsLink: false,
        placeEngagementsLinkShort: false,
        showLinkCardInfo: true,
    },
    sidebarSetting: {
        buttonConfig: {
            smallerSidebarContent: true,
            sidebarNoneScrollbar: false,
        },
        moreMenuItems: {
            bookmarks: false,
            monetization: false,
            separator: false,
            creatorStudio: false,
            professionalTool: false,
            settingsAndSupport: false,
        },
        homeIcon: "normal",
    },
    XToTwitter: { XToTwitter: false, PostToTweet: false },
    timeline: {
        "osusume-user-timeline": false,
        hideOhterRTTL: false,
        accountStart: false,
    },
    twitterIcon: {
        icon: "nomal",
        roundIcon: true,
        faviconSet: false,
    },
    rightSidebar: {
        searchBox: false,
        verified: false,
        trend: false,
        osusumeUser: false,
        links: false,
        space: false,
        relevantPeople: false,
    },
    accountSwitcher: {
        icon: false,
        nameID: false,
        moreMenu: false,
    },
    dmPage: {
        showIcon: false,
    },
    "timeline-discoverMore": "discoverMore_nomal",
};

import { ColorData } from "@shared/sharedData.ts";

export const ids: {
    [key: string]: I18nAndAllContent;
} = {
    // 色の設定
    colors: ColorData.i18nAndAllContent,
    // ツイート関連の設定
    visibleButtons: {
        all: ["reply-button", "retweet-button", "quoteTweet", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy", "userBlock", "userMute", "deleteButton", "sendDM", "likeAndRT"],
        i18n: {
            "reply-button": "bottomTweetButtons-reply",
            "retweet-button": "bottomTweetButtons-retweet",
            "like-button": "bottomTweetButtons-like",
            "share-button": "bottomTweetButtons-share",
            tweet_analytics: "bottomTweetButtons-tweetAnalytics",
            boolkmark: "bottomTweetButtons-bookmark",
            "url-copy": "bottomTweetButtons-urlCopy",
            userBlock: "bottomTweetButtons-userBlock",
            userMute: "bottomTweetButtons-userMute",
            quoteTweet: "bottomTweetButtons-quoteTweet",
            deleteButton: "bottomTweetButtons-deleteButton",
            sendDM: "bottomTweetButtons-sendDM",
            likeAndRT: "bottomTweetButtons-likeAndRT",
        },
    },
    "tweetDisplaySetting.linkCopyURL": {
        all: ["linkCopyURL_twitter", "linkCopyURL_X", "linkCopyURL_vxTwitter", "linkCopyURL_fxTwitter"],
        i18n: {
            linkCopyURL_twitter: "bottomTweetButtons-setting-linkCopyURL-twitter",
            linkCopyURL_X: "bottomTweetButtons-setting-linkCopyURL-X",
            linkCopyURL_vxTwitter: "bottomTweetButtons-setting-linkCopyURL-vxTwitter",
            linkCopyURL_fxTwitter: "bottomTweetButtons-setting-linkCopyURL-fxTwitter",
        },
    },
    "tweetDisplaySetting.linkShareCopyURL": {
        all: ["linkShareCopyURL_twitter", "linkShareCopyURL_X", "linkShareCopyURL_vxTwitter", "linkShareCopyURL_fxTwitter"],
        i18n: {
            linkShareCopyURL_twitter: "bottomTweetButtons-setting-linkCopyURL-twitter",
            linkShareCopyURL_X: "bottomTweetButtons-setting-linkCopyURL-X",
            linkShareCopyURL_vxTwitter: "bottomTweetButtons-setting-linkCopyURL-vxTwitter",
            linkShareCopyURL_fxTwitter: "bottomTweetButtons-setting-linkCopyURL-fxTwitter",
        },
    },
    "timeline-discoverMore": {
        all: ["discoverMore_nomal", "discoverMore_detailOpen", "discoverMore_detailClose", "discoverMore_invisible"],
        i18n: {
            discoverMore_nomal: "timeline-discoverMore-nomal",
            discoverMore_detailOpen: "timeline-discoverMore-detailOpen",
            discoverMore_detailClose: "timeline-discoverMore-detailClose",
            discoverMore_invisible: "timeline-discoverMore-invisible",
        },
    },
    fixEngagements: {
        all: ["likes", "retweets", "quotes"],
        i18n: {
            likes: "bottomTweetButtons-setting-placeEngagementsLink-likes-short",
            retweets: "bottomTweetButtons-setting-placeEngagementsLink-retweets-short",
            quotes: "bottomTweetButtons-setting-placeEngagementsLink-quotes-short",
        },
    },
    tweetTopButton: {
        all: ["moreMenu", "block", "mute", "delete"],
        i18n: {
            moreMenu: "sidebarButtons-moremenu",
            block: "bottomTweetButtons-userBlock",
            mute: "bottomTweetButtons-userMute",
            delete: "bottomTweetButtons-deleteButton",
        },
    },
    "tweetDisplaySetting.tweetMoreMenuItems": {
        all: ["notHelpful", "notInterested", "follow", "deleteTweet", "highlighOnPin", "highlightUpsell", "addMemberOfList", "userMute", "muteTalk", "leaveTalk", "block", "whoCanReply", "engagements", "analytics", "embed", "report", "hiddenReply", "editWithTwitterBlue"],
        i18n: {
            notHelpful: "tweetMoreMenuItems-notHelpful",
            hiddenReply: "tweetMoreMenuItems-hiddenReply",
            notInterested: "tweetMoreMenuItems-notInterested",
            follow: "tweetMoreMenuItems-follow",
            deleteTweet: "bottomTweetButtons-deleteButton",
            highlighOnPin: "tweetMoreMenuItems-highlighOnPin",
            highlightUpsell: "tweetMoreMenuItems-highlightUpsell",
            addMemberOfList: "tweetMoreMenuItems-addMemberOfList",
            userMute: "bottomTweetButtons-userMute",
            muteTalk: "tweetMoreMenuItems-muteTalk",
            leaveTalk: "tweetMoreMenuItems-leaveTalk",
            block: "bottomTweetButtons-userBlock",
            whoCanReply: "tweetMoreMenuItems-whoCanReply",
            engagements: "tweetMoreMenuItems-engagements",
            analytics: "bottomTweetButtons-tweetAnalytics",
            embed: "XtoTwitter-PostToTweet-menu-embed",
            report: "XtoTwitter-PostToTweet-reportTweet",
            editWithTwitterBlue: "tweetMoreMenuItems-editWithTwitterBlue",
        },
    },
    tweetDisplaySetting: {
        all: ["bottomSpace", "twitter-pro-promotion-btn", "subscribe-tweets"],
        i18n: {
            bottomSpace: "bottomTweetButtons-setting-removeSpaceBottomTweet-v2",
            "twitter-pro-promotion-btn": "invisibleItems-twitterProPromotionBtn",
            "subscribe-tweets": "invisibleItems-subscribeTweets",
        },
    },

    // Twitterアイコンの設定
    "twitterIcon.icon": {
        all: ["nomal", "invisible", "dog", "twitter", "twitterIcon-X", "custom"],
        i18n: {
            nomal: "twitterIcon-normal",
            invisible: "twitterIcon-invisible",
            dog: "twitterIcon-dog",
            twitter: "twitterIcon-twitter",
            "twitterIcon-X": "twitterIcon-X",
            custom: "twitterIcon-custom",
        },
    },
    "twitterIcon.options": {
        all: ["faviconSet", "roundIcon"],
        i18n: { faviconSet: "twitterIcon-favicon", roundIcon: "twitterIcon-roundIcon" },
    },

    // サイドバーの設定
    sidebarButtons: {
        all: ["home", "explore", "communities", "notifications", "messages", "bookmarks", "profile", "moremenu", "topics", "lists", "drafts", "connect", "communitynotes", "verified-choose", "display", "muteAndBlock", "premiumTierSwitch", "settings"],
        i18n: {
            home: "sidebarButtons-home",
            explore: "sidebarButtons-explore",
            communities: "sidebarButtons-communities",
            notifications: "sidebarButtons-notifications",
            messages: "sidebarButtons-messages",
            bookmarks: "sidebarButtons-bookmarks",
            profile: "sidebarButtons-profile",
            moremenu: "sidebarButtons-moremenu",
            topics: "sidebarButtons-topics",
            lists: "sidebarButtons-lists",
            drafts: "sidebarButtons-drafts",
            connect: "sidebarButtons-connect",
            communitynotes: "sidebarButtons-communitynotes",
            "verified-choose": "sidebarButtons-verified-choose",
            display: "sidebarButtons-display",
            muteAndBlock: "sidebarButtons-muteAndBlock",
            premiumTierSwitch: "sidebarButtons-premiumTierSwitch",
            settings: "sidebarButtons-settings",
        },
    },
    "sidebarSetting.buttonConfig": {
        all: ["smallerSidebarContent", "sidebarNoneScrollbar"],
        i18n: {
            smallerSidebarContent: "sidebarButton-setting-narrowBetweenButtons",
            sidebarNoneScrollbar: "sidebarButton-setting-sidebarNoneScrollbar",
        },
    },
    "sidebarSetting.homeIcon": {
        all: ["normal", "birdGoBack", "TUIC"],
        i18n: {
            normal: "sidebarButton-homeIcon-normal",
            birdGoBack: "sidebarButton-homeIcon-birdGoBack",
            TUIC: "sidebarButton-homeIcon-TUIC",
        },
    },
    accountSwitcher: {
        all: ["icon", "nameID", "moreMenu"],
        i18n: { icon: "sidebarButton-accountSwitcher-Icon", nameID: "sidebarButton-accountSwitcher-NameID", moreMenu: "sidebarButton-accountSwitcher-MoreMenu" },
    },
    "sidebarSetting.moreMenuItems": {
        all: ["premium", "bookmarks", "communities", "monetization", "pro", "ads", "settings", "separator"],
        i18n: {
            bookmarks: "sidebarButtons-bookmarks",
            monetization: "sidebarButton-moreMenuItems-monetization",
            separator: "sidebarButton-moreMenuItems-separator",
            creatorStudio: "sidebarButton-moreMenuItems-creatorStudio",
            professionalTool: "sidebarButton-moreMenuItems-professionalTool",
            settingsAndSupport: "sidebarButton-moreMenuItems-settingsAndSupport",
            communities: "sidebarButtons-communities",
            settings: "sidebarButton-moreMenuItems-settings",
            pro: "sidebarButton-moreMenuItems-pro",
            ads: "sidebarButton-moreMenuItems-ads",
            premium: "sidebarButton-moreMenuItems-premium",
        },
    },

    // プロフィールの設定
    "profileSetting.tabs": {
        all: ["pinnedTab"],
        i18n: {
            pinnedTab: "profileSetting-tabs-pinnedTab",
        },
    },
    "profileSetting.profileInitialTab": {
        all: ["tweets", "replies", "media", "likes"],
        i18n: {
            tweets: "profileSetting-profileInitialTab-tweet",
            replies: "profileSetting-profileInitialTab-reply",
            media: "profileSetting-profileInitialTab-media",
            likes: "profileSetting-profileInitialTab-likes",
        },
    },
    "profileSetting.invisible": {
        all: ["subscribe-profile", "profileHighlights", "profileAffiliates", "verifiedFollowerTab"],
        i18n: {
            "subscribe-profile": "invisibleItems-subscribeProfile",
            profileHighlights: "invisibleItems-profileHighlights",
            profileAffiliates: "invisibleItems-profileAffiliates",
            verifiedFollowerTab: "invisibleItems-verifiedFollowerTab",
        },
    },

    // 非表示設定
    invisibleItems: {
        all: ["config-premium", "hideBelowDM", "verifiedNotifications"],
        i18n: {
            "config-premium": "invisibleItems-configPremium",
            hideBelowDM: "invisibleItems-hideBelowDM",
            verifiedNotifications: "invisibleItems-verifiedNotifications",
        },
    },

    // タイムラインの設定
    timeline: {
        all: ["osusume-user-timeline", "hideOhterRTTL", "hideReply", "accountStart"],
        i18n: {
            "osusume-user-timeline": "timeline-osusumeUsersOnTL",
            hideOhterRTTL: "timeline-hideOhterRTTL",
            hideReply: "timeline-hideReply",
            accountStart: "timeline-accountStart",
        },
    },

    // X → Twitterの設定
    XToTwitter: {
        all: ["XToTwitter", "PostToTweet"],
        i18n: { XToTwitter: "XtoTwitter-XtoTwitter", PostToTweet: "XtoTwitter-PostToTweet" },
    },

    // 右サイドバーの設定
    rightSidebar: {
        all: ["searchBox", "verified", "space", "relevantPeople", "trend", "osusumeUser", "links"],
        i18n: {
            verified: "rightSidebar-rightSidebarVerified",
            trend: "rightSidebar-trend",
            osusumeUser: "rightSidebar-osusumeUser",
            links: "rightSidebar-links",
            searchBox: "rightSidebar-searchBox",
            space: "rightSidebar-space",
            relevantPeople: "rightSidebar-relevantPeople",
        },
    },

    // ツイート投稿画面の設定
    composetweet: {
        all: ["hideDraft"],
        i18n: {
            hideDraft: "composetweet-hideDraft",
        },
    },

    // DMの設定
    dmPage: {
        all: ["showIcon"],
        i18n: {
            showIcon: "dmPage-showIcon",
        },
    },

    // その他の設定
    uncategorizedSettings: {
        all: ["disableBackdropFilter"],
        i18n: {
            disableBackdropFilter: "uncategorizedSettings-disableBackdropFilter",
        },
    },
};

config = JSON.parse(localStorage.getItem("TUIC") ?? JSON.stringify(defaultPref));
