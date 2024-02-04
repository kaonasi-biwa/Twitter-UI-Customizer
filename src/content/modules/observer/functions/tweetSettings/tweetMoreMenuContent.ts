import { TUICData } from "@content/data";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";

export async function tweetMoreMenuContent() {
    await TUICLibrary.waitForElement(`[data-testid="Dropdown"]`);

    let menuTopPx = 0;
    const menuItemPx = TUICLibrary.fontSizeClass(40, 41, 44, 48, 52);
    for (const id of TUICData["tweetDisplaySetting.tweetMoreMenuItems"].all) {
        if (TUICPref.getPref(`tweetDisplaySetting.tweetMoreMenuItems.${id}`)) {
            const getFunc = TUICData["tweetDisplaySetting.tweetMoreMenuItems"].selectors[id];
            let elem = null;
            if (typeof getFunc == "function") {
                elem = getFunc();
            } else {
                elem = document.querySelector(`[data-testid="Dropdown"] ${TUICData["tweetDisplaySetting.tweetMoreMenuItems"].selectors[id]}`);
            }

            if (elem) {
                elem.closest(`[role="menuitem"]`).hide();
                menuTopPx += menuItemPx;
            }
        }
    }

    const needsChangeTopPx = !document.querySelector(`[role="menu"] > div`).hasAttribute("style");
    if (needsChangeTopPx) {
        document.querySelector<HTMLDivElement>(`[role="menu"]`).style.transform = `translateY(${menuTopPx}px)`;
    }
}
