import { TUICObserver } from "@content/observer";
import DOG from "@content/icons/logo/dog.png?url";
import TWITTER from "@content/icons/logo/twitter.svg?raw";
import X from "@content/icons/logo/x.svg?raw";
import EMPTY from "@content/icons/logo/empty.svg?url";
import { TUICLibrary } from "@content/library";
import { TUICData } from "@content/data";
import { TUICI18N } from "@content/i18n";
import { HOME_ICON, SIDEBAR_BUTTON_ICON } from "@content/icons";
import { TUICPref } from "..";

export function twitterIcon(elem: HTMLElement, base: HTMLElement) {
    const favicon = document.querySelector<HTMLLinkElement>(`[rel="shortcut icon"]`);
    switch (TUICPref.getPref("twitterIcon")) {
        case "invisible":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                favicon.href = chrome.runtime.getURL(EMPTY);
            }
            elem.classList.add("TUIC_SVGDISPNONE");
            base.classList.add("TUIC_DISPNONE");
            break;
        case "twitter":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                favicon.href = "data:image/svg+xml," + encodeURIComponent(TWITTER.replace("var(--TUIC-favicon-color)", TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color", null)));
                //replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color")}"`)
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_Twitter");
            break;
        case "dog":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                favicon.href = chrome.runtime.getURL(DOG);
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_Dog");
            break;
        case "custom":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                const imageURL = localStorage.getItem(TUICPref.getPref("otherBoolSetting.roundIcon") ? "TUIC_IconImg_Favicon" : "TUIC_IconImg");
                favicon.href = imageURL ?? chrome.runtime.getURL(EMPTY);
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_IconImg");
            break;
        case "twitterIcon-X":
            if (TUICPref.getPref("otherBoolSetting.faviconSet")) {
                console.log(encodeURIComponent(X.replace("var(--TUIC-favicon-color)", TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color", null))));
                favicon.href = "data:image/svg+xml," + encodeURIComponent(X.replace("var(--TUIC-favicon-color)", TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color", null)));
                //.replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color")}"`);
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_X");
            break;
        default:
            favicon.href = "//abs.twimg.com/favicons/twitter.3.ico";
            elem.classList.add("TUIC_NOTSVGDISPNONE");
            break;
    }
    if (!TUICPref.getPref("otherBoolSetting.faviconSet")) {
        favicon.href = "//abs.twimg.com/favicons/twitter.3.ico";
    }
}

export function showLinkCardInfo() {
    if (TUICPref.getPref("otherBoolSetting.showLinkCardInfo")) {
        for (const infoCardElem of document.querySelectorAll(`article:not(.TUICDidInfoArticle) [data-testid="card.layoutLarge.media"] a[aria-label] > div+div`)) {
            let elem = infoCardElem;
            while (elem.tagName != "ARTICLE") {
                elem = elem.parentElement;
            }
            const card = elem.querySelector('[data-testid="card.wrapper"] [data-testid="card.layoutLarge.media"]').parentElement;

            if (card.querySelector(".TUIC_LinkCardInfo") == null) {
                card.children[1].classList.add("TUIC_DISPNONE");
                card.querySelector('[data-testid="card.layoutLarge.media"] a > div+div').classList.add("TUIC_DISPNONE");

                const link = card.querySelector<HTMLAnchorElement>('[data-testid="card.layoutLarge.media"] a').href;
                const domain = card.querySelector('[data-testid="card.layoutLarge.media"] a > div+div span').textContent;
                const title = card.querySelector('[data-testid="card.layoutLarge.media"] a').getAttribute("aria-label").replace(/^.*? /, "");
                const description = "";
                const oldDisplay = TUICData.showLinkCardInfo(link, domain, title, description);
                card.appendChild(oldDisplay);
            }
            elem.classList.add("TUICDidInfoArticle");
        }
    } else {
        document.querySelectorAll(".TUIC_LinkCardInfo").forEach((elem) => elem.remove());
    }
}

export function buttonUnderTweet() {
    if (!TUICObserver.data.buttonUnderTweetRunning) {
        TUICObserver.data.buttonUnderTweetRunning = true;
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
            for (const elem of articles) {
                (async () => {
                    const xCIcon = elem.querySelector(`path[d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"]`)?.parentElement?.parentElement;
                    if (xCIcon != null) {
                        twitterIcon(xCIcon, xCIcon.parentElement);
                    }
                    if (elem.querySelector(TUICData.visibleButtons.selectors["reply-button"]) != null && elem.querySelector(TUICData.visibleButtons.selectors["like-button"]) != null) {
                        const lockedAccount = elem.querySelector(`[data-testid="icon-lock"]`) != null;
                        const userNameElem = document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`);
                        const isMe =
                            userNameElem == null
                                ? false
                                : elem.querySelector(`[data-testid="User-Name"] > .r-1awozwy+div span`).textContent ==
                                  "@" + document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`).getAttribute("data-testid").replace(`UserAvatar-Container-`, "");

                        let bar_base = elem.querySelector(TUICData.visibleButtons.selectors["reply-button"]);
                        while (bar_base.querySelector(TUICData.visibleButtons.selectors["like-button"]) == null) {
                            bar_base = bar_base.parentElement;
                        }
                        if (TUICPref.getPref("tweetDisplaySetting.bottomScroll")) bar_base.parentElement.classList.add("TUICScrollBottom");
                        bar_base.parentElement.classList.add("TUICTweetButtomBarBase");
                        if (TUICPref.getPref("tweetDisplaySetting.bottomSpace")) {
                            const space = elem.querySelector(`[aria-labelledby]`);
                            if (space && space.children?.[0]?.childElementCount === 0) {
                                space.classList.add("TUIC_NONE_SPACE_BOTTOM_TWEET");
                            }
                        }
                        if (TUICPref.getPref("timeline.hideOhterRTTL") && elem.querySelector(`a[href^="/"] > [data-testid="socialContext"]`) != null) {
                            elem.classList.add("TUIC_DISPNONE");
                        }
                        const bar_item = {};
                        for (const elem_item of bar_base.children) {
                            for (const sel in TUICData.visibleButtons.selectors) {
                                if (elem_item.querySelector(TUICData.visibleButtons.selectors[sel]) != null) {
                                    bar_item[sel] = elem_item;
                                    break;
                                }
                            }
                        }
                        const statusButton = elem.querySelector(`[href*="/status/"] > time`)?.parentElement;
                        const cannotRT = bar_item["retweet-button"].querySelector(`.r-icoktb,.r-12c3ph5`) != null;
                        const cannotShare = bar_item["retweet-button"].querySelector(`.r-icoktb,.r-12c3ph5`) != null;
                        if (!cannotRT) {
                            TUICData.visibleButtons.buttonElement._handleEvent(bar_item["retweet-button"], TUICData.visibleButtons.buttonFunction["retweet-button"], null);
                        }
                        if (!cannotRT && !lockedAccount && bar_item["share-button"]) {
                            TUICData.visibleButtons.buttonElement._handleEvent(
                                bar_item["share-button"],
                                () => {
                                    TUICData.visibleButtons.buttonFunction["share-button"](statusButton);
                                },
                                null,
                            );
                        }
                        const isBigArticle = !!elem.querySelector(`.r-1srniue`);
                        for (const boxElem of Array.from(elem.querySelectorAll(`.TUICEngagementsBox`))) {
                            boxElem.remove();
                        }
                        if (isBigArticle) {
                            elem.classList.add("TUICItIsBigArticle");
                            if (location.pathname.includes("/photo/") || location.pathname.includes("/video/")) {
                                elem.classList.add("TUICItIsBigArticlePhoto");
                            }

                            if (TUICPref.getPref("otherBoolSetting.placeEngagementsLink")) {
                                const engageentsTypeList = TUICPref.getPref("fixEngagements");
                                const shortName = TUICPref.getPref("otherBoolSetting.placeEngagementsLinkShort");
                                const engagementsFixList = [];
                                const engageFixListFunc = (count) => {
                                    let tempArr = [];
                                    for (let i = 0; i < engageentsTypeList.length; i++) {
                                        tempArr.push([engageentsTypeList[i]]);
                                        if (tempArr.length == count) {
                                            engagementsFixList.push(tempArr);
                                            tempArr = [];
                                        }
                                    }
                                    if (tempArr.length != 0) {
                                        engagementsFixList.push(tempArr);
                                    }
                                };
                                const isPhotoPage = location.pathname.includes("/photo/") || location.pathname.includes("/video/");
                                if (shortName && !isPhotoPage) {
                                    engageFixListFunc(3);
                                } else if ((shortName && isPhotoPage) || (!shortName && !isPhotoPage)) {
                                    engageFixListFunc(2);
                                } else {
                                    engageFixListFunc(1);
                                }
                                for (const engageList of engagementsFixList) {
                                    const engagementsBox = TUICData.visibleButtons.fixEngagements.engagementsBox();
                                    for (const engagementsID of engageList) {
                                        engagementsBox.appendChild(TUICData.visibleButtons.fixEngagements.links(engagementsID, elem, shortName));
                                    }
                                    bar_base.parentElement.parentElement.insertBefore(engagementsBox, bar_base.parentElement);
                                }
                            }
                        }

                        let lastButton;
                        for (const i of TUICPref.getPref("visibleButtons")) {
                            let div = null;
                            if (i in bar_item) {
                                div = bar_item[i];
                                div.classList.add("TUIC_UnderTweetButton");
                                div.classList.remove("TUIC_DISPNONE");
                            } else if (i in TUICData.visibleButtons.buttonElement) {
                                div = TUICData.visibleButtons.buttonElement[i](
                                    { elements: { buttonBarBase: bar_base, article: elem, statusButton: statusButton }, option: { isLockedAccount: lockedAccount, cannotRT: cannotRT, cannotShare: cannotShare, isMe: isMe, isBigArticle: isBigArticle } } /*bar_base, elem, lockedAccount*/,
                                );
                            }
                            if (div) {
                                if (bar_item["reply-button"].querySelector(`[data-testid="app-text-transition-container"]`) && div.querySelector(`[data-testid="app-text-transition-container"]`) == null) {
                                    div.querySelector("svg").parentElement.parentElement.appendChild(TUICData.visibleButtons.emptyElement());
                                }
                                div.classList.remove("r-1rq6c10");
                                div.classList.remove("r-1b7u577");
                                lastButton = div;
                                bar_base.appendChild(div);
                            }
                        }
                        if (lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x") != null && lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x").children[0].children[0].childElementCount == 0) {
                            lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x").remove();
                        }
                        lastButton.classList.add("r-1rq6c10");
                        lastButton.classList.add("r-1b7u577");

                        for (const i of TUICData.settings.visibleButtons.all) {
                            if (!TUICPref.getPref("visibleButtons").includes(i) && i in bar_item) {
                                bar_item[i].classList.add("TUIC_DISPNONE");
                            }
                        }

                        if (elem.querySelector(TUICData.tweetTopButton.selector.moreMenu)) {
                            const moreMenuButton = elem.querySelector<HTMLElement>(TUICData.tweetTopButton.selector.moreMenu);
                            moreMenuButton.addEventListener("keydown", (e) => {
                                if (e.key === "Enter") {
                                    tweetMoreMenuContent();
                                }
                            });
                            moreMenuButton.children[0].addEventListener("click", (e) => {
                                tweetMoreMenuContent();
                            });

                            let isFirst = true;
                            const tweetTopButtons = {};
                            const tweetTopParent = elem.querySelector(TUICData.tweetTopButton.selector.moreMenu).parentElement;
                            const marginSize = TUICLibrary.fontSizeClass("20px", "20px", "20px", "20px", "20px");
                            for (const i of TUICData.settings.tweetTopButton.all) {
                                const div = elem.querySelector(TUICData.tweetTopButton.selector[i]);
                                if (div) {
                                    tweetTopButtons[i] = div;
                                }
                            }
                            for (const i of TUICPref.getPref("tweetTopButton")) {
                                let div = null;
                                if (i in tweetTopButtons) {
                                    div = tweetTopButtons[i];
                                    div.classList.remove("TUIC_DISPNONE");
                                } else if (i in TUICData.tweetTopButton.buttonElement) {
                                    div = TUICData.tweetTopButton.buttonElement[i](elem.querySelector(TUICData.tweetTopButton.selector.moreMenu), { isLockedAccount: lockedAccount, cannotRT: cannotRT, cannotShare: cannotShare, isMe: isMe, isBigArticle: isBigArticle });
                                    tweetTopButtons[i] = div;
                                }
                                if (!isFirst) {
                                    div.style.marginLeft = marginSize;
                                } else {
                                    div.style.marginLeft = "";
                                }
                                isFirst = false;
                                tweetTopParent.appendChild(div);
                            }

                            for (const i of TUICData.settings.tweetTopButton.all) {
                                if (!TUICPref.getPref("tweetTopButton").includes(i) && i in tweetTopButtons) {
                                    tweetTopButtons[i].classList.add("TUIC_DISPNONE");
                                }
                            }
                        }
                    }
                    elem.classList.add("TUICDidArticle");
                })();
            }
        }
        TUICObserver.data.buttonUnderTweetRunning = false;
    }
}

export function osusumeUser() {
    if (TUICPref.getPref("timeline.osusume-user-timeline") && location.search.indexOf("f=user") == -1 && !location.href.includes("/settings/")) {
        const cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not(.TUICDidArticle):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *)`);
        for (const elem of cells) {
            if (
                elem.querySelector(`[data-testid="UserCell"]`) != null &&
                elem.previousElementSibling != null &&
                elem.querySelector(`[aria-live="polite"]`) == null &&
                (elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) != null || elem.previousElementSibling.querySelector(`h2`) != null)
            ) {
                elem.classList.add("TUIC_DISPNONE");
                if (elem.previousElementSibling.querySelector(`h2`) != null) {
                    elem.previousElementSibling.classList.add("TUIC_DISPNONE");
                }
            }
            if (elem.querySelector(`a[href*="&f=user"],a[href^="/i/connect_people?"]`) && elem.querySelector(`[aria-live="polite"]`) == null) {
                elem.classList.add("TUIC_DISPNONE");
            }
        }
    }
    if (window.location.pathname.includes("/status/") && /^\d+$/.test(new URL(location.href).pathname.split("/")[3]) && document.querySelector(`[data-testid="primaryColumn"]`) != null) {
        let cells = document.querySelectorAll<HTMLDivElement>(`:is([data-testid="primaryColumn"],[data-testid="mask"]+div [aria-labelledby^="accessible-list"]) [data-testid="cellInnerDiv"]:not([style*="opacity: 0.01"]):not(.TUIC_DISCOVERHEADER)`);
        for (const elem of cells) {
            if (elem.querySelector("article") == null && elem.querySelector("h2") != null && (elem.children?.[0]?.children?.[0]?.children?.[0]?.children?.[1]?.getAttribute("style") ?? "").includes("-webkit-line-clamp: 2;")) {
                elem.classList.add("TUIC_DISCOVERHEADER");
                if (TUICPref.getPref("timeline-discoverMore") === "discoverMore_invisible") {
                    elem.classList.add("TUIC_DISPNONE");
                    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "none");
                    if (elem.getAttribute("TUICDiscoberMore") != null) {
                        elem.removeAttribute("TUICDiscoberMore");
                    }
                } else if (TUICPref.getPref("timeline-discoverMore") === "discoverMore_detailOpen") {
                    elem.setAttribute("TUICDiscoberMore", "true");
                    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "");
                    elem.onclick = (event) => {
                        const nowType = elem.getAttribute("TUICDiscoberMore");
                        elem.setAttribute("TUICDiscoberMore", nowType == "true" ? "false" : "true");
                        elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", nowType == "true" ? "none" : "");
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                    };
                } else if (TUICPref.getPref("timeline-discoverMore") === "discoverMore_detailClose") {
                    elem.setAttribute("TUICDiscoberMore", "false");
                    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "none");
                    elem.onclick = (event) => {
                        const nowType = elem.getAttribute("TUICDiscoberMore");
                        elem.setAttribute("TUICDiscoberMore", nowType == "true" ? "false" : "true");
                        elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", nowType == "true" ? "none" : "");
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                    };
                } else {
                    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "");
                    if (elem.getAttribute("TUICDiscoberMore") != null) {
                        elem.removeAttribute("TUICDiscoberMore");
                    }
                }
            }
        }
        cells = document.querySelectorAll(`:is([data-testid="primaryColumn"],[data-testid="mask"]+div [aria-labelledby^="accessible-list"]) [data-testid="cellInnerDiv"]:not([style*="opacity: 0.01"])`);
        for (const elem of cells) {
            if (elem.querySelector("article") == null && elem.querySelector("h2") != null && (elem.children?.[0]?.children?.[0]?.children?.[0]?.children?.[1]?.getAttribute("style") ?? "").includes("-webkit-line-clamp: 2;")) {
                let elem2 = elem.nextElementSibling;
                while (elem2 != null && elem2 != undefined && elem2?.[0]?.children?.[0]?.childElementCount != 0) {
                    elem2.classList.add("TUIC_DISCOVERMORE");
                    elem2 = elem2.nextElementSibling;
                }
            }
        }
    }
}

export function replacePost() {
    // NOTE: まだ置き換えられていない要素を取得し、置き換え済みクラスを追加する関数
    function getNotReplacedElements(selector: string) {
        const replaceMarkClass = "TUIC_TWEETREPLACE";

        // NOTE: セレクタで選択された要素の中から、すでに置き換え済みの要素を除外
        const elements = document.querySelectorAll(`${selector}:not(.TUIC_TWEETREPLACE)`);

        // NOTE: 要素に置き換え済みクラスを追加
        (async () => {
            for (const e of elements) {
                e.classList.add(replaceMarkClass);
            }
        })();

        return elements;
    }

    if (TUICPref.getPref("XToTwitter.PostToTweet")) {
        const isTweetPage = location.pathname.includes("/status/");
        const isEngagementsPage = document.querySelector(`[role="tab"]`) && location.pathname.includes("/status/") && (location.pathname.endsWith("/quotes") || location.pathname.endsWith("/retweets") || location.pathname.endsWith("/likes"));
        const isRetweetPage = location.pathname.endsWith("/retweets");
        const isLikesPage = location.pathname.endsWith("/likes");
        const isHistoryPage = location.pathname.endsWith("/history");
        const isQuotesPage = location.pathname.endsWith("/retweets/with_comments") || location.pathname.endsWith("/quotes");
        const isAnalyticsPage = location.pathname.endsWith("/analytics");
        const isNotifications = location.pathname.endsWith("/notifications");
        const isNotificationsTimeline = location.pathname.endsWith("/i/timeline");
        const isUserPage = !!document.querySelector('[data-testid="primaryColumn"] [data-testid="UserName"]');
        const isUnsentPage = location.pathname.includes("/unsent/");
        const isTweetingPage = location.pathname.includes("/compose/tweet");

        const isHoveringMiniSidenavTweetButton = !!document.querySelector('.r-1vtznih[data-testid="SideNav_NewTweet_Button"]');
        const isHoveringRetweetButton = !!document.querySelector('[role="button"][data-testid="retweet"] > div > div > div.r-15azkrj');
        const isHoveringUnretweetButton = !!document.querySelector('[role="button"][data-testid="unretweet"] > div > div > div.r-15azkrj');

        const localizeElemText = async (selector: string, i18nRes: string) => {
            for (const elem of getNotReplacedElements(selector)) elem.textContent = i18nRes;
        };

        if (isTweetPage) {
            // ツイート画面の「n件のリツイート」のテキスト
            localizeElemText('a[href$="/retweets"] > div+span > span', TUICI18N.get("XtoTwitter-PostToTweet-retweetCount"));
            // ツイート画面の「n件の引用ツイート」のテキスト
            localizeElemText('a[href$="/retweets/with_comments"] > div+span > span', TUICI18N.get("XtoTwitter-PostToTweet-quoteCount"));

            // ツイート画面のツイートアナリティクスの表示ボタン
            localizeElemText('[data-testid="analyticsButton"] span', TUICI18N.get("XtoTwitter-PostToTweet-tweetAnalytics"));

            // ツイート画面の翻訳の表示ボタン
            localizeElemText('[data-testid="tweetText"] + [role="button"]', TUICI18N.get("XtoTwitter-PostToTweet-translateTweet"));

            // ツイートを追加
            localizeElemText('[data-testid="cellInnerDiv"] a[href="/compose/tweet"] [role="presentation"] > div > span > span', TUICI18N.get("XtoTwitter-PostToTweet-addTweet"));

            if (isAnalyticsPage) {
                // ツイートアナリティクスのダイアログヘッダー
                localizeElemText('[role="dialog"] [data-viewportview="true"] h2#modal-header > span', TUICI18N.get("XtoTwitter-PostToTweet-tweetAnalyticsHeader"));
            }

            if (isHistoryPage) {
                // ツイートのバージョンの「最新のポスト」
                // i18nが存在するんで一旦保留
                //localizeElemText('[role="dialog"] [data-viewportview="true"] h2#modal-header > span'), TUICI18N.get("XtoTwitter-PostToTweet-tweetAnalyticsHeader");
            }
        } else if (isUserPage) {
            // ユーザーの「n件のツイート」
            for (const elem of getNotReplacedElements('[data-testid="primaryColumn"] h2[role="heading"] + div')) elem.textContent.split(" ")[0] + " " + TUICI18N.get("XtoTwitter-PostToTweet-tweetCount");

            // TLのリスト選択バー・ユーザープロフィールのツイート／返信／メディア等のリスト（ここでは後者のみ）
            localizeElemText('[data-testid="primaryColumn"] [data-testid="ScrollSnap-SwipeableList"] > [data-testid="ScrollSnap-List"] > div:first-child span', TUICI18N.get("XtoTwitter-PostToTweet-tweet"));
        } else if (isNotifications) {
            // 通知の「ポスト」を修正 「リツイート」以外は適したi18nが見つからないので無理だった
            /**/
            for (const elem of getNotReplacedElements(`[data-testid="cellInnerDiv"] article > div span > span:not(a *)`)) {
                if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-notificationsRepost").toLowerCase())) {
                    elem.textContent = elem.textContent.replace(TUICI18N.get("XtoTwitter-PostToTweet-notificationsRepost").toLowerCase(), TUICI18N.get("XtoTwitter-PostToTweet-notificationsRetweet").toLowerCase());
                }
            } /**/
        }

        for (const elem of getNotReplacedElements(`[data-testid="trend"] > div > div:nth-of-type(3) > span`)) elem.textContent.split(" ")[0] + TUICI18N.get("XtoTwitter-PostToTweet-tweetCount");

        // 予約ツイート関連
        if (isUnsentPage) {
            // タブの未送信ポスト
            // 作成したツイートを～
            localizeElemText(`[role="dialog"] [data-testid="empty_state_body_text"]`, TUICI18N.get("XtoTwitter-PostToTweet-unsentPageTitle"));

            //未送信ツイートのタブ
            localizeElemText(`[href="/compose/tweet/unsent/drafts"][role="tab"] > div > div > span`, TUICI18N.get("XtoTwitter-PostToTweet-unsentPageTab1"));
        }

        // 共有 > リンクをコピー
        for (const elem of getNotReplacedElements(
            '[role="menu"] [data-testid="Dropdown"] [d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]',
        ))
            elem.closest(`[role="menuitem"]`).querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-shareMenu-copyURL");

        // 共有 > その他の方法
        for (const elem of getNotReplacedElements('[role="menu"] [data-testid="Dropdown"] [d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"]'))
            elem.closest(`[role="menuitem"]`).querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-shareMenu-copyOtherWay");

        // ツイート入力ダイアログ
        const isDialog = !!document.querySelector('[role="alertdialog"],[role="dialog"],[data-testid="twc-cc-mask"]+div');
        const isReply = !!document.querySelector('[role="dialog"] [data-testid="tweet"]');
        const isMultipleTweet = !isReply && document.querySelectorAll(':is([role="dialog"],[data-testid="twc-cc-mask"]+div) [data-testid^="UserAvatar-Container-"]:not([data-testid="attachments"] *)').length !== 1;
        const writingTweetCount = document.querySelectorAll(':is([role="dialog"],[data-testid="twc-cc-mask"]+div) [data-testid^="UserAvatar-Container-"]:not([data-testid="attachments"] *)').length;
        if (writingTweetCount != TUICObserver.data.tweetCount) {
            for (const elem of document.querySelectorAll(`${!document.querySelector(`[data-testid="twc-cc-mask"]`) ? `:is([role="dialog"])` : ""} :is([data-testid="tweetButton"], [data-testid="tweetButtonInline"]) > div > span > span.TUIC_TWEETREPLACE`)) {
                elem.classList.remove("TUIC_TWEETREPLACE");
            }
        }
        TUICObserver.data.tweetCount = writingTweetCount;
        // ツイートボタン
        for (const elem of getNotReplacedElements(':is([data-testid="tweetButton"], [data-testid="tweetButtonInline"]) > div > span > span')) {
            if (isDialog && isMultipleTweet) {
                // ダイアログで複数ツイートする場合
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetAllButton");
            } else if (isDialog && !isReply) {
                // ダイアログでツイートする場合
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetButton");
            } else if (!isDialog && !isTweetPage) {
                // TL上部のツイートダイアログの場合
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetButton");
            } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-tweetButton-latest")) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetButton");
            } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-tweetAllButton-latest")) {
                // ダイアログで複数ツイートする場合
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetAllButton");
            }
            // NOTE: kaonasi_biwa さんと連絡を取り合い、返信ボタンは現時点では改変しないことになりました: https://twitter.com/fami_kotone/status/1692551624714231961
        }

        // ツイート画面の「返信をツイートする」のプレースホルダーテキスト
        for (const elem of getNotReplacedElements(".public-DraftEditorPlaceholder-inner")) {
            if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-placeholder-reply-latest")) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-placeholder-reply");
            } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-placeholder-addTweet-latest")) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-placeholder-addTweet-old");
            }
        }
        // ツイート下書き保存確認ダイアログのヘッダー
        if (isDialog) {
            for (const elem of getNotReplacedElements(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > h1 > span`)) {
                if (isTweetingPage) {
                    elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetSaveConfirm");
                }
            }

            const blockText = new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-block-dialogBody-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{screenName}", "(.*)"));
            for (const elem of getNotReplacedElements(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > h1+div > span`)) {
                if (elem.textContent != " ") {
                    const blockTextMatch = elem.textContent.match(blockText);
                    if (blockTextMatch && blockTextMatch.length > 1) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-block-dialogBody-old").replaceAll("{screenName}", blockTextMatch[1]);
                    } else if (isUnsentPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-unsentTweetDeleteConfirmSpan");
                        elem.parentElement.parentElement.querySelector("h1 > span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-unsentTweetDeleteConfirmTitle");
                    } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-deleteTweet-dialogBody-latest")) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-deleteTweet-dialogBody-old");
                        elem.parentElement.parentElement.querySelector("h1 > span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-deleteTweet-dialogTitle");
                    } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-retweet-dialogBody-latest")) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweet-dialogBody-old");
                        elem.parentElement.parentElement.querySelector("h1 > span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweet-dialogTitle");
                        elem.parentElement.parentElement.querySelector(`[data-testid="confirmationSheetConfirm"] > div > span > span`).textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweet-dialogConfirm");
                    }
                }
            }
        }

        // リツイート確認ポップアップの「リツイート」ボタン
        localizeElemText('[role="menuitem"][data-testid="retweetConfirm"] span', TUICI18N.get("XtoTwitter-PostToTweet-retweet"));
        // リツイート確認ポップアップの「リツイート」ボタン
        localizeElemText('[role="menuitem"][data-testid="unretweetConfirm"] span', TUICI18N.get("XtoTwitter-PostToTweet-unretweet"));
        // リツイート確認ポップアップの「引用ツイート」ボタン
        localizeElemText('[role="menuitem"][href="/compose/tweet"] span', TUICI18N.get("XtoTwitter-PostToTweet-quote"));

        // ツイートその他ポップアップの「このツイートに興味がない」ボタン
        // for (const elem of getNotReplacedElements('path[d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"]'))
        //     elem.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-quote");
        // ツイートその他ポップアップの「ツイートを埋め込み」ボタン
        for (const elem of getNotReplacedElements('path[d="M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z"]'))
            elem.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-menu-embed");
        // ツイートその他ポップアップの「ツイートを報告」ボタン
        for (const elem of getNotReplacedElements('path[d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"]')) {
            const changeElem = elem?.parentElement?.parentElement?.parentElement?.parentElement?.querySelector("span");
            if (changeElem) {
                changeElem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-reportTweet");
            }
        }
        // ツイートその他ポップアップの「ツイートアナリティクスの表示」ボタン
        localizeElemText('[role="menu"] a[role="menuitem"][href$="/analytics"] span', TUICI18N.get("XtoTwitter-PostToTweet-tweetAnalytics"));

        // サイドバーのツイートボタン
        localizeElemText('[data-testid="SideNav_NewTweet_Button"] > div > span > div > div > span > span', TUICI18N.get("XtoTwitter-PostToTweet-tweetButton"));

        //右サイドバーのスペースのやつ
        for (const elem of getNotReplacedElements(`[data-testid="sidebarColumn"] [data-testid="pill-contents-container"]`))
            elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("h2 span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-rightSidebar-spaceTitle");

        // 「新しいツイートを表示」ポップアップ
        localizeElemText('[data-testid="pillLabel"] > span > span > span', TUICI18N.get("XtoTwitter-PostToTweet-tweeted"));

        // 「変身できるユーザーを変更」ダイアログの説明文
        localizeElemText("#conversation-controls-details > span", TUICI18N.get("XtoTwitter-PostToTweet-replyRangeDetail"));

        // TLの「n件のツイートを表示」
        for (const elem of getNotReplacedElements(`[data-testid="cellInnerDiv"] > div > [role="button"] > div > div > span`)) {
            let n = 0;
            elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tlShowMoreTweet").replaceAll("{count}", (match) => {
                return n++ == 0 ? elem.textContent.match(/(\d+)/)[0] : "";
            });
        }

        // プライマリカラム（中央に表示される画面）のヘッダー
        for (const elem of getNotReplacedElements('[data-testid="primaryColumn"] h2[role="heading"] > span')) {
            if (isEngagementsPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-engagementsTitle");
            } else if (isQuotesPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quoteTitle");
            } else if (isTweetPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetTitle");
            } else if (isNotificationsTimeline) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetNotificationsTitle");
            }
        }

        // RT一覧とかのダイアログのタイトル
        for (const elem of getNotReplacedElements('[role="dialog"] h2[role="heading"] > span')) {
            if (isRetweetPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweetedUsersPageTitle");
            }
        }

        // 誰にも反応（いいね/RT/引用）されていない状況においての、一覧ページの「まだ○○はありません」
        for (const elem of getNotReplacedElements('[data-testid="emptyState"] [data-testid="empty_state_header_text"]')) {
            if (isQuotesPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quoteTweeted-none-header");
            } else if (isRetweetPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweeted-none-header");
            } else if (isLikesPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-liked-none-header");
            }
        }
        // 誰にも反応（いいね/RT/引用）されていない状況においての、一覧ページの「まだ○○はありません」
        const blockTextEmptyProfile = new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-blocked-none-body-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{screenName}", "(.*)"));
        for (const elem of getNotReplacedElements('[data-testid="emptyState"] [data-testid="empty_state_body_text"]')) {
            const blockTextMatch = elem.textContent.match(blockTextEmptyProfile);
            if (isQuotesPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quoteTweeted-none-body");
            } else if (isRetweetPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweeted-none-body");
            } else if (isLikesPage) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-liked-none-body");
            } else if (blockTextMatch && blockTextMatch.length > 1) {
                elem.childNodes[0].textContent = TUICI18N.get("XtoTwitter-PostToTweet-blocked-none-body-old").replaceAll("{screenName}", blockTextMatch[1]);
                elem.parentElement.querySelector(`[data-testid="empty_state_button_text"] > div > span > span`).textContent = TUICI18N.get("XtoTwitter-PostToTweet-blocked-none-button");
            }
        }

        // エンゲージメントの引用ツイートのタブ
        if (isQuotesPage) {
            for (const elem of getNotReplacedElements(`[role="tab"][href$="/quotes"] > div > div > span`)) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quoteTitle");
            }
        }

        // エンゲージメントリツイートのタブ
        if (isQuotesPage) {
            for (const elem of getNotReplacedElements(`[role="tab"][href$="/retweets"] > div > div > span`)) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-engagements-retweetTitle");
            }
        }

        // 下に出てくるトーストボックス
        for (const elem of getNotReplacedElements(`#layers div[data-testid="toast"] > div > span`)) {
            if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-tweeted-one-latest-layer"))) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweeted-one-old-layer");
            } else if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-tweeted-some-latest-layer"))) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweeted-some-old-layer");
            } else if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-addBookmark-latest-layer"))) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-addBookmark-old-layer");
            } else if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-deleteBookmark-latest-layer"))) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-deleteBookmark-old-layer");
            } else if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-deleteUnsentTweet-latest-layer"))) {
                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-deleteUnsentTweet-old-layer");
            }
        }

        // 検索バーのテキストボックス
        for (const elem of getNotReplacedElements('[role="search"] input')) elem.setAttribute("placeholder", TUICI18N.get("XtoTwitter-PostToTweet-keywordSearch"));

        // サイドナビゲーションが小さい時のツイートボタンをホバー中のツールチップ
        if (isHoveringMiniSidenavTweetButton) for (const elem of getNotReplacedElements('[role="tooltip"] > [data-testid="HoverLabel"] > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetButton");
        // リツイートボタンをホバー中のツールチップ
        else if (isHoveringRetweetButton) for (const elem of getNotReplacedElements('[role="tooltip"] > [data-testid="HoverLabel"] > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweet");
        // リツイート解除ボタンをホバー中のツールチップ
        else if (isHoveringUnretweetButton) for (const elem of getNotReplacedElements('[role="tooltip"] > [data-testid="HoverLabel"] > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-unretweet");

        // 固定ツイートの「固定」表示
        for (const elem of getNotReplacedElements('[data-testid="tweet"] path[d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"]'))
            elem.parentElement.parentElement.parentElement.parentElement.querySelector(`[data-testid="socialContext"] > span`).textContent = TUICI18N.get("XtoTwitter-PostToTweet-pinnedTweet");

        // 「{user}さんがリツイートしました」もしくは「リツイート済み」
        for (const elem of getNotReplacedElements(
            '[data-testid="tweet"] path[d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"]',
        )) {
            const container = elem.parentElement.parentElement.parentElement.parentElement.querySelector(`[data-testid="socialContext"]`);

            // NOTE: リツイートのSVGで取得しているが、これだとリツイートボタンも引っかかってしまうため、コンテナが検出できない場合スキップ
            if (!container) continue;

            // NOTE: テキストノードを取得
            const personRetweetedText = Array.from(container.childNodes)
                .filter((e) => e.nodeType === Node.TEXT_NODE)
                .at(-1);
            if (personRetweetedText) {
                // 「{user}さんがリツイートしました」のユーザー名の後の部分
                personRetweetedText.textContent = TUICI18N.get("XtoTwitter-PostToTweet-isRetweeted");
            } else {
                // 「リツイート済み」
                container.querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweeted");
            }
        }

        // TODO: ポスト系には関係ないが、おすすめクリエイターを削除したい。固有プロパティが見つからないので、[data-testid$="-subscribe"]が含まれる[data-testid="cellInnerDiv"]を削除し、その塊の一つ前のやつを消せばよさそう（難しそう）

        // TODO: aria-label が設定されているものは変更したほうがいいかもしれない
    }
}

export function invisibleItems() {
    document.querySelectorAll('a[href$="quick_promote_web/intro"]').forEach((e) => {
        if (TUICPref.getPref("tweetDisplaySetting.twitter-pro-promotion-btn")) {
            e.classList.add("TUIC_DISPNONE");
        } else {
            e.classList.remove("TUIC_DISPNONE");
        }
    });

    if (TUICPref.getPref("timeline.accountStart") && location.search.indexOf("f=user") === -1 && !location.href.includes("/settings/") && document.querySelector(`[href="/settings/profile"]`)) {
        const cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not(.TUICDidArticle):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *) [aria-live="polite"]`);
        for (const elem of cells) {
            elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE");
            elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add("TUIC_DISPNONE");
        }
    }
    if (TUICPref.getPref("rightSidebar.verified") && document.querySelector(`*:not(.TUIC_DISPNONE) > [role="complementary"] [href="/i/verified-choose"]`) != null) {
        document.querySelector(`*:not(.TUIC_DISPNONE) > [role="complementary"] [href="/i/verified-choose"]`).parentElement.parentElement.classList.add("TUIC_DISPNONE");
    }
    if (TUICPref.getPref("rightSidebar.trend") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="trend"]`) != null) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="trend"]`).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE");
    }
    if (
        TUICPref.getPref("rightSidebar.osusumeUser") &&
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"]:not([role="search"] *)`) != null &&
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"] [dir="auto"] > span:not([role="search"] *)`) == null
    ) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"]:not([role="search"] *)`).parentElement.parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE");
    }

    if (
        TUICPref.getPref("rightSidebar.relevantPeople") &&
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"]`) != null &&
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"] [dir="auto"] > span`) != null
    ) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"]`).parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE");
    }
    if (TUICPref.getPref("rightSidebar.links") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) > nav`) != null) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) > nav`).parentElement.classList.add("TUIC_DISPNONE");
    }
    if (TUICPref.getPref("rightSidebar.searchBox") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [role="search"]`) != null) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [role="search"]`).parentElement.parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE");
    }
    if (TUICPref.getPref("rightSidebar.space") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="pill-contents-container"]`) != null) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="pill-contents-container"]`).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE");
    }
    if (TUICPref.getPref("tweetDisplaySetting.subscribe-tweets") && window.location.pathname.includes("/status/") && /^\d+$/.test(new URL(location.href).pathname.split("/")[3]) && document.querySelector(`*:not(.TUIC_DISPNONE) > [data-testid$="-subscribe"]`) != null) {
        document.querySelector(`[data-testid$="-subscribe"]`).parentElement.classList.add("TUIC_DISPNONE");
    }
    if (TUICPref.getPref("profileSetting.invisible.subscribe-profile") && document.querySelector(`[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]:not(.TUIC_DISPNONE)`) != null) {
        document.querySelector(`[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]:not(.TUIC_DISPNONE)`).classList.add("TUIC_DISPNONE");
    }

    if (TUICPref.getPref("profileSetting.invisible.profileHighlights")) {
        const tabs = document.querySelectorAll(`:not(.TUIC_DISPNONE) > [role="tab"][href$="/highlights"]`);
        for (const elem of tabs) {
            elem.parentElement.classList.add("TUIC_DISPNONE");
        }
    }

    if (TUICPref.getPref("profileSetting.invisible.profileAffiliates")) {
        const tabs = document.querySelectorAll(`:not(.TUIC_DISPNONE) > [role="tab"][href$="/affiliates"]`);
        for (const elem of tabs) {
            elem.parentElement.classList.add("TUIC_DISPNONE");
        }
    }

    if (TUICPref.getPref("accountSwitcher.icon") && TUICPref.getPref("accountSwitcher.nameID") && TUICPref.getPref("accountSwitcher.moreMenu") && document.querySelector(`:not(TUIC_DISPNONE) > * > [data-testid="SideNav_AccountSwitcher_Button"]`)) {
        document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"]`).parentElement.parentElement.classList.add("TUIC_DISPNONE");
    }

    document.querySelectorAll('[href="/settings/monetization"], [href="/i/premium_sign_up"], [href="/settings/manage_subscriptions"]').forEach((e) => {
        if (TUICPref.getPref("invisibleItems.config-premium")) {
            e.classList.add("TUIC_DISPNONE");
        } else {
            e.classList.remove("TUIC_DISPNONE");
        }
    });

    if (TUICPref.getPref("profileSetting.invisible.verifiedFollowerTab")) {
        const nowURL = location.pathname;
        if (nowURL.endsWith("/followers") || nowURL.endsWith("/following") || nowURL.endsWith("/followers_you_follow") || nowURL.endsWith("/verified_followers")) {
            const tab = document.querySelector(`[role="presentation"]:not(.TUIC_DISPNONE) > [role="tab"][href$="/verified_followers"]`);
            if (tab) {
                tab.parentElement.classList.add("TUIC_DISPNONE");
                if (nowURL.endsWith("/verified_followers")) {
                    document.querySelector<HTMLAnchorElement>(`[role="presentation"] > [role="tab"][href$="/followers"]`)?.click();
                }
            }
            document.querySelector(`nav [data-testid="ScrollSnap-prevButtonWrapper"]:not(.TUIC_DISPNONE_PARENT > *)`)?.parentElement.classList.add("TUIC_DISPNONE_PARENT");
        }
    }

    if (TUICPref.getPref("invisibleItems.verifiedNotifications") && location.pathname.includes("/notifications")) {
        document.querySelector(`[href="/notifications/verified"][role="tab"]:not(.TUIC_DISPNONE > *)`)?.parentElement.classList.add("TUIC_DISPNONE");
    }
}

