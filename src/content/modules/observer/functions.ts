import { TUICObserver } from "@content/observer";
import { TUICLibrary } from "@content/library";
import { TUICData } from "@content/data";
import { FAVORITE_ICON, HOME_ICON, SIDEBAR_BUTTON_ICON } from "@content/icons";
import { TUICPref } from "..";

import { sidebarButtons } from "./functions/sidebarBtn";
import { dmPage } from "./functions/fixDM";
import { replacePost } from "./functions/replacePostWithTweet";
import { fixTwittersBugs } from "./functions/fixTwittersBugs";
import { profileInitialTab } from "./functions/initProfileTab";
import { hideElements } from "./functions/hideElements";

function showLinkCardInfo() {
    if (TUICPref.getPref("otherBoolSetting.showLinkCardInfo")) {
        for (const infoCardElem of document.querySelectorAll(`article:not(.TUICDidInfoArticle) [data-testid="card.layoutLarge.media"] a[aria-label] > div+div`)) {
            let elem = infoCardElem;
            while (elem.tagName != "ARTICLE") {
                elem = elem.parentElement;
            }
            const card = elem.querySelector('[data-testid="card.wrapper"] [data-testid="card.layoutLarge.media"]').parentElement;

            if (card.querySelector(".TUIC_LinkCardInfo") == null) {
                card.children[1].hide();
                card.parentElement.children[1]?.hide();
                card.querySelector('[data-testid="card.layoutLarge.media"] a > div+div').hide();

                const link = card.querySelector<HTMLAnchorElement>('[data-testid="card.layoutLarge.media"] a').href;
                const domain = card.querySelector('[data-testid="card.layoutLarge.media"] a').getAttribute("aria-label").replace(/ .*$/, "");
                const title = card.querySelector('[data-testid="card.layoutLarge.media"] a').getAttribute("aria-label").replace(/^.*? /, "");
                const description = "";
                const oldDisplay = TUICData.showLinkCardInfo(link, domain, title, description);
                card.appendChild(oldDisplay);
            }
            elem.classList.add("TUICDidInfoArticle");
        }
    } else {
        document.querySelectorAll(".TUIC_LinkCardInfo").forEach((elem) => elem.remove());
    }
}

