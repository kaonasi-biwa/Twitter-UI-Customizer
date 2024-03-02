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
    "TUICDidArticle",
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
    ProcessedClass,
];
export const updateClasses = (isInit: boolean = false) => {
    if (!isInit) TUICObserver.observer.disconnect();
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
};
