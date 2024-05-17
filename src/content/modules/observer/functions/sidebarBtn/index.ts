import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { moreMenuContent } from "./moreMenuContent";
import { TUICI18N } from "@modules/i18n";
import { SIDEBAR_BUTTON_ICON } from "@content/icons";
let sidebarButtonsCount = -1;
export const SidebarButtonSelectors = {
    home: `[href="/home"]`,
    explore: `[href="/explore"]`,
    communities: `[href$="/communities"],#TUICSidebar_communities`,
    notifications: `[href*="/notifications"]`,
    messages: `[href^="/messages"]`,
    bookmarks: `[href="/i/bookmarks"],#TUICSidebar_bookmarks`,
    profile: `[data-testid="AppTabBar_Profile_Link"]`,
    moremenu: `[data-testid="AppTabBar_More_Menu"]`,
    topics: `#TUICSidebar_topics`,
    lists: `#TUICSidebar_lists,[href$="/lists"]`,
    drafts: "#TUICSidebar_drafts",
    connect: "#TUICSidebar_connect",
    communitynotes: `[href="/i/communitynotes"]`,
    "verified-choose": `[href="/i/verified-choose"],[href="/i/verified-orgs-signup"],[href="/i/premium_sign_up"]`,
    display: "#TUICSidebar_display",
    muteAndBlock: "#TUICSidebar_muteAndBlock",
    settings: "#TUICSidebar_settings",
    premiumTierSwitch: `[href="/i/premium_tier_switch"]`,
    jobs: "#TUICSidebar_jobs",
    spaces: "#TUICSidebar_spaces",
    grok: `[href="/i/grok"]`,
};

