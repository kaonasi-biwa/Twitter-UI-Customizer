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
                    getPref("visibleButtons").filter((elem) => elem != "downvote-button"),
                );
            }
            if (typeof getPref("sidebarButtons") == "object" && (~getPref("sidebarButtons").indexOf("verified-orgs-signup") || ~getPref("sidebarButtons").indexOf("twiter-blue") || ~getPref("sidebarButtons").indexOf("sidebarButtons-circles"))) {
                setPref(
                    "sidebarButtons",
                    getPref("sidebarButtons").filter((elem) => elem != "sidebarButtons-circles" && elem != "twiter-blue" && elem != "verified-orgs-signup"),
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

config = JSON.parse(localStorage.getItem("TUIC") ?? JSON.stringify(defaultPref));
