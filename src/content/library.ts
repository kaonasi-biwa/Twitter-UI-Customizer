import { ProcessedClass } from "@shared/sharedData.ts";

export const TUICLibrary = {
    getPrimitiveOrFunction: <T>(functionOrPrimitive: (() => T) | T): T => {
        if (typeof functionOrPrimitive === "function") {
            return (functionOrPrimitive as () => T)();
        } else {
            return functionOrPrimitive;
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
    parseHtml: (elem: string): HTMLCollection => {
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
