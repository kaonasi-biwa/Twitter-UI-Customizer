import { applySystemCss } from "./applyCSS.ts";
import { TUICData } from "./data.ts";
import { TUICPref } from "./modules/index.ts";
import { TUICObserver } from "./observer.ts";

export const TUICLibrary = {
    color: {
        rgb2hex: (rgb) => {
            return `#${rgb
                .map((value) => {
                    return ("0" + value.toString(16)).slice(-2);
                })
                .join("")}`;
        },
        hex2rgb: (hex) => {
            if (hex.slice(0, 1) == "#") hex = hex.slice(1);
            return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) => {
                return parseInt(str, 16);
            });
        },
        getColorFromPref: (name: string, type: string, mode: "buttonColor" | "buttonColorLight" | "buttonColorDark" | null) => {
            let _mode = "";
            _mode = mode ? mode : TUICLibrary.backgroundColorCheck() == "light" ? "buttonColorLight" : "buttonColorDark";
            return TUICPref.getPref(`${_mode}.${name}.${type}`) ?? TUICData?.["colors-" + _mode]?.[name]?.[type] ?? TUICPref.getPref(`buttonColor.${name}.${type}`) ?? TUICData.colors[name][type];
        },
    },
    getClasses: {
        update: () => {
            TUICObserver.observer.disconnect();
            TUICLibrary.getClasses.deleteClasses();
            applySystemCss();
            TUICObserver.observerFunction(null);
        },
        deleteClasses: () => {
            for (const id of TUICLibrary.getClasses.idList) {
                document.querySelectorAll(`.${id}`).forEach((elem) => {
                    elem.classList.remove(id);
                }); /*
                for (const elem of document.getElementsByClassName(id)) {
                    elem.classList.remove(id);
                }*/
            }
        },
        idList: [
            "NOT_TUIC_DISPNONE",
            "TUIC_DISPNONE",
            "TUIC_DISPNONE_PARENT",
            "TUIC_SVGDISPNONE",
            "TUIC_NOTSVGDISPNONE",
            "TUIC_DISCOVERMORE",
            "TUIC_DISCOVERHEADER",
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
            "TUICHandledEvent",
        ],
    },
    getPrimitiveOrFunction: (functionOrPrimitive) => {
        if (typeof functionOrPrimitive == "function") {
            return functionOrPrimitive();
        } else {
            return functionOrPrimitive;
        }
    },
    backgroundColorCheck: () => {
        const bodyStyle = document.querySelector("body").style.backgroundColor.toString();
        if (bodyStyle == "rgb(0, 0, 0)") {
            return "dark";
        } else if (bodyStyle == "rgb(21, 32, 43)") {
            return "blue";
        } else {
            return "light";
        }
    },
    backgroundColorClass: (dark, blue, white) => {
        const backgroundType = TUICLibrary.backgroundColorCheck();
        if (backgroundType == "dark") {
            return dark;
        } else if (backgroundType == "blue") {
            return blue;
        } else {
            return white;
        }
    },
    fontSizeClass: <T extends number | string>(x1: T, x2: T, x3: T, x4: T, x5: T) => {
        const fontSize = document.querySelector("html").style.fontSize.toString();
        if (fontSize == "17px") {
            return x4;
        } else if (fontSize == "18px") {
            return x5;
        } else if (fontSize == "15px") {
            return x3;
        } else if (fontSize == "14px") {
            return document.querySelector(`h1[role="heading"] > a[href="/home"]`)?.className.includes("r-116um31") ? x1 : x2;
        }
    },
    HTMLParse: (elem: string) => {
        return new DOMParser().parseFromString(elem, "text/html").body.children;
    },
    // escapeToUseHTML: (text) => {
    //     return text
    //         .replace(/[&'`"<>=;]/g, (match) => {
    //             return {
    //                 "&": "&amp;",
    //                 "'": "&#x27;",
    //                 "`": "&#x60;",
    //                 '"': "&quot;",
    //                 "<": "&lt;",
    //                 ">": "&gt;",
    //                 "=": "&equals;",
    //                 ";": "&semi;",
    //             }[match];
    //         })
    //         .replaceAll("\\r", "\r");
    // },
    waitForElement: async <T extends Element>(selector: string, parentElement: ParentNode = document): Promise<T[]> => {
        if (parentElement.querySelectorAll(selector).length !== 0) {
            return Array.from(parentElement.querySelectorAll<T>(selector));
        } else {
            return new Promise((resolve) => {
                const observer = new MutationObserver((mutations) => {
                    const matchedAddedNodes = parentElement.querySelectorAll<T>(selector);
                    if (matchedAddedNodes.length !== 0) {
                        observer.disconnect();
                        resolve([...matchedAddedNodes]);
                    }
                });
                observer.observe(parentElement, { subtree: true, childList: true });
            });
        }
    },
};