function buttonUnderTweet() {
    if (!TUICObserver.data.buttonUnderTweetRunning) {
        TUICObserver.data.buttonUnderTweetRunning = true;
        while (document.querySelector(`article.TUICDidArticle .TUICTweetButtomBarBase > div > div:not(.TUIC_UnderTweetButton):not(.TUICButtonUnderTweet)`)) {
            const elem = document.querySelector(`article.TUICDidArticle .TUICTweetButtomBarBase > div > div:not(.TUIC_UnderTweetButton):not(.TUICButtonUnderTweet)`);
            let barBase = elem;
            while (!barBase.classList.contains("TUICDidArticle")) {
                barBase = barBase.parentElement;
            }
            barBase.classList.remove("TUICDidArticle");
        }
        const articles = document.querySelectorAll(`article:not(.TUICDidArticle)`);
        if (articles.length != 0) {
            for (const elem of articles) {
                (async () => {
                    if (elem.querySelector(TUICData.visibleButtons.selectors["reply-button"]) != null && elem.querySelector(TUICData.visibleButtons.selectors["like-button"]) != null) {
                        const lockedAccount = elem.querySelector(`[data-testid="icon-lock"]`) != null;
                        const userNameElem = document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`);
                        const isMe =
                            userNameElem == null
                                ? false
                                : elem.querySelector(`[data-testid="User-Name"] > .r-1awozwy+div span`).textContent ==
                                  "@" + document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`).getAttribute("data-testid").replace(`UserAvatar-Container-`, "");

                        const bar_base = elem.querySelector<Element>(TUICData.visibleButtons.selectors["reply-button"]).hasClosest(TUICData.visibleButtons.selectors["like-button"]);
                        if (TUICPref.getPref("tweetDisplaySetting.bottomScroll")) bar_base.parentElement.classList.add("TUICScrollBottom");
                        bar_base.parentElement.classList.add("TUICTweetButtomBarBase");
                        if (TUICPref.getPref("tweetDisplaySetting.bottomSpace")) {
                            const space = elem.querySelector(`[aria-labelledby]`);
                            if (space && space.children?.[0]?.childElementCount === 0) {
                                space.classList.add("TUIC_NONE_SPACE_BOTTOM_TWEET");
                            }
                        }
                        if (TUICPref.getPref("timeline.hideOhterRTTL") && elem.querySelector(`a[href^="/"] > [data-testid="socialContext"]`) != null) {
                            elem.hide();
                        }
                        const bar_item: { [key: string]: Element } = {};
                        for (const elem_item of bar_base.children) {
                            for (const sel in TUICData.visibleButtons.selectors) {
                                if (elem_item.querySelector(TUICData.visibleButtons.selectors[sel]) != null) {
                                    bar_item[sel] = elem_item;
                                    break;
                                }
                            }
                        }
                        const statusButton = elem.querySelector(`[href*="/status/"] > time`)?.parentElement;
                        const cannotRT = bar_item["retweet-button"].querySelector(`.r-icoktb,.r-12c3ph5`) != null;
                        const cannotShare = bar_item["retweet-button"].querySelector(`.r-icoktb,.r-12c3ph5`) != null;
                        if (!cannotRT) {
                            TUICData.visibleButtons.buttonElement._handleEvent(bar_item["retweet-button"], TUICData.visibleButtons.buttonFunction["retweet-button"], null);
                        }
                        if (!cannotRT && !lockedAccount && bar_item["share-button"]) {
                            TUICData.visibleButtons.buttonElement._handleEvent(
                                bar_item["share-button"],
                                () => {
                                    TUICData.visibleButtons.buttonFunction["share-button"](statusButton);
                                },
                                null,
                            );
                        }
                        const isBigArticle = !!elem.querySelector(`.r-1srniue`);
                        for (const boxElem of Array.from(elem.querySelectorAll(`.TUICEngagementsBox`))) {
                            boxElem.remove();
                        }
                        if (isBigArticle) {
                            elem.classList.add("TUICItIsBigArticle");
                            if (location.pathname.includes("/photo/") || location.pathname.includes("/video/")) {
                                elem.classList.add("TUICItIsBigArticlePhoto");

                                if (!cannotRT && !lockedAccount) {
                                    const shareButtom = document.querySelector<HTMLElement>(`[aria-labelledby="modal-header"] > div > div:not([aria-expanded="true"]) [aria-haspopup="menu"]:not([data-testid="retweet"]):not([data-testid="unretweet"])`);
                                    if (shareButtom) {
                                        TUICData.visibleButtons.buttonElement._handleEvent(
                                            shareButtom,
                                            () => {
                                                TUICData.visibleButtons.buttonFunction["share-button"](statusButton);
                                            },
                                            null,
                                        );
                                    }
                                }
                            }

                            if (TUICPref.getPref("otherBoolSetting.placeEngagementsLink")) {
                                const engageentsTypeList = TUICPref.getPref("fixEngagements");
                                const shortName = TUICPref.getPref("otherBoolSetting.placeEngagementsLinkShort");
                                const engagementsFixList = [];
                                const engageFixListFunc = (count) => {
                                    let tempArr = [];
                                    for (let i = 0; i < engageentsTypeList.length; i++) {
                                        tempArr.push([engageentsTypeList[i]]);
                                        if (tempArr.length == count) {
                                            engagementsFixList.push(tempArr);
                                            tempArr = [];
                                        }
                                    }
                                    if (tempArr.length != 0) {
                                        engagementsFixList.push(tempArr);
                                    }
                                };
                                const isPhotoPage = location.pathname.includes("/photo/") || location.pathname.includes("/video/");
                                if (shortName && !isPhotoPage) {
                                    engageFixListFunc(3);
                                } else if ((shortName && isPhotoPage) || (!shortName && !isPhotoPage)) {
                                    engageFixListFunc(2);
                                } else {
                                    engageFixListFunc(1);
                                }
                                for (const engageList of engagementsFixList) {
                                    const engagementsBox = TUICData.visibleButtons.fixEngagements.engagementsBox();
                                    for (const engagementsID of engageList) {
                                        engagementsBox.appendChild(TUICData.visibleButtons.fixEngagements.links(engagementsID, elem, shortName));
                                    }
                                    bar_base.hasClosest(`:scope > .TUICTweetButtomBarBase`).insertBefore(engagementsBox, bar_base.closest(`.TUICTweetButtomBarBase`));
                                }
                            }
                        }

                        let lastButton;
                        for (const i of TUICPref.getPref("visibleButtons")) {
                            let div: Element = null;
                            if (i in bar_item) {
                                div = bar_item[i];
                                div.classList.add("TUIC_UnderTweetButton");
                                div.show();
                            } else if (i in TUICData.visibleButtons.buttonElement) {
                                div = TUICData.visibleButtons.buttonElement[i](
                                    { elements: { buttonBarBase: bar_base, article: elem, statusButton: statusButton }, option: { isLockedAccount: lockedAccount, cannotRT: cannotRT, cannotShare: cannotShare, isMe: isMe, isBigArticle: isBigArticle } } /*bar_base, elem, lockedAccount*/,
                                );
                            }
                            if (div) {
                                if (bar_item["reply-button"].querySelector(`[data-testid="app-text-transition-container"]`) && div.querySelector(`[data-testid="app-text-transition-container"]`) == null) {
                                    div.querySelector("svg").closest(`:is([role="button"],[role="link"]) > div`).appendChild(TUICData.visibleButtons.emptyElement());
                                }
                                div.classList.remove("r-1rq6c10");
                                div.classList.remove("r-1b7u577");
                                div.classList.add(TUICLibrary.fontSizeClass("r-12zb1j4", "r-1kb76zh", "r-1kb76zh", "r-19einr3", "r-zso239"));
                                lastButton = div;
                                bar_base.appendChild(div);
                            }
                        }
                        if (lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x") != null && lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x").children[0].children[0].childElementCount == 0) {
                            lastButton.querySelector(".css-175oi2r.r-xoduu5.r-1udh08x").remove();
                            lastButton.classList.add(TUICLibrary.fontSizeClass("r-12zb1j4", "r-1kb76zh", "r-1kb76zh", "r-19einr3", "r-zso239"));
                        }
                        lastButton.classList.add("r-1rq6c10");
                        lastButton.classList.add("r-1b7u577");

                        for (const i of TUICData.settings.visibleButtons.all) {
                            if (!TUICPref.getPref("visibleButtons").includes(i) && i in bar_item) {
                                bar_item[i].hide();
                            }
                        }

                        if (elem.querySelector(TUICData.tweetTopButton.selector.moreMenu)) {
                            const moreMenuButton = elem.querySelector<HTMLElement>(TUICData.tweetTopButton.selector.moreMenu);
                            moreMenuButton.addEventListener("keydown", (e) => {
                                if (e.key === "Enter") {
                                    tweetMoreMenuContent();
                                }
                            });
                            moreMenuButton.children[0].addEventListener("click", (e) => {
                                tweetMoreMenuContent();
                            });

                            let isFirst = true;
                            const tweetTopButtons: { [key: string]: HTMLDivElement } = {};
                            const tweetTopParent = elem.querySelector(TUICData.tweetTopButton.selector.moreMenu).parentElement;
                            const marginSize = TUICLibrary.fontSizeClass("20px", "20px", "20px", "20px", "20px");
                            for (const i of TUICData.settings.tweetTopButton.all) {
                                const div = elem.querySelector(TUICData.tweetTopButton.selector[i]);
                                if (div) {
                                    tweetTopButtons[i] = div;
                                }
                            }
                            for (const i of TUICPref.getPref("tweetTopButton")) {
                                let div: HTMLDivElement = null;
                                if (i in tweetTopButtons) {
                                    div = tweetTopButtons[i];
                                    div.show();
                                } else if (i in TUICData.tweetTopButton.buttonElement) {
                                    div = TUICData.tweetTopButton.buttonElement[i](elem.querySelector(TUICData.tweetTopButton.selector.moreMenu), { isLockedAccount: lockedAccount, cannotRT: cannotRT, cannotShare: cannotShare, isMe: isMe, isBigArticle: isBigArticle });
                                    tweetTopButtons[i] = div;
                                }
                                if (!isFirst) {
                                    div.style.marginLeft = marginSize;
                                } else {
                                    div.style.marginLeft = "";
                                }
                                isFirst = false;
                                tweetTopParent.appendChild(div);
                            }

                            for (const i of TUICData.settings.tweetTopButton.all) {
                                if (!TUICPref.getPref("tweetTopButton").includes(i) && i in tweetTopButtons) {
                                    tweetTopButtons[i].hide();
                                }
                            }
                        }
                    }
                    elem.classList.add("TUICDidArticle");
                })();
            }
        }
        TUICObserver.data.buttonUnderTweetRunning = false;
    }
}

