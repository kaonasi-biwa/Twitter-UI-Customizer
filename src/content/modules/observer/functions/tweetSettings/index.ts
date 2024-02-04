import { TUICData } from "@content/data";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { tweetTopButtons } from "./tweetTopButtons";
import { placeEngagementsLink } from "./placeEngagementsLink";
import { showLinkCardInfo } from "./showLinkCardInfo";

let buttonUnderTweetRunning: boolean = false;

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
                    if (articleBase.querySelector(TUICData.visibleButtons.selectors["reply-button"]) && articleBase.querySelector(TUICData.visibleButtons.selectors["like-button"])) {
                        //要素の探索

                        // 名前の判断に使う要素(画面左下...だったはず)
                        const userNameElem = document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`);
                        // ツイート下ボタンの親
                        const buttonBarBase = articleBase.querySelector<Element>(TUICData.visibleButtons.selectors["reply-button"]).hasClosest(TUICData.visibleButtons.selectors["like-button"]);
                        buttonBarBase.parentElement.classList.add("TUICTweetButtomBarBase");
                        // ボタンたち
                        const underTweetButtons: { [key: string]: Element } = {};
                        for (const sel in TUICData.visibleButtons.selectors) {
                            const elem = buttonBarBase.querySelector<Element>(TUICData.visibleButtons.selectors[sel])?.closest(`.TUICTweetButtomBarBase > * > *`);
                            if (elem) {
                                underTweetButtons[sel] = elem;
                            }
                        }
                        // ステータスボタン
                        const statusButton = articleBase.querySelector(`[href*="/status/"] > time`)?.parentElement;

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
                            TUICData.visibleButtons.buttonElement._handleEvent(underTweetButtons["retweet-button"], TUICData.visibleButtons.buttonFunction["retweet-button"], null);
                            if (!articleInfo.option.isLockedAccount && underTweetButtons["share-button"]) {
                                // 共有ボタンのイベントハンドラ(URLをコピーのドメイン変更のため)
                                TUICData.visibleButtons.buttonElement._handleEvent(
                                    underTweetButtons["share-button"],
                                    () => {
                                        TUICData.visibleButtons.buttonFunction["share-button"](statusButton);
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
                                        TUICData.visibleButtons.buttonElement._handleEvent(
                                            shareButtom,
                                            () => {
                                                TUICData.visibleButtons.buttonFunction["share-button"](articleInfo.elements.statusButton);
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
                            } else if (i in TUICData.visibleButtons.buttonElement) {
                                processingButton = TUICData.visibleButtons.buttonElement[i](articleInfo);
                            }
                            // Twitterのボタンと同化させるためにClassとかごにょごにょしてる
                            if (processingButton) {
                                if (underTweetButtons["reply-button"].querySelector(`[data-testid="app-text-transition-container"]`) && processingButton.querySelector(`[data-testid="app-text-transition-container"]`) == null) {
                                    processingButton.querySelector("svg").closest(`:is([role="button"],[role="link"]) > div`).appendChild(TUICData.visibleButtons.emptyElement());
                                }
                                processingButton.classList.remove("r-1rq6c10", "r-1b7u577");
                                processingButton.classList.add(TUICLibrary.fontSizeClass("r-12zb1j4", "r-1kb76zh", "r-1kb76zh", "r-19einr3", "r-zso239"));
                                lastButton = processingButton;
                                buttonBarBase.appendChild(processingButton);
                            }
                        }
                        // 最後のボタンだけ特殊処理
                        if (lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x") != null && lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x").children[0].children[0].childElementCount == 0) {
                            lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x").remove();
                            lastButton.classList.add(TUICLibrary.fontSizeClass("r-12zb1j4", "r-1kb76zh", "r-1kb76zh", "r-19einr3", "r-zso239"));
                        }
                        lastButton.classList.add("r-1rq6c10", "r-1b7u577");

                        for (const i of TUICData.visibleButtons.all) {
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
}
