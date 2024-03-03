import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { tweetTopButtons } from "./tweetTopButtons";
import { placeEngagementsLink } from "./placeEngagementsLink";
import { showLinkCardInfo } from "./showLinkCardInfo";
import { TUICData } from "@content/data";
import { render } from "solid-js/web";
import { EmptyButtonHTML, TweetUnderButtonsHTML, placeCopiedURLMessage, tweetButtonData } from "./buttonHTML";
import { ButtonUnderTweetSelectors, TweetUnderButtonsData } from "./_data";

let buttonUnderTweetRunning: boolean = false;
const _data = {
    all: TUICData.visibleButtons.all,
    selectors: { ...ButtonUnderTweetSelectors },
    buttonFunction: {
        "retweet-button": async () => {
            if (TUICPref.getPref("tweetDisplaySetting.RTNotQuote")) {
                // TODO: wait 関数を作って置き換えるべきか？
                window.setTimeout(async () => {
                    (await TUICLibrary.waitForElement<HTMLButtonElement>(`[role="menuitem"]:is([data-testid="retweetConfirm"],[data-testid="unretweetConfirm"])`))[0].click();
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
                        navigator.clipboard.writeText(elem.href.replace(/(twitter\.com|x\.com)/, TweetUnderButtonsData.copyURL[TUICPref.getPref("tweetDisplaySetting.linkShareCopyURL").replace("Share", "")]));
                        placeCopiedURLMessage();
                        document.querySelector<HTMLDivElement>(`#layers > div+div > div > div > div > div+div > div > div`).click();
                    });
            }, 100);
        },
    },
    buttonElement: {
        _handleEvent: function (elem: Element, eventFunc: () => void) {
            elem.addEventListener("keydown", (e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    eventFunc();
                }
            });
            elem.addEventListener("click", () => {
                eventFunc();
            });
        },
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
                            _data.buttonElement._handleEvent(underTweetButtons["retweet-button"], _data.buttonFunction["retweet-button"]);
                            if (!articleInfo.option.isLockedAccount && underTweetButtons["share-button"]) {
                                // 共有ボタンのイベントハンドラ(URLをコピーのドメイン変更のため)
                                _data.buttonElement._handleEvent(underTweetButtons["share-button"], () => {
                                    _data.buttonFunction["share-button"](statusButton);
                                });
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
                                        _data.buttonElement._handleEvent(shareButtom, () => {
                                            _data.buttonFunction["share-button"](articleInfo.elements.statusButton);
                                        });
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
                            } else if (i in tweetButtonData) {
                                render(TweetUnderButtonsHTML(i, articleInfo), buttonBarBase);
                                processingButton = Array.from(buttonBarBase.children).slice(-1)[0];
                            }
                            // Twitterのボタンと同化させるためにClassとかごにょごにょしてる
                            if (processingButton) {
                                if (underTweetButtons["reply-button"].querySelector(`[data-testid="app-text-transition-container"]`) && processingButton.querySelector(`[data-testid="app-text-transition-container"]`) == null) {
                                    render(EmptyButtonHTML, processingButton.querySelector("svg").closest(`:is([role="button"],[role="link"]) > div`));
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
