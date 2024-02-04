import { TUICData } from "@content/data";
import { TUICPref } from "@content/modules";

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
            const engagementsBox = TUICData.fixEngagements.engagementsBox();
            for (const engagementsID of engageList) {
                engagementsBox.appendChild(TUICData.fixEngagements.links(engagementsID, articleBase, shortName));
            }
            buttonBarBase.hasClosest(`:scope > .TUICTweetButtomBarBase`).insertBefore(engagementsBox, buttonBarBase.closest(`.TUICTweetButtomBarBase`));
        }
    }
}
