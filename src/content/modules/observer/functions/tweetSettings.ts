import { TUICData } from "@content/data";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";

let buttonUnderTweetRunning: boolean = false;

interface ArticleInfomation {
    elements: { buttonBarBase: Element; articleBase: Element; statusButton: Element };
    option: {
        isLockedAccount: boolean;
        cannotRT: boolean;
        cannotShare: boolean;
        isMe: boolean;
        isBigArticle: boolean;
    };
}

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

                        for (const i of TUICData.settings.visibleButtons.all) {
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

function tweetTopButtons(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    if (articleBase.querySelector(TUICData.tweetTopButton.selector.moreMenu)) {
        const moreMenuButton = articleBase.querySelector<HTMLElement>(TUICData.tweetTopButton.selector.moreMenu);
        moreMenuButton.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                tweetMoreMenuContent();
            }
        });
        moreMenuButton.children[0].addEventListener("click", (e) => {
            tweetMoreMenuContent();
        });

        let isFirst = true;
        const tweetTopButtons: { [key: string]: HTMLDivElement } = {};
        const tweetTopParent = articleBase.querySelector(TUICData.tweetTopButton.selector.moreMenu).parentElement;
        const marginSize = TUICLibrary.fontSizeClass("20px", "20px", "20px", "20px", "20px");
        for (const i of TUICData.settings.tweetTopButton.all) {
            const div = articleBase.querySelector(TUICData.tweetTopButton.selector[i]);
            if (div) {
                tweetTopButtons[i] = div;
            }
        }
        for (const i of TUICPref.getPref("tweetTopButton")) {
            let div: HTMLDivElement = null;
            if (i in tweetTopButtons) {
                div = tweetTopButtons[i];
                div.show();
            } else if (i in TUICData.tweetTopButton.buttonElement) {
                div = TUICData.tweetTopButton.buttonElement[i](articleBase.querySelector(TUICData.tweetTopButton.selector.moreMenu), articleInfo);
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
                tweetTopButtons[i].hide();
            }
        }
    }
}

async function tweetMoreMenuContent() {
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
                elem.closest(`[role="menuitem"]`).hide();
                menuTopPx += menuItemPx;
            }
        }
    }

    const needsChangeTopPx = !document.querySelector(`[role="menu"] > div`).hasAttribute("style");
    if (needsChangeTopPx) {
        document.querySelector<HTMLDivElement>(`[role="menu"]`).style.transform = `translateY(${menuTopPx}px)`;
    }
}

function placeEngagementsLink(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    const buttonBarBase = articleInfo.elements.buttonBarBase;
    for (const boxElem of Array.from(articleBase.querySelectorAll(`.TUICEngagementsBox`))) {
        boxElem.remove();
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
                engagementsBox.appendChild(TUICData.visibleButtons.fixEngagements.links(engagementsID, articleBase, shortName));
            }
            buttonBarBase.hasClosest(`:scope > .TUICTweetButtomBarBase`).insertBefore(engagementsBox, buttonBarBase.closest(`.TUICTweetButtomBarBase`));
        }
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

// リンクカードを設置
function showLinkCardInfo(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    if (TUICPref.getPref("otherBoolSetting.showLinkCardInfo")) {
        if (articleBase.querySelector(`[data-testid="card.layoutLarge.media"] a[aria-label] > div+div`)) {
            const card = articleBase.querySelector('[data-testid="card.wrapper"] [data-testid="card.layoutLarge.media"]').parentElement;

            if (card.querySelector(".TUIC_LinkCardInfo") == null) {
                card.children[1].hide();
                card.parentElement.children[1]?.hide();
                card.querySelector('[data-testid="card.layoutLarge.media"] a > div+div').hide();

                const link = card.querySelector<HTMLAnchorElement>('[data-testid="card.layoutLarge.media"] a').href;
                const domain = card.querySelector('[data-testid="card.layoutLarge.media"] a').getAttribute("aria-label").replace(/ .*$/, "");
                const title = card.querySelector('[data-testid="card.layoutLarge.media"] a').getAttribute("aria-label").replace(/^.*? /, "");
                const description = "";
                const oldDisplay = TUICData.showLinkCardInfo(link, domain, title, description);
                card.appendChild(oldDisplay);
            }
        }
    } else {
        articleBase.querySelector(".TUIC_LinkCardInfo").remove();
    }
}
