const TUICObserver = {
    observerFunction: function () {
        TUICObserver.observer.disconnect();
        const timeout = window.setTimeout(function () {
            TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
        }, 10000);

        if (document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`) != null) {
            if (!TUICObserver.iconObserver) {
                TUICObserver.iconObserver = new MutationObserver(() => {
                    if (document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`) != null) {
                        TUICObserver.iconObserver.disconnect();
                        TUICObserver.functions.twitterIcon(document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`), document.querySelector(`header [role="heading"]`));
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
            TUICObserver.functions.twitterIcon(document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`), document.querySelector(`header [role="heading"]`));
        }
        if (document.querySelector(`header h1 a > div > svg`) == null) {
            TUICObserver.iconObserver = "";
        }
        if (document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`) != null) {
            TUICObserver.functions.twitterIcon(
                document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`),
                document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] [role="heading"]`),
            );
        }
        if (document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`) != null) {
            TUICObserver.functions.twitterIcon(
                document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`),
                document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`).parentElement,
            );
        }

        if (document.querySelector(`.TUICSidebarButton .r-mbgqwd`) != null) document.querySelector(`.TUICSidebarButton .r-mbgqwd`)?.classList?.remove("r-mbgqwd");

        TUICObserver.functions.sidebarButtons();

        TUICObserver.functions.buttonUnderTweet();

        TUICObserver.functions.osusumeUser();
        TUICObserver.functions.twitterProPromotionBtn();

        TUICObserver.functions.clientInfo();

        TUICObserver.functions.updateStyles();

        TUICRunFirst();
        if (window.location.pathname == "/tuic/safemode") {
        } else if (document.querySelector("#unsent-tweet-background") == null && document.querySelector('[role="slider"]:not(article *)') != null && window.location.pathname == "/settings/display") {
            TUICOptionHTML.displaySetting(document.querySelector('[role="slider"]:not(article *)').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
        } else if (document.querySelector("#unsent-tweet-background") == null && document.querySelector('[role="slider"]:not(article *)') != null && window.location.pathname == "/i/display") {
            TUICOptionHTML.displaySetting(document.querySelector('[role="slider"]:not(article *)').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
        }

        window.clearTimeout(timeout);
        TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    },
    config: {
        childList: true,
        subtree: true,
    },
    functions: {
        twitterIcon: function (elem, base) {
            switch (TUICPref.twitterIcon /* eslint-disable */) {
                case "invisible":
                    if (TUICPref.otherBoolSetting["faviconSet"]) {
                        document.querySelector(`[rel="shortcut icon"]`).href = TUICData.emptySVG;
                    }
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE"));
                    base.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                    break;
                case "twitter":
                    if (TUICPref.otherBoolSetting["faviconSet"]) {
                        document.querySelector(`[rel="shortcut icon"]`).href = TUICData.twitterIconSVG.replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color")}"`);
                    }
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE"));
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter"));
                    break;
                case "dog":
                    if (TUICPref.otherBoolSetting["faviconSet"]) {
                        document.querySelector(`[rel="shortcut icon"]`).href = TUICData.dogIconBase64;
                    }
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE"));
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog"));
                    break;
                case "custom":
                    if (TUICPref.otherBoolSetting["faviconSet"]) {
                        const imageURL = localStorage.getItem(TUICPref.otherBoolSetting["roundIcon"] ? "TUIC_IconImg_Favicon" : "TUIC_IconImg");
                        document.querySelector(`[rel="shortcut icon"]`).href = imageURL ?? TUICData.emptySVG;
                    }
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE"));
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg"));
                    break;
                case "twitterIcon-X":
                    if (TUICPref.otherBoolSetting["faviconSet"]) {
                        document.querySelector(`[rel="shortcut icon"]`).href = TUICData.twitterIconXSVG.replace(`xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"`, `xmlns:xlink="http:%2F%2Fwww.w3.org%2F1999%2Fxlink"%20fill="${TUICLibrary.color.getColorFromPref("twitterIconFavicon", "color")}"`);
                    }
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE"));
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_X"));
                    break;
                default:
                    document.querySelector(`[rel="shortcut icon"]`).href = "//abs.twimg.com/favicons/twitter.3.ico";
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_NOTSVGDISPNONE"));
                    break;
            } /* eslint-enable */
            if (!TUICPref.otherBoolSetting["faviconSet"]) {
                document.querySelector(`[rel="shortcut icon"]`).href = "//abs.twimg.com/favicons/twitter.3.ico";
            }
        },
        sidebarButtons: function () {
            const bannerRoot = document.querySelector(`[role=banner] > div > div > div > div > div > nav`);
            if (bannerRoot != null && bannerRoot.querySelector(`a:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")})`) != null) {
                if (!window.location.pathname.startsWith("/i/communitynotes")) {
                    for (const i of TUICPref.sidebarButtons) {
                        let moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i]);
                        if (moveElem != null) {
                            bannerRoot.appendChild(moveElem);
                            moveElem.classList.add("NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                        } else if (i in TUICData.sidebarButtons.html) {
                            moveElem = TUICLibrary.HTMLParse(TUICData.sidebarButtons.html[i]());
                            moveElem.classList.add("NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
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
                    if (!TUICPref.sidebarButtons.includes(i) && !window.location.pathname.startsWith("/i/communitynotes")) {
                        const moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i]);
                        if (moveElem != null) moveElem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                    }
                }
            }
        },
        buttonUnderTweet: function () {
            const articles = document.querySelectorAll(`article:not([TUIC_ARTICLE="${TUICLibrary.getClasses.getClass("TUICDidArticle")}"])`);
            if (articles.length != 0) {
                articles.forEach(function (elem) {
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
                        if (TUICPref.otherBoolSetting.bottomScroll ?? TUICData.defaultPref.otherBoolSetting.bottomScroll) bar_base.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUICScrollBottom"));
                        if (TUICPref.otherBoolSetting.bottomSpace ?? TUICData.defaultPref.otherBoolSetting.bottomSpace) {
                            const space = elem.querySelector(`[aria-labelledby]`);
                            if (space != null && space.children[0].childElementCount == 0) {
                                space.classList.add(TUICLibrary.getClasses.getClass("TUIC_NONE_SPACE_BOTTOM_TWEET"));
                            }
                        }
                        if (TUICPref.timeline["hideOhterRTTL"] && elem.querySelector(`a[href^="/"] > [data-testid="socialContext"]`) != null) {
                            elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
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
                        const cannotRT = bar_item["retweet-button"].querySelector(`.r-icoktb`) != null;
                        if (!lockedAccount) {
                            TUICData.visibleButtons.buttonElement._handleEvent(bar_item["retweet-button"], TUICData.visibleButtons.buttonFunction["retweet-button"]);
                        }
                        let lastButton;
                        for (const i of TUICPref.visibleButtons) {
                            let div = -1;
                            if (i in bar_item) {
                                div = bar_item[i];
                            } else if (i in TUICData.visibleButtons.buttonElement) {
                                div = TUICData.visibleButtons.buttonElement[i]({ elements: { buttonBarBase: bar_base, article: elem }, option: { isLockedAccount: lockedAccount, cannotRT: cannotRT, isMe: isMe } } /*bar_base, elem, lockedAccount*/);
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
                            if (!TUICPref.visibleButtons.includes(TUICData.settings.visibleButtons.all[i]) && TUICData.settings.visibleButtons.all[i] in bar_item) {
                                bar_item[TUICData.settings.visibleButtons.all[i]].classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                            }
                        }
                    }
                    elem.setAttribute("TUIC_ARTICLE", TUICLibrary.getClasses.getClass("TUICDidArticle"));
                });
            }
        },
        osusumeUser: function () {
            if (TUICPref.timeline["osusume-user-timeline"] && location.search.indexOf("f=user") == -1 && !location.href.includes("/settings/")) {
                const cells = document.querySelectorAll(
                    `div[data-testid="cellInnerDiv"]:not(.${TUICLibrary.getClasses.getClass("TUICDidArticle")}):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *)`,
                );
                for (const elem of cells) {
                    if (
                        elem.querySelector(`[data-testid="UserCell"]`) != null &&
                        elem.previousElementSibling != null &&
                        elem.querySelector(`[aria-live="polite"]`) == null &&
                        (elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) != null || elem.previousElementSibling.querySelector(`h2`) != null)
                    ) {
                        elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                        if (elem.previousElementSibling.querySelector(`h2`) != null) {
                            elem.previousElementSibling.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                        }
                    }
                    if (elem.querySelector(`a[href*="&f=user"],a[href^="/i/connect_people?"]`) && elem.querySelector(`[aria-live="polite"]`) == null) {
                        elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                    }
                }
            }
            if (window.location.pathname.includes("/status/") && !isNaN(new URL(location.href).pathname.split("/")[3]) && document.querySelector(`[data-testid="primaryColumn"]`) != null) {
                let cells = document.querySelectorAll(`:is([data-testid="primaryColumn"],[data-testid="mask"]+div [aria-labelledby^="accessible-list"]) [data-testid="cellInnerDiv"]:not([style*="opacity: 0.01"]):not(.${TUICLibrary.getClasses.getClass("TUIC_DISCOVERHEADER")})`);
                for (const elem of cells) {
                    if (elem.querySelector("article") == null && elem.querySelector("h2") != null && (elem.children?.[0]?.children?.[0]?.children?.[0]?.children?.[1]?.getAttribute("style") ?? "").includes("-webkit-line-clamp: 2;")) {
                        elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISCOVERHEADER"));
                        if (TUICPref["timeline-discoverMore"] == "discoverMore_invisible") {
                            elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                            elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "none");
                            if (elem.getAttribute("TUICDiscoberMore") != null) {
                                elem.removeAttribute("TUICDiscoberMore");
                            }
                        } else if (TUICPref["timeline-discoverMore"] == "discoverMore_detailOpen") {
                            elem.setAttribute("TUICDiscoberMore", "true");
                            elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", "");
                            elem.onclick = (event) => {
                                const nowType = elem.getAttribute("TUICDiscoberMore");
                                elem.setAttribute("TUICDiscoberMore", nowType == "true" ? "false" : "true");
                                elem.parentElement.style.setProperty("--TUIC-DISCOVERMORE", nowType == "true" ? "none" : "");
                                event.stopPropagation();
                                event.stopImmediatePropagation();
                            };
                        } else if (TUICPref["timeline-discoverMore"] == "discoverMore_detailClose") {
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
                            elem2.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISCOVERMORE"));
                            elem2 = elem2.nextElementSibling;
                        }
                    }
                }
            }
            if (TUICPref.timeline["accountStart"] && location.search.indexOf("f=user") == -1 && !location.href.includes("/settings/")) {
                const cells = document.querySelectorAll(
                    `div[data-testid="cellInnerDiv"]:not(.${TUICLibrary.getClasses.getClass("TUICDidArticle")}):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *) [aria-live="polite"]`,
                );
                for (const elem of cells) {
                    elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                    elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                }
            }
            if (TUICPref.rightSidebar["verified"] && document.querySelector(`*:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) > [role="complementary"] [href="/i/verified-choose"]`) != null) {
                document.querySelector(`*:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) > [role="complementary"] [href="/i/verified-choose"]`).parentElement.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
            }
            if (TUICPref.rightSidebar["trend"] && document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="trend"]`) != null) {
                document
                    .querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="trend"]`)
                    .parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
            }
            if (
                TUICPref.rightSidebar["osusumeUser"] &&
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="UserCell"]`) != null &&
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="UserCell"] [dir="auto"] > span`) == null
            ) {
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="UserCell"]`).parentElement.parentElement.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
            }

            if (
                TUICPref.rightSidebar["relevantPeople"] &&
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="UserCell"]`) != null &&
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="UserCell"] [dir="auto"] > span`) != null
            ) {
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="UserCell"]`).parentElement.parentElement.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
            }
            if (TUICPref.rightSidebar["links"] && document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) > nav`) != null) {
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) > nav`).parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
            }
            if (TUICPref.rightSidebar["searchBox"] && document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [role="search"]`) != null) {
                document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [role="search"]`).parentElement.parentElement.parentElement.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
            }
            if (TUICPref.rightSidebar["space"] && document.querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="pill-contents-container"]`) != null) {
                document
                    .querySelector(`[data-testid="sidebarColumn"] *:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) [data-testid="pill-contents-container"]`)
                    .parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
            }
            if (TUICPref.invisibleItems["subscribe-tweets"] && window.location.pathname.includes("/status/") && !isNaN(new URL(location.href).pathname.split("/")[3]) && document.querySelector(`*:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) > [data-testid$="-subscribe"]`) != null) {
                document.querySelector(`[data-testid$="-subscribe"]`).parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
            }
            if (TUICPref.invisibleItems["subscribe-profile"] && document.querySelector(`[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")})`) != null) {
                document.querySelector(`[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")})`).classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
            }

            if (TUICPref.XToTwitter["PostToTweet"]) {
                let tweetElem = document.querySelector(`[data-testid="SideNav_NewTweet_Button"] > div > span > div > div > span > span:not(.${TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE")})`);
                if (tweetElem != null) {
                    tweetElem.textContent = TUICLibrary.getI18n("XtoTwitter-PostToTweet-tweetButton");
                    tweetElem.classList.add(TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE"));
                }
                tweetElem = document.querySelectorAll(`[data-testid="tweetButtonInline"] > div > span > span:not(.${TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE")})`);
                if (tweetElem.length != 0) {
                    for (const elem of tweetElem) {
                        if (!window.location.pathname.includes("/status/")) {
                            elem.textContent = TUICLibrary.getI18n("XtoTwitter-PostToTweet-tweetButton");
                            elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE"));
                        }
                    }
                }
                tweetElem = document.querySelectorAll(`[data-testid="tweetButton"] > div > span > span`);
                if (tweetElem.length != 0) {
                    for (const elem of tweetElem) {
                        if (document.querySelector(`[role="dialog"] article`) == null) {
                            if (document.querySelectorAll(`[role="dialog"] [data-testid*="UserAvatar-Container-"]`).length == 1) {
                                elem.textContent = TUICLibrary.getI18n("XtoTwitter-PostToTweet-tweetButton");
                            } else {
                                elem.textContent = TUICLibrary.getI18n("XtoTwitter-PostToTweet-tweetAllButton");
                            }
                        } else if (document.querySelector(`[role="dialog"] article+div [role="button"]`) == null && document.querySelectorAll(`[role="dialog"] [data-testid*="UserAvatar-Container-"]`).length == 2) {
                            elem.textContent = TUICLibrary.getI18n("XtoTwitter-PostToTweet-tweetButton");
                        }
                    }
                }
                tweetElem = document.querySelectorAll(`[role="dialog"] .public-DraftEditorPlaceholder-inner:not(.${TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE")})`);
                if (tweetElem.length != 0) {
                    for (const elem of tweetElem) {
                        if (document.querySelector(`[role="dialog"] article`) != null) {
                            if (document.querySelector(`[role="dialog"] article+div [role="button"]`) != null) {
                                elem.textContent = TUICLibrary.getI18n("XtoTwitter-PostToTweet-placeholder-reply");
                            } else {
                                elem.textContent = TUICLibrary.getI18n("XtoTwitter-PostToTweet-placeholder-addTweet");
                            }
                        }
                        elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE"));
                    }
                }
                tweetElem = document.querySelectorAll(`.public-DraftEditorPlaceholder-inner:not(.${TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE")}):not([role="dialog"] *)`);
                if (tweetElem.length != 0 && window.location.pathname.includes("/status/")) {
                    for (const elem of tweetElem) {
                        elem.textContent = TUICLibrary.getI18n("XtoTwitter-PostToTweet-placeholder-reply");
                        elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE"));
                    }
                }
                tweetElem = document.querySelectorAll(`[data-testid="pillLabel"] > span > span > span:not(.${TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE")})`);
                if (tweetElem.length != 0) {
                    for (const elem of tweetElem) {
                        elem.textContent = TUICLibrary.getI18n("XtoTwitter-PostToTweet-tweeted");
                        elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_TWEETREPLACE"));
                    }
                }
            }
        },
        twitterProPromotionBtn: function () {
            if (TUICPref.invisibleItems["twitter-pro-promotion-btn"] !== undefined) {
                document.querySelectorAll('a[href$="quick_promote_web/intro"]').forEach((e) => {
                    if (TUICPref.invisibleItems["twitter-pro-promotion-btn"]) {
                        e.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                    } else {
                        e.classList.remove(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                    }
                });
            }

            if (TUICPref.invisibleItems["profileHighlights"]) {
                const tabs = document.querySelectorAll(`:not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}) > [role="tab"][href$="/highlights"]`);
                for (const elem of tabs) {
                    elem.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                }
            }
        },
        clientInfo: function () {
            if (document.getElementById("client-info") == null && TUICPref.clientInfo.clientInfoVisible && !isNaN(new URL(location.href).pathname.split("/")[3]) && document.getElementsByClassName("css-1dbjc4n r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2").length >= 1) {
                TUICObserver.functions.clientInfoVisible();
            } else if (document.getElementById("client-info") != null && !TUICPref.clientInfo.clientInfoVisible) {
                document.getElementById("client-info").remove();
            }
        },
        clientInfoVisible: async function () {
            const client = document.createElement("a");
            client.style.marginLeft = "4px";
            client.id = "client-info";
            client.classList.add("css-4rbku5", "css-18t94o4", "css-901oao", "css-16my406", "r-1loqt21", "r-xoduu5", "r-1q142lx", "r-1w6e6rj", "r-1tl8opc", "r-9aw3ui", "r-bcqeeo", "r-3s2u2q", "r-qvutc0");
            document.querySelector(".css-1dbjc4n.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2").children[0].appendChild(client);
            chrome.runtime.sendMessage(
                {
                    type: "clientInfo",
                    endpoint: "https://mico.re/api/getclient.php?id=" + new URL(location.href).pathname.split("/")[3],
                },
                (response) => {
                    const json = response;
                    const cliantInfoElem = document.querySelector("#client-info");
                    if (json.source ?? "unknwon" != "unknwon") {
                        cliantInfoElem.textContent = json.source.replace("</a>", "").split(">")[1];
                    } else {
                        cliantInfoElem.textContent = TUICLibrary.getI18n("clientInfo-cannotGetInfo");
                    }
                },
            );
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
    titleObserverFunction: () => {
        if (TUICPref.XToTwitter["XToTwitter"]) {
            if (document.title.endsWith(" / X")) {
                TUICObserver.headObserver.disconnect();
                document.title = document.title.replace(" / X", " / Twitter");
                TUICObserver.headObserver.observe(document.querySelector("title"), {
                    characterData: true,
                    childList: true,
                    subtree: true,
                    attributes: true,
                });
            } else if (document.title == "X") {
                TUICObserver.headObserver.disconnect();
                document.title = document.title = "Twitter";
                TUICObserver.headObserver.observe(document.querySelector("title"), {
                    characterData: true,
                    childList: true,
                    subtree: true,
                    attributes: true,
                });
            }
        }
    },
};
TUICObserver.observer = new MutationObserver(TUICObserver.observerFunction);
