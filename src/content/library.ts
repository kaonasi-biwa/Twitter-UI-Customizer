import { ColorData, ProcessedClass } from "@shared/sharedData.ts";
import { TUICPref } from "@modules/index.ts";

export const TUICLibrary = {
    color: {
        /** RGB 配列を #xxxxxx 表記に変換します。 */
        rgb2hex: (rgb: [number, number, number]) => {
            return `#${rgb.map((value) => ("0" + value.toString(16)).slice(-2)).join("")}`;
        },
        /** #xxxxxx 表記を RGB に変換します。 */
        hex2rgb: (hex: string): [number, number, number] => {
            if (hex.slice(0, 1) == "#") hex = hex.slice(1);
            return <[number, number, number]>[hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) => {
                return parseInt(str, 16);
            });
        },
        getColorFromPref: (name: string, type: string, mode: "buttonColor" | "buttonColorLight" | "buttonColorDark" | null) => {
            let _mode = "";
            _mode = mode ? mode : TUICLibrary.backgroundColorCheck() == "light" ? "buttonColorLight" : "buttonColorDark";
            return TUICPref.getPref(`${_mode}.${name}.${type}`) ?? ColorData.defaultTUICColor?.["colors-" + _mode]?.[name]?.[type] ?? TUICPref.getPref(`buttonColor.${name}.${type}`) ?? ColorData.defaultTUICColor.colors[name][type];
        },
    },
    getPrimitiveOrFunction: <T>(functionOrPrimitive: (() => T) | T): T => {
        if (typeof functionOrPrimitive === "function") {
            return (functionOrPrimitive as () => T)();
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
    backgroundColorClass: <T extends number | string>(dark: T, blue: T, white: T) => {
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
    parseHtml: (elem: string) => {
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
    waitAndClickElement: async (selector: string): Promise<boolean> => {
        for (let i = 0; i <= 25; i++) {
            const re = await new Promise((resolve2) => {
                const elem = document.querySelector<HTMLInputElement>(selector);
                if (elem != null) {
                    elem.click();
                    resolve2("ok");
                }
                resolve2("bb");
            });
            if (re == "ok") return true;
            await new Promise((resolve2) => {
                window.setTimeout(() => {
                    resolve2("");
                }, 100);
            });
        }
        return false;
    },
    hasClosest: <T extends Element>(elem: Element, selector: string): T => {
        let elem2 = elem;
        while (elem2 && !elem2.querySelector(selector)) {
            elem2 = elem2.parentElement;
        }
        return elem2 as T;
    },
    hasClosestSelector: <T extends Element>(elem: Element, selector: string): T => {
        let elem2 = elem;
        let returnElem = null;
        while (elem2 && !(returnElem = elem2.querySelector(selector))) {
            elem2 = elem2.parentElement;
        }
        return returnElem;
    },
    hideElement: (elem: Element) => {
        elem.classList.add("TUIC_DISPNONE");
    },
    showElement: (elem: Element) => {
        elem.classList.remove("TUIC_DISPNONE");
    },
    processElement: (elem: Element) => {
        elem.classList.add(ProcessedClass);
    },
};

declare global {
    interface Element {
        /**
         * selectorで指定された要素を子孫ノードに持つまで文書ルートに向かって探索するElementのメソッドです。
         *
         * セレクターの判断にはquerySelectorを使うので、子結合子の1つ目のセレクターなどが返り値よりも親にある場合があります。
         * それを防ぐためには擬似クラスの:scopeをお使いください
         * @param {string} selector 探索するElementのセレクター
         * @return {Element} 指定されたElementを子孫ノードに持つセレクター
         */
        hasClosest<T extends Element>(selector: string): T;
        /**
         * selectorで指定された要素を子孫ノードに持つまで文書ルートに向かって探索し、見つかった要素を返すElementのメソッドです。
         *
         * セレクターの判断にはquerySelectorを使うので、子結合子の1つ目のセレクターなどが折り返し地点よりも親にある場合があります。
         * それを防ぐためには擬似クラスの:scopeをお使いください
         * @param {string} selector 探索するElementのセレクター
         * @return {Element} 指定されたElement
         */
        hasClosestSelector<T extends Element>(selector: string): T;
        /**
         * 要素を非表示にするElementのメソッドです。
         */
        hide(): void;
        /**
         * Element.hide()で非表示にした要素を再び表示するElementのメソッドです。
         */
        show(): void;
        /**
         * 要素を処理済みとマークするElementのメソッドです
         */
        process(): void;
    }
}

Element.prototype.hasClosest = function <T extends Element>(selector: string): T {
    return TUICLibrary.hasClosest(this, selector);
};

Element.prototype.hasClosestSelector = function <T extends Element>(selector: string): T {
    return TUICLibrary.hasClosestSelector(this, selector);
};

Element.prototype.hide = function (): void {
    TUICLibrary.hideElement(this);
};

Element.prototype.show = function (): void {
    TUICLibrary.showElement(this);
};

Element.prototype.process = function (): void {
    TUICLibrary.processElement(this);
};
