import { TUICData } from "./data.js";
import { DOG, TWITTER, X } from "./data/icons.js";
import { TUICLibrary, TUICPref } from "./library.js";
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
    .TUICTwitterIcon_Dog{
        background-image:url('${DOG}');
    }
    .TUICTwitterIcon_Twitter{
        --TUIC-twitter-icon:url('${TWITTER}') !important;
    }
    .TUICTwitterIcon_X{
        --TUIC-twitter-icon:url('${X}') !important;
    }`;
}

export function applyCustomIcon() {
    const twitterHead = document.querySelector("head");
    document.querySelector("#twitter_ui_customizer_cssCustomIcon")?.remove();
    const dataCssElement = document.createElement("style");
    dataCssElement.id = "twitter_ui_customizer_cssCustomIcon";
    twitterHead.appendChild(dataCssElement);
    dataCssElement.textContent = `
    .TUICTwitterIcon_IconImg,
#TUICIcon_IconImg{
    background-image:url('${localStorage.getItem("TUIC_IconImg") ?? ""}');
}`;
}

export function applySystemCss() {
    const backgroundColor = TUICLibrary.backgroundColorCheck();

    const settingsArr = [
        "sidebarSetting.buttonConfigsmallerSidebarContent",
        "otherBoolSetting.roundIcon",
        "invisibleItems.subscribe-profile",
        "invisibleItems.hideBelowDM",
        "tweetDisplaySetting.bottomSpace",
        "sidebarSetting.buttonConfig.sidebarNoneScrollbar",
        "tweetDisplaySetting.noNumberBottomTweetButtons",
        "accountSwitcher.icon",
        "accountSwitcher.nameID",
        "accountSwitcher.moreMenu",
        "profileSetting.tabs.pinnedTab",
    ];
    let settingsOutput = "|";
    for (const elem of settingsArr) {
        if (TUICPref.get(elem)) {
            settingsOutput += elem + "|";
        }
    }
    document.documentElement.setAttribute("TUICSettings", settingsOutput);

    let prefColors = "";
    for (const elem in TUICData.colors) {
        for (const el of ["background", "border", "color"]) {
            if ((TUICData.colors[elem][el] ?? "unknwon") != "unknwon") {
                prefColors += `--twitter-${elem}-${el}:${TUICLibrary.color.getColorFromPref(elem, el)};`;
            }
        }
    }
    /* eslint-disable indent */
    document.querySelector("#twitter_ui_customizer").textContent = `
:root{
    ${prefColors}

    --twitter-TUIC-color: ${TUICData.styleColor[backgroundColor].textColor};

    --TUIC-container-background: ${TUICData.styleColor[backgroundColor].containerBackground};
    --TUIC-container-background2: ${TUICData.styleColor[backgroundColor].containerBackground2};
    --TUIC-color-hover-efect: ${TUICData.styleColor[backgroundColor].colorHover};

    --TUIC-sidebar-hover-color: ${TUICLibrary.backgroundColorCheck() == "light" ? "rgba(15,20,25,0.1)" : "rgba(247,249,249,0.1)"};
    --TUIC-sidebar-active-color: ${TUICLibrary.backgroundColorCheck() == "light" ? "rgba(15,20,25,0.2)" : "rgba(247,249,249,0.2)"};
    --TUIC-sidebar-focus-color: ${TUICLibrary.backgroundColorCheck() == "light" ? "rgb(135,138,140)" : "rgb(251,252,252)"};

    --TUIC-detail-border:${TUICData.styleColor[backgroundColor].detailBorder};

    --TUIC-pinnedTab-background:rgba(${TUICLibrary.backgroundColorClass("0, 0, 0, 0.65", "21, 32, 43, 0.75", "255, 255, 255, 0.85")});
}
`;
    /* eslint-enable */
}

export function applyCustomCss() {
    document.querySelector("#twitter_ui_customizer_css").textContent = localStorage.getItem("TUIC_CSS");
}
