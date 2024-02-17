import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { tweetTopButtons } from "./tweetTopButtons";
import { placeEngagementsLink } from "./placeEngagementsLink";
import { showLinkCardInfo } from "./showLinkCardInfo";
import { I18nAndAllContent } from "@shared/types";
import { buttonHTMLBase } from "@content/resources";
import { TUICI18N } from "@modules/i18n";

let buttonUnderTweetRunning: boolean = false;

export const i18nAndAllContent: I18nAndAllContent = {
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
};

export const ButtonUnderTweetSelectors = {
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
};

const _data = {
    ...i18nAndAllContent,
    selectors: { ...ButtonUnderTweetSelectors },
    buttonHTML: {
        _base: function (id: string, svg, isBigArticle: boolean, disable = false, redButton = false): string {
            const tabindex = disable ? "-1" : "0";
            const clazzDir = disable ? "r-icoktb" : "css-18t94o4";
            const clazzLtr = TUICLibrary.fontSizeClass("r-1b43r93", "r-1b43r93", "r-rjixqe", "r-1inkyih", "r-1i10wst");
            const clazzSVG = `${isBigArticle ? "r-1srniue r-50lct3" : "r-1xvli5t"}${redButton ? " r-9l7dzd" : ""} ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")}`;
            return buttonHTMLBase.replaceAll("${id}", id).replaceAll("${tabindex}", tabindex).replaceAll("${clazzDir}", clazzDir).replaceAll("${clazzSVG}", clazzSVG).replaceAll("${clazzLtr}", clazzLtr).replaceAll("${svg}", svg);
        },
        _svg: function (svg: string): string {
            return `
        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1q142lx r-dnmrzs r-bnwqim r-1plcrui r-lrvibr \${clazzSVG}">
            <g>${svg}</g>
        </svg>`;
        },
        /*boolkmark: function (isBigArticle) {
            return _data.buttonHTML._base("bookmark", `<path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" class="TUIC_BOOKMARK"></path>`, isBigArticle);
        },*/
        "url-copy": function (isBigArticle: boolean): string {
            return _data.buttonHTML._base(
                "urlCopy",
                _data.buttonHTML._svg(
                    `<path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" class="TUIC_URL"></path>`,
                ),
                isBigArticle,
            );
        },
        userBlock: function (isBigArticle: boolean, isMe: boolean): string {
            return _data.buttonHTML._base(
                "userBlock",
                _data.buttonHTML._svg(
                    `<path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" class="TUIC_USERBLOCK"></path>`,
                ),
                isBigArticle,
                isMe,
            );
        },
        userMute: function (isBigArticle: boolean, isMe: boolean): string {
            return _data.buttonHTML._base(
                "userMute",
                _data.buttonHTML._svg(
                    `<path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z" class="TUIC_USERMUTE"></path>`,
                ),
                isBigArticle,
                isMe,
            );
        },
        quoteTweet: function (isBigArticle: boolean, locked: boolean): string {
            return _data.buttonHTML._base(
                "quoteTweet",
                _data.buttonHTML._svg(
                    `<path d="M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" class="TUIC_QuoteTweet"></path>`,
                ),
                isBigArticle,
                locked,
            );
        },
        likeAndRT: function (isBigArticle: boolean, disable: boolean): string {
            return _data.buttonHTML._base(
                "likeAndRT",
                _data.buttonHTML._svg(
                    `<path d="M4.08401 2.728C3.15837 3.59826 1.4159 5.23274 0.490263 6.103C0.829176 6.46556 1.40773 7.02852 1.74026 7.38425C1.82549 7.30812 3.14651 6.103 3.14651 6.103C3.14651 6.103 3.14651 10.6835 3.14651 12.1342C3.14651 13.8926 4.60559 15.2905 6.36526 15.2905L8.49026 15.2905C9.6168 17.2188 11.666 19.2558 15.0528 21.228L15.459 21.478L15.8653 21.228C19.3912 19.1743 21.5272 17.0378 22.6153 15.0405C23.7106 13.0271 23.7431 11.1545 23.0215 9.69675C22.3071 8.25513 20.9077 7.33979 19.334 7.25925C18.3272 7.20433 17.3131 7.60726 16.3653 8.25925L16.3653 6.07175C16.3653 4.31345 14.9374 2.88425 13.1778 2.88425C12.158 2.88425 9.00477 2.88425 8.86526 2.88425C8.86526 3.3764 8.86526 4.19202 8.86526 4.69675C9.00477 4.69675 12.158 4.69675 13.1778 4.69675C13.9268 4.69675 14.5528 5.31895 14.5528 6.07175L14.5528 8.25925C13.605 7.60726 12.5914 7.20434 11.584 7.25925C10.0103 7.33979 8.57963 8.25513 7.86526 9.69675C7.33532 10.7673 7.41929 12.0997 7.83401 13.5092C7.2945 13.5093 6.7014 13.5093 6.36526 13.5092C5.61267 13.5092 4.99026 12.8843 4.99026 12.1342C4.99026 10.6756 4.99026 6.07175 4.99026 6.07175C4.99026 6.07175 6.34386 7.3065 6.42776 7.38425C6.76029 7.02852 7.3076 6.46556 7.64651 6.103C6.72087 5.23274 5.00965 3.59826 4.08401 2.728ZM11.6778 9.0405C12.5116 8.99504 13.4097 9.38669 14.1778 10.1655L15.459 11.4467L16.7403 10.1655C17.1236 9.77649 17.534 9.48018 17.959 9.2905C18.384 9.10082 18.8235 9.01777 19.2403 9.0405C20.1731 9.08825 20.9759 9.62921 21.3965 10.478C21.8726 11.4397 21.8082 12.7506 21.0215 14.1967C20.094 15.8993 18.1968 17.6411 15.459 19.3217C12.7301 17.6493 10.8296 15.8758 9.89651 14.1655C9.11086 12.7213 9.01387 11.4404 9.49026 10.478C9.91054 9.62986 10.751 9.08793 11.6778 9.0405Z" class="TUIC_QuoteTweet"></path>`,
                ),
                isBigArticle,
                disable,
            );
        },
        deleteButton: function (isBigArticle: boolean, isMe: boolean): string {
            return _data.buttonHTML._base(
                "deleteButton",
                _data.buttonHTML._svg(
                    `<path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z" class="TUIC_DeleteButton"></path>`,
                ),
                isBigArticle,
                !isMe,
                true,
            );
        },
        sendDM: function (isBigArticle: boolean, cannotShare: boolean): string {
            return _data.buttonHTML._base(
                "sendDM",
                _data.buttonHTML._svg(
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
        sendDM: function (e: HTMLInputElement) {
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
        "url-copy": function (e: HTMLInputElement) {
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
        "url-copy-cannotCopy": function (elem: HTMLAnchorElement) {
            _data.buttonFunction["url-copy-base"](elem.href.replace(/(twitter\.com|x\.com)/, _data.copyURL[TUICPref.getPref("tweetDisplaySetting.linkCopyURL")]));
        },
        "url-copy-inShare": function (elem: HTMLAnchorElement) {
            _data.buttonFunction["url-copy-base"](elem.href.replace(/(twitter\.com|x\.com)/, _data.copyURL[TUICPref.getPref("tweetDisplaySetting.linkShareCopyURL").replace("Share", "")]));

            //if ((await navigator.clipboard.readText()).split("?")[0] != copyLink) {

            //}
        },
        "url-copy-base": (url: string) => {
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
                TUICI18N;
                window.setTimeout(() => {
                    layerElem.remove();
                }, 3000);
            }
        },
        userBlock: async function (article: Element) {
            for (let i = 0; i <= 2; i++) {
                const blockButton = document.querySelector<HTMLDivElement>(`[data-testid="block"][role="menuitem"]`);
                if (blockButton == null) {
                    article.querySelector<HTMLInputElement>(`[data-testid="caret"]`).click();
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
        deleteButton: function (article: Element) {
            for (let i = 0; i <= 2; i++) {
                const deleteButtonButton = document.querySelector(
                    `[role="menuitem"] [d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"]`,
                );
                if (deleteButtonButton == null) {
                    article.querySelector<HTMLInputElement>(`[data-testid="caret"]`).click();
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
        userMute: function (article: Element) {
            for (let i = 0; i <= 2; i++) {
                const blockButton = document.querySelector(
                    `[role="menuitem"] [d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"]`,
                );
                if (blockButton == null) {
                    article.querySelector<HTMLButtonElement>(`[data-testid="caret"]`).click();
                } else {
                    blockButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                    break;
                }
            }
        },
        quoteTweet: function (retButton: HTMLButtonElement) {
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
        likeAndRT: function (retButton: HTMLButtonElement, likeButton: HTMLButtonElement) {
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
                    TUICLibrary.waitAndClickElement(`[role="menuitem"]:is([data-testid="retweetConfirm"],[data-testid="unretweetConfirm"])`);
                }, 100);
            }
        },
        "share-button": function (elem: HTMLAnchorElement) {
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
                        _data.buttonFunction["url-copy-inShare"](elem);
                        document.querySelector<HTMLDivElement>(`#layers > div+div > div > div > div > div+div > div > div`).click();
                    });
            }, 100);
        },
    },
    buttonElement: {
        _handleEvent: function (elem: Element, eventFunc: () => void, twitterButton: Element) {
            (twitterButton ? elem.children[0].children[0] : elem.children[0]).addEventListener("keydown", (e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    eventFunc();
                }
            });
            elem.children[0].addEventListener("click", () => {
                eventFunc();
            });
        },
        /*boolkmark: function (val) {
            const elem = TUICLibrary.HTMLParse(_data.buttonHTML["boolkmark"](val.option.isBigArticle)).item(0);
            _data.buttonElement._handleEvent(elem, () => {
                _data.buttonFunction["boolkmark"](val.elements.buttonBarBase.querySelector(_data.selectors["share-button"]));
            });
            return elem;
        },*/
        sendDM: function (val: ArticleInfomation) {
            const elem = TUICLibrary.HTMLParse(_data.buttonHTML["sendDM"](val.option.isBigArticle, val.option.cannotRT || val.option.cannotShare || val.option.isLockedAccount)).item(0);
            if (!(val.option.cannotRT || val.option.cannotShare || val.option.isLockedAccount)) {
                _data.buttonElement._handleEvent(
                    elem,
                    () => {
                        _data.buttonFunction["sendDM"](val.elements.buttonBarBase.querySelector(_data.selectors["share-button"]));
                    },
                    null,
                );
            }
            return elem;
        },
        "url-copy": function (val: ArticleInfomation) {
            const elem = TUICLibrary.HTMLParse(_data.buttonHTML["url-copy"](val.option.isBigArticle)).item(0);
            //if (val.option.isLockedAccount || val.option.cannotRT) {
            if (val.elements.statusButton != null) {
                _data.buttonElement._handleEvent(
                    elem,
                    () => {
                        _data.buttonFunction["url-copy-cannotCopy"](val.elements.statusButton);
                    },
                    null,
                );
            }
            /*} else {
                _data.buttonElement._handleEvent(
                    elem,
                    () => {
                        _data.buttonFunction["url-copy"](val.elements.buttonBarBase.querySelector(_data.selectors["share-button"]));
                    },
                    null,
                );
            }*/
            return elem;
        },
        userBlock: function (val: ArticleInfomation) {
            const elem = TUICLibrary.HTMLParse(_data.buttonHTML["userBlock"](val.option.isBigArticle, val.option.isMe)).item(0);
            _data.buttonElement._handleEvent(
                elem,
                () => {
                    _data.buttonFunction["userBlock"](val.elements.articleBase);
                },
                null,
            );
            return elem;
        },
        userMute: function (val: ArticleInfomation) {
            const elem = TUICLibrary.HTMLParse(_data.buttonHTML["userMute"](val.option.isBigArticle, val.option.isMe)).item(0);
            _data.buttonElement._handleEvent(
                elem,
                () => {
                    _data.buttonFunction["userMute"](val.elements.articleBase);
                },
                null,
            );
            return elem;
        },
        deleteButton: function (val: ArticleInfomation) {
            const elem = TUICLibrary.HTMLParse(_data.buttonHTML["deleteButton"](val.option.isBigArticle, val.option.isMe)).item(0);
            if (val.option.isMe) {
                _data.buttonElement._handleEvent(
                    elem,
                    () => {
                        _data.buttonFunction["deleteButton"](val.elements.articleBase);
                    },
                    null,
                );
            }
            return elem;
        },
        quoteTweet: function (val: ArticleInfomation) {
            const elem = TUICLibrary.HTMLParse(_data.buttonHTML["quoteTweet"](val.option.isBigArticle, val.option.cannotRT)).item(0);
            if (!val.option.cannotRT)
                _data.buttonElement._handleEvent(
                    elem,
                    () => {
                        _data.buttonFunction["quoteTweet"](val.elements.buttonBarBase.querySelector(_data.selectors["retweet-button"]));
                    },
                    null,
                );
            return elem;
        },
        likeAndRT: function (val: ArticleInfomation) {
            const elem = TUICLibrary.HTMLParse(_data.buttonHTML["likeAndRT"](val.option.isBigArticle, val.option.cannotRT)).item(0);
            if (!val.option.cannotRT)
                _data.buttonElement._handleEvent(
                    elem,
                    () => {
                        _data.buttonFunction["likeAndRT"](val.elements.buttonBarBase.querySelector(_data.selectors["retweet-button"]), val.elements.buttonBarBase.querySelector(_data.selectors["like-button"]));
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
    copyURL: {
        linkCopyURL_twitter: "twitter.com",
        linkCopyURL_X: "x.com",
        linkCopyURL_vxTwitter: "vxtwitter.com",
        linkCopyURL_fxTwitter: "fxtwitter.com",
    },
};
export function tweetSettings() {
    if (!buttonUnderTweetRunning) {
        buttonUnderTweetRunning = true;
        while (document.querySelector(`article.TUICDidArticle .TUICTweetButtomBarBase > div > div:not(.TUIC_UnderTweetButton):not(.TUICButtonUnderTweet)`)) {
            const elem = document.querySelector(`article.TUICDidArticle .TUICTweetButtomBarBase > div > div:not(.TUIC_UnderTweetButton):not(.TUICButtonUnderTweet)`);
            let barBase = elem;
            while (!barBase.classList.contains("TUICDidArticle")) {
                barBase = barBase.parentElement;
            }
            barBase.classList.remove("TUICDidArticle");
        }
        const articles = document.querySelectorAll(`article:not(.TUICDidArticle)`);
        if (articles.length != 0) {
            for (const articleBase of articles) {
                (async () => {
                    if (articleBase.querySelector(_data.selectors["reply-button"]) && articleBase.querySelector(_data.selectors["like-button"])) {
                        //要素の探索

                        // 名前の判断に使う要素(画面左下...だったはず)
                        const userNameElem = document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`);
                        // ツイート下ボタンの親
                        const buttonBarBase = articleBase.querySelector(_data.selectors["reply-button"]).hasClosest<HTMLDivElement>(_data.selectors["like-button"]);
                        buttonBarBase.parentElement.classList.add("TUICTweetButtomBarBase");
                        // ボタンたち
                        const underTweetButtons: { [key: string]: Element } = {};
                        for (const sel in _data.selectors) {
                            const elem = buttonBarBase.querySelector<Element>(_data.selectors[sel])?.closest(`.TUICTweetButtomBarBase > * > *`);
                            if (elem) {
                                underTweetButtons[sel] = elem;
                            }
                        }
                        // ステータスボタン
                        const statusButton = articleBase.querySelector(`[href*="/status/"] > time`)?.parentElement as HTMLAnchorElement;

                        // ツイートについての情報集
                        const articleInfo: ArticleInfomation = {
                            elements: { buttonBarBase: buttonBarBase, articleBase: articleBase, statusButton: statusButton },
                            option: {
                                isLockedAccount: !!articleBase.querySelector(`[data-testid="icon-lock"]`),
                                cannotRT: !!underTweetButtons["retweet-button"].querySelector(`.r-icoktb,.r-12c3ph5`),
                                cannotShare: !!underTweetButtons["retweet-button"].querySelector(`.r-icoktb,.r-12c3ph5`),
                                isMe: userNameElem == null ? false : articleBase.querySelector(`[data-testid="User-Name"] > .r-1awozwy+div span`).textContent == "@" + userNameElem.getAttribute("data-testid").replace(`UserAvatar-Container-`, ""),
                                isBigArticle: !!articleBase.querySelector(`.r-1srniue`),
                            },
                        };

                        if (!articleInfo.option.cannotRT) {
                            // リツイートボタンのイベントハンドラ(メニューを出さないなどの実装のため)
                            _data.buttonElement._handleEvent(underTweetButtons["retweet-button"], _data.buttonFunction["retweet-button"], null);
                            if (!articleInfo.option.isLockedAccount && underTweetButtons["share-button"]) {
                                // 共有ボタンのイベントハンドラ(URLをコピーのドメイン変更のため)
                                _data.buttonElement._handleEvent(
                                    underTweetButtons["share-button"],
                                    () => {
                                        _data.buttonFunction["share-button"](statusButton);
                                    },
                                    null,
                                );
                            }
                        }

                        if (articleInfo.option.isBigArticle) {
                            // Class付け
                            articleBase.classList.add("TUICItIsBigArticle");
                            // 画像を拡大表示しているときの共有ボタンに対応
                            if (location.pathname.includes("/photo/") || location.pathname.includes("/video/")) {
                                articleBase.classList.add("TUICItIsBigArticlePhoto");

                                if (!articleInfo.option.cannotRT && !articleInfo.option.isLockedAccount) {
                                    const shareButtom = document.querySelector<HTMLElement>(`[aria-labelledby="modal-header"] > div > div:not([aria-expanded="true"]) [aria-haspopup="menu"]:not([data-testid="retweet"]):not([data-testid="unretweet"])`);
                                    if (shareButtom) {
                                        _data.buttonElement._handleEvent(
                                            shareButtom,
                                            () => {
                                                _data.buttonFunction["share-button"](articleInfo.elements.statusButton);
                                            },
                                            null,
                                        );
                                    }
                                }
                            }
                            // エンゲージメントの設置
                            placeEngagementsLink(articleInfo);
                        }

                        // ツイートにCSSを付与
                        tweetStyle(articleInfo);

                        // リンクカードを設置
                        showLinkCardInfo(articleInfo);

                        // ツイート下ボタンの並び替え
                        let lastButton: Element | null = null;
                        for (const i of TUICPref.getPref("visibleButtons")) {
                            let processingButton: Element | null = null;
                            if (i in underTweetButtons) {
                                processingButton = underTweetButtons[i];
                                processingButton.classList.add("TUIC_UnderTweetButton");
                                processingButton.show();
                            } else if (i in _data.buttonElement) {
                                processingButton = _data.buttonElement[i](articleInfo);
                            }
                            // Twitterのボタンと同化させるためにClassとかごにょごにょしてる
                            if (processingButton) {
                                if (underTweetButtons["reply-button"].querySelector(`[data-testid="app-text-transition-container"]`) && processingButton.querySelector(`[data-testid="app-text-transition-container"]`) == null) {
                                    processingButton.querySelector("svg").closest(`:is([role="button"],[role="link"]) > div`).appendChild(_data.emptyElement());
                                }
                                processingButton.classList.remove("r-1rq6c10", "r-1b7u577");
                                processingButton.classList.add(TUICLibrary.fontSizeClass("r-12zb1j4", "r-1kb76zh", "r-1kb76zh", "r-19einr3", "r-zso239"));
                                lastButton = processingButton;
                                buttonBarBase.appendChild(processingButton);
                            }
                        }
                        // 最後のボタンだけ特殊処理
                        if (lastButton) {
                            if (lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x") != null && lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x").children[0].children[0].childElementCount == 0) {
                                lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x").remove();
                                lastButton.classList.add(TUICLibrary.fontSizeClass("r-12zb1j4", "r-1kb76zh", "r-1kb76zh", "r-19einr3", "r-zso239"));
                            }
                            lastButton.classList.add("r-1rq6c10", "r-1b7u577");
                            buttonBarBase.style.minHeight = "";
                            buttonBarBase.style.height = "";
                        } else {
                            buttonBarBase.style.minHeight = "0";
                            buttonBarBase.style.height = "0";
                        }

                        for (const i of _data.all) {
                            if (!TUICPref.getPref("visibleButtons").includes(i) && i in underTweetButtons) {
                                underTweetButtons[i].hide();
                            }
                        }

                        tweetTopButtons(articleInfo);
                    }
                    articleBase.classList.add("TUICDidArticle");
                })();
            }
        }
        buttonUnderTweetRunning = false;
    }
}

function tweetStyle(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    // 横スクロールバーを設置
    if (TUICPref.getPref("tweetDisplaySetting.bottomScroll")) articleInfo.elements.buttonBarBase.parentElement.classList.add("TUICScrollBottom");
    // 下のスペースを無くす
    if (TUICPref.getPref("tweetDisplaySetting.bottomSpace")) {
        const space = articleBase.querySelector(`[aria-labelledby]`);
        if (space && space.children?.[0]?.childElementCount === 0) {
            space.classList.add("TUIC_NONE_SPACE_BOTTOM_TWEET");
        }
    }
    // リツイートを非表示
    if (TUICPref.getPref("timeline.hideOhterRTTL") && articleBase.querySelector(`a[href^="/"] > [data-testid="socialContext"]`) != null) {
        articleBase.hide();
    }

    // リツイートを非表示
    if (TUICPref.getPref("timeline.hideReply") && articleInfo.option.isBigArticle) {
        articleBase.closest(`[data-testid="cellInnerDiv"]`).classList.add("TUIC_HideNextElements");
    }
}