export function profileInitialTab() {
    for (const elem of document.querySelectorAll(`[data-testid^="UserAvatar-"] a:not([href$="/photo"]):not(.TUICHandledEvent)`)) {
        elem.classList.add("TUICHandledEvent");

        const userName = elem.closest(`[data-testid^="UserAvatar-"]`).getAttribute(`data-testid`).replace(`UserAvatar-Container-`, "");
        elem.addEventListener("click", profileInitialTabRedirect(userName));
    }
    for (const elem of document.querySelectorAll(`[data-testid="tweet"] a[style*="color"]:not(.TUICHandledEvent)`)) {
        elem.classList.add("TUICHandledEvent");
        if (elem.textContent.startsWith("@")) {
            elem.addEventListener("click", profileInitialTabRedirect(elem.textContent.slice(1)));
        }
    }
    const profileButtonInSidebar = document.querySelector(`[data-testid="AppTabBar_Profile_Link"]:not(.TUICHandledEvent)`);

    profileButtonInSidebar?.classList.add("TUICHandledEvent");
    profileButtonInSidebar?.addEventListener("click", profileInitialTabRedirect(profileButtonInSidebar.getAttribute("href").replace("/", "")));
}

export function profileInitialTabRedirect(userName: string) {
    if (TUICPref.getPref("profileSetting.profileInitialTab") != "tweets") {
        return () => {
            window.setTimeout(async () => {
                await TUICLibrary.waitForElement(`a[href="/${userName}/photo"]`);
                await TUICLibrary.waitForElement(`nav [role="presentation"]`);

                for (let i = 0; i <= 25; i++) {
                    const re = await new Promise((resolve2) => {
                        if (window.scrollY == 0) {
                            document.querySelector<HTMLAnchorElement>(`nav [role="presentation"] a${TUICData["profileSetting.profileInitialTab"].selectors[TUICPref.getPref("profileSetting.profileInitialTab")]}`).click();
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
            }, 100);
        };
    }
}

export async function moreMenuContent() {
    await TUICLibrary.waitForElement(`[data-testid="Dropdown"]`);
    let menuTopPx = parseFloat(document.querySelector<HTMLDivElement>(`[role="menu"]`).style.top);
    const menuItemPx = TUICLibrary.fontSizeClass(50, 53, 56, 62, 67);
    const menuInMenuPx = TUICLibrary.fontSizeClass(46, 49, 52, 58, 62);
    if (TUICPref.getPref("sidebarSetting.moreMenuItems.bookmarks")) {
        const elem = document.querySelector(`[data-testid="Dropdown"] [href="/i/bookmarks"]`);
        if (elem) {
            elem.parentElement.classList.add("TUIC_DISPNONE");
            menuTopPx += menuItemPx;
        }
    }
    if (TUICPref.getPref("sidebarSetting.moreMenuItems.monetization")) {
        const elem = document.querySelector(`[data-testid="Dropdown"] [href="/settings/monetization"]`);
        if (elem) {
            elem.parentElement.classList.add("TUIC_DISPNONE");
            menuTopPx += menuItemPx;
        }
    }

    if (TUICPref.getPref("sidebarSetting.moreMenuItems.separator")) {
        const elem = document.querySelector(`[data-testid="Dropdown"] [role="separator"]`);
        if (elem) {
            elem.parentElement.classList.add("TUIC_DISPNONE");
            menuTopPx += 5;
        }
    }
    if (TUICPref.getPref("sidebarSetting.moreMenuItems.creatorStudio")) {
        const elem = document.querySelector(`[data-testid="Dropdown"] [aria-controls$="_0_content"]`);
        if (elem) {
            elem.classList.add("TUIC_DISPNONE");
            menuTopPx += menuInMenuPx;
        }
    }
    if (TUICPref.getPref("sidebarSetting.moreMenuItems.professionalTool")) {
        const elem = document.querySelector(`[data-testid="Dropdown"] [aria-controls$="_1_content"]`);
        if (elem) {
            elem.classList.add("TUIC_DISPNONE");
            menuTopPx += menuInMenuPx;
        }
    }
    if (TUICPref.getPref("sidebarSetting.moreMenuItems.settingsAndSupport")) {
        const elem = document.querySelector(`[data-testid="Dropdown"] [aria-controls$="_2_content"][data-testid="settingsAndSupport"]`);
        if (elem) {
            elem.classList.add("TUIC_DISPNONE");
            menuTopPx += menuInMenuPx;
        }
    }
    document.querySelector<HTMLDivElement>(`[role="menu"]`).style.top = menuTopPx + "px";
}

export async function tweetMoreMenuContent() {
    await TUICLibrary.waitForElement(`[data-testid="Dropdown"]`);

    let menuTopPx = 0;
    const menuItemPx = TUICLibrary.fontSizeClass(40, 41, 44, 48, 52);
    for (const id of TUICData["tweetDisplaySetting.tweetMoreMenuItems"].all) {
        if (TUICPref.getPref(`tweetDisplaySetting.tweetMoreMenuItems.${id}`)) {
            const getFunc = TUICData["tweetDisplaySetting.tweetMoreMenuItems"].selectors[id];
            let elem = null;
            if (typeof getFunc == "function") {
                elem = getFunc();
            } else {
                elem = document.querySelector(`[data-testid="Dropdown"] ${TUICData["tweetDisplaySetting.tweetMoreMenuItems"].selectors[id]}`);
            }

            if (elem) {
                elem.closest(`[role="menuitem"]`).classList.add("TUIC_DISPNONE");
                menuTopPx += menuItemPx;
            }
        }
    }

    const needsChangeTopPx = !document.querySelector(`[role="menu"] > div`).hasAttribute("style");
    if (needsChangeTopPx) {
        document.querySelector<HTMLDivElement>(`[role="menu"]`).style.transform = `translateY(${menuTopPx}px)`;
    }
}

export function updateStyles() {
    for (const i of document.querySelectorAll(".TUICSidebarButton")) {
        const itemId = i.id.replace("TUICSidebar_", "");
        let locationBool = false;
        if (TUICData.sidebarButtons.tuicButtonUrl[itemId].endsWith("/")) {
            locationBool = location.pathname.includes(TUICData.sidebarButtons.tuicButtonUrl[itemId]);
        } else {
            locationBool = location.pathname.endsWith(TUICData.sidebarButtons.tuicButtonUrl[itemId]);
        }
        const svg_path = i.querySelector("svg path");
        if (locationBool && !i.classList.value.includes("TUICSidebarSelected")) {
            svg_path.setAttribute("d", SIDEBAR_BUTTON_ICON[itemId].selected);
            i.classList.add("TUICSidebarSelected");
        } else if (!locationBool && i.classList.value.includes("TUICSidebarSelected")) {
            svg_path.setAttribute("d", SIDEBAR_BUTTON_ICON[itemId].unselected);
            i.classList.remove("TUICSidebarSelected");
        }
        if (document.querySelector(TUICData.sidebarButtons.selectors.moremenu) != null) i.querySelector<HTMLElement>("[dir]").style.display = document.querySelector(TUICData.sidebarButtons.selectors.moremenu).children[0].childNodes.length == 2 ? "" : "none";
    }
    {
        const elem = document.querySelector(`.gt2-nav [data-testid="AppTabBar_Home_Link"]`) ?? document.querySelector("[role=banner] > div > div > div > div > div > nav " + TUICData.sidebarButtons.selectors.home);
        if (elem) {
            const isHome = location.href === "https://twitter.com/home";
            const SVGElem = elem.querySelector("svg path");
            if (TUICPref.getPref("sidebarSetting.buttonConfig.birdGoBackHome")) {
                SVGElem.setAttribute("d", isHome ? HOME_ICON.oldSelected : HOME_ICON.old);
            } else {
                SVGElem.setAttribute("d", isHome ? HOME_ICON.latestSelected : HOME_ICON.latest);
            }
        }
    }
}
