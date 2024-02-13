import { TUICPref } from "@content/modules";
import { ProcessedClass } from "@shared/sharedData";

export function hideOsusumeTweets() {
    if (window.location.pathname.includes("/status/") && /^\d+$/.test(new URL(location.href).pathname.split("/")[3]) && document.querySelector(`[data-testid="primaryColumn"]`)) {
        console.log("aiusoe");
        let cells = document.querySelectorAll<HTMLDivElement>(`:is([data-testid="primaryColumn"],[data-testid="mask"]+div [aria-labelledby^="accessible-list"]) [data-testid="cellInnerDiv"]:not([style*="opacity: 0.01"]):not(.${ProcessedClass})`);
        for (const elem of cells) {
            if (!elem.querySelector("article") && elem.querySelector("h2") && (elem.children?.[0]?.children?.[0]?.children?.[0]?.children?.[1]?.getAttribute("style") ?? "").includes("-webkit-line-clamp: 2;")) {
                elem.process();
                console.log(TUICPref.getPref("timeline-discoverMore"));
                switch (TUICPref.getPref("timeline-discoverMore")) {
                    case "timeline-discoverMore": {
                        elem.hide();
                        elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "none");
                        if (elem.getAttribute("TUICDiscoverMore")) {
                            elem.removeAttribute("TUICDiscoverMore");
                        }
                        break;
                    }
                    case "discoverMore_detailOpen": {
                        setDiscoverBox(elem, true);
                        break;
                    }
                    case "discoverMore_detailClose": {
                        setDiscoverBox(elem, false);
                        break;
                    }
                    default: {
                        elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "");
                        if (elem.getAttribute("TUICDiscoverMore") != null) {
                            elem.removeAttribute("TUICDiscoverMore");
                        }
                    }
                }
            }
        }
        cells = document.querySelectorAll(`:is([data-testid="primaryColumn"],[data-testid="mask"]+div [aria-labelledby^="accessible-list"]) [data-testid="cellInnerDiv"]:not([style*="opacity: 0.01"])`);
        for (const elem of cells) {
            if (elem.querySelector("article") == null && elem.querySelector("h2") != null && (elem.children?.[0]?.children?.[0]?.children?.[0]?.children?.[1]?.getAttribute("style") ?? "").includes("-webkit-line-clamp: 2;")) {
                let elem2 = elem.nextElementSibling;
                while (elem2 != null && elem2 != undefined && elem2?.[0]?.children?.[0]?.childElementCount != 0) {
                    elem2.classList.add("TUIC_DISCOVERMORE");
                    elem2 = elem2.nextElementSibling;
                }
            }
        }
    }
}

function setDiscoverBox(elem: HTMLDivElement, initOpen: boolean) {
    elem.setAttribute("TUICDiscoverMore", initOpen ? "true" : "false");
    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", initOpen ? "" : "none");
    elem.onclick = (e) => discoverOnClick(e, elem);
}

function discoverOnClick(event: Event, elem: HTMLDivElement) {
    const nowType = elem.getAttribute("TUICDiscoverMore");
    elem.setAttribute("TUICDiscoverMore", nowType == "true" ? "false" : "true");
    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", nowType == "true" ? "none" : "");
    event.stopPropagation();
    event.stopImmediatePropagation();
}
