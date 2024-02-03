import { isSafemode } from "./safemode.ts";
import { TUICI18N } from "./i18n.ts";

import { applySystemCss } from "./applyCSS.ts";

import { buttonUnderTweet, showLinkCardInfo, osusumeUser, replacePost, invisibleItems, updateStyles, profileInitialTab, sidebarButtons, dmPage, fixTwittersBugs } from "./modules/observer/functions.ts";
import { TUICPref } from "./modules/index.ts";

import { Dialog } from "@shared/tlui/components/Dialog.ts";
import { ButtonComponent } from "@shared/tlui/components/ButtonComponent.ts";
import { TextboxComponent } from "@shared/tlui/components/TextboxComponent.ts";
import { changeIcon } from "./modules/observer/functions/changeIcon.ts";
import { placeSettingPage } from "./modules/observer/functions/placeSettingPage.ts";

export const TUICObserver = {
    observer: null,
    target: null,
    headObserver: null,
    errors: [],

    data: { fixedDMBox: false, buttonUnderTweetRunning: false, fontSize1: "-1", fontSize2: null },
    observerFunction: (mutationsList) => {
        TUICObserver.observer.disconnect();
        try {
            //* apply CSS
            if (document.querySelector("html").style.fontSize.toString() != TUICObserver.data.fontSize1 || document.querySelector(`h1[role="heading"] > a[href="/home"]`)?.className.includes("r-116um31") !== TUICObserver.data.fontSize2) {
                applySystemCss();
                TUICObserver.data.fontSize1 = document.querySelector("html").style.fontSize.toString();
                TUICObserver.data.fontSize2 = document.querySelector(`h1[role="heading"] > a[href="/home"]`)?.className.includes("r-116um31");
            }

            if (document.querySelector(`.TUICSidebarButton .r-mbgqwd`) != null) document.querySelector(`.TUICSidebarButton .r-mbgqwd`)?.classList?.remove("r-mbgqwd");

            // Twitterのアイコンに関する設定
            changeIcon();

            // サイドバーに関する設定
            sidebarButtons();

            buttonUnderTweet();

            showLinkCardInfo();

            osusumeUser();

            // DMに関する設定
            dmPage();

            // ポストをツイートに修正
            replacePost();

            invisibleItems();

            updateStyles();

            // プロフィールページの初期タブの設定
            profileInitialTab();

            // Twitterのバグを修正(現在はDMに関するもののみ)
            fixTwittersBugs();

            // 設定画面の配置
            placeSettingPage();

            TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
        } catch (e) {
            console.error(e);
            TUICObserver.errors.push(`${e.toString()}${"\r"}${e.stack}`);
            if (TUICObserver.errors.length > 2) {
                const dialog = new Dialog(TUICI18N.get("common-error"));
                dialog
                    .addComponents([
                        ...TUICI18N.get("observerError-message").split("\r"),
                        "",
                        new TextboxComponent(TUICObserver.errors.join("\r\r"), { readonly: true, rows: 5 }),
                        new ButtonComponent(TUICI18N.get("observerError-copy"), () => {
                            dialog.close();
                            navigator.clipboard.writeText(TUICObserver.errors.join("\r\r"));
                        }),
                        new ButtonComponent(
                            TUICI18N.get("common-close"),
                            () => dialog.close(),

                            {
                                invertColor: true,
                            },
                        ),
                    ])
                    .open();
            } else {
                window.setTimeout(TUICObserver.observerFunction, 5000);
            }
        }
    },
    config: {
        childList: true,
        subtree: true,
    },
    titleObserverFunction: () => {
        if (TUICObserver.headObserver) TUICObserver.headObserver.disconnect();
        else TUICObserver.headObserver = new MutationObserver(TUICObserver.titleObserverFunction);

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

        TUICObserver.headObserver.observe(document.querySelector("title"), {
            characterData: true,
            childList: true,
        });
    },
};
TUICObserver.observer = new MutationObserver(TUICObserver.observerFunction);