const _data = {
    selectors: SidebarButtonSelectors,
    html: {
        __base: (id: string, svg: string): string => {
            return `
            <a id="TUICSidebar_${id}" href="${TUICLibrary.getPrimitiveOrFunction(
                _data.tuicButtonGoToUrl[id],
            )}" role="link" tabindex="0" class="css-4rbku5 css-18t94o4 css-175oi2r r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-oyd9sg r-13qz1uu TUICOriginalContent TUICSidebarButton ${location.pathname.endsWith("/topics") ? "TUICSidebarSelected" : ""}">
                <div class="css-175oi2r r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-o7ynqc r-6416eg ${TUICLibrary.fontSizeClass("r-q81ovl", "r-q81ovl", "r-xyw6el", "r-kq9wsh", "r-1slz7xr")}">
                    <div class="css-175oi2r">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}">
                            <g>${svg}</g>
                        </svg>
                    </div>
                    <div dir="ltr" class="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc ${TUICLibrary.fontSizeClass(
                        "r-1i10wst r-hbpseb r-16dba41 r-b8s2zf r-1nbxd40 r-fv9tdh",
                        "r-1b6yd1w r-7ptqe7 r-16dba41 r-1b4jfhh r-egpt5t r-1tfrt9a",
                        "r-adyw6z r-135wba7 r-dlybji r-nazi8o",
                        "r-evnaw r-eaezby r-16dba41 r-1fqalh9 r-k1rd3f r-i0ley5 r-19o66xi",
                        "r-1x35g6 r-1h1c4di r-16dba41 r-ikuq2u r-1ck5maq",
                    )} r-bcqeeo r-qvutc0 ${TUICLibrary.backgroundColorCheck() == "light" ? "r-18jsvk2" : "r-vlxjld r-1nao33i"}" style="text-overflow: unset;" >
                        <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0" style="text-overflow: unset;">${TUICI18N.get("sidebarButtons-" + id)}</span>
                    </div>
                </div>
            </a>`;
        },
        topics: (): string => {
            return _data.html.__base("topics", `<path d="${SIDEBAR_BUTTON_ICON.topics.unselected}"></path>`);
        },
        /*"lists": () => {
            return _data.html.__base("lists",`<path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>`)
        },*/
        /*"communities": () => {
            return _data.html.__base("communities",`<path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>`)
        },*/
        drafts: (): string => {
            return _data.html.__base("drafts", `<path d="${SIDEBAR_BUTTON_ICON.drafts.unselected}">`);
        },
        connect: (): string => {
            return _data.html.__base("connect", `<path d="${SIDEBAR_BUTTON_ICON.connect.unselected}"></path>`);
        },
        display: (): string => {
            return _data.html.__base("display", `<path d="${SIDEBAR_BUTTON_ICON.display.unselected}"></path><path d="M14 12c0-1.1-.9-2-2-2-1.11 0-2 .9-2 2v2h2c1.1 0 2-.9 2-2z" class="r-1cvl2hr"></path>`);
        },
        muteAndBlock: (): string => {
            return _data.html.__base("muteAndBlock", `<path d="${SIDEBAR_BUTTON_ICON.muteAndBlock.unselected}"></path>`);
        },
        bookmarks: (): string => {
            return _data.html.__base("bookmarks", `<path d="${SIDEBAR_BUTTON_ICON.bookmarks.unselected}"></path>`);
        },
        settings: (): string => {
            return _data.html.__base("settings", `<path d="${SIDEBAR_BUTTON_ICON.settings.unselected}"></path>`);
        },
        jobs: (): string => {
            return _data.html.__base("jobs", `<path d="${SIDEBAR_BUTTON_ICON.jobs.unselected}"></path>`);
        },
        spaces: (): string => {
            return _data.html.__base("spaces", `<path d="${SIDEBAR_BUTTON_ICON.spaces.unselected}"></path>`);
        },
    },
    buttonClickInMoreMenu: async (selector: string) => {
        (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`))[0].click();
        const foundElem = (await TUICLibrary.waitForElement<HTMLAnchorElement>(`:is([role="group"],[data-testid="Dropdown"]) ${selector}`))[0];
        foundElem.click();
        if (!foundElem) {
            (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`))[0].click();
            return false;
        }
        return true;
    },
    buttonFunctions: {
        topics: async (e: Event) => {
            e?.preventDefault?.();
            if (!location.pathname.endsWith("/topics")) {
                const moreMenu = document.querySelector<HTMLDivElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                setTimeout(async () => {
                    //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings"]`))[0].click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings/privacy_and_safety"]`))[0].click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings/content_you_see"]`))[0].click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`main [href$="/topics"]`))[0].click();
                }, 150);
            }
        },
        lists: (e: Event) => {
            e?.preventDefault?.();
            _data.buttonClickInMoreMenu(`[href$="/lists"]`);
        },
        /*"communities": function (e:Event) {
            _data.buttonClickInMoreMenu( `[href$="/communities"]`)
        },*/
        drafts: async (e: Event) => {
            e?.preventDefault?.();
            //_data.buttonClickInMoreMenu( `[href="/compose/tweet/unsent/drafts"]`);
            document.querySelector<HTMLElement>(`[href="/compose/tweet"]`).click();
            (await TUICLibrary.waitForElement<HTMLButtonElement>(`[data-testid="unsentButton"]`))[0].click();
        },
        connect: (e: Event) => {
            e?.preventDefault?.();
            _data.buttonClickInMoreMenu(`[href="/i/connect_people"]`);
        },
        display: async (e: Event) => {
            e?.preventDefault?.();
            /*if (_data.buttonClickInMoreMenu( `:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`)) {
                await TUICLibrary.waitAndClickElement(`[href="/i/display"]`);
            }*/
            if (!location.pathname.endsWith("/settings/display")) {
                const moreMenu = document.querySelector<HTMLElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                setTimeout(async () => {
                    //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings"]`))[0].click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings/accessibility_display_and_languages"]`))[0].click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings/display"]`))[0].click();
                }, 150);
            }
        },
        muteAndBlock: async (e: Event) => {
            e?.preventDefault?.();
            if (!location.pathname.endsWith("/settings/privacy_and_safety")) {
                const moreMenu = document.querySelector<HTMLElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                setTimeout(async () => {
                    //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings"]`))[0].click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings/privacy_and_safety"]`))[0].click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings/mute_and_block"]`))[0].click();
                }, 150);
            }
        },
        bookmarks: (e: Event) => {
            e?.preventDefault?.();
            _data.buttonClickInMoreMenu(`[href="/i/bookmarks"]`);
        },
        settings: (e: Event) => {
            e?.preventDefault?.();
            if (!location.pathname.includes("/settings") || location.pathname.includes("/settings/display")) {
                const moreMenu = document.querySelector<HTMLDivElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                setTimeout(async () => {
                    //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                    (await TUICLibrary.waitForElement<HTMLAnchorElement>(`[href="/settings"]`))[0].click();
                }, 150);
            }
        },
        jobs: (e: Event) => {
            e?.preventDefault?.();
            _data.buttonClickInMoreMenu(`[href="/jobs"]`);
        },
        spaces: (e: Event) => {
            e?.preventDefault?.();
            _data.buttonClickInMoreMenu(`[href="/i/spaces/start"]`);
        },
    },
    tuicButtonGoToUrl: {
        __setURL: (id, selector, setURLWay: (arg0: HTMLElement) => string) => {
            const elem = document.querySelector(selector);
            if (elem) {
                return setURLWay(elem);
            } else {
                _data.tuicButtonGoToUrl.__setURLWait(id, selector, setURLWay);
                return "";
            }
        },
        __setURLWait: async (id: string, selector: string, setURLWay: (arg0: HTMLElement) => string) => {
            await TUICLibrary.waitForElement(selector);
            const elem = document.querySelector<HTMLLinkElement>(`#TUICSidebar_${id}`);
            if (elem) {
                elem.href = setURLWay(document.querySelector(selector));
            }
        },
        topics: () => {
            return _data.tuicButtonGoToUrl.__setURL("topics", `[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`, (elem) => {
                return `https://twitter.com/${elem.getAttribute("data-testid").replace(`UserAvatar-Container-`, "")}/topics`;
            });
        },
        lists: () => {
            return _data.tuicButtonGoToUrl.__setURL("lists", `[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`, (elem) => {
                return `https://twitter.com/${elem.getAttribute("data-testid").replace(`UserAvatar-Container-`, "")}/lists`;
            });
        },
        communities: () => {
            return _data.tuicButtonGoToUrl.__setURL("communities", `[data-testid="SideNav_AccountSwitcher_Button"] [data-testid^="UserAvatar-Container-"]`, (elem) => {
                return `https://twitter.com/${elem.getAttribute("data-testid").replace(`UserAvatar-Container-`, "")}/communities`;
            });
        },
        connect: "https://twitter.com/i/connect_people",
        drafts: "https://twitter.com/compose/tweet/unsent/drafts",
        display: "https://twitter.com/i/display",
        muteAndBlock: "https://twitter.com/settings/mute_and_block",
        bookmarks: "https://twitter.com/i/bookmarks",
        settings: "https://twitter.com/settings/",
        jobs: "https://twitter.com/jobs/",
        spaces: "https://twitter.com/i/spaces/start/",
    },
};

