import { TUICI18N } from "@modules/i18n";
import { isSafemode } from "@modules/settings/safemode/isSafemode";
import { getPref } from "../pref";

const headObserver: MutationObserver = new MutationObserver(titleObserverFunction);
export function titleObserverFunction() {
    let stoppedObserver = false;
    if (isSafemode) {
        headObserver.disconnect();
        stoppedObserver = true;
        document.title = TUICI18N.get("safemode-title");
    } else if (getPref("XToTwitter.XToTwitter")) {
        const locPath = window.location.pathname;
        if (!document.title.endsWith("Twitter")) {
            headObserver.disconnect();
            stoppedObserver = true;

            const replaceI18NRes = (regexp: RegExp, i18nRes: string) => {
                const titleInfo = document.title.match(new RegExp(regexp)); /*/Xユーザーの(.*)さん: 「(.*)」/*/
                if (!titleInfo || titleInfo.length <= 1) {
                    document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
                } else {
                    document.title
                        = (
                            (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "")
                            + i18nRes
                                .replaceAll("&quot;", '"')
                                .replace("{fullName}", titleInfo[1])
                                .replace("{screenName}", titleInfo[2])
                                .replace("{tweetText}", titleInfo[2]) //locPath.includes("/status/")
                                .replace(/(.*)\/ X(」|")/, "$1 / Twitter")
                        );
                }
            };

            if (document.title == "X") {
                document.title = "Twitter";
            } else if (locPath.includes("/i/timeline") || locPath.includes("/compose/tweet")) {
                document.title = (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") + TUICI18N.get("XtoTwitter-PostToTweet-tweetNotificationsTitle") + " / Twitter";
            } else if (locPath.endsWith("/with_replies") && !locPath.includes("/status/")) {
                const postsWithRepliesLatest = TUICI18N.get("XtoTwitter-PostToTweet-profile-postsWithReplies-latest");
                const postsWithRepliesOld = TUICI18N.get("XtoTwitter-PostToTweet-profile-postsWithReplies-old");

                const regexp = postsWithRepliesLatest.replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{fullName}", "(.*)").replace("{screenName}", "(.*)");

                replaceI18NRes(regexp, postsWithRepliesOld);
            } else if (locPath.endsWith("/media") && !locPath.includes("/status/")) {
                const mediaLatest = TUICI18N.get("XtoTwitter-PostToTweet-profile-media-latest");
                const mediaOld = TUICI18N.get("XtoTwitter-PostToTweet-profile-media-old");

                /* /Xユーザーの(.*)さん: 「(.*)」/ */
                const regexp = new RegExp(mediaLatest.replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{fullName}", "(.*)").replace("{screenName}", "(.*)"));

                replaceI18NRes(regexp, mediaOld);
            } else if (locPath.endsWith("/likes") && !locPath.includes("/status/")) {
                const likesLatest = TUICI18N.get("XtoTwitter-PostToTweet-profile-likes-latest");
                const likesOld = TUICI18N.get("XtoTwitter-PostToTweet-profile-likes-old");

                /*/Xユーザーの(.*)さん: 「(.*)」/*/
                const regexp = new RegExp(likesLatest.replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{fullName}", "(.*)").replace("{screenName}", "(.*)"));

                replaceI18NRes(regexp, likesOld);
            } else if (locPath.includes("/status/")) {
                const titlePeopleTweetedUser = TUICI18N.get("XtoTwitter-PostToTweet-titlePeopleTweetedUser");
                const titlePeopleTweeted = TUICI18N.get("XtoTwitter-PostToTweet-titlePeopleTweeted");

                /*/Xユーザーの(.*)さん: 「(.*)」/*/
                const regexp = new RegExp(titlePeopleTweetedUser.replaceAll("&quot;", '"').replace("{fullName}", "(.*)").replace("{tweetText}", "(.*)"));

                replaceI18NRes(regexp, titlePeopleTweeted);
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
