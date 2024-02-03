import { TUICData } from "@content/data";
import { TUICLibrary } from "@content/library";
import { moreMenuContent } from "../functions";
import { getPref } from "../../pref";

export function sidebarButtons() {
    const bannerRoot = document.querySelector<HTMLElement>(`[role=banner] > ${"div >".repeat(5)} nav`);
    if (bannerRoot != null) {
        if (bannerRoot.querySelector(`a:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE)`) != null) {
            sidebarButtonProcess(bannerRoot);
        } else {
            let changeElem = false;
            for (const selector of getPref("sidebarButtons")) {
                const elems = bannerRoot.querySelectorAll(TUICData.sidebarButtons.selectors[selector]);
                if (elems.length == 1) {
                    continue;
                } else if (elems.length > 1) {
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
    if (!window.location.pathname.startsWith("/i/communitynotes") && !window.location.pathname.startsWith("/i/birdwatch")) {
        for (const i of getPref("sidebarButtons")) {
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
            }
        }
    }
    const windowPath = window.location.pathname;
    const notCommunityWatchNORBirdWatch = !windowPath.startsWith("/i/communitynotes") && !windowPath.startsWith("/i/birdwatch");
    for (const i of TUICData.settings.sidebarButtons.all) {
        if (!getPref("sidebarButtons").includes(i) && notCommunityWatchNORBirdWatch) {
            const moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i]);
            moveElem?.hide();
        }
    }
}
