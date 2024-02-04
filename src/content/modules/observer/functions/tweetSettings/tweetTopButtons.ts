import { TUICData } from "@content/data";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { tweetMoreMenuContent } from "./tweetMoreMenuContent";

export function tweetTopButtons(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    if (articleBase.querySelector(TUICData.tweetTopButton.selector.moreMenu)) {
        // もっと見るメニュー内を修正するためにEvent
        const moreMenuButton = articleBase.querySelector<HTMLElement>(TUICData.tweetTopButton.selector.moreMenu);
        moreMenuButton.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                tweetMoreMenuContent();
            }
        });
        moreMenuButton.children[0].addEventListener("click", (e) => {
            tweetMoreMenuContent();
        });

        //ツイート上ボタンの並び替え
        placeTweetTopButtons(articleInfo);
    }
}

function placeTweetTopButtons(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    let isFirst = true;
    const tweetTopButtons: { [key: string]: HTMLDivElement } = {};
    const tweetTopParent = articleBase.querySelector(TUICData.tweetTopButton.selector.moreMenu).parentElement;
    const marginSize = TUICLibrary.fontSizeClass("20px", "20px", "20px", "20px", "20px");
    for (const i of TUICData.tweetTopButton.all) {
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

    for (const i of TUICData.tweetTopButton.all) {
        if (!TUICPref.getPref("tweetTopButton").includes(i) && i in tweetTopButtons) {
            tweetTopButtons[i].hide();
        }
    }
}
