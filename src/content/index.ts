/**
 * Twitter UI Customizer
 * << Twitter を思いのままに。 >>
 */

import { TUICObserver } from "./observer.ts";
import { TUICLibrary, TUICPref } from "./library.ts";
import { TUICI18N } from "./i18n.ts";
import { applySystemCss, addCssElement, applyDataCss, applyCustomIcon } from "./applyCSS.ts";
import { isSafemode, runSafemode } from "./safemode.ts";
import { startTluiObserver } from "@shared/tlui/observer.ts";

(async () => {
    await TUICI18N.fetch();

    await TUICLibrary.waitForElement("#react-root");

    for (const elem of document.querySelectorAll(".TUICOriginalContent")) {
        elem.remove();
    }
    TUICLibrary.getClasses.deleteClasses();
    // String.prototype.escapeToUseHTML = function () {
    //     return TUICLibrary.escapeToUseHTML(this);
    // };
    TUICObserver.titleObserverFunction();

    console.log(
        `%cTwitter UI Customizer${isSafemode ? " (Safe Mode)" : ""}%cby kaonasi_biwa\n\nTwitter を思いのままに。⧸ Language: ${TUICI18N.get("@JapaneseLanguageName")}`,
        `font-family: system-ui, -apple-system, sans-serif, monospace; font-size: 1.2em; font-weight: bold; text-align: center; background: ${isSafemode ? "#5a9e1b" : "#1da1f2"}; color: #ffffff; padding: 0.5em 2em; margin-top: 0.5em; margin-left: 0.5em;`,
        `font-family: system-ui, -apple-system, sans-serif, monospace; margin: 0.5em; color: ${isSafemode ? "#5a9e1b" : "#1da1f2"};`,
    );

    // 旧バージョンからのアップデート
    await TUICPref.update();

    addCssElement();
    applyDataCss();
    applyCustomIcon();
    if (document.querySelector(`#placeholder > svg`)) {
        TUICObserver.functions.twitterIcon(document.querySelector(`#placeholder > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`), document.querySelector(`#placeholder`));
    }

    chrome.runtime.sendMessage({
        type: "update",
        updateType: "openTwitter",
    });

    startTluiObserver();

    (TUICObserver.target = document.querySelector("body")), TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    TUICObserver.observerFunction(null);

    const bodyAttributeObserver = new MutationObserver(applySystemCss);
    bodyAttributeObserver.observe(document.querySelector("body"), {
        childList: false,
        subtree: false,
        attributes: true,
    });

    if (isSafemode) runSafemode();
})();
