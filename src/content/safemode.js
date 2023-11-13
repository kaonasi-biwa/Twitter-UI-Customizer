import { TUICI18N } from "./i18n.ts";
import css from "./styles/safemode.pcss";

export const isSafemode = location.pathname === "/tuic/safemode";

export function runSafemode() {
    import(chrome.runtime.getURL("safemode.js"));
    document.querySelector("#TUIC_safemode")?.remove();
    document.querySelector(".twitter_ui_customizer_css")?.remove();
    document.querySelector("#react-root").style = "display: none !important;";

    // const style = document.createElement("style");
    // style.textContent = css;
    // document.head.appendChild(style);

    // const safemode = document.createElement("iframe");
    // safemode.src = chrome.runtime.getURL("safemode.html");
    // safemode.onload = () => {

    // };
    const entry = document.createElement("div");
    entry.id = "TUICOptionSafemodeEntry";
    document.body.appendChild(entry);

    // const script = document.createElement("script");
    // //TODO: Script 埋め込み import(chrome.runtime.getURL("safemode.js"));
    // const safemode = document.createElement("tuic-option-safemode-entry");
    // //safemode.id = "TUICOptionSafemodeMain";
    //document.body.appendChild(safemode);
}
