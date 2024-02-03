import { TUICData } from "@content/data";
import { FAVORITE_ICON, HOME_ICON, SIDEBAR_BUTTON_ICON } from "@content/icons";
import { TUICPref } from "@content/modules";
import { ProcessedClass } from "@shared/sharedData";

export function updateStyles() {
    sidebarButtons();
    likeToFavo();
}

function sidebarButtons() {
    // TUIC独自のサイドバーボタン(太線かどうかを変更)
    for (const i of document.querySelectorAll(".TUICSidebarButton")) {
        const itemId = i.id.replace("TUICSidebar_", "");

        let locationBool = false;
        const includesCheck = (buttonUrl: string) => {
            if (buttonUrl.endsWith("/")) {
                locationBool = location.pathname.includes(buttonUrl) ? true : locationBool;
            } else {
                locationBool = location.pathname.endsWith(buttonUrl) ? true : locationBool;
            }
        };
        if (typeof TUICData.sidebarButtons.tuicButtonUrl[itemId] == "object") {
            for (const elem of TUICData.sidebarButtons.tuicButtonUrl[itemId]) includesCheck(elem);
        } else {
            includesCheck(TUICData.sidebarButtons.tuicButtonUrl[itemId]);
        }

        const svg_path = i.querySelector("svg path");
        if (locationBool && !i.classList.value.includes("TUICSidebarSelected")) {
            svg_path.setAttribute("d", SIDEBAR_BUTTON_ICON[itemId].selected);
            i.classList.add("TUICSidebarSelected");
        } else if (!locationBool && i.classList.value.includes("TUICSidebarSelected")) {
            svg_path.setAttribute("d", SIDEBAR_BUTTON_ICON[itemId].unselected);
            i.classList.remove("TUICSidebarSelected");
        }
        if (document.querySelector(TUICData.sidebarButtons.selectors.moremenu) != null) i.querySelector<HTMLElement>("[dir]").style.display = document.querySelector(TUICData.sidebarButtons.selectors.moremenu).children[0].childNodes.length == 2 ? "" : "none";
    }

    // ホームボタン
    const elem = document.querySelector(`.gt2-nav [data-testid="AppTabBar_Home_Link"]`) ?? document.querySelector("[role=banner] > div > div > div > div > div > nav " + TUICData.sidebarButtons.selectors.home);
    if (elem) {
        const isHome = location.pathname === "/home";
        const SVGElem = elem.querySelector("svg path");
        SVGElem.setAttribute("d", HOME_ICON[TUICPref.getPref("sidebarSetting.homeIcon")][isHome ? "selected" : "unselected"]);
    }
}

// いいねをふぁぼに
function likeToFavo() {
    if (TUICPref.getPref("tweetDisplaySetting.likeToFavo")) {
        for (const elem of document.querySelectorAll(`${TUICData.visibleButtons.selectors["like-button"]} svg:not(.${ProcessedClass})`)) {
            const selected = elem.closest(TUICData.visibleButtons.selectors["like-button"]).getAttribute("data-testid") == "unlike" ? "selected" : "unselected";
            elem.querySelector("path").setAttribute("d", FAVORITE_ICON.favorite[selected]);
            if (TUICPref.getPref("visibleButtons").includes("likeAndRT")) {
                elem.hasClosest(TUICData.visibleButtons.selectors["retweet-button"]).querySelector(`${TUICData.visibleButtons.selectors.likeAndRT} path`)?.setAttribute("d", FAVORITE_ICON.favoriteRT.unselected);
            }

            elem.process();
        }
    }
}
