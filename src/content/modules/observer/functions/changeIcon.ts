import DOG from "@content/icons/logo/dog.png?url";
import TWITTER from "@content/icons/logo/twitter.svg?raw";
import X from "@content/icons/logo/x.svg?raw";
import EMPTY from "@content/icons/logo/empty.svg?url";
import { getColorFromPref } from "@content/modules/utils/color";
import { getPref } from "@modules/pref";
import { hideElement, processElement } from "@modules/utils/controlElements";

let iconObserver: MutationObserver | null = null;

const iconObserverFunc = (elem: Element) => {
    if (elem) {
        if (iconObserver) iconObserver.disconnect();
        else {
            iconObserver = new MutationObserver(() => {
                iconObserverFunc(elem);
            });
        }
        changeIconProcess(elem, document.querySelector(`header [role="heading"]`));
        iconObserver.observe(document.querySelector("header h1 a > div"), {
            childList: true,
            subtree: true,
            attributes: true,
        });
    }
};

function changeIconProcess(elem: Element, base: Element) {
    const favicon = document.querySelector<HTMLLinkElement>(`[rel="shortcut icon"]`);
    const changeFavicon = getPref("twitterIcon.options.faviconSet");
    switch (getPref("twitterIcon.icon")) {
        case "invisible":
            if (favicon && changeFavicon) {
                favicon.href = chrome.runtime.getURL(EMPTY);
            }
            elem.classList.add("TUIC_SVGDISPNONE");
            hideElement(base);
            break;
        case "twitter":
            if (favicon && changeFavicon) {
                const gotColor = getColorFromPref("twitterIcon", "favicon", null);
                favicon.href = "data:image/svg+xml," + encodeURIComponent(TWITTER.replace("var(--TUIC-favicon-color)", `rgba(${gotColor[0]},${gotColor[1]},${gotColor[2]},${gotColor[3]})`));
                //replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${getColorFromPref("twitterIconFavicon", "color")}"`)
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_Twitter");
            break;
        case "dog":
            if (favicon && changeFavicon) {
                favicon.href = chrome.runtime.getURL(DOG);
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_Dog");
            break;
        case "custom":
            if (favicon && changeFavicon) {
                const imageURL = localStorage.getItem(getPref("twitterIcon.options.roundIcon") ? "TUIC_IconImg_Favicon" : "TUIC_IconImg");
                favicon.href = imageURL ?? chrome.runtime.getURL(EMPTY);
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_IconImg");
            break;
        case "twitterIcon-X":
            if (favicon && changeFavicon) {
                //console.log(encodeURIComponent(X.replace("var(--TUIC-favicon-color)", getColorFromPref("twitterIconFavicon", "color", null))));
                const gotColor = getColorFromPref("twitterIcon", "favicon", null);
                favicon.href = "data:image/svg+xml," + encodeURIComponent(X.replace("var(--TUIC-favicon-color)", `rgba(${gotColor[0]},${gotColor[1]},${gotColor[2]},${gotColor[3]})`));
                //.replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${getColorFromPref("twitterIconFavicon", "color")}"`);
            }
            elem.classList.add("TUIC_SVGDISPNONE", "TUICTwitterIcon_X");
            break;
        default:
            if (favicon) {
                favicon.href = "//abs.twimg.com/favicons/twitter.3.ico";
            }
            elem.classList.add("TUIC_NOTSVGDISPNONE");
            break;
    }
    processElement(elem);
    if (favicon && !changeFavicon) {
        favicon.href = "//abs.twimg.com/favicons/twitter.3.ico";
    }
}

//* setup icon observer
export function changeIcon() {
    const notProcessed = `:not(.TUIC_SVGDISPNONE):not(.TUIC_NOTSVGDISPNONE)`;
    {
        const elem = document.querySelector(`header h1 a > div > svg${notProcessed}`);
        if (elem) {
            iconObserverFunc(elem);
        }
    }
    if (!document.querySelector(`header h1 a > div > svg`)) {
        iconObserver = null;
    }

    {
        const elem = document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg${notProcessed}`);
        if (elem) {
            changeIconProcess(elem, document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] [role="heading"]`));
        }
    }

    {
        const elem = document.querySelector(`[data-testid="interstitialGraphic"] > svg${notProcessed}`);
        if (elem) {
            changeIconProcess(elem, elem.parentElement);
        }
    }

    {
        const elem = document.querySelector(`#layers [data-testid="TopNavBar"] div+svg${notProcessed}`);
        if (elem) {
            changeIconProcess(elem, elem.parentElement);
        }
    }

    {
        const elem = document.querySelector(`article svg${notProcessed} > * > path[d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"]`);
        if (elem) {
            changeIconProcess(elem.closest("svg"), elem.closest("svg").parentElement);
        }
    }
}

// 起動時のアイコン
let initIconObserver: MutationObserver | null = null;

export const initIconObserverFunction = () => {
    if (initIconObserver) initIconObserver.disconnect();
    else initIconObserver = new MutationObserver(initIconObserverFunction);

    changeIconProcess(document.querySelector(`#placeholder > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`), document.querySelector(`#placeholder`));

    initIconObserver.observe(document.querySelector(`#placeholder > svg`), {
        attributes: true,
        attributeFilter: ["class"],
    });
};
