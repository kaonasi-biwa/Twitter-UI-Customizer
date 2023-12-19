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

String.prototype.escapeToUseHTML = function () {
    return TUICLibrary.escapeToUseHTML(this);
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
            "TUICDMIcon",
            "TUICHandledEvent",
        ],
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
    waitForElement: async (selector: string, parentElement: ParentNode = document): Promise<Element[]> => {
        if (parentElement.querySelectorAll(selector).length !== 0) {
            return Array.from(parentElement.querySelectorAll(selector));
        } else {
            return new Promise((resolve) => {
                const observer = new MutationObserver((mutations) => {
                    const matchedAddedNodes = parentElement.querySelectorAll(selector);
                    if (matchedAddedNodes.length !== 0) {
                        observer.disconnect();
                        resolve([...matchedAddedNodes]);
                    }
                });
                observer.observe(parentElement, { subtree: true, childList: true });
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
    /**
     * `target` に `source` をマージします。 `target` オブジェクトは上書きされます。
     * @param {object} source マージ元
     * @param {object} target マージ先
     */
    merge: function (source, target) {
        for (const i in source) {
            if (!(i in target)) {
                target[i] = source[i];
            } else if (typeof source[i] == "object" && !Array.isArray(source[i])) {
                this.merge(source[i], target[i]);
            }
        }
        return target;
    },
    update: async function () {
        if (localStorage.getItem("unsent-tweet-background")) {
            this.parallelToSerial();
        }

        if (typeof this.get("timeline") != "object") this.set("timeline", {});

        if (typeof this.get("rightSidebar") != "object") this.set("rightSidebar", {});

        if (typeof this.get("XToTwitter") != "object") this.set("XToTwitter", {});

        if (typeof this.get("clientInfo") == "object") this.delete("clientInfo");

        /**
         * boolean 値の設定キーを変更します。
         *
         * 値が truthy であれば `replaceValue` に、値が falsy であればキーを変更せず古いキーの削除だけを行います。
         * @param {string} previousKey 変更元のキー
         * @param {string} nextKey 変更先のキー
         * @param {any} replaceValue 置き換える値
         */
        const changeBooleanKey = (previousKey: string, nextKey: string, replaceValue: string | boolean = true) => {
            if (this.get(previousKey) === true) this.set(nextKey, replaceValue);
            this.delete(previousKey);
        };

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
        };
        for (const oldKey in boolKeys) {
            changeBooleanKey(oldKey, boolKeys[oldKey]);
        }

        changeBooleanKey("invisibleItems.discoverMore", "timeline-discoverMore", "discoverMore_invisible");
        changeBooleanKey("otherBoolSetting.invisibleTwitterLogo", "twitterIcon", "invisible");

        if (this.get("CSS")) localStorage.setItem("TUIC_CSS", this.get("CSS"));
        this.set("CSS", null);

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

        if (typeof this.get("visibleButtons") == "object" && ~this.get("visibleButtons").indexOf("downvote-button")) {
            this.set(
                "visibleButtons",
                this.get("visibleButtons").filter((elem) => elem != "downvote-button"),
            );
        }
        if (typeof this.get("sidebarButtons") == "object" && (~this.get("sidebarButtons").indexOf("verified-orgs-signup") || ~this.get("sidebarButtons").indexOf("twiter-blue") || ~this.get("sidebarButtons").indexOf("sidebarButtons-circles"))) {
            this.set(
                "sidebarButtons",
                this.get("sidebarButtons").filter((elem) => elem != "sidebarButtons-circles" && elem != "twiter-blue" && elem != "verified-orgs-signup"),
            );
        }

        this.set("", this.merge(structuredClone(this.defaultPref), structuredClone(this.get(""))));
    },
    parallelToSerial: function () {
        this.set("CSS", localStorage.getItem("CSS"));
        this.set("invisibleItems.osusume-user-timeline", (localStorage.getItem("osusume-user-timeline") ?? "0") === "1");
        this.set("visibleButtons", JSON.parse(localStorage.getItem("visible-button")));
        for (const i of TUICData.settings.colors.id) {
            const a = localStorage.getItem(`${i}-background`) ?? "unknown";
            if (a != "unknown") {
                this.set("buttonColor." + i, {
                    background: a,
                    border: localStorage.getItem(`${i}-border`),
                    color: localStorage.getItem(`${i}-color`),
                });
            }
        }

        for (const pref of [
            "unsent-tweet-background",
            "unsent-tweet-border",
            "unsent-tweet-color",
            "not-following-background",
            "not-following-border",
            "not-following-color",
            "following-background",
            "following-border",
            "following-color",
            "un-following-background",
            "un-following-border",
            "un-following-color",
            "profile-background",
            "profile-border",
            "profile-color",
            "profile-save-background",
            "profile-save-border",
            "profile-save-color",
            "birthday-background",
            "birthday-border",
            "birthday-color",
            "profile-link-background",
            "profile-link-border",
            "profile-link-color",
            "reply-button",
            "retweet-button",
            "like-button",
            "downvote-button",
            "share-button",
            "tweet_analytics",
            "visible-button",
            "osusume-user-timeline",
            "CSS",
        ]) {
            localStorage.removeItem(pref);
        }
        this.save();
    },
    defaultPref: {
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
            moreMenuItems: {
                boolmarks: false,
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
        dmPage: {
            showIcon: false,
        },
        "timeline-discoverMore": "discoverMore_nomal",
    },
    config: null,
};
TUICPref.config = JSON.parse(localStorage.getItem("TUIC") ?? JSON.stringify(TUICPref.defaultPref));
