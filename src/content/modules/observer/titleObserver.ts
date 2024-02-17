import { TUICI18N } from "@modules/i18n";
import { TUICPref } from "..";
import { isSafemode } from "@modules/settings/safemode/isSafemode.ts";

const headObserver: MutationObserver = new MutationObserver(titleObserverFunction);

export function titleObserverFunction() {
    let stoppedObserver = false;
    if (isSafemode) {
        headObserver.disconnect();
        stoppedObserver = true;
        document.title = TUICI18N.get("safemode-title");
    } else if (TUICPref.getPref("XToTwitter.XToTwitter")) {
        if (!document.title.endsWith("Twitter")) {
            headObserver.disconnect();
            stoppedObserver = true;
            if (document.title == "X") {
                document.title = "Twitter";
            } else if (window.location.pathname.includes("/i/timeline") || window.location.pathname.includes("/compose/tweet")) {
                document.title = (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") + TUICI18N.get("XtoTwitter-PostToTweet-tweetNotificationsTitle") + " / Twitter";
            } else if (window.location.pathname.endsWith("/with_replies") && !window.location.pathname.includes("/status/")) {
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
                }
            } else if (document.title.endsWith(" / X")) {
                document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
            }
        }
    } /* else if (document.title.endsWith(" / Twitter")) {
        headObserver.disconnect();
        stoppedObserver = true;
        document.title = document.title.replace(" / Twitter", " / X");
    }*/

    if (stoppedObserver) {
        headObserver.observe(document.querySelector("title"), {
            characterData: true,
            childList: true,
        });
    }
}
