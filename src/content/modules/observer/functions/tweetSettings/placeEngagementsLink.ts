import { TUICI18N } from "@modules/i18n";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";

export const i18nAndAllContent: I18nAndAllContent = {
    all: ["likes", "retweets", "quotes"],
    i18n: {
        likes: "bottomTweetButtons-setting-placeEngagementsLink-likes-short",
        retweets: "bottomTweetButtons-setting-placeEngagementsLink-retweets-short",
        quotes: "bottomTweetButtons-setting-placeEngagementsLink-quotes-short",
    },
};
const _data = {
    i18nAndAllContent,
    engagementsBox: (): Element => {
        return TUICLibrary.parseHtml(`<div class="TUICEngagementsBox css-175oi2r r-1awozwy r-1efd50x r-5kkj8d r-18u37iz ${TUICLibrary.backgroundColorClass("r-2sztyj", "r-1kfrmmb", "r-1dgieki")}"></div>`).item(0);
    },
    links: (id: string, article: Element, isShort: boolean): Element => {
        const returnElem = TUICLibrary.parseHtml(
            `<div dir="ltr" class="css-901oao r-1tl8opc r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0 ${TUICLibrary.fontSizeClass("r-23eiwj", "r-9qu9m4", "r-1yzf0co", "r-w0qc3r", "r-18scu15")}" style="cursor: pointer;margin-right:1em;">
                <span class="css-901oao css-16my406 r-1tl8opc r-1cwl3u0 r-bcqeeo r-qvutc0 ${TUICLibrary.fontSizeClass("r-1b43r93", "r-1b43r93", "r-a023e6", "r-1inkyih", "r-1i10wst")} ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")}">
                    <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0">${TUICI18N.get("bottomTweetButtons-setting-placeEngagementsLink-" + id + (isShort ? "-short" : ""))}</span>
                </span>
            </div>`.replace(/( |\n|\r)( |\n|\r)+/g, ""),
        ).item(0);
        returnElem.addEventListener("click", async () => {
            article.querySelector<HTMLInputElement>(`[data-testid="caret"]`).click();
            await TUICLibrary.waitForElement(`[data-testid="tweetEngagements"]`);
            document.querySelector<HTMLButtonElement>(`[data-testid="tweetEngagements"]`).click();
            await TUICLibrary.waitForElement(`[role="tab"][href$="/${id}"]`);
            document.querySelector<HTMLAnchorElement>(`[role="tab"][href$="/${id}"]`).click();
        });
        return returnElem;
    },
};

export function placeEngagementsLink(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    const buttonBarBase = articleInfo.elements.buttonBarBase;
    for (const boxElem of Array.from(articleBase.querySelectorAll(`.TUICEngagementsBox`))) {
        boxElem.remove();
    }

    if (TUICPref.getPref("otherBoolSetting.placeEngagementsLink")) {
        const engageentsTypeList = TUICPref.getPref("fixEngagements");
        const shortName = TUICPref.getPref("otherBoolSetting.placeEngagementsLinkShort");

        const engagementsFixList = [];
        const engageFixListFunc = (count: number) => {
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
            const engagementsBox = _data.engagementsBox();
            for (const engagementsID of engageList) {
                engagementsBox.appendChild(_data.links(engagementsID, articleBase, shortName));
            }
            buttonBarBase.hasClosest(`:scope > .TUICTweetButtomBarBase`).insertBefore(engagementsBox, buttonBarBase.closest(`.TUICTweetButtomBarBase`));
        }
    }
}
