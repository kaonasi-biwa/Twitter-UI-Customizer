import { TUICData } from "./data.js";
import DOG from "./icons/logo/dog.png?url";
import TWITTER from "./icons/logo/twitter.svg?url";
import X from "./icons/logo/x.svg?url";
//import { DOG, TWITTER, X } from "./data/icons.js";
import { TUICLibrary, TUICPref } from "./library.ts";
import { isSafemode } from "./safemode.js";

export function addCssElement() {
    document.querySelector("#twitter_ui_customizer_css")?.remove();
    document.querySelector("#twitter_ui_customizer")?.remove();

    const twitterHead = document.querySelector("head");

    const systemCssElement = document.createElement("style");
    systemCssElement.id = "twitter_ui_customizer";
    twitterHead.appendChild(systemCssElement);
    applySystemCss();

    if (!isSafemode) {
        const customCssElement = document.createElement("style");
        customCssElement.id = "twitter_ui_customizer_css";
        twitterHead.appendChild(customCssElement);
        applyCustomCss();
    }
}

export function applyDataCss() {
    const twitterHead = document.querySelector("head");
    document.querySelector("#twitter_ui_customizer_cssData")?.remove();
    const dataCssElement = document.createElement("style");
    dataCssElement.id = "twitter_ui_customizer_cssData";
    twitterHead.appendChild(dataCssElement);
    dataCssElement.textContent = `
    .TUICTwitterIcon_Dog {
        background-image:url('${DOG}');
    }
    .TUICTwitterIcon_Twitter {
        --TUIC-twitter-icon:url('${TWITTER}') !important;
    }
    .TUICTwitterIcon_X {
        --TUIC-twitter-icon:url('${X}') !important;
    }`;
}

export function applySystemCss() {
    const backgroundColor = TUICLibrary.backgroundColorCheck();

    let prefColors = "";
    for (const elem in TUICData.colors) {
        for (const el of ["background", "border", "color"]) {
            if ((TUICData.colors[elem][el] ?? "unknwon") != "unknwon") {
                prefColors += `--twitter-${elem}-${el}:${TUICLibrary.color.getColorFromPref(elem, el)};`;
            }
        }
    }
    const r = document.querySelector(":root");
    if (r instanceof HTMLElement) {
        const rs = r.style;
        rs.setProperty("--twitter-TUIC-color", TUICData.styleColor[backgroundColor].textColor);
        rs.setProperty("--TUIC-container-background", TUICData.styleColor[backgroundColor].containerBackground);
        rs.setProperty("--TUIC-container-background2", TUICData.styleColor[backgroundColor].containerBackground2);
        rs.setProperty("--TUIC-color-hover-efect", TUICData.styleColor[backgroundColor].colorHover);
        rs.setProperty("--TUIC-sidebar-hover-color", TUICLibrary.backgroundColorCheck() == "light" ? "rgba(15,20,25,0.1)" : "rgba(247,249,249,0.1)");
        rs.setProperty("--TUIC-sidebar-active-color", TUICLibrary.backgroundColorCheck() == "light" ? "rgba(15,20,25,0.2)" : "rgba(247,249,249,0.2)");
        rs.setProperty("--TUIC-sidebar-focus-color", TUICLibrary.backgroundColorCheck() == "light" ? "rgb(135,138,140)" : "rgb(251,252,252)");
        rs.setProperty("--TUIC-detail-border", TUICData.styleColor[backgroundColor].detailBorder);
    }

    /* eslint-disable indent */
    document.querySelector("#twitter_ui_customizer").textContent = `
:root{
    ${prefColors}
}

.TUICTwitterIcon_IconImg,
#TUICIcon_IconImg{
    background-image:url('${localStorage.getItem("TUIC_IconImg") ?? ""}');
    ${TUICPref.get("otherBoolSetting.roundIcon") ?? TUICData.defaultPref.otherBoolSetting.roundIcon ? "border-radius:9999px !important;" : ""}
}


${
    TUICPref.get("sidebarSetting.buttonConfigsmallerSidebarContent")
        ? `
[role="navigation"] .NOT_TUIC_DISPNONE{
    padding-bottom:0px !important;
    padding-top:0px !important;
}
`
        : ""
}
${
    TUICPref.get("invisibleItems.subscribe-profile")
        ? `
[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]{
    display:none !important;
}
`
        : ""
}
${
    TUICPref.get("invisibleItems.hideBelowDM")
        ? `
[data-testid="DMDrawer"]{
    display:none !important;
}
`
        : ""
}

${
    TUICPref.get("tweetDisplaySetting.bottomSpace")
        ? `
.TUIC_NONE_SPACE_BOTTOM_TWEET{
    margin-top:0px !important;
}
`
        : ""
}
${
    TUICPref.get("sidebarSetting.buttonConfig.sidebarNoneScrollbar")
        ? `
header > div > div > div > div.r-1rnoaur{
    overflow:clip;
}
`
        : ""
}

${
    TUICPref.get("tweetDisplaySetting.noNumberBottomTweetButtons")
        ? `
.TUICItIsBigArticle [data-testid="app-text-transition-container"]{
    display:none !important;
}
`
        : ""
}

${
    TUICPref.get("accountSwitcher.icon")
        ? `
[data-testid="SideNav_AccountSwitcher_Button"] > div:first-child {
    display: none;
}
`
        : ""
}

${
    TUICPref.get("accountSwitcher.nameID")
        ? `
[data-testid="SideNav_AccountSwitcher_Button"] > div:first-child + div {
    display: none;
}

`
        : ""
}

${
    TUICPref.get("accountSwitcher.moreMenu")
        ? `
[data-testid="SideNav_AccountSwitcher_Button"] > div:first-child + div + div {
    display: none;
}

`
        : ""
}

${
    TUICPref.get("profileSetting.tabs.pinnedTab")
        ? `
[data-testid="primaryColumn"] nav[role="navigation"] {
    position: sticky;
    top: 53px;
    z-index: 1;
    backdrop-filter: blur(12px);
    background-color:rgba(${TUICLibrary.backgroundColorClass("0, 0, 0, 0.65", "21, 32, 43, 0.75", "255, 255, 255, 0.85")});
}
`
        : ""
}
`;
    /* eslint-enable */
}

export function applyCustomCss() {
    document.querySelector("#twitter_ui_customizer_css").textContent = localStorage.getItem("TUIC_CSS");
}
