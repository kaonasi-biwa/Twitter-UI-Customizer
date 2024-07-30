import { ProcessedClass } from "@shared/sharedData";
import { TUICObserver } from "../observer";
import { applySystemCss } from "@content/applyCSS";

const ClassList = [
    "NOT_TUIC_DISPNONE",
    "TUIC_DISPNONE",
    "TUIC_DISPNONE_PARENT",
    "TUIC_SVGDISPNONE",
    "TUIC_NOTSVGDISPNONE",
    "TUIC_DISCOVERMORE",
    "TUIC_ISNOTDEFAULT",
    "TUIC_NONE_SPACE_BOTTOM_TWEET",
    "TUIC_TWEETREPLACE",
    "TUIC_UnderTweetButton",
    "TUICDidInfoArticle",
    "TUICItIsBigArticle",
    "TUICItIsBigArticlePhoto",
    "TUICTweetButtomBarBase",
    "TUICTwitterIcon_Twitter",
    "TUICTwitterIcon_X",
    "TUICTwitterIcon_Dog",
    "TUICTwitterIcon_IconImg",
    "TUICScrollBottom",
    "TUICDMIcon",
    "TUICFollowerListButtons",
    ProcessedClass,
];
const AttrList = { processedArticle: "processed-article", tuicDiscoverMore: "tuic-discover-more", tuicSettings: "tuic-settings" };
export const updateClasses = (isInit: boolean = false) => {
    if (!isInit) TUICObserver.unbind();
    deleteClasses();
    applySystemCss();
    if (!isInit) TUICObserver.callback();
};
const deleteClasses = () => {
    for (const id of ClassList) {
        document.querySelectorAll(`.${id}`).forEach((elem) => {
            elem.classList.remove(id);
        }); /*
            for (const elem of document.getElementsByClassName(id)) {
                elem.classList.remove(id);
            }*/
    }
    for (const id in AttrList) {
        document.querySelectorAll<HTMLElement>(`[data-${AttrList[id]}]`).forEach((elem) => {
            delete elem.dataset[id];
        }); /*
            for (const elem of document.getElementsByClassName(id)) {
                elem.classList.remove(id);
            }*/
    }
};
