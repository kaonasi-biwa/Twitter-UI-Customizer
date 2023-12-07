import { applySystemCss } from "./applyCSS.ts";
import { TUICData } from "./data.ts";
import { TUICObserver } from "./observer.ts";

// NOTE: mjsへの置き換えがさらに進んだとき、ここはTUICPrefと同じファイルに移行します
const getPointerFromKey = (object, key) => {
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

export const TUICLibrary = {
    color: {
        rgb2hex: (rgb) => {
            return `#${rgb
                .map((value) => {
                    return ("0" + value.toString(16)).slice(-2);
                })
                .join("")}`;
        },
        hex2rgb: (hex) => {
            if (hex.slice(0, 1) == "#") hex = hex.slice(1);
            return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) => {
                return parseInt(str, 16);
            });
        },
        getColorFromPref: (name: string, type: string, mode: "buttonColor" | "buttonColorLight" | "buttonColorDark" | null) => {
            let _mode = "";
            _mode = mode ? mode : TUICLibrary.backgroundColorCheck() == "light" ? "buttonColorLight" : "buttonColorDark";
            return TUICPref.get(`${_mode}.${name}.${type}`) ?? TUICData?.["colors-" + _mode]?.[name]?.[type] ?? TUICPref.get(`buttonColor.${name}.${type}`) ?? TUICData.colors[name][type];
        },
    },
    getClasses: {
        update: () => {
            TUICObserver.observer.disconnect();
            TUICLibrary.getClasses.deleteClasses();
            applySystemCss();
            TUICObserver.observerFunction(null);
        },
        deleteClasses: () => {
            for (const id of TUICLibrary.getClasses.idList) {
                let elem = document.querySelector("." + id);
                while (elem) {
                    elem.classList.remove(id);
                    elem = document.querySelector("." + id);
                } /*
                for (const elem of document.getElementsByClassName(id)) {
                    elem.classList.remove(id);
                }*/
            }
        },
        idList: [
            "NOT_TUIC_DISPNONE",
            "TUIC_DISPNONE",
            "TUIC_DISPNONE_PARENT",
            "TUIC_SVGDISPNONE",
            "TUIC_NOTSVGDISPNONE",
            "TUIC_DISCOVERMORE",
            "TUIC_DISCOVERHEADER",
            "TUIC_ISNOTDEFAULT",
            "TUIC_NONE_SPACE_BOTTOM_TWEET",
            "TUIC_TWEETREPLACE",
            "TUIC_UnderTweetButton",
            "TUICDidArticle",
            "TUICDidInfoArticle",
            "TUICItIsBigArticle",
            "TUICItIsBigArticlePhoto",
            "TUICTweetButtomBarBase",
            "TUICTwitterIcon_Twitter",
            "TUICTwitterIcon_X",
            "TUICTwitterIcon_Dog",
            "TUICTwitterIcon_IconImg",
            "TUICScrollBottom",
        ],
    },
    updatePref: {
        update: async () => {
            if (localStorage.getItem("unsent-tweet-background")) {
                TUICLibrary.updatePref.parallelToSerial();
            }

            if (typeof TUICPref.get("timeline") != "object") TUICPref.set("timeline", {});

            if (typeof TUICPref.get("rightSidebar") != "object") TUICPref.set("rightSidebar", {});

            if (typeof TUICPref.get("XToTwitter") != "object") TUICPref.set("XToTwitter", {});

            if (typeof TUICPref.get("clientInfo") == "object") TUICPref.delete("clientInfo");

            /**
             * boolean 値の設定キーを変更します。
             *
             * 値が truthy であれば `replaceValue` に、値が falsy であればキーを変更せず古いキーの削除だけを行います。
             * @param {string} previousKey 変更元のキー
             * @param {string} nextKey 変更先のキー
             * @param {any} replaceValue 置き換える値
             */
            const changeBooleanKey = (previousKey: string, nextKey: string, replaceValue: string | boolean = true) => {
                if (TUICPref.get(previousKey) === true) TUICPref.set(nextKey, replaceValue);
                TUICPref.delete(previousKey);
            };

            changeBooleanKey("invisibleItems.osusume-user-timeline", "timeline.osusume-user-timeline");
            changeBooleanKey("invisibleItems.hideOhterRTTL", "timeline.hideOhterRTTL");
            changeBooleanKey("invisibleItems.discoverMore", "timeline-discoverMore", "discoverMore_invisible");
            changeBooleanKey("invisibleItems.verified-rSidebar", "rightSidebar.verified");
            changeBooleanKey("otherBoolSetting.invisibleTwitterLogo", "twitterIcon", "invisible");
            changeBooleanKey("otherBoolSetting.XtoTwitter", "XToTwitter.XToTwitter");
            changeBooleanKey("otherBoolSetting.PostToTweet", "XToTwitter.PostToTweet");
            changeBooleanKey("invisibleItems.twitter-pro-promotion-btn", "tweetDisplaySetting.twitter-pro-promotion-btn");
            changeBooleanKey("invisibleItems.subscribe-tweets", "tweetDisplaySetting.subscribe-tweets");
            changeBooleanKey("otherBoolSetting.bottomScroll", "tweetDisplaySetting.bottomScroll");
            changeBooleanKey("otherBoolSetting.bottomSpace", "tweetDisplaySetting.bottomSpace");
            changeBooleanKey("otherBoolSetting.RTNotQuote", "tweetDisplaySetting.RTNotQuote");
            changeBooleanKey("otherBoolSetting.noModalbottomTweetButtons", "tweetDisplaySetting.noModalbottomTweetButtons");
            changeBooleanKey("otherBoolSetting.noNumberBottomTweetButtons", "tweetDisplaySetting.noNumberBottomTweetButtons");

            changeBooleanKey("invisibleItems.subscribe-profile", "profileSetting.invisible.subscribe-profile");
            changeBooleanKey("invisibleItems.profileHighlights", "profileSetting.invisible.profileHighlights");
            changeBooleanKey("invisibleItems.profileAffiliates", "profileSetting.invisible.profileAffiliates");
            changeBooleanKey("invisibleItems.verifiedFollowerTab", "profileSetting.invisible.verifiedFollowerTab");

            changeBooleanKey("otherBoolSetting.smallerSidebarContent", "sidebarSetting.buttonConfig.smallerSidebarContent");
            changeBooleanKey("otherBoolSetting.sidebarNoneScrollbar", "sidebarSetting.buttonConfig.sidebarNoneScrollbar");
            if (TUICPref.get("CSS")) localStorage.setItem("TUIC_CSS", TUICPref.get("CSS"));
            TUICPref.set("CSS", null);

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
                        context.drawImage(this, 0, 0, this.naturalHeight, this.naturalWidth, 0, 0, 200, 200);
                        localStorage.setItem("TUIC_IconImg_Favicon", element.toDataURL());
                        resolve(null);
                    };
                    image.src = localStorage.getItem(`TUIC_IconImg`);
                });
            }

            if (typeof TUICPref.get("visibleButtons") == "object" && ~TUICPref.get("visibleButtons").indexOf("downvote-button")) {
                TUICPref.set(
                    "visibleButtons",
                    TUICPref.get("visibleButtons").filter((elem) => elem != "downvote-button"),
                );
            }
            if (typeof TUICPref.get("sidebarButtons") == "object" && (~TUICPref.get("sidebarButtons").indexOf("verified-orgs-signup") || ~TUICPref.get("sidebarButtons").indexOf("twiter-blue"))) {
                TUICPref.set(
                    "sidebarButtons",
                    TUICPref.get("sidebarButtons").filter((elem) => elem != "twiter-blue" && elem != "verified-orgs-signup"),
                );
            }

            TUICPref.set("", TUICLibrary.updatePref.merge(structuredClone(TUICPref.defaultPref), structuredClone(TUICPref.get(""))));
        },
        parallelToSerial: () => {
            TUICPref.set("CSS", localStorage.getItem("CSS"));
            TUICPref.set("invisibleItems.osusume-user-timeline", (localStorage.getItem("osusume-user-timeline") ?? "0") === "1");
            TUICPref.set("visibleButtons", JSON.parse(localStorage.getItem("visible-button")));
            for (const i of TUICData.settings.colors.id) {
                const a = localStorage.getItem(`${i}-background`) ?? "unknown";
                if (a != "unknown") {
                    TUICPref.set("buttonColor." + i, {
                        background: a,
                        border: localStorage.getItem(`${i}-border`),
                        color: localStorage.getItem(`${i}-color`),
                    });
                }
            }

            localStorage.removeItem("unsent-tweet-background");
            localStorage.removeItem("unsent-tweet-border");
            localStorage.removeItem("unsent-tweet-color");
            localStorage.removeItem("not-following-background");
            localStorage.removeItem("not-following-border");
            localStorage.removeItem("not-following-color");
            localStorage.removeItem("following-background");
            localStorage.removeItem("following-border");
            localStorage.removeItem("following-color");
            localStorage.removeItem("un-following-background");
            localStorage.removeItem("un-following-border");
            localStorage.removeItem("un-following-color");
            localStorage.removeItem("profile-background");
            localStorage.removeItem("profile-border");
            localStorage.removeItem("profile-color");
            localStorage.removeItem("profile-save-background");
            localStorage.removeItem("profile-save-border");
            localStorage.removeItem("profile-save-color");
            localStorage.removeItem("birthday-background");
            localStorage.removeItem("birthday-border");
            localStorage.removeItem("birthday-color");
            localStorage.removeItem("profile-link-background");
            localStorage.removeItem("profile-link-border");
            localStorage.removeItem("profile-link-color");

            localStorage.removeItem("reply-button");
            localStorage.removeItem("retweet-button");
            localStorage.removeItem("like-button");
            localStorage.removeItem("downvote-button");
            localStorage.removeItem("share-button");
            localStorage.removeItem("tweet_analytics");
            localStorage.removeItem("visible-button");
            localStorage.removeItem("osusume-user-timeline");
            localStorage.removeItem("CSS");

            TUICPref.save();
        },
        /**
         * `target` に `source` をマージします。 `target` オブジェクトは上書きされます。
         * @param {object} source マージ元
         * @param {object} target マージ先
         */
        merge: (source, target) => {
            for (const i in source) {
                if (!(i in target)) {
                    target[i] = source[i];
                } else if (typeof source[i] == "object" && !Array.isArray(source[i])) {
                    TUICLibrary.updatePref.merge(source[i], target[i]);
                }
            }
            return target;
        },
    },
    getPrimitiveOrFunction: (functionOrPrimitive) => {
        if (typeof functionOrPrimitive == "function") {
            return functionOrPrimitive();
        } else {
            return functionOrPrimitive;
        }
    },
    backgroundColorCheck: () => {
        const bodyStyle = document.querySelector("body").style.backgroundColor.toString();
        if (bodyStyle == "rgb(0, 0, 0)") {
            return "dark";
        } else if (bodyStyle == "rgb(21, 32, 43)") {
            return "blue";
        } else {
            return "light";
        }
    },
    backgroundColorClass: (dark, blue, white) => {
        const backgroundType = TUICLibrary.backgroundColorCheck();
        if (backgroundType == "dark") {
            return dark;
        } else if (backgroundType == "blue") {
            return blue;
        } else {
            return white;
        }
    },
    fontSizeClass: (x1, x2, x3, x4, x5) => {
        const fontSize = document.querySelector("html").style.fontSize.toString();
        if (fontSize == "17px") {
            return x4;
        } else if (fontSize == "18px") {
            return x5;
        } else if (fontSize == "15px") {
            return x3;
        } else if (fontSize == "14px") {
            return document.querySelector(`h1[role="heading"] > a[href="/home"]`)?.className.includes("r-116um31") ? x1 : x2;
        }
    },
    HTMLParse: (elem) => {
        return new DOMParser().parseFromString(elem, "text/html").body.children;
    },
    // escapeToUseHTML: (text) => {
    //     return text
    //         .replace(/[&'`"<>=;]/g, (match) => {
    //             return {
    //                 "&": "&amp;",
    //                 "'": "&#x27;",
    //                 "`": "&#x60;",
    //                 '"': "&quot;",
    //                 "<": "&lt;",
    //                 ">": "&gt;",
    //                 "=": "&equals;",
    //                 ";": "&semi;",
    //             }[match];
    //         })
    //         .replaceAll("\\r", "\r");
    // },
    waitForElement: async (selector: string): Promise<Element[]> => {
        if (document.querySelectorAll(selector).length !== 0) {
            return Array.from(document.querySelectorAll(selector));
        } else {
            return new Promise((resolve) => {
                const observer = new MutationObserver((mutations) => {
                    const matchedAddedNodes = document.querySelectorAll(selector);
                    if (matchedAddedNodes.length !== 0) {
                        observer.disconnect();
                        resolve([...matchedAddedNodes]);
                    }
                });
                observer.observe(document.querySelector("html"), { subtree: true, childList: true });
            });
        }
    },
};

