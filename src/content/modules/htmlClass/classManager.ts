import { ProcessedClass } from "@shared/sharedData";
import { TUICObserver } from "../observer";
import { applySystemCss } from "@content/applyCSS";

const ClassList = [
    "TUIC_NONE_SPACE_BOTTOM_TWEET",
    "TUIC_TWEETREPLACE",
    "TUIC_UnderTweetButton",
    "TUICTweetButtomBarBase",
    "TUICScrollBottom",
    "TUICDMIcon",
    "TUICFollowerListButtons",
    ProcessedClass,
];

const AttrList = {
    tuicProcessedArticle: "tuic-processed-article",
    tuicDiscoverMore: "tuic-discover-more",
    tuicDiscoverMoreTweet: "tuic-discover-more-tweet",
    tuicTweetTopButtonParent: "tuic-tweet-top-button-parent",
    tuicTweetTopButton:"tuic-tweet-top-button",

    tuicSettings: "tuic-settings",
    tuicEventHandled: "tuic-event-handled",
    tuicIconType: "tuic-icon-type",
    tuicHide: "tuic-hide",
    tuicHideChildScrollSnap: "tuic-hide-child-scroll-snap",

    tuicZoomingTweet: "tuic-zooming-tweet",
    tuicTabsPinned: "data-tuic-tabs-pinned",
};

export const updateClasses = (isInit = false) => {
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
