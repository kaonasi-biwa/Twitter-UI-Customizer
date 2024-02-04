import { TUICI18N } from "./i18n.ts";
import { TUICLibrary } from "./library.ts";
import { SIDEBAR_BUTTON_ICON } from "./icons";
import { TUICPref } from "./modules/index.ts";

import { buttonHTMLBase } from "./resources/index.ts";

export const TUICData = {
    defaultTwitterColor: {
        buttonColorLight: {
            "not-following": { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
            willFollow: { background: "rgba(39,44,48,1)", border: "rgba(39,44,48,1)", color: "rgba(255,255,255,1)" },
            following: { background: "rgba(255,255,255,0)", border: "rgba(207,217,222,1)", color: "rgba(15,20,25,1)" },
            "un-following": { border: "rgba(253,201,206,1)", color: "rgba(244,33,46,1)", background: "rgba(244,33,46,0.1)" },
            profile: { border: "rgba(207,217,222,1)", background: "rgba(255,255,255,0)", color: "rgba(15,20,25,1)" },
            birthday: { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
            "profile-save": { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
            "unsent-tweet": { background: "rgba(15,20,25,1)", border: "rgba(15,20,25,1)", color: "rgba(255,255,255,1)" },
        },
        buttonColorDark: {
            "not-following": { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(10,20,25,1)" },
            willFollow: { background: "rgba(215,219,220,1)", border: "rgba(215,219,220,1)", color: "rgba(10,20,25,1)" },
            following: { background: "rgba(255,255,255,0)", border: "rgba(83,100,113,1)", color: "rgba(239,244,245,1)" },
            "un-following": { border: "rgba(103,7,15,1)", color: "rgba(244,33,46,1)", background: "rgba(244,33,46,0.1)" },
            profile: { border: "rgba(83,100,113,1)", background: "rgba(255,255,255,0)", color: "rgba(239,243,244,1)" },
            birthday: { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(15,20,25,1)" },
            "profile-save": { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(15,20,25,1)" },
            "unsent-tweet": { background: "rgba(239,243,244,1)", border: "rgba(239,243,244,1)", color: "rgba(15,20,25,1)" },
        },
    },
    colors: {
        id: ["unsent-tweet", "not-following", "willFollow", "following", "un-following", "blocking", "blocking-unlock", "profile", "profile-save", "birthday", "twitterIcon", "twitterIconFavicon"],
        i18n: {
            "unsent-tweet": "settingColors-editUnsetTweet",
            willFollow: "settingColors-willFollowButton",
            "not-following": "settingColors-notFollowingButton",
            following: "settingColors-followingButton",
            "un-following": "settingColors-unfollowButton",
            profile: "settingColors-editProfile",
            "profile-save": "settingColors-saveProfile",
            birthday: "settingColors-finalDecideButton",
            blocking: "settingColors-blocking",
            "blocking-unlock": "settingColors-blockingUnlock",
            twitterIcon: "settingColors-twitterIcon",
            twitterIconFavicon: "settingColors-twitterIconFavicon",
        },
        "unsent-tweet": {
            background: "rgba(29, 161, 242, 1)",
            border: "rgba(29, 161, 242, 1)",
            color: "rgba(255, 255, 255, 1)",
        },
        "not-following": {
            background: "rgba(255, 255, 255, 0)",
            border: "rgba(29, 161, 242, 1)",
            color: "rgba(29, 161, 242, 1)",
        },
        willFollow: {
            background: "rgba(29, 161, 242, 1)",
            border: "rgba(29, 161, 242, 1)",
            color: "rgba(255, 255, 255, 1)",
        },
        following: {
            background: "rgba(29, 161, 242, 1)",
            border: "rgba(29, 161, 242, 1)",
            color: "rgba(255, 255, 255, 1)",
        },
        "un-following": {
            background: "rgba(255, 0, 0, 1)",
            border: "rgba(255, 0, 0, 1)",
            color: "rgba(255, 255, 255, 1)",
        },
        profile: {
            background: "rgba(255,255,255, 0)",
            border: "rgba(29, 161, 242, 1)",
            color: "rgba(29, 161, 242, 1)",
        },
        "profile-save": {
            background: "rgba(29, 161, 242, 1)",
            border: "rgba(29, 161, 242, 1)",
            color: "rgba(255, 255, 255, 1)",
        },
        birthday: {
            background: "rgba(255, 0, 0, 1)",
            border: "rgba(255, 0, 0, 1)",
            color: "rgba(255, 255, 255, 1)",
        },
        blocking: {
            background: "rgba(244, 33, 46, 1)",
            border: "rgba(244, 33, 46, 1)",
            color: "rgba(255, 255, 255, 1)",
        },
        "blocking-unlock": {
            background: "rgba(220, 30, 41, 1)",
            border: "rgba(220, 30, 41, 1)",
            color: "rgba(255, 255, 255, 1)",
        },
        twitterIcon: {
            color: "rgba(29, 161, 242, 1)",
            typeColor: "imageColor",
            ldColor: true,
        },
        twitterIconFavicon: {
            color: "rgba(29, 161, 242, 1)",
            typeColor: "imageColor",
        },
    },
    "colors-buttonColorDark": {
        twitterIcon: {
            color: "rgba(255, 255, 255, 1)",
        },
    },
    "colors-buttonColorLight": {
        twitterIcon: {
            color: "rgba(29, 161, 242, 1)",
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

        selector: {
            moreMenu: `[data-testid="caret"]`,
            block: `[TUICTweetTopButton="block"]`,
            mute: `[TUICTweetTopButton="mute"]`,
            delete: `[TUICTweetTopButton="delete"]`,
        },
        buttonElement: {
            _base: function (type, svg, disable = false, redButton = false) {
                return `
<div role="button" tabindex="${disable ? -1 : 0}" class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr${disable ? "" : " r-1loqt21"} r-1ny4l3l TUICTweetTopButton TUICOriginalContent ${disable ? "r-icoktb" : "css-18t94o4"}" TUICTweetTopButton="${type}">
    <div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-37j5jr ${TUICLibrary.fontSizeClass("r-1b43r93", "r-1b43r93", "r-a023e6", "r-1inkyih", "r-1i10wst")} r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q" style="text-overflow: unset; color: rgb(139, 152, 165);">
        <div class="css-175oi2r r-xoduu5">
            <div class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l TUIC_ButtonHover"></div>
            <svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} ${redButton ? "TUIC_DeleteButton" : ""}">
                <g>
                    ${svg}
                </g>
            </svg>
        </div>
    </div>
</div>
                `;
            },
            block: function (moremenu, info) {
                const elem = TUICLibrary.HTMLParse(
                    TUICData.tweetTopButton.buttonElement._base(
                        "block",
                        `<path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" class="TUIC_USERBLOCK"></path>`,
                        info.isMe,
                    ),
                ).item(0) as HTMLDivElement;
                if (!info.isMe) {
                    const eventFunc = async () => {
                        for (let i = 0; i <= 2; i++) {
                            const blockButton = document.querySelector<HTMLDivElement>(`[data-testid="block"][role="menuitem"]`);
                            if (blockButton == null) {
                                moremenu.click();
                            } else {
                                blockButton.click();
                                await TUICLibrary.waitForElement(`[data-testid="confirmationSheetConfirm"]`);
                                if (TUICPref.getPref("tweetTopButtonBool.noModalbottomTweetButtons")) {
                                    document.querySelector<HTMLButtonElement>(`[data-testid="confirmationSheetConfirm"]`).click();
                                } else {
                                    document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (e) => {
                                        moremenu.click();
                                    });
                                    document.querySelector(`[data-testid="mask"]`).addEventListener("click", (e) => {
                                        moremenu.click();
                                    });
                                }
                                break;
                            }
                        }
                    };

                    elem.addEventListener("keydown", (e) => {
                        if (e.key === "Enter") {
                            eventFunc();
                        }
                    });
                    elem.children[0].addEventListener("click", (e) => {
                        eventFunc();
                    });
                }

                return elem;
            },
            mute: function (moremenu, info) {
                const elem = TUICLibrary.HTMLParse(
                    TUICData.tweetTopButton.buttonElement._base(
                        "mute",
                        `<path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z" class="TUIC_USERMUTE"></path>`,
                        info.isMe,
                    ),
                ).item(0) as HTMLDivElement;

                if (!info.isMe) {
                    const eventFunc = async () => {
                        for (let i = 0; i <= 2; i++) {
                            const blockButton = document.querySelector(
                                `[role="menuitem"] [d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"]`,
                            );
                            if (blockButton == null) {
                                moremenu.click();
                            } else {
                                blockButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                                break;
                            }
                        }
                    };

                    elem.addEventListener("keydown", (e) => {
                        if (e.key === "Enter") {
                            eventFunc();
                        }
                    });
                    elem.children[0].addEventListener("click", (e) => {
                        eventFunc();
                    });
                }

                return elem;
            },
            delete: function (moremenu, info) {
                const elem = TUICLibrary.HTMLParse(
                    TUICData.tweetTopButton.buttonElement._base(
                        "delete",
                        `<path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z" class="TUIC_DeleteButton"></path>`,
                        !info.isMe,
                        true,
                    ),
                ).item(0) as HTMLDivElement;

                if (info.isMe) {
                    const eventFunc = async () => {
                        for (const i of [0, 1, 2]) {
                            const blockButton = document.querySelector(
                                `[role="menuitem"] [d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"]`,
                            );
                            if (blockButton == null) {
                                moremenu.click();
                            } else {
                                blockButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                                const elems = await TUICLibrary.waitForElement<HTMLButtonElement>(`button[data-testid="confirmationSheetConfirm"]`);
                                if (TUICPref.getPref("tweetTopButtonBool.noModalbottomTweetButtons")) {
                                    elems[0].click();
                                } else {
                                    document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (_) => {
                                        moremenu.click();
                                    });
                                    document.querySelector(`[data-testid="mask"]`).addEventListener("click", (_) => {
                                        moremenu.click();
                                    });
                                }
                                break;
                            }
                        }
                    };

                    elem.addEventListener("keydown", (e) => {
                        if (e.key === "Enter") {
                            eventFunc();
                        }
                    });
                    elem.children[0].addEventListener("click", (e) => {
                        eventFunc();
                    });
                }

                return elem;
            },
        },
    },
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
        selectors: {
            "reply-button": '[data-testid$="reply"]:not([data-testid*="UserAvatar-Container-"])',
            "retweet-button": '[data-testid$="retweet"]:not([data-testid*="UserAvatar-Container-"])',
            "like-button": '[data-testid$="like"]:not([data-testid*="UserAvatar-Container-"])',
            "share-button": '[aria-haspopup="menu"]:not([data-testid="retweet"]):not([data-testid="unretweet"])',
            tweet_analytics: '[href$="/analytics"],[d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"]',
            boolkmark: `[TUICButton="bookmark"],[data-testid="bookmark"]:not([data-testid*="UserAvatar-Container-"]),[data-testid="removeBookmark"]:not([data-testid*="UserAvatar-Container-"])`,
            "url-copy": `[TUICButton="urlCopy"]`,
            userBlock: `[TUICButton="userBlock"]`,
            userMute: `[TUICButton="userMute"]`,
            quoteTweet: `[TUICButton="quoteTweet"]`,
            deleteButton: `[TUICButton="deleteButton"]`,
            sendDM: `[TUICButton="sendDM"]`,
            likeAndRT: `[TUICButton="likeAndRT"]`,
        },
        buttonHTML: {
            _base: function (id: string, svg, isBigArticle: boolean, disable = false, redButton = false) {
                const tabindex = disable ? "-1" : "0";
                const clazzDir = disable ? "r-icoktb" : "css-18t94o4";
                const clazzLtr = TUICLibrary.fontSizeClass("r-1b43r93", "r-1b43r93", "r-rjixqe", "r-1inkyih", "r-1i10wst");
                const clazzSVG = `${isBigArticle ? "r-1srniue r-50lct3" : "r-1xvli5t"}${redButton ? " r-9l7dzd" : ""} ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")}`;
                return buttonHTMLBase.replaceAll("${id}", id).replaceAll("${tabindex}", tabindex).replaceAll("${clazzDir}", clazzDir).replaceAll("${clazzSVG}", clazzSVG).replaceAll("${clazzLtr}", clazzLtr).replaceAll("${svg}", svg);
            },
            _svg: function (svg: string) {
                return `
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1q142lx r-dnmrzs r-bnwqim r-1plcrui r-lrvibr \${clazzSVG}">
                <g>${svg}</g>
            </svg>`;
            },
            /*boolkmark: function (isBigArticle) {
                return TUICData.visibleButtons.buttonHTML._base("bookmark", `<path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" class="TUIC_BOOKMARK"></path>`, isBigArticle);
            },*/
            "url-copy": function (isBigArticle: boolean) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "urlCopy",
                    TUICData.visibleButtons.buttonHTML._svg(
                        `<path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" class="TUIC_URL"></path>`,
                    ),
                    isBigArticle,
                );
            },
            userBlock: function (isBigArticle: boolean, isMe: boolean) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "userBlock",
                    TUICData.visibleButtons.buttonHTML._svg(
                        `<path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" class="TUIC_USERBLOCK"></path>`,
                    ),
                    isBigArticle,
                    isMe,
                );
            },
            userMute: function (isBigArticle: boolean, isMe: boolean) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "userMute",
                    TUICData.visibleButtons.buttonHTML._svg(
                        `<path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z" class="TUIC_USERMUTE"></path>`,
                    ),
                    isBigArticle,
                    isMe,
                );
            },
            quoteTweet: function (isBigArticle: boolean, locked: boolean) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "quoteTweet",
                    TUICData.visibleButtons.buttonHTML._svg(
                        `<path d="M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" class="TUIC_QuoteTweet"></path>`,
                    ),
                    isBigArticle,
                    locked,
                );
            },
            likeAndRT: function (isBigArticle: boolean, disable: boolean) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "likeAndRT",
                    TUICData.visibleButtons.buttonHTML._svg(
                        `<path d="M4.08401 2.728C3.15837 3.59826 1.4159 5.23274 0.490263 6.103C0.829176 6.46556 1.40773 7.02852 1.74026 7.38425C1.82549 7.30812 3.14651 6.103 3.14651 6.103C3.14651 6.103 3.14651 10.6835 3.14651 12.1342C3.14651 13.8926 4.60559 15.2905 6.36526 15.2905L8.49026 15.2905C9.6168 17.2188 11.666 19.2558 15.0528 21.228L15.459 21.478L15.8653 21.228C19.3912 19.1743 21.5272 17.0378 22.6153 15.0405C23.7106 13.0271 23.7431 11.1545 23.0215 9.69675C22.3071 8.25513 20.9077 7.33979 19.334 7.25925C18.3272 7.20433 17.3131 7.60726 16.3653 8.25925L16.3653 6.07175C16.3653 4.31345 14.9374 2.88425 13.1778 2.88425C12.158 2.88425 9.00477 2.88425 8.86526 2.88425C8.86526 3.3764 8.86526 4.19202 8.86526 4.69675C9.00477 4.69675 12.158 4.69675 13.1778 4.69675C13.9268 4.69675 14.5528 5.31895 14.5528 6.07175L14.5528 8.25925C13.605 7.60726 12.5914 7.20434 11.584 7.25925C10.0103 7.33979 8.57963 8.25513 7.86526 9.69675C7.33532 10.7673 7.41929 12.0997 7.83401 13.5092C7.2945 13.5093 6.7014 13.5093 6.36526 13.5092C5.61267 13.5092 4.99026 12.8843 4.99026 12.1342C4.99026 10.6756 4.99026 6.07175 4.99026 6.07175C4.99026 6.07175 6.34386 7.3065 6.42776 7.38425C6.76029 7.02852 7.3076 6.46556 7.64651 6.103C6.72087 5.23274 5.00965 3.59826 4.08401 2.728ZM11.6778 9.0405C12.5116 8.99504 13.4097 9.38669 14.1778 10.1655L15.459 11.4467L16.7403 10.1655C17.1236 9.77649 17.534 9.48018 17.959 9.2905C18.384 9.10082 18.8235 9.01777 19.2403 9.0405C20.1731 9.08825 20.9759 9.62921 21.3965 10.478C21.8726 11.4397 21.8082 12.7506 21.0215 14.1967C20.094 15.8993 18.1968 17.6411 15.459 19.3217C12.7301 17.6493 10.8296 15.8758 9.89651 14.1655C9.11086 12.7213 9.01387 11.4404 9.49026 10.478C9.91054 9.62986 10.751 9.08793 11.6778 9.0405Z" class="TUIC_QuoteTweet"></path>`,
                    ),
                    isBigArticle,
                    disable,
                );
            },
            deleteButton: function (isBigArticle: boolean, isMe: boolean) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "deleteButton",
                    TUICData.visibleButtons.buttonHTML._svg(
                        `<path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z" class="TUIC_DeleteButton"></path>`,
                    ),
                    isBigArticle,
                    !isMe,
                    true,
                );
            },
            sendDM: function (isBigArticle: boolean, cannotShare) {
                return TUICData.visibleButtons.buttonHTML._base(
                    "sendDM",
                    TUICData.visibleButtons.buttonHTML._svg(
                        `<path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z" class="TUIC_sendDM"></path>`,
                    ),
                    isBigArticle,
                    cannotShare,
                );
            },
        },
        buttonFunction: {
            _cancelButton: function (elem: HTMLElement) {
                elem.click();
            },
            /*boolkmark: function (e) {
                for (let i = 0; i <= 2; i++) {
                    const urlCopyButton = document.querySelector(
                        `[d="M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
                        [d="M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK),
                        [d="M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"]:not(.TUIC_BOOKMARK),
                        [d="M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z"]:not(.TUIC_BOOKMARK)`,
                    );
                    if (urlCopyButton == null) {
                        e.click();
                    } else {
                        urlCopyButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                        break;
                    }
                }
            },*/
            sendDM: function (e) {
                for (const i of [0, 1, 2]) {
                    const urlCopyButton = document.querySelector(
                        `[role="menu"] [role="menuitem"] [d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"]:not(.TUIC_sendDM)`,
                    );
                    if (urlCopyButton == null) {
                        e.click();
                    } else {
                        urlCopyButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                        break;
                    }
                }
            },
            "url-copy": function (e) {
                for (const i of [0, 1, 2]) {
                    const urlCopyButton =
                        document.querySelector(`[role="menuitem"] :is([d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"],
                            [d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]):not(.TUIC_URL)`);
                    if (urlCopyButton == null) {
                        e.click();
                    } else {
                        urlCopyButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                        break;
                    }
                }
            },
            "url-copy-cannotCopy": function (elem) {
                TUICData.visibleButtons.buttonFunction["url-copy-base"](elem.href.replace(/(twitter\.com|x\.com)/, TUICData["tweetDisplaySetting.linkCopyURL"].url[TUICPref.getPref("tweetDisplaySetting.linkCopyURL")]));
            },
            "url-copy-inShare": function (elem) {
                TUICData.visibleButtons.buttonFunction["url-copy-base"](elem.href.replace(/(twitter\.com|x\.com)/, TUICData["tweetDisplaySetting.linkCopyURL"].url[TUICPref.getPref("tweetDisplaySetting.linkShareCopyURL").replace("Share", "")]));

                //if ((await navigator.clipboard.readText()).split("?")[0] != copyLink) {

                //}
            },
            "url-copy-base": (url) => {
                navigator.clipboard.writeText(url);
                const baseElem = document.querySelector(`#layers`);
                if (baseElem != null) {
                    const layerElem = TUICLibrary.HTMLParse(
                        `<div class="css-175oi2r r-aqfbo4 r-1p0dtai r-1d2f490 r-12vffkv r-1xcajam r-zchlnj TUICURLCopyLayer">
                            <div class="css-175oi2r r-12vffkv">
                                <div class="css-175oi2r r-12vffkv">
                                    <div class="css-175oi2r r-1jgb5lz r-1ye8kvj r-633pao r-13qz1uu">
                                        <div role="alert" class="css-175oi2r r-1awozwy r-1kihuf0 r-l5o3uw r-z2wwpe r-18u37iz r-1wtj0ep r-105ug2t r-dkhcqf r-axxi2z r-18jm5s1 ${TUICLibrary.fontSizeClass("r-1vxqurs", "r-1yflyrw", "r-zd98yo", "r-1v456y7", "r-sr82au")}  ${TUICLibrary.fontSizeClass(
                                            "r-q81ovl",
                                            "r-q81ovl",
                                            "r-xyw6el",
                                            "r-kq9wsh",
                                            "r-1slz7xr",
                                        )}" data-testid="toast" style="transform: translate3d(0px, 0px, 0px) translateY(0px);">
                                            <div dir="ltr" class="css-901oao r-jwli3a r-1wbh5a2 r-1tl8opc r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-1e081e0 r-qvutc0 ${TUICLibrary.fontSizeClass("r-1b43r93", "r-1b43r93", "r-a023e6", "r-1inkyih", "r-1i10wst")} ${TUICLibrary.fontSizeClass(
                                                "r-1qfz7tf",
                                                "r-1qfz7tf",
                                                "r-1e081e0",
                                                "r-1orpq53",
                                                "r-779j7e",
                                            )}"><span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICI18N.get("bottomTweetButtons-urlCopy-layer")}</span></div>
                                            <div aria-hidden="true" class="css-175oi2r r-18u37iz"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`,
                    ).item(0);
                    baseElem.appendChild(layerElem);
                    window.setTimeout(() => {
                        layerElem.remove();
                    }, 3000);
                }
            },
            userBlock: async function (article) {
                for (let i = 0; i <= 2; i++) {
                    const blockButton = document.querySelector<HTMLDivElement>(`[data-testid="block"][role="menuitem"]`);
                    if (blockButton == null) {
                        article.querySelector(`[data-testid="caret"]`).click();
                    } else {
                        blockButton.click();
                        await TUICLibrary.waitForElement(`[data-testid="confirmationSheetConfirm"]`);
                        if (TUICPref.getPref("tweetDisplaySetting.noModalbottomTweetButtons")) {
                            document.querySelector<HTMLButtonElement>(`[data-testid="confirmationSheetConfirm"]`).click();
                        } else {
                            document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (e) => {
                                this._cancelButton(article.querySelector(`[data-testid="caret"]`));
                            });
                            document.querySelector(`[data-testid="mask"]`).addEventListener("click", (e) => {
                                this._cancelButton(article.querySelector(`[data-testid="caret"]`));
                            });
                        }
                        break;
                    }
                }
            },
            deleteButton: function (article) {
                for (let i = 0; i <= 2; i++) {
                    const deleteButtonButton = document.querySelector(
                        `[role="menuitem"] [d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"]`,
                    );
                    if (deleteButtonButton == null) {
                        article.querySelector(`[data-testid="caret"]`).click();
                    } else {
                        deleteButtonButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                        if (TUICPref.getPref("tweetDisplaySetting.noModalbottomTweetButtons")) {
                            document.querySelector<HTMLButtonElement>(`[data-testid="confirmationSheetConfirm"]`).click();
                        } else {
                            document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (e) => {
                                this._cancelButton(article.querySelector(`[data-testid="caret"]`));
                            });
                            document.querySelector(`[data-testid="mask"]`).addEventListener("click", (e) => {
                                this._cancelButton(article.querySelector(`[data-testid="caret"]`));
                            });
                        }
                        break;
                    }
                }
            },
            userMute: function (article) {
                for (let i = 0; i <= 2; i++) {
                    const blockButton = document.querySelector(
                        `[role="menuitem"] [d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"]`,
                    );
                    if (blockButton == null) {
                        article.querySelector(`[data-testid="caret"]`).click();
                    } else {
                        blockButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                        break;
                    }
                }
            },
            quoteTweet: function (retButton) {
                for (let i = 0; i <= 2; i++) {
                    const quoteButton = document.querySelector<HTMLButtonElement>(`[role="menuitem"]:is([data-testid="unretweetConfirm"],[data-testid="retweetConfirm"])+[role="menuitem"]`);
                    if (quoteButton == null) {
                        retButton.click();
                    } else {
                        quoteButton.click();
                        break;
                    }
                }
            },
            likeAndRT: function (retButton, likeButton) {
                likeButton.click();
                if (TUICPref.getPref("tweetDisplaySetting.RTNotQuote")) {
                    retButton.click();
                } else {
                    for (let i = 0; i <= 2; i++) {
                        const quoteButton = document.querySelector<HTMLButtonElement>(`[role="menuitem"]:is([data-testid="unretweetConfirm"],[data-testid="retweetConfirm"])`);
                        if (quoteButton == null) {
                            retButton.click();
                        } else {
                            quoteButton.click();
                            break;
                        }
                    }
                }
            },
            "retweet-button": () => {
                if (TUICPref.getPref("tweetDisplaySetting.RTNotQuote")) {
                    window.setTimeout(() => {
                        TUICData.sidebarButtons.waitSetElement(`[role="menuitem"]:is([data-testid="retweetConfirm"],[data-testid="unretweetConfirm"])`);
                    }, 100);
                }
            },
            "share-button": function (elem) {
                window.setTimeout(async () => {
                    await TUICLibrary.waitForElement(
                        `[role="menuitem"] path[d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]`,
                    );
                    document
                        .querySelector(
                            `[role="menuitem"] path[d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]`,
                        )
                        .closest<HTMLElement>(`[role="menuitem"]`)
                        .addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                            TUICData.visibleButtons.buttonFunction["url-copy-inShare"](elem);
                            document.querySelector<HTMLDivElement>(`#layers > div+div > div > div > div > div+div > div > div`).click();
                        });
                }, 100);
            },
        },
        buttonElement: {
            _handleEvent: function (elem, eventFunc, twitterButton) {
                (twitterButton ? elem.children[0].children[0] : elem.children[0]).addEventListener("keydown", (e) => {
                    if (e.keyCode === 13) {
                        eventFunc();
                    }
                });
                elem.children[0].addEventListener("click", (e) => {
                    eventFunc();
                });
            },
            /*boolkmark: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["boolkmark"](val.option.isBigArticle)).item(0);
                TUICData.visibleButtons.buttonElement._handleEvent(elem, () => {
                    TUICData.visibleButtons.buttonFunction["boolkmark"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["share-button"]));
                });
                return elem;
            },*/
            sendDM: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["sendDM"](val.option.isBigArticle, val.option.cannotRT || val.option.cannotShare || val.option.isLockedAccount)).item(0);
                if (!(val.option.cannotRT || val.option.cannotShare || val.option.isLockedAccount)) {
                    TUICData.visibleButtons.buttonElement._handleEvent(
                        elem,
                        () => {
                            TUICData.visibleButtons.buttonFunction["sendDM"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["share-button"]));
                        },
                        null,
                    );
                }
                return elem;
            },
            "url-copy": function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["url-copy"](val.option.isBigArticle)).item(0);
                //if (val.option.isLockedAccount || val.option.cannotRT) {
                if (val.elements.statusButton != null) {
                    TUICData.visibleButtons.buttonElement._handleEvent(
                        elem,
                        () => {
                            TUICData.visibleButtons.buttonFunction["url-copy-cannotCopy"](val.elements.statusButton);
                        },
                        null,
                    );
                }
                /*} else {
                    TUICData.visibleButtons.buttonElement._handleEvent(
                        elem,
                        () => {
                            TUICData.visibleButtons.buttonFunction["url-copy"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["share-button"]));
                        },
                        null,
                    );
                }*/
                return elem;
            },
            userBlock: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["userBlock"](val.option.isBigArticle, val.option.isMe)).item(0);
                TUICData.visibleButtons.buttonElement._handleEvent(
                    elem,
                    () => {
                        TUICData.visibleButtons.buttonFunction["userBlock"](val.elements.article);
                    },
                    null,
                );
                return elem;
            },
            userMute: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["userMute"](val.option.isBigArticle, val.option.isMe)).item(0);
                TUICData.visibleButtons.buttonElement._handleEvent(
                    elem,
                    () => {
                        TUICData.visibleButtons.buttonFunction["userMute"](val.elements.article);
                    },
                    null,
                );
                return elem;
            },
            deleteButton: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["deleteButton"](val.option.isBigArticle, val.option.isMe)).item(0);
                if (val.option.isMe) {
                    TUICData.visibleButtons.buttonElement._handleEvent(
                        elem,
                        () => {
                            TUICData.visibleButtons.buttonFunction["deleteButton"](val.elements.article);
                        },
                        null,
                    );
                }
                return elem;
            },
            quoteTweet: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["quoteTweet"](val.option.isBigArticle, val.option.cannotRT)).item(0);
                if (!val.option.cannotRT)
                    TUICData.visibleButtons.buttonElement._handleEvent(
                        elem,
                        () => {
                            TUICData.visibleButtons.buttonFunction["quoteTweet"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["retweet-button"]));
                        },
                        null,
                    );
                return elem;
            },
            likeAndRT: function (val) {
                const elem = TUICLibrary.HTMLParse(TUICData.visibleButtons.buttonHTML["likeAndRT"](val.option.isBigArticle, val.option.cannotRT)).item(0);
                if (!val.option.cannotRT)
                    TUICData.visibleButtons.buttonElement._handleEvent(
                        elem,
                        () => {
                            TUICData.visibleButtons.buttonFunction["likeAndRT"](val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["retweet-button"]), val.elements.buttonBarBase.querySelector(TUICData.visibleButtons.selectors["like-button"]));
                        },
                        null,
                    );
                return elem;
            },
        },
        emptyElement: () => {
            return TUICLibrary.HTMLParse(
                `<div class="css-175oi2r r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-1tl8opc r-qvutc0 ${TUICLibrary.fontSizeClass(
                    "r-1enofrn r-1f529hi r-cxdvbh r-s1qlax",
                    "r-1enofrn r-fxxt2n r-cxdvbh r-s1qlax",
                    "r-n6v787 r-1cwl3u0 r-1k6nrdp r-s1qlax",
                    "r-1b43r93 r-14yzgew r-1buqboj r-s1qlax",
                    "r-ubezar r-hjklzo r-e157gu r-ou255f",
                )}"></span></span></div>`,
            ).item(0);
        },
    },
    fixEngagements: {
        all: ["likes", "retweets", "quotes"],
        i18n: {
            likes: "bottomTweetButtons-setting-placeEngagementsLink-likes-short",
            retweets: "bottomTweetButtons-setting-placeEngagementsLink-retweets-short",
            quotes: "bottomTweetButtons-setting-placeEngagementsLink-quotes-short",
        },
        engagementsBox: () => {
            return TUICLibrary.HTMLParse(`<div class="TUICEngagementsBox css-175oi2r r-1awozwy r-1efd50x r-5kkj8d r-18u37iz ${TUICLibrary.backgroundColorClass("r-2sztyj", "r-1kfrmmb", "r-1dgieki")}"></div>`).item(0);
        },
        links: (id: string, article: Element, isShort: boolean) => {
            const returnElem = TUICLibrary.HTMLParse(
                `<div dir="ltr" class="css-901oao r-1tl8opc r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0 ${TUICLibrary.fontSizeClass("r-23eiwj", "r-9qu9m4", "r-1yzf0co", "r-w0qc3r", "r-18scu15")}" style="cursor: pointer;margin-right:1em;">
                       <span class="css-901oao css-16my406 r-1tl8opc r-1cwl3u0 r-bcqeeo r-qvutc0 ${TUICLibrary.fontSizeClass("r-1b43r93", "r-1b43r93", "r-a023e6", "r-1inkyih", "r-1i10wst")} ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")}">
                         <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICI18N.get("bottomTweetButtons-setting-placeEngagementsLink-" + id + (isShort ? "-short" : ""))}</span>
                       </span>
                     </div>`.replace(/( |\n|\r)( |\n|\r)+/g, ""),
            ).item(0);
            returnElem.addEventListener("click", async () => {
                article.querySelector<HTMLInputElement>(`[data-testid="caret"]`).click();
                await TUICLibrary.waitForElement(`[data-testid="tweetEngagements"]`);
                document.querySelector<HTMLButtonElement>(`[data-testid="tweetEngagements"]`).click();
                await TUICLibrary.waitForElement(`[role="tab"][href$="/${id}"]`);
                document.querySelector<HTMLAnchorElement>(`[role="tab"][href$="/${id}"]`).click();
            });
            return returnElem;
        },
    },
    showLinkCardInfo: (link, domain, title, description) => {
        return TUICLibrary.HTMLParse(
            `<div class="css-175oi2r r-16y2uox r-1wbh5a2 r-1777fci TUIC_LinkCardInfo">
                <a href="${link}" rel="noopener noreferrer nofollow" target="_blank" role="link" class="css-4rbku5 css-18t94o4 css-175oi2r r-1loqt21 r-18u37iz r-16y2uox r-1wtj0ep r-1ny4l3l r-o7ynqc r-6416eg">
                    <div class="css-175oi2r r-16y2uox r-1wbh5a2 r-z5qs1h r-1777fci ${TUICLibrary.fontSizeClass(
                        "r-1t982j2 r-1qfz7tf r-1b3ntt7",
                        "r-1t982j2 r-1qfz7tf r-1b3ntt7",
                        "r-kzbkwu r-1e081e0 r-ttdzmv",
                        "r-ig955 r-1orpq53 r-19urhcx",
                        "r-i03k3n r-779j7e r-5t7p9m",
                    )}" id="id__7fpkgwkoke8" data-testid="card.layoutSmall.detail">
                        <div dir="auto" class="css-901oao css-1hf3ou5 ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} r-37j5jr ${TUICLibrary.fontSizeClass(
                            "r-1b43r93 r-14yzgew",
                            "r-1b43r93 r-hjklzo",
                            "r-a023e6 r-rjixqe",
                            "r-1inkyih r-hbpseb",
                            "r-1i10wst r-135wba7",
                        )} r-16dba41 r-bcqeeo r-qvutc0">
                            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">
                                <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${domain}</span>
                            </span>
                        </div>
                        <div dir="auto" class="css-901oao css-1hf3ou5 ${TUICLibrary.backgroundColorClass("r-1nao33i", "r-vlxjld", "r-18jsvk2")} r-37j5jr ${TUICLibrary.fontSizeClass(
                            "r-1b43r93 r-14yzgew",
                            "r-1b43r93 r-hjklzo",
                            "r-a023e6 r-rjixqe",
                            "r-1inkyih r-hbpseb",
                            "r-1i10wst r-135wba7",
                        )} r-16dba41 r-bcqeeo r-qvutc0">
                            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">
                                <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${title}</span>
                            </span>
                        </div>
                        <div dir="auto" class="css-901oao css-cens5h ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} r-37j5jr ${TUICLibrary.fontSizeClass(
                            "r-1b43r93 r-14yzgew",
                            "r-1b43r93 r-hjklzo",
                            "r-a023e6 r-rjixqe",
                            "r-1inkyih r-hbpseb",
                            "r-1i10wst r-135wba7",
                        )} r-16dba41 r-bcqeeo r-qvutc0" style="-webkit-line-clamp: 2; white-space: normal;">
                            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">
                                <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${description}</span>
                            </span>
                        </div>
                    </div>
                </a>
            </div>`,
        ).item(0);
    },
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
        selectors: {
            home: `[href="/home"]`,
            explore: `[href="/explore"]`,
            communities: `[href$="/communities"],#TUICSidebar_communities`,
            notifications: `[href*="/notifications"]`,
            messages: `[href^="/messages"]`,
            bookmarks: `[href="/i/bookmarks"],#TUICSidebar_bookmarks`,
            profile: `[data-testid="AppTabBar_Profile_Link"]`,
            moremenu: `[data-testid="AppTabBar_More_Menu"]`,
            topics: `#TUICSidebar_topics`,
            lists: `#TUICSidebar_lists,[href$="/lists"]`,
            drafts: "#TUICSidebar_drafts",
            connect: "#TUICSidebar_connect",
            communitynotes: `[href="/i/communitynotes"]`,
            "verified-choose": `[href="/i/verified-choose"],[href="/i/verified-orgs-signup"]`,
            display: "#TUICSidebar_display",
            muteAndBlock: "#TUICSidebar_muteAndBlock",
            settings: "#TUICSidebar_settings",
            premiumTierSwitch: `[href="/i/premium_tier_switch"]`,
        },
        html: {
            __base: (id, svg) => {
                return `
                <a id="TUICSidebar_${id}" href="${TUICLibrary.getPrimitiveOrFunction(
                    TUICData.sidebarButtons.tuicButtonGoToUrl[id],
                )}" role="link" tabindex="0" class="css-4rbku5 css-18t94o4 css-175oi2r r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-oyd9sg r-13qz1uu TUICOriginalContent TUICSidebarButton ${location.pathname.endsWith("/topics") ? "TUICSidebarSelected" : ""}">
                    <div class="css-175oi2r r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-o7ynqc r-6416eg ${TUICLibrary.fontSizeClass("r-q81ovl", "r-q81ovl", "r-xyw6el", "r-kq9wsh", "r-1slz7xr")}">
                        <div class="css-175oi2r">
                            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}">
                                <g>${svg}</g>
                            </svg>
                        </div>
                        <div dir="ltr" class="css-901oao css-1hf3ou5 r-1tl8opc ${TUICLibrary.fontSizeClass(
                            "r-1i10wst r-16dba41 r-hbpseb r-1uvorsx r-1oa8saw",
                            "r-1b6yd1w r-16dba41 r-7ptqe7 r-j240cv r-y3t9qe",
                            "r-adyw6z r-135wba7 r-1joea0r r-88pszg",
                            "r-evnaw r-16dba41 r-eaezby r-uzqwk8 r-12e0a8i",
                            "r-1x35g6 r-16dba41 r-1h1c4di r-6uxfom r-le9fof",
                        )} r-bcqeeo r-qvutc0 ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}" style="text-overflow: unset;" >
                            <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0" style="text-overflow: unset;">${TUICI18N.get("sidebarButtons-" + id)}</span>
                        </div>
                    </div>
                </a>`;
            },
            topics: () => {
                return TUICData.sidebarButtons.html.__base("topics", `<path d="${SIDEBAR_BUTTON_ICON.topics.unselected}"></path>`);
            },
            /*"lists": () => {
              return TUICData.sidebarButtons.html.__base("lists",`<path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>`)
            },*/
            /*"communities": () => {
              return TUICData.sidebarButtons.html.__base("communities",`<path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>`)
            },*/
            drafts: () => {
                return TUICData.sidebarButtons.html.__base("drafts", `<path d="${SIDEBAR_BUTTON_ICON.drafts.unselected}">`);
            },
            connect: () => {
                return TUICData.sidebarButtons.html.__base("connect", `<path d="${SIDEBAR_BUTTON_ICON.connect.unselected}"></path>`);
            },
            display: () => {
                return TUICData.sidebarButtons.html.__base("display", `<path d="${SIDEBAR_BUTTON_ICON.display.unselected}"></path><path d="M14 12c0-1.1-.9-2-2-2-1.11 0-2 .9-2 2v2h2c1.1 0 2-.9 2-2z" class="r-1cvl2hr"></path>`);
            },
            muteAndBlock: () => {
                return TUICData.sidebarButtons.html.__base("muteAndBlock", `<path d="${SIDEBAR_BUTTON_ICON.muteAndBlock.unselected}"></path>`);
            },
            bookmarks: () => {
                return TUICData.sidebarButtons.html.__base("bookmarks", `<path d="${SIDEBAR_BUTTON_ICON.bookmarks.unselected}"></path>`);
            },
            settings: () => {
                return TUICData.sidebarButtons.html.__base("settings", `<path d="${SIDEBAR_BUTTON_ICON.settings.unselected}"></path>`);
            },
        },
        buttonClickInMoreMenu: async (e, selector) => {
            await TUICData.sidebarButtons.waitSetElement(`[data-testid="AppTabBar_More_Menu"] > div > div`);
            const foundElem = await TUICData.sidebarButtons.waitSetElement(`:is([role="group"],[data-testid="Dropdown"]) ${selector}`);
            if (!foundElem) {
                await TUICData.sidebarButtons.waitSetElement(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                return false;
            }
            return true;
        },
        waitSetElement: async (selector) => {
            for (let i = 0; i <= 25; i++) {
                const re = await new Promise((resolve2) => {
                    const elem = document.querySelector(selector);
                    if (elem != null) {
                        elem.click();
                        resolve2("ok");
                    }
                    resolve2("bb");
                });
                if (re == "ok") return true;
                await new Promise((resolve2) => {
                    window.setTimeout(() => {
                        resolve2("");
                    }, 100);
                });
            }
            return false;
        },
        buttonFunctions: {
            topics: async (e) => {
                e?.preventDefault?.();
                if (!location.pathname.endsWith("/topics")) {
                    const moreMenu = document.querySelector<HTMLDivElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                    if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                    setTimeout(async () => {
                        //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings"]`);
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/privacy_and_safety"]`);
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/content_you_see"]`);
                        await TUICData.sidebarButtons.waitSetElement(`main [href$="/topics"]`);
                    }, 150);
                }
            },
            lists: (e) => {
                e?.preventDefault?.();
                TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href$="/lists"]`);
            },
            /*"communities": function (e) {
              TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href$="/communities"]`)
            },*/
            drafts: async (e) => {
                e?.preventDefault?.();
                //TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href="/compose/tweet/unsent/drafts"]`);
                document.querySelector<HTMLElement>(`[href="/compose/tweet"]`).click();
                await TUICData.sidebarButtons.waitSetElement(`[data-testid="unsentButton"]`);
            },
            connect: (e) => {
                e?.preventDefault?.();
                TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href="/i/connect_people"]`);
            },
            display: async (e) => {
                e?.preventDefault?.();
                /*if (TUICData.sidebarButtons.buttonClickInMoreMenu(e, `:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`)) {
                    await TUICData.sidebarButtons.waitSetElement(`[href="/i/display"]`);
                }*/
                if (!location.pathname.endsWith("/settings/display")) {
                    const moreMenu = document.querySelector<HTMLElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                    if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                    setTimeout(async () => {
                        //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings"]`);
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/accessibility_display_and_languages"]`);
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/display"]`);
                    }, 150);
                }
            },
            muteAndBlock: async (e) => {
                e?.preventDefault?.();
                if (!location.pathname.endsWith("/settings/privacy_and_safety")) {
                    const moreMenu = document.querySelector<HTMLElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                    if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                    setTimeout(async () => {
                        //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings"]`);
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/privacy_and_safety"]`);
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings/mute_and_block"]`);
                    }, 150);
                }
            },
            bookmarks: (e) => {
                e?.preventDefault?.();
                TUICData.sidebarButtons.buttonClickInMoreMenu(e, `[href="/i/bookmarks"]`);
            },
            settings: (e) => {
                e?.preventDefault?.();
                if (!location.pathname.includes("/settings") || location.pathname.includes("/settings/display")) {
                    const moreMenu = document.querySelector<HTMLDivElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                    if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                    setTimeout(async () => {
                        //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                        await TUICData.sidebarButtons.waitSetElement(`[href="/settings"]`);
                    }, 150);
                }
            },
        },
        tuicButtonUrl: {
            topics: `/topics`,
            lists: `/lists`,
            communities: "/communities",
            connect: "/i/connect_people",
            drafts: "/compose/tweet/unsent/",
            display: ["/i/display", "/settings/display"],
            muteAndBlock: "/settings/mute_and_block",
            bookmarks: "/i/bookmarks",
            settings: ["/settings", "/settings/"],
        },
        tuicButtonGoToUrl: {
            __setURL: (id, selector, setURLWay: (arg0: HTMLElement) => string) => {
                const elem = document.querySelector(selector);
                if (elem) {
                    return setURLWay(elem);
                } else {
                    TUICData.sidebarButtons.tuicButtonGoToUrl.__setURLWait(id, selector, setURLWay);
                    return "";
                }
            },
            __setURLWait: async (id: string, selector: string, setURLWay: (arg0: HTMLElement) => string) => {
                await TUICLibrary.waitForElement(selector);
                const elem = document.querySelector<HTMLLinkElement>(`#TUICSidebar_${id}`);
                if (elem) {
                    elem.href = setURLWay(document.querySelector(selector));
                }
            },
            topics: () => {
                return TUICData.sidebarButtons.tuicButtonGoToUrl.__setURL("topics", `[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`, (elem) => {
                    return `https://twitter.com/${elem.getAttribute("data-testid").replace(`UserAvatar-Container-`, "")}/topics`;
                });
            },
            lists: () => {
                return TUICData.sidebarButtons.tuicButtonGoToUrl.__setURL("lists", `[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`, (elem) => {
                    return `https://twitter.com/${elem.getAttribute("data-testid").replace(`UserAvatar-Container-`, "")}/lists`;
                });
            },
            communities: () => {
                return TUICData.sidebarButtons.tuicButtonGoToUrl.__setURL("communities", `[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`, (elem) => {
                    return `https://twitter.com/${elem.getAttribute("data-testid").replace(`UserAvatar-Container-`, "")}/communities`;
                });
            },
            connect: "https://twitter.com/i/connect_people",
            drafts: "https://twitter.com/compose/tweet/unsent/drafts",
            display: "https://twitter.com/i/display",
            muteAndBlock: "https://twitter.com/settings/mute_and_block",
            bookmarks: "https://twitter.com/i/bookmarks",
            settings: "https://twitter.com/settings/",
        },
    },
    invisibleItems: {
        all: ["config-premium", "hideBelowDM", "verifiedNotifications"],
        i18n: {
            "config-premium": "invisibleItems-configPremium",
            hideBelowDM: "invisibleItems-hideBelowDM",
            verifiedNotifications: "invisibleItems-verifiedNotifications",
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
    "profileSetting.tabs": {
        all: ["pinnedTab"],
        i18n: {
            pinnedTab: "profileSetting-tabs-pinnedTab",
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
    XToTwitter: {
        all: ["XToTwitter", "PostToTweet"],
        i18n: { XToTwitter: "XtoTwitter-XtoTwitter", PostToTweet: "XtoTwitter-PostToTweet" },
    },
    timeline: {
        all: ["osusume-user-timeline", "hideOhterRTTL", "accountStart"],
        i18n: {
            "osusume-user-timeline": "timeline-osusumeUsersOnTL",
            hideOhterRTTL: "timeline-hideOhterRTTL",
            accountStart: "timeline-accountStart",
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
    "tweetDisplaySetting.linkCopyURL": {
        all: ["linkCopyURL_twitter", "linkCopyURL_X", "linkCopyURL_vxTwitter", "linkCopyURL_fxTwitter"],
        i18n: {
            linkCopyURL_twitter: "bottomTweetButtons-setting-linkCopyURL-twitter",
            linkCopyURL_X: "bottomTweetButtons-setting-linkCopyURL-X",
            linkCopyURL_vxTwitter: "bottomTweetButtons-setting-linkCopyURL-vxTwitter",
            linkCopyURL_fxTwitter: "bottomTweetButtons-setting-linkCopyURL-fxTwitter",
        },
        url: {
            linkCopyURL_twitter: "twitter.com",
            linkCopyURL_X: "x.com",
            linkCopyURL_vxTwitter: "vxtwitter.com",
            linkCopyURL_fxTwitter: "fxtwitter.com",
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
    "sidebarSetting.buttonConfig": {
        all: ["smallerSidebarContent", "sidebarNoneScrollbar"],
        i18n: {
            smallerSidebarContent: "sidebarButton-setting-narrowBetweenButtons",
            sidebarNoneScrollbar: "sidebarButton-setting-sidebarNoneScrollbar",
        },
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
        selectors: {
            bookmarks: `[data-testid="Dropdown"] [href="/i/bookmarks"]`,
            monetization: `[data-testid="Dropdown"] [href="/settings/monetization"]`,
            separator: `[data-testid="Dropdown"] [role="separator"]`,
            creatorStudio: `[data-testid="Dropdown"] [aria-controls$="_0_content"]`,
            professionalTool: `[data-testid="Dropdown"] [aria-controls$="_1_content"]`,
            settingsAndSupport: `[data-testid="Dropdown"] [aria-controls$="_2_content"][data-testid="settingsAndSupport"]`,
            communities: `[data-testid="Dropdown"] [href$="/communities"]`,
            settings: `[data-testid="Dropdown"] [href="/settings"]`,
            pro: `[data-testid="Dropdown"] [href="https://tweetdeck.twitter.com"]`,
            ads: `[data-testid="Dropdown"] [href*="ads.twitter.com"]`,
            premium: `[data-testid="Dropdown"] [href="/i/verified-choose"]`,
        },
        type: {
            bookmarks: "menuitem",
            monetization: "menuitem",
            separator: "separator",
            creatorStudio: "menu",
            professionalTool: "menu",
            settingsAndSupport: "menu",
            communities: "menuitem",
            settings: "menuitem",
            pro: "menuitem",
            ads: "menuitem",
            premium: "menuitem",
        },
    },
    accountSwitcher: {
        all: ["icon", "nameID", "moreMenu"],
        i18n: { icon: "sidebarButton-accountSwitcher-Icon", nameID: "sidebarButton-accountSwitcher-NameID", moreMenu: "sidebarButton-accountSwitcher-MoreMenu" },
    },
    dmPage: {
        all: ["showIcon"],
        i18n: {
            showIcon: "dmPage-showIcon",
        },
        element: {
            html: () => {
                return `
<div class="css-175oi2r r-obd0qt r-18u37iz TUICOriginalContent TUICDMIconBox">
    <div class="css-175oi2r" style="width: ${TUICLibrary.fontSizeClass("47", "49", "52", "57", "62")}px;"></div>
    <div class="css-175oi2r r-u8s1d r-1d2f490">
        <div class="css-175oi2r r-1adg3ll r-bztko3" style="width: ${TUICLibrary.fontSizeClass("36", "38", "40", "44", "48")}px; height: ${TUICLibrary.fontSizeClass("36", "38", "40", "44", "48")}px;" data-testid="UserAvatar-Container-unknown">
            <div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"></div>
            <div class="r-1p0dtai r-1pi2tsx r-u8s1d r-1d2f490 r-ipm5af r-13qz1uu">
                <div class="css-175oi2r r-1adg3ll r-1pi2tsx r-13qz1uu r-u8s1d r-1wyvozj r-1v2oles r-desppf r-bztko3">
                    <div class="r-1p0dtai r-1pi2tsx r-u8s1d r-1d2f490 r-ipm5af r-13qz1uu">
                        <div class="css-175oi2r r-sdzlij r-1udh08x r-u8s1d r-ggadg3 r-8jfcpp" style="width: calc(100% + 4px); height: calc(100% + 4px);">
                            <a href="${
                                document.querySelector<HTMLAnchorElement>(`[data-testid="DM_Conversation_Avatar"]:not([data-testid="conversation"] *)`)?.href ?? ""
                            }" role="link" class="css-175oi2r r-1pi2tsx r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21" style="background-color: rgba(0, 0, 0, 0);">
                                <div class="css-175oi2r r-sdzlij r-1udh08x r-633pao r-u8s1d r-1wyvozj r-1v2oles r-desppf" style="background-color: rgb(21, 32, 43); width: calc(100% - 4px); height: calc(100% - 4px);">
                                    <div class="css-175oi2r r-1adg3ll r-1udh08x" style="">
                                        <div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"></div>
                                        <div class="r-1p0dtai r-1pi2tsx r-u8s1d r-1d2f490 r-ipm5af r-13qz1uu">
                                            <div aria-label="julieta ferreri" class="css-175oi2r r-1mlwlqe r-1udh08x r-417010" style="position: absolute; inset: 0px;">
                                                <div class="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv TUICDMIconDisplay"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                `;
            },
            make: (NoIcon) => {
                const elem = TUICLibrary.HTMLParse(TUICData.dmPage.element.html()).item(0);
                if (!NoIcon) {
                    elem.querySelector<HTMLElement>(".TUICDMIconDisplay").style.backgroundImage = document.querySelector<HTMLElement>(
                        `:is([data-testid="DM_Conversation_Avatar"]:not([data-testid="conversation"] *) [data-testid="UserAvatar-Container-unknown"] [role="presentation"] > div+div+div > div > div > div > div,[data-testid="DmScrollerContainer"] [data-testid="UserAvatar-Container-unknown"]:not([href$="/followers_you_follow"] *) [style*="background-image:"])`,
                    ).style.backgroundImage;
                }

                elem.querySelector("a").addEventListener("click", (e) => {
                    e.preventDefault();
                    document
                        .querySelector<HTMLElement>(
                            `:is([data-testid="DM_Conversation_Avatar"]:not([data-testid="conversation"] *) [data-testid="UserAvatar-Container-unknown"] [role="presentation"] > div+div+div > div > div > div > div,[data-testid="DmScrollerContainer"] [data-testid="UserAvatar-Container-unknown"]:not([href$="/followers_you_follow"] *) [style*="background-image:"])`,
                        )
                        .click();
                });
                return elem;
            },
        },
    },
    styleColor: {
        light: {
            textColor: "rgba(0, 0, 0, 1)",
            containerBackground: "rgb(247, 249, 249)",
            containerBackground2: "rgb(237, 239, 239)",
            colorHover: "#00000040",
            detailBorder: "rgba(0, 0, 0, 0.08)",
        },
        blue: {
            textColor: "rgba(255, 255, 255, 1)",
            containerBackground: "rgb(30, 39, 50)",
            containerBackground2: "rgb(40, 49, 60)",
            colorHover: "#ffffff30",
            detailBorder: "rgba(255, 255, 255, 0.08)",
        },
        dark: {
            textColor: "rgba(255, 255, 255, 1)",
            containerBackground: "rgb(22, 24, 28)",
            containerBackground2: "rgb(28, 34, 38)",
            colorHover: "#ffffff40",
            detailBorder: "rgba(255, 255, 255, 0.16)",
        },
    },
    twitterIcon: {
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
    "profileSetting.profileInitialTab": {
        all: ["tweets", "replies", "media", "likes"],
        i18n: {
            tweets: "profileSetting-profileInitialTab-tweet",
            replies: "profileSetting-profileInitialTab-reply",
            media: "profileSetting-profileInitialTab-media",
            likes: "profileSetting-profileInitialTab-likes",
        },
        selectors: {
            replies: `[href$="/with_replies"]`,
            media: `[href$="/media"]`,
            likes: `[href$="/likes"]`,
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
    uncategorizedSettings: {
        all: ["disableBackdropFilter"],
        i18n: {
            disableBackdropFilter: "uncategorizedSettings-disableBackdropFilter",
        },
    },
    composetweet: {
        all: ["hideDraft"],
        i18n: {
            hideDraft: "composetweet-hideDraft",
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
        selectors: {
            hiddenReply: `[href$="/hidden"]`,
            notHelpful: () => {
                return location.href.includes("/search?q=")
                    ? document.querySelector(
                          `path[d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"]`,
                      )
                    : ``;
            },
            notInterested: () => {
                return !location.href.includes("/search?q=")
                    ? document.querySelector(
                          `path[d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"]`,
                      )
                    : ``;
            },
            follow: `:is(path[d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm13 4v3h2v-3h3V8h-3V5h-2v3h-3v2h3zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z"],path[d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm12.586 3l-2.043-2.04 1.414-1.42L20 7.59l2.043-2.05 1.414 1.42L21.414 9l2.043 2.04-1.414 1.42L20 10.41l-2.043 2.05-1.414-1.42L18.586 9zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z"])`,
            addMemberOfList: `[href="/i/lists/add_member"]`,
            userMute: () => {
                return Array.from(
                    document.querySelectorAll(
                        `[role="menuitem"] [d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"]`,
                    ),
                ).filter((elem) => {
                    const spanElem = elem.closest(`[role="menuitem"]`).querySelector("span");
                    if (spanElem) {
                        return spanElem.textContent.startsWith("@");
                    } else {
                        return false;
                    }
                })[0];
            },
            muteTalk: () => {
                return Array.from(
                    document.querySelectorAll(
                        `[role="menuitem"] [d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"]`,
                    ),
                ).filter((elem) => {
                    const spanElem = elem.closest(`[role="menuitem"]`).querySelector("span");
                    if (spanElem) {
                        return !spanElem.textContent.startsWith("@");
                    } else {
                        return false;
                    }
                })[0];
            },
            leaveTalk: `path[d="M21.503 6.745c.475 1.032.748 2.176.748 3.385 0 2.955-1.608 5.68-4.196 7.11l-8.054 4.459v-3.452l2-2v2.06l5.086-2.816c1.952-1.079 3.164-3.133 3.164-5.36 0-.644-.101-1.264-.286-1.847l1.538-1.538zM3.71 21.71l-1.414-1.414 3.401-3.401C3.34 15.5 1.751 12.935 1.751 10c0-4.411 3.591-8 8.005-8h4.366c1.818 0 3.494.608 4.849 1.62l1.325-1.325 1.414 1.414-18 18.001zm3.462-6.29L17.545 5.047C16.567 4.386 15.389 4 14.123 4H9.757c-3.311 0-6.005 2.691-6.005 6 0 2.389 1.401 4.451 3.421 5.42z"]`,
            block: `[data-testid="block"]`,
            embed: `path[d="M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z"]`,
            report: `[data-testid="report"]`,
            engagements: `[data-testid="tweetEngagements"]`,
            deleteTweet: `path[d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"]`,
            highlighOnPin: `[data-testid="highlighOnPin"]`,
            highlightUpsell: `[data-testid="highlightUpsell"]`,
            whoCanReply: `path[d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"]`,
            analytics: `[data-testid="analytics"]`,
            editWithTwitterBlue: `[data-testid="editWithTwitterBlue"]`,
        },
    },
};