export const TUICPref = {
    get: function (identifier) {
        const { object, key } = getPointerFromKey(this.config, identifier);
        return object[key];
    },
    set: function (identifier, value) {
        if (identifier == "") {
            this.config = value;
        } else {
            const { object, key } = getPointerFromKey(this.config, identifier);
            object[key] = value;
        }
    },
    delete: function (identifier) {
        const { object, key } = getPointerFromKey(this.config, identifier);
        delete object[key];
    },
    save: function () {
        localStorage.setItem("TUIC", JSON.stringify(this.config));
    },
    import: function (object) {
        if (typeof object === "string") {
            this.config = JSON.parse(object);
        } else {
            this.config = object;
        }
    },
    export: function () {
        return JSON.stringify(this.config);
    },
    defaultPref: {
        buttonColor: {},
        buttonColorLight: {},
        buttonColorDark: {},
        visibleButtons: ["reply-button", "retweet-button", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"],
        sidebarButtons: ["home", "explore", "communities", "notifications", "messages", "lists", "bookmarks", "profile", "moremenu"],
        fixEngagements: ["likes", "retweets", "quotes"],
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
        },
        otherBoolSetting: {
            roundIcon: true,
            faviconSet: false,
            placeEngagementsLink: false,
            placeEngagementsLinkShort: false,
            showLinkCardInfo: true,
        },
        sidebarSetting: {
            buttonConfig: {
                smallerSidebarContent: true,
                sidebarNoneScrollbar: false,
                birdGoBackHome: false,
            },
        },
        XToTwitter: { XToTwitter: false, PostToTweet: false },
        timeline: {
            "osusume-user-timeline": false,
            hideOhterRTTL: false,
            accountStart: false,
        },
        twitterIcon: "nomal",
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
        "timeline-discoverMore": "discoverMore_nomal",
    },
    config: null,
};
TUICPref.config = JSON.parse(localStorage.getItem("TUIC") ?? JSON.stringify(TUICPref.defaultPref));
