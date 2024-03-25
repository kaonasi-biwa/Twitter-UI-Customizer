let DisplaySettingObserver: MutationObserver = null;

let target = document.querySelector("body") ?? undefined;
const config = {
    childList: true,
    subtree: true,
};
import { TUICLibrary } from "@content/library";
import { displaySetting } from "@modules/settings/display";

export function placeSettingObserver() {
    if (DisplaySettingObserver) DisplaySettingObserver.disconnect();
    else DisplaySettingObserver = new MutationObserver(placeSettingObserver);

    placeSettingPage();

    if (!target) target = document.querySelector("body");

    DisplaySettingObserver.observe(target, config);
}

export function placeSettingPage() {
    switch (window.location.pathname) {
        case "/tuic/safemode":
            break;
        case "/settings/display": {
            TUICLibrary.waitForElement(`main div[role='slider']`).then((elems) => {
                const _large = elems[0].closest<HTMLElement>(`section[aria-labelledby="detail-header"] > div.r-qocrb3`);
                const _small = elems[0].closest<HTMLElement>(`main > div > div > div > div:nth-child(2)`);
                //console.warn(`_large : ${_large}\n_small : ${_small}`);
                displaySetting(_large ? _large : _small);
            });
            rewriteTweet();
            break;
        }
        case "/i/display": {
            //* /settings/displayでダイアログ（/i/display）を開けると、ダイアログ側にTUICの設定が表示されない。

            TUICLibrary.waitForElement(`div[role='slider']`).then((elems) => {
                const _dialog = elems[0].closest<HTMLElement>(`div[aria-labelledby="modal-header"] > div > div > div > div:nth-child(2)`);
                const _fullscreen = elems[0].closest<HTMLElement>(`main > div > div > div:nth-child(2)`);
                //console.warn(`_large : ${_large}\n_small : ${_small}`);
                displaySetting(_dialog ? _dialog : _fullscreen);
            });
            rewriteTweet();
        }
    }
}

function rewriteTweet() {
    if (document.querySelector("#TUIC_setting") == null && document.querySelector('[role="slider"]:not(article *)') != null) {
        const displayRootElement = document.querySelector('[role="slider"]:not(article *)').closest<HTMLElement>(`:is([data-viewportview="true"],[aria-labelledby="detail-header"],main>div>div>div) > div+div`);

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
