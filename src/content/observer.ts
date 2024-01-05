import { TUICLibrary } from "./library.ts";
import { isSafemode } from "./safemode.ts";
import { TUICI18N } from "./i18n.ts";

import { applySystemCss } from "./applyCSS.ts";

import { sidebarButtons } from "./modules/observer/sidebarBtn.ts";
import { dmPage, fixDMBox } from "./modules/observer/fixDM.ts";
import { twitterIcon, buttonUnderTweet, showLinkCardInfo, osusumeUser, replacePost, invisibleItems, updateStyles, profileInitialTab } from "./modules/observer/functions.ts";
import { displaySetting } from "./modules/settings/display.ts";
import { TUICPref } from "./modules/index.ts";

export const TUICObserver = {
    observer: null,
    iconObserver: null,
    target: null,
    headObserver: null,

    data: { fixedDMBox: false, buttonUnderTweetRunning: false, tweetCount: null, fontSize1: "-1", fontSize2: null },
    observerFunction: (mutationsList) => {
        TUICObserver.observer.disconnect();

        //* apply CSS
        if (document.querySelector("html").style.fontSize.toString() != TUICObserver.data.fontSize1 || document.querySelector(`h1[role="heading"] > a[href="/home"]`)?.className.includes("r-116um31") !== TUICObserver.data.fontSize2) {
            applySystemCss();
            TUICObserver.data.fontSize1 = document.querySelector("html").style.fontSize.toString();
            TUICObserver.data.fontSize2 = document.querySelector(`h1[role="heading"] > a[href="/home"]`)?.className.includes("r-116um31");
        }

        //* setup icon observer
        {
            if (document.querySelector(`header h1 a > div > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`) != null) {
                if (!TUICObserver.iconObserver) {
                    TUICObserver.iconObserver = new MutationObserver(() => {
                        if (document.querySelector(`header h1 a > div > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`) != null) {
                            TUICObserver.iconObserver.disconnect();
                            twitterIcon(document.querySelector(`header h1 a > div > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`), document.querySelector(`header [role="heading"]`));
                            TUICObserver.iconObserver.observe(document.querySelector("header h1 a > div"), {
                                childList: true,
                                subtree: true,
                                attributes: true,
                            });
                        }
                    });
                    TUICObserver.iconObserver.observe(document.querySelector("header h1 a > div"), {
                        childList: true,
                        subtree: true,
                        attributes: true,
                    });
                }
                twitterIcon(document.querySelector(`header h1 a > div > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`), document.querySelector(`header [role="heading"]`));
            }
            if (!document.querySelector(`header h1 a > div > svg`)) {
                TUICObserver.iconObserver = "";
            }
            if (document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`)) {
                twitterIcon(document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`), document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] [role="heading"]`));
            }
            if (document.querySelector(`[data-testid="interstitialGraphic"] > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`) != null) {
                twitterIcon(document.querySelector(`[data-testid="interstitialGraphic"] > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`), document.querySelector(`[data-testid="interstitialGraphic"]`));
            }
            if (document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`) != null) {
                twitterIcon(document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`), document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`).parentElement);
            }
        }

        if (document.querySelector(`.TUICSidebarButton .r-mbgqwd`) != null) document.querySelector(`.TUICSidebarButton .r-mbgqwd`)?.classList?.remove("r-mbgqwd");

        sidebarButtons();

        buttonUnderTweet();
        showLinkCardInfo();

        osusumeUser();
        dmPage();
        replacePost();
        invisibleItems();

        updateStyles();

        fixDMBox();
        profileInitialTab();

        if (location.pathname === "/settings/display" || location.pathname === "/i/display") {
            if (document.querySelector("#unsent-tweet-background") == null && document.querySelector('[role="slider"]:not(article *)') != null) {
                let displayRootElement = document.querySelector('[role="slider"]:not(article *)').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                if (location.pathname === "/i/display") displayRootElement = displayRootElement.parentElement;

                displaySetting(displayRootElement);

                (async () => {
                    const tweetElement = displayRootElement.querySelector(`article[data-testid="tweet"]`);
                    const tweetTextElement = tweetElement.querySelector(`[data-testid="tweetText"] > span`);
                    const tweetLinkElement = tweetElement.querySelector(`[data-testid="tweetText"] > div`);

                    const tweet = ((a) => a[Math.floor(Math.random() * a.length)])([
                        {
                            user: {
                                id: "tuic_official",
                                name: "【公式】UI Customizer by Ablaze",
                                icon: "https://pbs.twimg.com/profile_images/1711757756464828416/sAXJyO-y_400x400.jpg",
                            },
                            text: "Twitter UI Customizer は、 {mention} を筆頭に、多数の開発者によってオープンソースソフトウェアとして開発されています。",
                            mentionTo: "kaonasi_biwa",
                        },
                    ]);

                    const tweetUserId = tweet.user.id;
                    const tweetUserName = tweet.user.name;
                    const tweetUserIcon = tweet.user.icon;
                    const tweetText = tweet.text;
                    const tweetMentionUserId = tweet.mentionTo;

                    // ツイートのテキストとして使用する、最初のspan要素以外を削除
                    tweetElement.querySelectorAll(`[data-testid="tweetText"] span:not(:first-child)`).forEach((e) => e.remove());
                    // メンションを任意の場所に持っていけるよう削除
                    tweetLinkElement.remove();

                    // img要素がそもそも存在しない場合があるので、待機
                    await TUICLibrary.waitForElement("img", tweetElement);

                    // ユーザーアイコン
                    tweetElement.querySelector("img").parentElement.querySelector("div").style.backgroundImage = `url(${tweetUserIcon})`;
                    tweetElement.querySelector("img").src = tweetUserIcon;
                    // ユーザー名・ユーザーID
                    tweetElement.querySelector(`[data-testid="User-Name"] > div:nth-child(1) span > span`).textContent = tweetUserName;
                    tweetElement.querySelector(`[data-testid="User-Name"] > div:nth-child(2) span`).textContent = "@" + tweetUserId;
                    // メンションのユーザー
                    tweetLinkElement.querySelector("a").href = "/" + tweetMentionUserId;
                    tweetLinkElement.querySelector("a").textContent = "@" + tweetMentionUserId;

                    // テキストに設定
                    tweetTextElement.innerHTML = tweetText.replace("{mention}", tweetLinkElement.outerHTML);
                })();
            }
        }
        if (window.location.pathname == "/tuic/safemode") {
        } else if (window.location.pathname == "/settings/display") {
            TUICLibrary.waitForElement(`main div[role='slider']`).then((elems) => {
                const _large = elems[0].closest<HTMLElement>(`section[aria-labelledby="detail-header"] > div.r-qocrb3`);
                const _small = elems[0].closest<HTMLElement>(`main > div > div > div > div:nth-child(2)`);
                //console.warn(`_large : ${_large}\n_small : ${_small}`);
                displaySetting(_large ? _large : _small);
            });
        } else if (window.location.pathname == "/i/display") {
            //* /settings/displayでダイアログ（/i/display）を開けると、ダイアログ側にTUICの設定が表示されない。

            TUICLibrary.waitForElement(`div[role='slider']`).then((elems) => {
                const _dialog = elems[0].closest<HTMLElement>(`div[aria-labelledby="modal-header"] > div > div > div > div:nth-child(2)`);
                const _fullscreen = elems[0].closest<HTMLElement>(`main > div > div > div:nth-child(2)`);
                //console.warn(`_large : ${_large}\n_small : ${_small}`);
                displaySetting(_dialog ? _dialog : _fullscreen);
            });
        }

        TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    },
    config: {
        childList: true,
        subtree: true,
    },
    titleObserverFunction: async () => {
        if (TUICObserver.headObserver) TUICObserver.headObserver.disconnect();
        else TUICObserver.headObserver = new MutationObserver(TUICObserver.titleObserverFunction);

        const titleElement = document.querySelector("title");

        if (isSafemode) {
            document.title = TUICI18N.get("safemode-title");
        } else if (TUICPref.getPref("XToTwitter.XToTwitter")) {
            if (document.title == "X") {
                document.title = "Twitter";
            } else if (window.location.pathname.includes("/i/timeline") || window.location.pathname.includes("/compose/tweet")) {
                TUICObserver.headObserver.disconnect();
                document.title = (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") + TUICI18N.get("XtoTwitter-PostToTweet-tweetNotificationsTitle") + " / Twitter";
            } else if (window.location.pathname.endsWith("/with_replies") && !window.location.pathname.includes("/status/")) {
                TUICObserver.headObserver.disconnect();
                const titleInfo = document.title.match(
                    new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-profile-postsWithReplies-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{fullName}", "(.*)").replace("{screenName}", "(.*)")),
                ); /*/Xユーザーの(.*)さん: 「(.*)」/*/
                if (!titleInfo || titleInfo.length <= 1) {
                    document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
                } else {
                    document.title =
                        (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") +
                        TUICI18N.get("XtoTwitter-PostToTweet-profile-postsWithReplies-old")
                            .replaceAll("&quot;", '"')
                            .replace(`{fullName}`, titleInfo[1])
                            .replace("{screenName}", titleInfo[2])
                            .replace(/(.*)\/ X(」|")/, "$1 / Twitter");
                }
            } else if (window.location.pathname.endsWith("/media") && !window.location.pathname.includes("/status/")) {
                TUICObserver.headObserver.disconnect();
                const titleInfo = document.title.match(new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-profile-media-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{fullName}", "(.*)").replace("{screenName}", "(.*)"))); /*/Xユーザーの(.*)さん: 「(.*)」/*/
                if (!titleInfo || titleInfo.length <= 1) {
                    document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
                } else {
                    document.title =
                        (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") +
                        TUICI18N.get("XtoTwitter-PostToTweet-profile-media-old")
                            .replaceAll("&quot;", '"')
                            .replace(`{fullName}`, titleInfo[1])
                            .replace("{screenName}", titleInfo[2])
                            .replace(/(.*)\/ X(」|")/, "$1 / Twitter");
                }
            } else if (window.location.pathname.endsWith("/likes") && !window.location.pathname.includes("/status/")) {
                TUICObserver.headObserver.disconnect();
                const titleInfo = document.title.match(new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-profile-likes-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{fullName}", "(.*)").replace("{screenName}", "(.*)"))); /*/Xユーザーの(.*)さん: 「(.*)」/*/
                if (!titleInfo || titleInfo.length <= 1) {
                    document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
                } else {
                    document.title =
                        (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") +
                        TUICI18N.get("XtoTwitter-PostToTweet-profile-likes-old")
                            .replaceAll("&quot;", '"')
                            .replace(`{fullName}`, titleInfo[1])
                            .replace("{screenName}", titleInfo[2])
                            .replace(/(.*)\/ X(」|")/, "$1 / Twitter");
                }
            } else if (window.location.pathname.includes("/status/")) {
                /**/
                TUICObserver.headObserver.disconnect();
                const titleInfo = document.title.match(new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-titlePeopleTweetedUser").replaceAll("&quot;", '"').replace("{fullName}", "(.*)").replace("{tweetText}", "(.*)"))); /*/Xユーザーの(.*)さん: 「(.*)」/*/
                if (!titleInfo || titleInfo.length <= 1) {
                    document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
                } else {
                    document.title =
                        (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") +
                        TUICI18N.get("XtoTwitter-PostToTweet-titlePeopleTweeted")
                            .replaceAll("&quot;", '"')
                            .replace(`{fullName}`, titleInfo[1])
                            .replace("{tweetText}", titleInfo[2])
                            .replace(/(.*)\/ X(」|")/, "$1 / Twitter");
                } /**/
            } else if (document.title.endsWith(" / X")) {
                document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
            }
        } else if (document.title.endsWith(" / Twitter")) {
            document.title = document.title.replace(" / Twitter", " / X");
        }

        TUICObserver.headObserver.observe(titleElement, {
            characterData: true,
        });
    },
};
TUICObserver.observer = new MutationObserver(TUICObserver.observerFunction);
