import { TUICData } from "@content/data";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";

let sidebarButtonsCount = -1;

export function sidebarButtons() {
    const bannerRoot = document.querySelector<HTMLElement>(`[role=banner] > ${"div >".repeat(5)} nav`);
    if (bannerRoot) {
        if (sidebarButtonsCount != bannerRoot.querySelectorAll(`a:not(.NOT_TUIC_DISPNONE)`).length)
            if (bannerRoot.querySelector(`a:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE)`)) {
                sidebarButtonProcess(bannerRoot);
            } else {
                let changeElem = false;
                for (const selector of TUICPref.getPref("sidebarButtons")) {
                    const elems = bannerRoot.querySelectorAll(TUICData.sidebarButtons.selectors[selector]);
                    if (elems.length > 1) {
                        const elems = [...bannerRoot.querySelectorAll(TUICData.sidebarButtons.selectors[selector])];
                        for (const elem of elems) {
                            if (elem.id.includes("TUIC")) {
                                elem.remove();
                            }
                        }
                        changeElem = true;
                    } else if (elems.length == 0 && selector in TUICData.sidebarButtons.html) {
                        changeElem = true;
                    }
                }
                if (changeElem) sidebarButtonProcess(bannerRoot);
            }
    }
}

export function sidebarButtonProcess(bannerRoot: HTMLElement) {
    const windowPath = window.location.pathname;
    if (!window.location.pathname.startsWith("/i/communitynotes") && !window.location.pathname.startsWith("/i/birdwatch")) {
        sidebarButtonsCount = 0;
        for (const i of TUICPref.getPref("sidebarButtons")) {
            let moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i]);
            if (moveElem != null) {
                bannerRoot.appendChild(moveElem);
                moveElem.classList.add("NOT_TUIC_DISPNONE");
                if (i == "moremenu") {
                    moveElem.onclick = moreMenuContent;
                    moveElem.addEventListener("keydown", (e) => {
                        if (e.keyCode === 13) {
                            e.preventDefault();
                            moreMenuContent();
                        }
                    });
                }
                sidebarButtonsCount += 1;
            } else if (i in TUICData.sidebarButtons.html) {
                moveElem = TUICLibrary.HTMLParse(TUICData.sidebarButtons.html[i]()).item(0);
                moveElem.classList.add("NOT_TUIC_DISPNONE");
                moveElem.onclick = TUICData.sidebarButtons.buttonFunctions[i];
                moveElem.addEventListener("keydown", (e) => {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                        TUICData.sidebarButtons.buttonFunctions[i]({
                            currentTarget: e.target.parentElement,
                        });
                    }
                });
                bannerRoot.appendChild(moveElem);
                sidebarButtonsCount += 1;
            }
        }
        for (const i of bannerRoot.querySelectorAll(`a:not(.NOT_TUIC_DISPNONE)`)) {
            i.hide();
        }
    }
}

async function moreMenuContent() {
    await TUICLibrary.waitForElement(`[data-testid="Dropdown"]`);
    let menuTopPx = parseFloat(document.querySelector<HTMLDivElement>(`[role="menu"]`).style.top);
    const upPx = {
        menu: TUICLibrary.fontSizeClass(46, 49, 52, 58, 62),
        menuitem: TUICLibrary.fontSizeClass(50, 53, 56, 62, 67),
        separator: 5,
    };
    for (const pref of TUICData["sidebarSetting.moreMenuItems"].all) {
        if (TUICPref.getPref(`sidebarSetting.moreMenuItems.${pref}`)) {
            const elem = document.querySelector(TUICData["sidebarSetting.moreMenuItems"].selectors[pref]);
            if (elem) {
                elem.parentElement.hide();
                menuTopPx += upPx[TUICData["sidebarSetting.moreMenuItems"].type[pref]];
            }
        }
    }
    document.querySelector<HTMLDivElement>(`[role="menu"]`).style.top = menuTopPx + "px";
}