function osusumeUser() {
    if (TUICPref.getPref("timeline.osusume-user-timeline") && location.search.indexOf("f=user") == -1 && !location.href.includes("/settings/")) {
        const cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not(.TUICDidArticle):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *)`);
        for (const elem of cells) {
            if (
                elem.querySelector(`[data-testid="UserCell"]`) != null &&
                elem.previousElementSibling != null &&
                elem.querySelector(`[aria-live="polite"]`) == null &&
                (elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) != null || elem.previousElementSibling.querySelector(`h2`) != null)
            ) {
                elem.hide();
                if (elem.previousElementSibling.querySelector(`h2`) != null) {
                    elem.previousElementSibling.hide();
                }
            }
            if (elem.querySelector(`a[href*="&f=user"],a[href^="/i/connect_people?"]`) && elem.querySelector(`[aria-live="polite"]`) == null) {
                elem.hide();
            }
        }
    }
    if (window.location.pathname.includes("/status/") && /^\d+$/.test(new URL(location.href).pathname.split("/")[3]) && document.querySelector(`[data-testid="primaryColumn"]`) != null) {
        let cells = document.querySelectorAll<HTMLDivElement>(`:is([data-testid="primaryColumn"],[data-testid="mask"]+div [aria-labelledby^="accessible-list"]) [data-testid="cellInnerDiv"]:not([style*="opacity: 0.01"]):not(.TUIC_DISCOVERHEADER)`);
        for (const elem of cells) {
            if (elem.querySelector("article") == null && elem.querySelector("h2") != null && (elem.children?.[0]?.children?.[0]?.children?.[0]?.children?.[1]?.getAttribute("style") ?? "").includes("-webkit-line-clamp: 2;")) {
                elem.classList.add("TUIC_DISCOVERHEADER");
                if (TUICPref.getPref("timeline-discoverMore") === "discoverMore_invisible") {
                    elem.hide();
                    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "none");
                    if (elem.getAttribute("TUICDiscoberMore") != null) {
                        elem.removeAttribute("TUICDiscoberMore");
                    }
                } else if (TUICPref.getPref("timeline-discoverMore") === "discoverMore_detailOpen") {
                    elem.setAttribute("TUICDiscoberMore", "true");
                    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "");
                    elem.onclick = (event) => {
                        const nowType = elem.getAttribute("TUICDiscoberMore");
                        elem.setAttribute("TUICDiscoberMore", nowType == "true" ? "false" : "true");
                        elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", nowType == "true" ? "none" : "");
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                    };
                } else if (TUICPref.getPref("timeline-discoverMore") === "discoverMore_detailClose") {
                    elem.setAttribute("TUICDiscoberMore", "false");
                    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "none");
                    elem.onclick = (event) => {
                        const nowType = elem.getAttribute("TUICDiscoberMore");
                        elem.setAttribute("TUICDiscoberMore", nowType == "true" ? "false" : "true");
                        elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", nowType == "true" ? "none" : "");
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                    };
                } else {
                    elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "");
                    if (elem.getAttribute("TUICDiscoberMore") != null) {
                        elem.removeAttribute("TUICDiscoberMore");
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

async function tweetMoreMenuContent() {
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

function updateStyles() {
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
    {
        const elem = document.querySelector(`.gt2-nav [data-testid="AppTabBar_Home_Link"]`) ?? document.querySelector("[role=banner] > div > div > div > div > div > nav " + TUICData.sidebarButtons.selectors.home);
        if (elem) {
            const isHome = location.href === "https://twitter.com/home";
            const SVGElem = elem.querySelector("svg path");
            SVGElem.setAttribute("d", HOME_ICON[TUICPref.getPref("sidebarSetting.homeIcon")][isHome ? "selected" : "unselected"]);
        }
    }
    {
        if (TUICPref.getPref("tweetDisplaySetting.likeToFavo")) {
            for (const elem of document.querySelectorAll(TUICData.visibleButtons.selectors["like-button"] + " svg:not(.TUICUpdateFavo)")) {
                const selected = elem.closest(TUICData.visibleButtons.selectors["like-button"]).getAttribute("data-testid") == "unlike" ? "selected" : "unselected";
                elem.querySelector("path").setAttribute("d", FAVORITE_ICON.favorite[selected]);
                elem
                    .hasClosest(TUICData.visibleButtons.selectors["retweet-button"])
                    .querySelector(TUICData.visibleButtons.selectors.likeAndRT + " path")
                    ?.setAttribute("d", FAVORITE_ICON.favoriteRT.unselected);

                elem.classList.add("TUICUpdateFavo");
            }
        }
    }
}

export { showLinkCardInfo, buttonUnderTweet, osusumeUser, replacePost, hideElements, profileInitialTab, moreMenuContent, tweetMoreMenuContent, updateStyles, sidebarButtons, dmPage, fixTwittersBugs };
