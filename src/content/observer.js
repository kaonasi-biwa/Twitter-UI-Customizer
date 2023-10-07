import { addCssElement } from "./applyCSS.js";
import { TUICData } from "./data.js";
import { DOG, EMPTY, TWITTER, X } from "./data/icons.js";
import { TUICI18N } from "./i18n.js";
import { TUICLibrary, TUICPref } from "./library.js";
import { TUICOptionHTML } from "./option.js";
import { isSafemode } from "./safemode.js";

export const TUICObserver = {
    observerFunction: function () {
        TUICObserver.observer.disconnect();

        if (document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`) != null) {
            if (!TUICObserver.iconObserver) {
                TUICObserver.iconObserver = new MutationObserver(() => {
                    if (document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`) != null) {
                        TUICObserver.iconObserver.disconnect();
                        TUICObserver.functions.twitterIcon(document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`), document.querySelector(`header [role="heading"]`));
                        TUICObserver.iconObserver.observe(document.querySelector("header h1 a > div"), {
                            childList: true,
                            subtree: true,
                            attributes: true,
                        });
                    }
                });
                TUICObserver.iconObserver.observe(document.querySelector("header h1 a > div"), {
                    childList: true,
                    subtree: true,
                    attributes: true,
                });
            }
            TUICObserver.functions.twitterIcon(document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`), document.querySelector(`header [role="heading"]`));
        }
        if (document.querySelector(`header h1 a > div > svg`) == null) {
            TUICObserver.iconObserver = "";
        }
        if (document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`) != null) {
            TUICObserver.functions.twitterIcon(
                document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`),
                document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] [role="heading"]`),
            );
        }
        if (document.querySelector(`[data-testid="interstitialGraphic"] > svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`) != null) {
            TUICObserver.functions.twitterIcon(document.querySelector(`[data-testid="interstitialGraphic"] > svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`), document.querySelector(`[data-testid="interstitialGraphic"]`));
        }
        if (document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`) != null) {
            TUICObserver.functions.twitterIcon(
                document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`),
                document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()}`).parentElement,
            );
        }

        if (document.querySelector(`.TUICSidebarButton .r-mbgqwd`) != null) document.querySelector(`.TUICSidebarButton .r-mbgqwd`)?.classList?.remove("r-mbgqwd");

        TUICObserver.functions.sidebarButtons();

        TUICObserver.functions.buttonUnderTweet();

        TUICObserver.functions.osusumeUser();
        TUICObserver.functions.replacePost();
        TUICObserver.functions.invisibleItems();

        TUICObserver.functions.updateStyles();

        TUICObserver.functions.fixDMBox();

        addCssElement();
        if (window.location.pathname == "/tuic/safemode") {
        } else if (document.querySelector("#unsent-tweet-background") == null && document.querySelector('[role="slider"]:not(article *)') != null && window.location.pathname == "/settings/display") {
            TUICOptionHTML.displaySetting(document.querySelector('[role="slider"]:not(article *)').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
        } else if (document.querySelector("#unsent-tweet-background") == null && document.querySelector('[role="slider"]:not(article *)') != null && window.location.pathname == "/i/display") {
            TUICOptionHTML.displaySetting(document.querySelector('[role="slider"]:not(article *)').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
        }

        TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    },
    config: {
        childList: true,
        subtree: true,
    },
    functions: {
        /**/ fixDMBox() {
            if (!TUICObserver.data.fixedDMBox) {
                const dmBox = document.querySelector(`[data-testid="DMDrawerHeader"]`);
                if (dmBox) {
                    if (dmBox.querySelector(`[d="M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z"]`)) {
                        dmBox.querySelector(`div[role="button"]+div[role="button"]`).click();
                        window.setTimeout(() => {
                            document.querySelector(`[data-testid="DMDrawerHeader"] div[role="button"]+div[role="button"]`).click();
                        }, 100);
                    }
                    TUICObserver.data.fixedDMBox = true;
                }
            }
        } /**/,
        twitterIcon: function (elem, base) {
            switch (TUICPref.get("twitterIcon")) {
                case "invisible":
                    if (TUICPref.get("otherBoolSetting.faviconSet")) {
                        document.querySelector(`[rel="shortcut icon"]`).href = EMPTY;
                    }
                    elem.classList.add("TUIC_SVGDISPNONE".addClass());
                    base.classList.add("TUIC_DISPNONE".addClass());
                    break;
                case "twitter":
                    if (TUICPref.get("otherBoolSetting.faviconSet")) {
                        document.querySelector(`[rel="shortcut icon"]`).href = TWITTER.replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color")}"`);
                    }
                    elem.classList.add("TUIC_SVGDISPNONE".addClass());
                    elem.classList.add("TUICTwitterIcon_Twitter".addClass());
                    break;
                case "dog":
                    if (TUICPref.get("otherBoolSetting.faviconSet")) {
                        document.querySelector(`[rel="shortcut icon"]`).href = DOG;
                    }
                    elem.classList.add("TUIC_SVGDISPNONE".addClass());
                    elem.classList.add("TUICTwitterIcon_Dog".addClass());
                    break;
                case "custom":
                    if (TUICPref.get("otherBoolSetting.faviconSet")) {
                        const imageURL = localStorage.getItem(TUICPref.get("otherBoolSetting.roundIcon") ? "TUIC_IconImg_Favicon" : "TUIC_IconImg");
                        document.querySelector(`[rel="shortcut icon"]`).href = imageURL ?? EMPTY;
                    }
                    elem.classList.add("TUIC_SVGDISPNONE".addClass());
                    elem.classList.add("TUICTwitterIcon_IconImg".addClass());
                    break;
                case "twitterIcon-X":
                    if (TUICPref.get("otherBoolSetting.faviconSet")) {
                        document.querySelector(`[rel="shortcut icon"]`).href = X.replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color")}"`);
                    }
                    elem.classList.add("TUIC_SVGDISPNONE".addClass());
                    elem.classList.add("TUICTwitterIcon_X".addClass());
                    break;
                default:
                    document.querySelector(`[rel="shortcut icon"]`).href = "//abs.twimg.com/favicons/twitter.3.ico";
                    elem.classList.add("TUIC_NOTSVGDISPNONE".addClass());
                    break;
            }
            if (!TUICPref.get("otherBoolSetting.faviconSet")) {
                document.querySelector(`[rel="shortcut icon"]`).href = "//abs.twimg.com/favicons/twitter.3.ico";
            }
        },
        sidebarButtons: function () {
            const bannerRoot = document.querySelector(`[role=banner] > div > div > div > div > div > nav`);
            if (bannerRoot != null) {
                if (bannerRoot.querySelector(`a:not(.${"NOT_" + "TUIC_DISPNONE".addClass()}):not(.${"TUIC_DISPNONE".addClass()})`) != null) {
                    this.sidebarButtonProcess(bannerRoot);
                } else {
                    let changeElem = false;
                    for (const selector of TUICPref.get("sidebarButtons")) {
                        const elems = bannerRoot.querySelectorAll(TUICData.sidebarButtons.selectors[selector]);
                        if (elems.length == 1) {
                            continue;
                        } else if (elems.length > 1) {
                            const elems = Array.from(bannerRoot.querySelectorAll(TUICData.sidebarButtons.selectors[selector]));
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
                    if (changeElem) this.sidebarButtonProcess(bannerRoot);
                }
            }
        },
        sidebarButtonProcess: function (bannerRoot) {
            if (!window.location.pathname.startsWith("/i/communitynotes")) {
                for (const i of TUICPref.get("sidebarButtons")) {
                    let moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i]);
                    if (moveElem != null) {
                        bannerRoot.appendChild(moveElem);
                        moveElem.classList.add("NOT_" + "TUIC_DISPNONE".addClass());
                    } else if (i in TUICData.sidebarButtons.html) {
                        moveElem = TUICLibrary.HTMLParse(TUICData.sidebarButtons.html[i]()).item(0);
                        moveElem.classList.add("NOT_" + "TUIC_DISPNONE".addClass());
                        moveElem.onclick = TUICData.sidebarButtons.buttonFunctions[i];
                        moveElem.addEventListener("keydown", (e) => {
                            if (e.keyCode === 13) {
                                TUICData.sidebarButtons.buttonFunctions[i]({
                                    currentTarget: e.target.parentElement,
                                });
                            }
                        });
                        bannerRoot.appendChild(moveElem);
                    }
                }
            }
            for (const i of TUICData.settings.sidebarButtons.all) {
                if (!TUICPref.get("sidebarButtons").includes(i) && !window.location.pathname.startsWith("/i/communitynotes")) {
                    const moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i]);
                    if (moveElem != null) moveElem.classList.add("TUIC_DISPNONE".addClass());
                }
            }
        },
        buttonUnderTweet: function () {
            const articles = document.querySelectorAll(`article:not([TUIC_ARTICLE="${"TUICDidArticle".addClass()}"])`);
            if (articles.length != 0) {
                articles.forEach(function (elem) {
                    const xCIcon = elem.querySelector(`path[d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"]`)?.parentElement?.parentElement;
                    if (xCIcon != null) {
                        TUICObserver.functions.twitterIcon(xCIcon, xCIcon.parentElement);
                    }
                    if (elem.querySelector(TUICData.visibleButtons.selectors["reply-button"]) != null && elem.querySelector(TUICData.visibleButtons.selectors["like-button"]) != null) {
                        const lockedAccount = elem.querySelector(`[data-testid="icon-lock"]`) != null;
                        const userNameElem = document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`);
                        const isMe =
                            userNameElem == null
                                ? false
                                : elem.querySelector(`[data-testid="User-Name"] > .r-1awozwy+div span`).textContent ==
                                  "@" + document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`).getAttribute("data-testid").replace(`UserAvatar-Container-`, "");

                        let bar_base = elem.querySelector(TUICData.visibleButtons.selectors["reply-button"]);
                        while (bar_base.querySelector(TUICData.visibleButtons.selectors["like-button"]) == null) {
                            bar_base = bar_base.parentElement;
                        }
                        if (TUICPref.get("tweetDisplaySetting.bottomScroll")) bar_base.parentElement.classList.add("TUICScrollBottom".addClass());
                        bar_base.parentElement.classList.add("TUICTweetButtomBarBase".addClass());
                        if (TUICPref.get("tweetDisplaySetting.bottomSpace")) {
                            const space = elem.querySelector(`[aria-labelledby]`);
                            if (space && space.children?.[0]?.childElementCount === 0) {
                                space.classList.add("TUIC_NONE_SPACE_BOTTOM_TWEET".addClass());
                            }
                        }
                        if (TUICPref.get("timeline.hideOhterRTTL") && elem.querySelector(`a[href^="/"] > [data-testid="socialContext"]`) != null) {
                            elem.classList.add("TUIC_DISPNONE".addClass());
                        }
                        const bar_item = {};
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
                            TUICData.visibleButtons.buttonElement._handleEvent(bar_item["retweet-button"], TUICData.visibleButtons.buttonFunction["retweet-button"]);
                        }
                        const isBigArticle = !!elem.querySelector(`.r-1srniue`);
                        for (const boxElem of Array.from(elem.querySelectorAll(`.TUICEngagementsBox`))) {
                            boxElem.remove();
                        }
                        if (isBigArticle) {
                            elem.classList.add("TUICItIsBigArticle".addClass());
                            if (location.pathname.includes("/photo/")) {
                                elem.classList.add("TUICItIsBigArticlePhoto".addClass());
                            }

                            if (TUICPref.get("otherBoolSetting.placeEngagementsLink")) {
                                const engageentsTypeList = TUICPref.get("fixEngagements");
                                const shortName = TUICPref.get("otherBoolSetting.placeEngagementsLinkShort");
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
                                const isPhotoPage = location.pathname.includes("/photo/");
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
                                    bar_base.parentElement.parentElement.insertBefore(engagementsBox, bar_base.parentElement);
                                }
                            }
                        }

                        let lastButton;
                        for (const i of TUICPref.get("visibleButtons")) {
                            let div = -1;
                            if (i in bar_item) {
                                div = bar_item[i];
                            } else if (i in TUICData.visibleButtons.buttonElement) {
                                div = TUICData.visibleButtons.buttonElement[i](
                                    { elements: { buttonBarBase: bar_base, article: elem, statusButton: statusButton }, option: { isLockedAccount: lockedAccount, cannotRT: cannotRT, cannotShare: cannotShare, isMe: isMe, isBigArticle: isBigArticle } } /*bar_base, elem, lockedAccount*/,
                                );
                            }
                            if (div != -1) {
                                if (bar_item["reply-button"].querySelector(`[data-testid="app-text-transition-container"]`) != null && div.querySelector(`[data-testid="app-text-transition-container"]`) == null)
                                    div.querySelector("svg").parentElement.parentElement.appendChild(TUICData.visibleButtons.emptyElement());
                                lastButton = div;
                                bar_base.appendChild(div);
                            }
                        }
                        if (lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") != null && lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x").children[0].children[0].childElementCount == 0) {
                            lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x").remove();
                        }

                        for (var i = 0; i < TUICData.settings.visibleButtons.all.length; i++) {
                            if (!TUICPref.get("visibleButtons").includes(TUICData.settings.visibleButtons.all[i]) && TUICData.settings.visibleButtons.all[i] in bar_item) {
                                bar_item[TUICData.settings.visibleButtons.all[i]].classList.add("TUIC_DISPNONE".addClass());
                            }
                        }
                    }
                    elem.setAttribute("TUIC_ARTICLE", "TUICDidArticle".addClass());
                });
            }
        },
        osusumeUser: function () {
            if (TUICPref.get("timeline.osusume-user-timeline") && location.search.indexOf("f=user") == -1 && !location.href.includes("/settings/")) {
                const cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not(.${"TUICDidArticle".addClass()}):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *)`);
                for (const elem of cells) {
                    if (
                        elem.querySelector(`[data-testid="UserCell"]`) != null &&
                        elem.previousElementSibling != null &&
                        elem.querySelector(`[aria-live="polite"]`) == null &&
                        (elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) != null || elem.previousElementSibling.querySelector(`h2`) != null)
                    ) {
                        elem.classList.add("TUIC_DISPNONE".addClass());
                        if (elem.previousElementSibling.querySelector(`h2`) != null) {
                            elem.previousElementSibling.classList.add("TUIC_DISPNONE".addClass());
                        }
                    }
                    if (elem.querySelector(`a[href*="&f=user"],a[href^="/i/connect_people?"]`) && elem.querySelector(`[aria-live="polite"]`) == null) {
                        elem.classList.add("TUIC_DISPNONE".addClass());
                    }
                }
            }
            if (window.location.pathname.includes("/status/") && !isNaN(new URL(location.href).pathname.split("/")[3]) && document.querySelector(`[data-testid="primaryColumn"]`) != null) {
                let cells = document.querySelectorAll(`:is([data-testid="primaryColumn"],[data-testid="mask"]+div [aria-labelledby^="accessible-list"]) [data-testid="cellInnerDiv"]:not([style*="opacity: 0.01"]):not(.${"TUIC_DISCOVERHEADER".addClass()})`);
                for (const elem of cells) {
                    if (elem.querySelector("article") == null && elem.querySelector("h2") != null && (elem.children?.[0]?.children?.[0]?.children?.[0]?.children?.[1]?.getAttribute("style") ?? "").includes("-webkit-line-clamp: 2;")) {
                        elem.classList.add("TUIC_DISCOVERHEADER".addClass());
                        if (TUICPref.get("timeline-discoverMore") === "discoverMore_invisible") {
                            elem.classList.add("TUIC_DISPNONE".addClass());
                            elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "none");
                            if (elem.getAttribute("TUICDiscoberMore") != null) {
                                elem.removeAttribute("TUICDiscoberMore");
                            }
                        } else if (TUICPref.get("timeline-discoverMore") === "discoverMore_detailOpen") {
                            elem.setAttribute("TUICDiscoberMore", "true");
                            elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "");
                            elem.onclick = (event) => {
                                const nowType = elem.getAttribute("TUICDiscoberMore");
                                elem.setAttribute("TUICDiscoberMore", nowType == "true" ? "false" : "true");
                                elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", nowType == "true" ? "none" : "");
                                event.stopPropagation();
                                event.stopImmediatePropagation();
                            };
                        } else if (TUICPref.get("timeline-discoverMore") === "discoverMore_detailClose") {
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
                            elem2.classList.add("TUIC_DISCOVERMORE".addClass());
                            elem2 = elem2.nextElementSibling;
                        }
                    }
                }
            }
            if (TUICPref.get("timeline.accountStart") && location.search.indexOf("f=user") == -1 && !location.href.includes("/settings/") && document.querySelector(`[href="/settings/profile"]`)) {
                const cells = document.querySelectorAll(
                    `div[data-testid="cellInnerDiv"]:not(.${"TUICDidArticle".addClass()}):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *) [aria-live="polite"]`,
                );
                for (const elem of cells) {
                    elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE".addClass());
                    elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add("TUIC_DISPNONE".addClass());
                }
            }
            if (TUICPref.get("rightSidebar.verified") && document.querySelector(`*:not(.${"TUIC_DISPNONE".addClass()}) > [role="complementary"] [href="/i/verified-choose"]`) != null) {
                document.querySelector(`*:not(.${"TUIC_DISPNONE".addClass()}) > [role="complementary"] [href="/i/verified-choose"]`).parentElement.parentElement.classList.add("TUIC_DISPNONE".addClass());
            }
            if (TUICPref.get("rightSidebar.trend") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="trend"]`) != null) {
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="trend"]`).parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE".addClass());
            }
            if (
                TUICPref.get("rightSidebar.osusumeUser") &&
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="UserCell"]`) != null &&
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="UserCell"] [dir="auto"] > span`) == null
            ) {
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="UserCell"]`).parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE".addClass());
            }

            if (
                TUICPref.get("rightSidebar.relevantPeople") &&
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="UserCell"]`) != null &&
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="UserCell"] [dir="auto"] > span`) != null
            ) {
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="UserCell"]`).parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE".addClass());
            }
            if (TUICPref.get("rightSidebar.links") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) > nav`) != null) {
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) > nav`).parentElement.classList.add("TUIC_DISPNONE".addClass());
            }
            if (TUICPref.get("rightSidebar.searchBox") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [role="search"]`) != null) {
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [role="search"]`).parentElement.parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE".addClass());
            }
            if (TUICPref.get("rightSidebar.space") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="pill-contents-container"]`) != null) {
                document
                    .querySelector(`[data-testid="sidebarColumn"] *:not(.${"TUIC_DISPNONE".addClass()}) [data-testid="pill-contents-container"]`)
                    .parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("TUIC_DISPNONE".addClass());
            }
            if (TUICPref.get("tweetDisplaySetting.subscribe-tweets") && window.location.pathname.includes("/status/") && !isNaN(new URL(location.href).pathname.split("/")[3]) && document.querySelector(`*:not(.${"TUIC_DISPNONE".addClass()}) > [data-testid$="-subscribe"]`) != null) {
                document.querySelector(`[data-testid$="-subscribe"]`).parentElement.classList.add("TUIC_DISPNONE".addClass());
            }
            if (TUICPref.get("invisibleItems.subscribe-profile") && document.querySelector(`[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]:not(.${"TUIC_DISPNONE".addClass()})`) != null) {
                document.querySelector(`[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]:not(.${"TUIC_DISPNONE".addClass()})`).classList.add("TUIC_DISPNONE".addClass());
            }
        },
        replacePost: function () {
            // NOTE: まだ置き換えられていない要素を取得し、置き換え済みクラスを追加する関数
            function getNotReplacedElements(selector) {
                const replaceMarkClass = "TUIC_TWEETREPLACE".addClass();

                // NOTE: セレクタで選択された要素の中から、すでに置き換え済みの要素を除外
                const elements = Array.from(document.querySelectorAll(selector)).filter((e) => !e.classList.contains(replaceMarkClass));

                // NOTE: 要素に置き換え済みクラスを追加
                for (const e of elements) {
                    e.classList.add(replaceMarkClass);
                }

                return elements;
            }

            if (TUICPref.get("XToTwitter.PostToTweet")) {
                const isTweetPage = location.pathname.includes("/status/");
                const isEngagementsPage = document.querySelector(`[role="tab"]`) && location.pathname.includes("/status/") && (location.pathname.endsWith("/quotes") || location.pathname.endsWith("/retweets") || location.pathname.endsWith("/likes"));
                const isRetweetPage = location.pathname.endsWith("/retweets");
                const isLikesPage = location.pathname.endsWith("/likes");
                const isHistoryPage = location.pathname.endsWith("/history");
                const isQuotesPage = location.pathname.endsWith("/retweets/with_comments") || location.pathname.endsWith("/quotes");
                const isAnalyticsPage = location.pathname.endsWith("/analytics");
                const isNotifications = location.pathname.endsWith("/notifications");
                const isNotificationsTimeline = location.pathname.endsWith("/i/timeline");
                const isUserPage = !!document.querySelector('[data-testid="primaryColumn"] [data-testid="UserName"]');
                const isUnsentPage = location.pathname.includes("/unsent/");
                const isTweetingPage = location.pathname.includes("/compose/tweet");

                const isHoveringMiniSidenavTweetButton = !!document.querySelector('.r-1vtznih[data-testid="SideNav_NewTweet_Button"]');
                const isHoveringRetweetButton = !!document.querySelector('[role="button"][data-testid="retweet"] > div > div > div.r-15azkrj');
                const isHoveringUnretweetButton = !!document.querySelector('[role="button"][data-testid="unretweet"] > div > div > div.r-15azkrj');

                if (isTweetPage) {
                    // ツイート画面の「n件のリツイート」のテキスト
                    for (const elem of getNotReplacedElements('a[href$="/retweets"] > div+span > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweetCount");
                    // ツイート画面の「n件の引用ツイート」のテキスト
                    for (const elem of getNotReplacedElements('a[href$="/retweets/with_comments"] > div+span > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quoteCount");

                    // ツイート画面のツイートアナリティクスの表示ボタン
                    for (const elem of getNotReplacedElements('[data-testid="analyticsButton"] span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetAnalytics");

                    // ツイート画面の翻訳の表示ボタン
                    for (const elem of getNotReplacedElements('[data-testid="tweetText"] + [role="button"]')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-translateTweet");

                    // ツイートを追加
                    for (const elem of getNotReplacedElements('[data-testid="cellInnerDiv"] a[href="/compose/tweet"] [role="presentation"] > div > span > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-addTweet");

                    if (isAnalyticsPage) {
                        // ツイートアナリティクスのダイアログヘッダー
                        for (const elem of getNotReplacedElements('[role="dialog"] [data-viewportview="true"] h2#modal-header > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetAnalyticsHeader");
                    }

                    if (isHistoryPage) {
                        // ツイートのバージョンの「最新のポスト」
                        // i18nが存在するんで一旦保留
                        //for (const elem of getNotReplacedElements('[role="dialog"] [data-viewportview="true"] h2#modal-header > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetAnalyticsHeader");
                    }
                } else if (isUserPage) {
                    // ユーザーの「n件のツイート」
                    for (const elem of getNotReplacedElements('[data-testid="primaryColumn"] h2[role="heading"] + div')) elem.textContent = elem.textContent.split(" ")[0] + " " + TUICI18N.get("XtoTwitter-PostToTweet-tweetCount");

                    // TLのリスト選択バー・ユーザープロフィールのツイート／返信／メディア等のリスト（ここでは後者のみ）
                    for (const elem of getNotReplacedElements('[data-testid="primaryColumn"] [data-testid="ScrollSnap-SwipeableList"] > [data-testid="ScrollSnap-List"] > div:first-child span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweet");
                } else if (isNotifications) {
                    // 通知の「ポスト」を修正 「リツイート」以外は適したi18nが見つからないので無理だった
                    /**/
                    for (const elem of getNotReplacedElements(`[data-testid="cellInnerDiv"] article > div span > span:not(a *)`)) {
                        if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-notificationsRepost").toLowerCase())) {
                            elem.textContent = elem.textContent.replace(TUICI18N.get("XtoTwitter-PostToTweet-notificationsRepost").toLowerCase(), TUICI18N.get("XtoTwitter-PostToTweet-notificationsRetweet").toLowerCase());
                        }
                    } /**/
                }

                for (const elem of getNotReplacedElements(`[data-testid="trend"] > div > div:nth-of-type(3) > span`)) elem.textContent = elem.textContent.split(" ")[0] + TUICI18N.get("XtoTwitter-PostToTweet-tweetCount");

                // 予約ツイート関連
                if (isUnsentPage) {
                    // タブの未送信ポスト
                    // 作成したツイートを～
                    for (const elem of getNotReplacedElements(`[role="dialog"] [data-testid="empty_state_body_text"]`)) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-unsentPageTitle");

                    //未送信ツイートのタブ
                    for (const elem of getNotReplacedElements(`[href="/compose/tweet/unsent/drafts"][role="tab"] > div > div > span`)) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-unsentPageTab1");
                }

                // 共有 > リンクをコピー
                for (const elem of getNotReplacedElements(
                    '[role="menu"] [data-testid="Dropdown"] [d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"]',
                ))
                    elem.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-shareMenu-copyURL");

                // 共有 > その他の方法
                for (const elem of getNotReplacedElements(
                    '[role="menu"] [data-testid="Dropdown"] [d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"]',
                ))
                    elem.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-shareMenu-copyOtherWay");

                // ツイート入力ダイアログ
                const isDialog = !!document.querySelector('[role="alertdialog"],[role="dialog"],[data-testid="twc-cc-mask"]+div');
                const isReply = !!document.querySelector('[role="dialog"] [data-testid="tweet"]');
                const isMultipleTweet = !isReply && document.querySelectorAll(':is([role="dialog"],[data-testid="twc-cc-mask"]+div) [data-testid^="UserAvatar-Container-"]:not([data-testid="attachments"] *)').length !== 1;
                const writingTweetCount = document.querySelectorAll(':is([role="dialog"],[data-testid="twc-cc-mask"]+div) [data-testid^="UserAvatar-Container-"]:not([data-testid="attachments"] *)').length;
                if (writingTweetCount != TUICObserver.data.tweetCount) {
                    for (const elem of document.querySelectorAll(`${!document.querySelector(`[data-testid="twc-cc-mask"]`) ? `:is([role="dialog"])` : ""} :is([data-testid="tweetButton"], [data-testid="tweetButtonInline"]) > div > span > span.${"TUIC_TWEETREPLACE".addClass()}`)) {
                        elem.classList.remove("TUIC_TWEETREPLACE".addClass());
                    }
                }
                TUICObserver.data.tweetCount = writingTweetCount;
                // ツイートボタン
                for (const elem of getNotReplacedElements(':is([data-testid="tweetButton"], [data-testid="tweetButtonInline"]) > div > span > span')) {
                    if (isDialog && isMultipleTweet) {
                        // ダイアログで複数ツイートする場合
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetAllButton");
                    } else if (isDialog && !isReply) {
                        // ダイアログでツイートする場合
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetButton");
                    } else if (!isDialog && !isTweetPage) {
                        // TL上部のツイートダイアログの場合
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetButton");
                    } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-tweetButton-latest")) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetButton");
                    } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-tweetAllButton-latest")) {
                        // ダイアログで複数ツイートする場合
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetAllButton");
                    }
                    // NOTE: kaonasi_biwa さんと連絡を取り合い、返信ボタンは現時点では改変しないことになりました: https://twitter.com/fami_kotone/status/1692551624714231961
                }

                // ツイート画面の「返信をツイートする」のプレースホルダーテキスト
                for (const elem of getNotReplacedElements(".public-DraftEditorPlaceholder-inner")) {
                    if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-placeholder-reply-latest")) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-placeholder-reply");
                    } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-placeholder-addTweet-latest")) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-placeholder-addTweet-old");
                    }
                }
                // ツイート入力ダイアログの、送信先ポップアップの「Twitterサークル」の文字
                for (const elem of getNotReplacedElements(
                    '[role="menuitem"] > div > div > svg > g > [d="M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm13.759-3.83c-.355-.69-1.059-1.13-1.84-1.17-.66-.03-1.347.22-1.918.79-.573-.57-1.259-.82-1.92-.79-.781.04-1.485.48-1.84 1.17-.358.71-.339 1.62.206 2.59.541.97 1.601 1.99 3.352 2.98l.202.12.201-.12c1.751-.99 2.811-2.01 3.352-2.98.544-.97.563-1.88.205-2.59z"]',
                ))
                    elem.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("div + div > div > span").textContent = TUICI18N.get("sidebarButtons-circles");
                // ツイート入力ダイアログの、送信先としてサークルが設定されているときに表示される、「Twitterサークル」の文字
                for (const elem of getNotReplacedElements(`[aria-haspopup="menu"][role="button"][style*="border-color: rgb(0, 186, 124);"] > div > span > span`)) elem.textContent = TUICI18N.get("sidebarButtons-circles");
                // ツイート下書き保存確認ダイアログのヘッダー
                if (isDialog) {
                    for (const elem of getNotReplacedElements(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > h1 > span`)) {
                        if (isTweetingPage) {
                            elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetSaveConfirm");
                        }
                    }

                    const blockText = new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-block-dialogBody-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{screenName}", "(.*)"));
                    for (const elem of getNotReplacedElements(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > h1+div > span`)) {
                        if (elem.textContent != " ") {
                            const blockTextMatch = elem.textContent.match(blockText);
                            if (blockTextMatch && blockTextMatch.length > 1) {
                                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-block-dialogBody-old").replaceAll("{screenName}", blockTextMatch[1]);
                            } else if (isUnsentPage) {
                                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-unsentTweetDeleteConfirmSpan");
                                elem.parentElement.parentElement.querySelector("h1 > span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-unsentTweetDeleteConfirmTitle");
                            } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-deleteTweet-dialogBody-latest")) {
                                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-deleteTweet-dialogBody-old");
                                elem.parentElement.parentElement.querySelector("h1 > span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-deleteTweet-dialogTitle");
                            } else if (elem.textContent == TUICI18N.get("XtoTwitter-PostToTweet-retweet-dialogBody-latest")) {
                                elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweet-dialogBody-old");
                                elem.parentElement.parentElement.querySelector("h1 > span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweet-dialogTitle");
                                elem.parentElement.parentElement.querySelector(`[data-testid="confirmationSheetConfirm"] > div > span > span`).textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweet-dialogConfirm");
                            }
                        }
                    }
                }

                // サークルツイートの下のやつ
                const circleThumbnail = new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-circleTweet-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{screenName}", "(.*)"));
                for (const elem of getNotReplacedElements(`[role="status"][aria-live="polite"] > [data-testid="thumbnail"] > div+div > [id] > span`)) {
                    if (elem.textContent != " ") {
                        const blockTextMatch = elem.textContent.match(circleThumbnail);
                        if (blockTextMatch && blockTextMatch.length > 1) {
                            elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-circleTweet-old").replaceAll("{screenName}", blockTextMatch[1]);
                        }
                    }
                }

                // リツイート確認ポップアップの「リツイート」ボタン
                for (const elem of getNotReplacedElements('[role="menuitem"][data-testid="retweetConfirm"] span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweet");
                // リツイート確認ポップアップの「リツイート」ボタン
                for (const elem of getNotReplacedElements('[role="menuitem"][data-testid="unretweetConfirm"] span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-unretweet");
                // リツイート確認ポップアップの「引用ツイート」ボタン
                for (const elem of getNotReplacedElements('[role="menuitem"][href="/compose/tweet"] span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quote");

                // ツイートその他ポップアップの「このツイートに興味がない」ボタン
                // for (const elem of getNotReplacedElements('path[d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"]'))
                //     elem.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-quote");
                // ツイートその他ポップアップの「ツイートを埋め込み」ボタン
                for (const elem of getNotReplacedElements('path[d="M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z"]'))
                    elem.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-menu-embed");
                // ツイートその他ポップアップの「ツイートを報告」ボタン
                for (const elem of getNotReplacedElements('path[d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"]')) elem.parentElement.parentElement.parentElement.parentElement.querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-reportTweet");
                // ツイートその他ポップアップの「ツイートアナリティクスの表示」ボタン
                for (const elem of getNotReplacedElements('[role="menu"] a[role="menuitem"][href$="/analytics"] span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetAnalytics");

                // サイドバーのツイートボタン
                for (const elem of getNotReplacedElements('[data-testid="SideNav_NewTweet_Button"] > div > span > div > div > span > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetButton");

                // 「新しいツイートを表示」ポップアップ
                for (const elem of getNotReplacedElements('[data-testid="pillLabel"] > span > span > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweeted");

                // 「変身できるユーザーを変更」ダイアログの説明文
                for (const elem of getNotReplacedElements("#conversation-controls-details > span")) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-replyRangeDetail");

                // TLの「n件のツイートを表示」
                for (const elem of getNotReplacedElements(`[data-testid="cellInnerDiv"] > div > [role="button"] > div > div > span`)) {
                    let n = 0;
                    elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tlShowMoreTweet").replaceAll("{count}", (match) => {
                        return n++ == 0 ? elem.textContent.match(/(\d+)/)[0] : "";
                    });
                }

                // プライマリカラム（中央に表示される画面）のヘッダー
                for (const elem of getNotReplacedElements('[data-testid="primaryColumn"] h2[role="heading"] > span')) {
                    if (isEngagementsPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-engagementsTitle");
                    } else if (isQuotesPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quoteTitle");
                    } else if (isTweetPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetTitle");
                    } else if (isNotificationsTimeline) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetNotificationsTitle");
                    }
                }

                // RT一覧とかのダイアログのタイトル
                for (const elem of getNotReplacedElements('[role="dialog"] h2[role="heading"] > span')) {
                    if (isRetweetPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweetedUsersPageTitle");
                    }
                }

                // 誰にも反応（いいね/RT/引用）されていない状況においての、一覧ページの「まだ○○はありません」
                for (const elem of getNotReplacedElements('[data-testid="emptyState"] [data-testid="empty_state_header_text"]')) {
                    if (isQuotesPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quoteTweeted-none-header");
                    } else if (isRetweetPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweeted-none-header");
                    } else if (isLikesPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-liked-none-header");
                    }
                }
                // 誰にも反応（いいね/RT/引用）されていない状況においての、一覧ページの「まだ○○はありません」
                const blockTextEmptyProfile = new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-blocked-none-body-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{screenName}", "(.*)"));
                for (const elem of getNotReplacedElements('[data-testid="emptyState"] [data-testid="empty_state_body_text"]')) {
                    const blockTextMatch = elem.textContent.match(blockTextEmptyProfile);
                    if (isQuotesPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quoteTweeted-none-body");
                    } else if (isRetweetPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweeted-none-body");
                    } else if (isLikesPage) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-liked-none-body");
                    } else if (blockTextMatch && blockTextMatch.length > 1) {
                        elem.childNodes[0].textContent = TUICI18N.get("XtoTwitter-PostToTweet-blocked-none-body-old").replaceAll("{screenName}", blockTextMatch[1]);
                        elem.parentElement.querySelector(`[data-testid="empty_state_button_text"] > div > span > span`).textContent = TUICI18N.get("XtoTwitter-PostToTweet-blocked-none-button");
                    }
                }

                // エンゲージメントの引用ツイートのタブ
                if (isQuotesPage) {
                    for (const elem of getNotReplacedElements(`[role="tab"][href$="/quotes"] > div > div > span`)) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-quoteTitle");
                    }
                }

                // エンゲージメントリツイートのタブ
                if (isQuotesPage) {
                    for (const elem of getNotReplacedElements(`[role="tab"][href$="/retweets"] > div > div > span`)) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-engagements-retweetTitle");
                    }
                }

                // 下に出てくるトーストボックス
                for (const elem of getNotReplacedElements(`#layers div[data-testid="toast"] > div > span`)) {
                    if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-tweeted-one-latest-layer"))) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweeted-one-old-layer");
                    } else if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-tweeted-some-latest-layer"))) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweeted-some-old-layer");
                    } else if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-addBookmark-latest-layer"))) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-addBookmark-old-layer");
                    } else if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-deleteBookmark-latest-layer"))) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-deleteBookmark-old-layer");
                    } else if (elem.textContent.includes(TUICI18N.get("XtoTwitter-PostToTweet-deleteUnsentTweet-latest-layer"))) {
                        elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-deleteUnsentTweet-old-layer");
                    }
                }

                // 検索バーのテキストボックス
                for (const elem of getNotReplacedElements('[role="search"] input')) elem.setAttribute("placeholder", TUICI18N.get("XtoTwitter-PostToTweet-keywordSearch"));

                // サイドナビゲーションが小さい時のツイートボタンをホバー中のツールチップ
                if (isHoveringMiniSidenavTweetButton) for (const elem of getNotReplacedElements('[role="tooltip"] > [data-testid="HoverLabel"] > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-tweetButton");
                // リツイートボタンをホバー中のツールチップ
                else if (isHoveringRetweetButton) for (const elem of getNotReplacedElements('[role="tooltip"] > [data-testid="HoverLabel"] > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweet");
                // リツイート解除ボタンをホバー中のツールチップ
                else if (isHoveringUnretweetButton) for (const elem of getNotReplacedElements('[role="tooltip"] > [data-testid="HoverLabel"] > span')) elem.textContent = TUICI18N.get("XtoTwitter-PostToTweet-unretweet");

                // 固定ツイートの「固定」表示
                for (const elem of getNotReplacedElements('[data-testid="tweet"] path[d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"]'))
                    elem.parentElement.parentElement.parentElement.parentElement.querySelector(`[data-testid="socialContext"] > span`).textContent = TUICI18N.get("XtoTwitter-PostToTweet-pinnedTweet");
                // 「{user}さんがリツイートしました」もしくは「リツイート済み」
                for (const elem of getNotReplacedElements(
                    '[data-testid="tweet"] path[d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"]',
                )) {
                    const container = elem.parentElement.parentElement.parentElement.parentElement.querySelector(`[data-testid="socialContext"]`);
                    // NOTE: リツイートのSVGで取得しているが、これだとリツイートボタンも引っかかってしまうため、コンテナが検出できない場合スキップ
                    if (!container) continue;
                    const personRetweetedText = Array.from(container.childNodes)
                        .filter((e) => e.nodeType === Node.TEXT_NODE)
                        .at(-1);
                    // eslint-disable-next-line no-extra-boolean-cast
                    if (!!personRetweetedText) {
                        // 「{user}さんがリツイートしました」のユーザー名の後の部分
                        personRetweetedText.textContent = TUICI18N.get("XtoTwitter-PostToTweet-isRetweeted");
                    } else {
                        // 「リツイート済み」
                        container.querySelector("span").textContent = TUICI18N.get("XtoTwitter-PostToTweet-retweeted");
                    }
                }

                // TODO: ポスト系には関係ないが、おすすめクリエイターを削除したい。固有プロパティが見つからないので、[data-testid$="-subscribe"]が含まれる[data-testid="cellInnerDiv"]を削除し、その塊の一つ前のやつを消せばよさそう（難しそう）

                // TODO: aria-label が設定されているものは変更したほうがいいかもしれない
            }
        },
        invisibleItems: function () {
            document.querySelectorAll('a[href$="quick_promote_web/intro"]').forEach((e) => {
                if (TUICPref.get("tweetDisplaySetting.twitter-pro-promotion-btn")) {
                    e.classList.add("TUIC_DISPNONE".addClass());
                } else {
                    e.classList.remove("TUIC_DISPNONE".addClass());
                }
            });

            if (TUICPref.get("invisibleItems.profileHighlights")) {
                const tabs = document.querySelectorAll(`:not(.${"TUIC_DISPNONE".addClass()}) > [role="tab"][href$="/highlights"]`);
                for (const elem of tabs) {
                    elem.parentElement.classList.add("TUIC_DISPNONE".addClass());
                }
            }

            if (TUICPref.get("invisibleItems.profileAffiliates")) {
                const tabs = document.querySelectorAll(`:not(.${"TUIC_DISPNONE".addClass()}) > [role="tab"][href$="/affiliates"]`);
                for (const elem of tabs) {
                    elem.parentElement.classList.add("TUIC_DISPNONE".addClass());
                }
            }

            if (TUICPref.get("accountSwitcher.icon") && TUICPref.get("accountSwitcher.nameID") && TUICPref.get("accountSwitcher.moreMenu")) {
                document.querySelector(`[data-testid="SideNav_AccountSwitcher_Button"]`).parentElement.parentElement.classList.add("TUIC_DISPNONE".addClass());
            }

            document.querySelectorAll('[href="/settings/monetization"], [href="/i/premium_sign_up"], [href="/settings/manage_subscriptions"]').forEach((e) => {
                if (TUICPref.get("invisibleItems.config-premium")) {
                    e.classList.add("TUIC_DISPNONE".addClass());
                } else {
                    e.classList.remove("TUIC_DISPNONE".addClass());
                }
            });

            if (TUICPref.get("invisibleItems.verifiedFollowerTab")) {
                const nowURL = location.pathname;
                if (nowURL.endsWith("/followers") || nowURL.endsWith("/following") || nowURL.endsWith("/verified_followers")) {
                    const tab = document.querySelector(`[role="presentation"]:not(.${"TUIC_DISPNONE".addClass()}) > [role="tab"][href$="/verified_followers"]`);
                    if (tab) {
                        tab.parentElement.classList.add("TUIC_DISPNONE".addClass());
                        if (nowURL.endsWith("/verified_followers")) {
                            document.querySelector(`[role="presentation"] > [role="tab"][href$="/followers"]`)?.click();
                        }
                    }
                    document.querySelector(`nav [data-testid="ScrollSnap-prevButtonWrapper"]:not(.${"TUIC_DISPNONE_PARENT".addClass()} > *)`)?.parentElement.classList.add("TUIC_DISPNONE_PARENT".addClass());
                }
            }

            if (TUICPref.get("invisibleItems.verifiedNotifications") && location.pathname.includes("/notifications")) {
                document.querySelector(`[href="/notifications/verified"][role="tab"]:not(.${"TUIC_DISPNONE".addClass()} > *)`)?.parentElement.classList.add("TUIC_DISPNONE".addClass());
            }
        },
        updateStyles: function () {
            for (const i of document.querySelectorAll(".TUICSidebarButton")) {
                const itemId = i.id.replace("TUICSidebar_", "");
                let locationBool = false;
                if (TUICData.sidebarButtons.tuicButtonUrl[itemId].endsWith("/")) {
                    locationBool = location.pathname.includes(TUICData.sidebarButtons.tuicButtonUrl[itemId]);
                } else {
                    locationBool = location.pathname.endsWith(TUICData.sidebarButtons.tuicButtonUrl[itemId]);
                }
                if (locationBool && !i.classList.value.includes("TUICSidebarSelected")) {
                    i.classList.add("TUICSidebarSelected");
                } else if (!locationBool && i.classList.value.includes("TUICSidebarSelected")) {
                    i.classList.remove("TUICSidebarSelected");
                }
                if (document.querySelector(TUICData.sidebarButtons.selectors.moremenu) != null) i.querySelector("[dir]").style.display = document.querySelector(TUICData.sidebarButtons.selectors.moremenu).children[0].childNodes.length == 2 ? "" : "none";
            }
        },
    },
    titleObserverFunction: async () => {
        if (TUICObserver.headObserver) TUICObserver.headObserver.disconnect();
        else TUICObserver.headObserver = new MutationObserver(TUICObserver.titleObserverFunction);

        const titleElement = (await TUICLibrary.waitForElement("title"))[0];

        if (isSafemode) {
            document.title = TUICI18N.get("safemode-title");
        } else if (TUICPref.get("XToTwitter.XToTwitter")) {
            if (document.title == "X") {
                document.title = "Twitter";
            } else if (window.location.pathname.includes("/i/timeline") || window.location.pathname.includes("/compose/tweet")) {
                TUICObserver.headObserver.disconnect();
                document.title = (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") + TUICI18N.get("XtoTwitter-PostToTweet-tweetNotificationsTitle") + " / Twitter";
            } else if (window.location.pathname.endsWith("/with_replies") && !window.location.pathname.includes("/status/")) {
                TUICObserver.headObserver.disconnect();
                const titleInfo = document.title.match(
                    new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-profile-postsWithReplies-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{fullName}", "(.*)").replace("{screenName}", "(.*)")),
                ); /*/Xユーザーの(.*)さん: 「(.*)」/*/
                if (!titleInfo || titleInfo.length <= 1) {
                    document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
                } else {
                    document.title =
                        (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") +
                        TUICI18N.get("XtoTwitter-PostToTweet-profile-postsWithReplies-old")
                            .replaceAll("&quot;", '"')
                            .replace(`{fullName}`, titleInfo[1])
                            .replace("{screenName}", titleInfo[2])
                            .replace(/(.*)\/ X(」|")/, "$1 / Twitter");
                }
            } else if (window.location.pathname.endsWith("/media") && !window.location.pathname.includes("/status/")) {
                TUICObserver.headObserver.disconnect();
                const titleInfo = document.title.match(new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-profile-media-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{fullName}", "(.*)").replace("{screenName}", "(.*)"))); /*/Xユーザーの(.*)さん: 「(.*)」/*/
                if (!titleInfo || titleInfo.length <= 1) {
                    document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
                } else {
                    document.title =
                        (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") +
                        TUICI18N.get("XtoTwitter-PostToTweet-profile-media-old")
                            .replaceAll("&quot;", '"')
                            .replace(`{fullName}`, titleInfo[1])
                            .replace("{screenName}", titleInfo[2])
                            .replace(/(.*)\/ X(」|")/, "$1 / Twitter");
                }
            } else if (window.location.pathname.endsWith("/likes") && !window.location.pathname.includes("/status/")) {
                TUICObserver.headObserver.disconnect();
                const titleInfo = document.title.match(new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-profile-likes-latest").replaceAll("&quot;", '"').replaceAll("(", "\\(").replaceAll(")", "\\)").replace("{fullName}", "(.*)").replace("{screenName}", "(.*)"))); /*/Xユーザーの(.*)さん: 「(.*)」/*/
                if (!titleInfo || titleInfo.length <= 1) {
                    document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
                } else {
                    document.title =
                        (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") +
                        TUICI18N.get("XtoTwitter-PostToTweet-profile-likes-old")
                            .replaceAll("&quot;", '"')
                            .replace(`{fullName}`, titleInfo[1])
                            .replace("{screenName}", titleInfo[2])
                            .replace(/(.*)\/ X(」|")/, "$1 / Twitter");
                }
            } else if (window.location.pathname.includes("/status/")) {
                /**/
                TUICObserver.headObserver.disconnect();
                const titleInfo = document.title.match(new RegExp(TUICI18N.get("XtoTwitter-PostToTweet-titlePeopleTweetedUser").replaceAll("&quot;", '"').replace("{fullName}", "(.*)").replace("{tweetText}", "(.*)"))); /*/Xユーザーの(.*)さん: 「(.*)」/*/
                if (!titleInfo || titleInfo.length <= 1) {
                    document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
                } else {
                    document.title =
                        (document.title.startsWith("(") ? document.title.match(/\(\d*\)/) + " " : "") +
                        TUICI18N.get("XtoTwitter-PostToTweet-titlePeopleTweeted")
                            .replaceAll("&quot;", '"')
                            .replace(`{fullName}`, titleInfo[1])
                            .replace("{tweetText}", titleInfo[2])
                            .replace(/(.*)\/ X(」|")/, "$1 / Twitter");
                } /**/
            } else if (document.title.endsWith(" / X")) {
                document.title = document.title.replace(/(.*)\/ X/, "$1/ Twitter");
            }
        }

        TUICObserver.headObserver.observe(titleElement, {
            characterData: true,
            childList: true,
            subtree: true,
            attributes: true,
        });
    },
    data: { fixedDMBox: false },
};
TUICObserver.observer = new MutationObserver(TUICObserver.observerFunction);