export function sidebarButtons() {
    const bannerRoot = document.querySelector<HTMLElement>(`[role=banner] > ${"div >".repeat(5)} nav`);
    if (bannerRoot) {
        if (bannerRoot.querySelector(`a:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE)`)) {
            sidebarButtonProcess(bannerRoot);
        } else if (sidebarButtonsCount != bannerRoot.querySelectorAll(`a:not(.NOT_TUIC_DISPNONE)`).length) {
            let changeElem = false;
            for (const selector of TUICPref.getPref("sidebarButtons")) {
                const elems = bannerRoot.querySelectorAll(_data.selectors[selector]);
                if (elems.length > 1) {
                    const elems = [...bannerRoot.querySelectorAll(_data.selectors[selector])];
                    for (const elem of elems) {
                        if (elem.id.includes("TUIC")) {
                            elem.remove();
                        }
                    }
                    changeElem = true;
                } else if (elems.length == 0 && selector in _data.html) {
                    changeElem = true;
                }
            }
            if (changeElem) sidebarButtonProcess(bannerRoot);
        }
    }
}

function sidebarButtonProcess(bannerRoot: HTMLElement) {
    if (!window.location.pathname.startsWith("/i/communitynotes") && !window.location.pathname.startsWith("/i/birdwatch")) {
        sidebarButtonsCount = 0;
        for (const i of TUICPref.getPref("sidebarButtons")) {
            let moveElem = bannerRoot.querySelector(_data.selectors[i]);
            if (moveElem != null) {
                bannerRoot.appendChild(moveElem);
                moveElem.classList.add("NOT_TUIC_DISPNONE");
                if (i == "moremenu") {
                    moveElem.onclick = moreMenuContent;
                    moveElem.addEventListener("keydown", (e: KeyboardEvent) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            moreMenuContent();
                        }
                    });
                }
                sidebarButtonsCount += 1;
            } else if (i in _data.html) {
                moveElem = TUICLibrary.parseHtml(_data.html[i]()).item(0);
                moveElem.classList.add("NOT_TUIC_DISPNONE");
                moveElem.onclick = _data.buttonFunctions[i];
                moveElem.addEventListener("keydown", (e: KeyboardEvent) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        _data.buttonFunctions[i]();
                    }
                });
                bannerRoot.appendChild(moveElem);
                sidebarButtonsCount += 1;
            }
        }
        for (const i of bannerRoot.querySelectorAll(`:is(a,div[role="button"],button,[type="button"]):not(.NOT_TUIC_DISPNONE)`)) {
            i.hide();
        }
    }
}
