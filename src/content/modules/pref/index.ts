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
const changeBooleanKey = (previousKey: string, nextKey: string, source, replaceValue: string | boolean = true) => {
    if (getPref(previousKey) === true) setPref(nextKey, replaceValue, source);
    deletePref(previousKey, source);
};

export async function updatePref(source = config) {
    const prefVersion = getPref("prefVersion", source) ?? 0;
    switch (prefVersion) {
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
            if (typeof getPref("sidebarButtons", source) == "object" && (~getPref("sidebarButtons", source).indexOf("verified-orgs-signup") || ~getPref("sidebarButtons", source).indexOf("twiter-blue") || ~getPref("sidebarButtons", source).indexOf("sidebarButtons-circles"))) {
                setPref(
                    "sidebarButtons",
                    getPref("sidebarButtons", source).filter((elem: string) => elem != "sidebarButtons-circles" && elem != "twiter-blue" && elem != "verified-orgs-signup"),
                    source,
                );
            }
        }
    }
}

export function mergeDefaultPref(source) {
    return mergePref(structuredClone(defaultPref), structuredClone(source));
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

const ids: {
    [key: string]: { id: string; i18n: string }[];
} = {
    // 色の設定
    colors: [
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
    // ツイート関連の設定
    visibleButtons: [
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
    "tweetDisplaySetting.linkCopyURL": [
        { id: "linkCopyURL_twitter", i18n: "bottomTweetButtons-setting-linkCopyURL-twitter" },
        { id: "linkCopyURL_X", i18n: "bottomTweetButtons-setting-linkCopyURL-X" },
        { id: "linkCopyURL_vxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-vxTwitter" },
        { id: "linkCopyURL_fxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-fxTwitter" },
    ],
    "tweetDisplaySetting.linkShareCopyURL": [
        { id: "linkShareCopyURL_twitter", i18n: "bottomTweetButtons-setting-linkCopyURL-twitter" },
        { id: "linkShareCopyURL_X", i18n: "bottomTweetButtons-setting-linkCopyURL-X" },
        { id: "linkShareCopyURL_vxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-vxTwitter" },
        { id: "linkShareCopyURL_fxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-fxTwitter" },
    ],
    "timeline-discoverMore": [
        { id: "discoverMore_nomal", i18n: "timeline-discoverMore-nomal" },
        { id: "discoverMore_detailOpen", i18n: "timeline-discoverMore-detailOpen" },
        { id: "discoverMore_detailClose", i18n: "timeline-discoverMore-detailClose" },
        { id: "discoverMore_invisible", i18n: "timeline-discoverMore-invisible" },
    ],
    fixEngagements: [
        { id: "likes", i18n: "bottomTweetButtons-setting-placeEngagementsLink-likes-short" },
        { id: "retweets", i18n: "bottomTweetButtons-setting-placeEngagementsLink-retweets-short" },
        { id: "quotes", i18n: "bottomTweetButtons-setting-placeEngagementsLink-quotes-short" },
    ],
    tweetTopButton: [
        { id: "moreMenu", i18n: "sidebarButtons-moremenu" },
        { id: "block", i18n: "bottomTweetButtons-userBlock" },
        { id: "mute", i18n: "bottomTweetButtons-userMute" },
        { id: "delete", i18n: "bottomTweetButtons-deleteButton" },
        { id: "list", i18n: "tweetMoreMenuItems-addMemberOfList" },
        { id: "report", i18n: "XtoTwitter-PostToTweet-reportTweet" },
    ],
    "tweetDisplaySetting.tweetMoreMenuItems": [
        { id: "notHelpful", i18n: "tweetMoreMenuItems-notHelpful" },
        { id: "notInterested", i18n: "tweetMoreMenuItems-notInterested" },
        { id: "follow", i18n: "tweetMoreMenuItems-follow" },
        { id: "deleteTweet", i18n: "bottomTweetButtons-deleteButton" },
        { id: "highlighOnPin", i18n: "tweetMoreMenuItems-highlighOnPin" },
        { id: "highlightUpsell", i18n: "tweetMoreMenuItems-highlightUpsell" },
        { id: "addMemberOfList", i18n: "tweetMoreMenuItems-addMemberOfList" },
        { id: "userMute", i18n: "bottomTweetButtons-userMute" },
        { id: "muteTalk", i18n: "tweetMoreMenuItems-muteTalk" },
        { id: "leaveTalk", i18n: "tweetMoreMenuItems-leaveTalk" },
        { id: "block", i18n: "bottomTweetButtons-userBlock" },
        { id: "whoCanReply", i18n: "tweetMoreMenuItems-whoCanReply" },
        { id: "engagements", i18n: "tweetMoreMenuItems-engagements" },
        { id: "analytics", i18n: "bottomTweetButtons-tweetAnalytics" },
        { id: "embed", i18n: "XtoTwitter-PostToTweet-menu-embed" },
        { id: "report", i18n: "XtoTwitter-PostToTweet-reportTweet" },
        { id: "hiddenReply", i18n: "tweetMoreMenuItems-hiddenReply" },
        { id: "editWithTwitterBlue", i18n: "tweetMoreMenuItems-editWithTwitterBlue" },
    ],
    tweetDisplaySetting: [
        { id: "bottomSpace", i18n: "bottomTweetButtons-setting-removeSpaceBottomTweet-v2" },
        { id: "twitter-pro-promotion-btn", i18n: "invisibleItems-twitterProPromotionBtn" },
        { id: "subscribe-tweets", i18n: "invisibleItems-subscribeTweets" },
    ],

    // Twitterアイコンの設定
    "twitterIcon.icon": [
        { id: "nomal", i18n: "twitterIcon-normal" },
        { id: "invisible", i18n: "twitterIcon-invisible" },
        { id: "dog", i18n: "twitterIcon-dog" },
        { id: "twitter", i18n: "twitterIcon-twitter" },
        { id: "twitterIcon-X", i18n: "twitterIcon-X" },
        { id: "custom", i18n: "twitterIcon-custom" },
    ],
    "twitterIcon.options": [
        { id: "faviconSet", i18n: "twitterIcon-favicon" },
        { id: "roundIcon", i18n: "twitterIcon-roundIcon" },
    ],

    // サイドバーの設定
    sidebarButtons: [
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
    ],
    "sidebarSetting.buttonConfig": [
        { id: "smallerSidebarContent", i18n: "sidebarButton-setting-narrowBetweenButtons" },
        { id: "sidebarNoneScrollbar", i18n: "sidebarButton-setting-sidebarNoneScrollbar" },
    ],
    "sidebarSetting.homeIcon": [
        { id: "normal", i18n: "sidebarButton-homeIcon-normal" },
        { id: "birdGoBack", i18n: "sidebarButton-homeIcon-birdGoBack" },
        { id: "TUIC", i18n: "sidebarButton-homeIcon-TUIC" },
    ],
    accountSwitcher: [
        { id: "icon", i18n: "sidebarButton-accountSwitcher-Icon" },
        { id: "nameID", i18n: "sidebarButton-accountSwitcher-NameID" },
        { id: "moreMenu", i18n: "sidebarButton-accountSwitcher-MoreMenu" },
    ],
    "sidebarSetting.moreMenuItems": [
        { id: "premium", i18n: "sidebarButton-moreMenuItems-premium" },
        { id: "bookmarks", i18n: "sidebarButtons-bookmarks" },
        { id: "communities", i18n: "sidebarButtons-communities" },
        { id: "monetization", i18n: "sidebarButton-moreMenuItems-monetization" },
        { id: "pro", i18n: "sidebarButton-moreMenuItems-pro" },
        { id: "ads", i18n: "sidebarButton-moreMenuItems-ads" },
        { id: "settings", i18n: "sidebarButton-moreMenuItems-settings" },
        { id: "separator", i18n: "sidebarButton-moreMenuItems-separator" },
    ],

    // プロフィールの設定
    "profileSetting.tabs": [{ id: "pinnedTab", i18n: "profileSetting-tabs-pinnedTab" }],
    "profileSetting.profileInitialTab": [
        { id: "tweets", i18n: "profileSetting-profileInitialTab-tweet" },
        { id: "replies", i18n: "profileSetting-profileInitialTab-reply" },
        { id: "media", i18n: "profileSetting-profileInitialTab-media" },
        { id: "likes", i18n: "profileSetting-profileInitialTab-likes" },
    ],
    "profileSetting.invisible": [
        { id: "subscribe-profile", i18n: "invisibleItems-subscribeProfile" },
        { id: "profileHighlights", i18n: "invisibleItems-profileHighlights" },
        { id: "profileAffiliates", i18n: "invisibleItems-profileAffiliates" },
        { id: "verifiedFollowerTab", i18n: "invisibleItems-verifiedFollowerTab" },
    ],

    // 非表示設定
    invisibleItems: [
        { id: "config-premium", i18n: "invisibleItems-configPremium" },
        { id: "hideBelowDM", i18n: "invisibleItems-hideBelowDM" },
        { id: "verifiedNotifications", i18n: "invisibleItems-verifiedNotifications" },
    ],

    // タイムラインの設定
    timeline: [
        { id: "osusume-user-timeline", i18n: "timeline-osusumeUsersOnTL" },
        { id: "hideOhterRTTL", i18n: "timeline-hideOhterRTTL" },
        { id: "hideReply", i18n: "timeline-hideReply" },
        { id: "accountStart", i18n: "timeline-accountStart" },
    ],

    // X → Twitterの設定
    XToTwitter: [
        { id: "XToTwitter", i18n: "XtoTwitter-XtoTwitter" },
        { id: "PostToTweet", i18n: "XtoTwitter-PostToTweet" },
    ],

    // 右サイドバーの設定
    rightSidebar: [
        { id: "searchBox", i18n: "rightSidebar-searchBox" },
        { id: "verified", i18n: "rightSidebar-rightSidebarVerified" },
        { id: "space", i18n: "rightSidebar-space" },
        { id: "relevantPeople", i18n: "rightSidebar-relevantPeople" },
        { id: "trend", i18n: "rightSidebar-trend" },
        { id: "osusumeUser", i18n: "rightSidebar-osusumeUser" },
        { id: "links", i18n: "rightSidebar-links" },
    ],

    // ツイート投稿画面の設定
    composetweet: [{ id: "hideDraft", i18n: "composetweet-hideDraft" }],

    // DMの設定
    dmPage: [{ id: "showIcon", i18n: "dmPage-showIcon" }],

    // その他の設定
    uncategorizedSettings: [{ id: "disableBackdropFilter", i18n: "uncategorizedSettings-disableBackdropFilter" }],
};

/**
 * 指定した設定カテゴリーIDに基づいて値の一覧(CheckboxならCheckboxの全てのID、RadioBox/ListBoxなら値になりうるすべての値)を出力します
 *
 * @param {string} id 設定カテゴリーID
 * @return {string[]} 取得した値一覧
 */
export function getSettingIDs(id: string): string[] {
    return ids[id].map((elem) => elem.id);
}

/**
 * 指定した設定カテゴリーIDのデータ(全ての値についてのidとi18nをObjectとして羅列するArray)を出力します。
 *
 * @param {string} id 設定カテゴリーID
 * @return {{id:string,i18n:string}[]} 取得したデータ
 */
export function getSettingData(id: string): { id: string; i18n: string }[] {
    return ids[id];
}

/**
 * 指定した設定のi18nのIDを出力します。
 *
 * @param {string} id 設定カテゴリーID
 * @param {string} id 設定自体のID(設定カテゴリーIDを除く)
 * @return {string} i18nのID
 */
export function getSettingI18n(id: string, itemValue: string): string {
    return ids[id].filter((elem) => elem.id == itemValue)[0].i18n;
}

config = JSON.parse(localStorage.getItem("TUIC") ?? JSON.stringify(defaultPref));
