/**
 * Twitter UI Customizer
 * << Twitter を思いのままに。 >>
 */

import { TUICObserver } from "./observer.ts";
import { TUICLibrary } from "./library.ts";
import { TUICI18N } from "./i18n.ts";
import { applySystemCss, addCssElement, applyDataCss } from "./applyCSS.js";
import { isSafemode, runSafemode } from "./safemode.js";

(async () => {
    await TUICI18N.fetch();
    await TUICLibrary.waitForElement("#react-root");

    for (const elem of document.querySelectorAll(".TUICOriginalContent")) {
        elem.remove();
    }
    TUICLibrary.getClasses.deleteClasses();
    String.prototype.escapeToUseHTML = function () {
        return TUICLibrary.escapeToUseHTML(this);
    };
    TUICObserver.titleObserverFunction();

    console.log(
        `%cTwitter UI Customizer${isSafemode ? " (Safe Mode)" : ""}%cby kaonasi_biwa\n\nTwitter を思いのままに。⧸ Language: ${TUICI18N.get("@JapaneseLanguageName")}`,
        `font-family: system-ui, -apple-system, sans-serif, monospace; font-size: 1.2em; font-weight: bold; text-align: center; background: ${isSafemode ? "#5a9e1b" : "#1da1f2"}; color: #ffffff; padding: 0.5em 2em; margin-top: 0.5em; margin-left: 0.5em;`,
        `font-family: system-ui, -apple-system, sans-serif, monospace; margin: 0.5em; color: ${isSafemode ? "#5a9e1b" : "#1da1f2"};`,
    );

    addCssElement();
    applyDataCss();
    if (document.querySelector(`#placeholder > svg`)) {
        TUICObserver.functions.twitterIcon(document.querySelector(`#placeholder > svg:not(.NOT_TUIC_DISPNONE):not(.TUIC_DISPNONE`), document.querySelector(`#placeholder`));
    }

    chrome.runtime.sendMessage({
        type: "update",
        updateType: "openTwitter",
    });

    // 旧バージョンからのアップデート
    await TUICLibrary.updatePref.update();

    (TUICObserver.target = document.querySelector("body")), TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    TUICObserver.observerFunction();

    const bodyAttributeObserver = new MutationObserver(applySystemCss);
    bodyAttributeObserver.observe(document.querySelector("body"), {
        childList: false,
        subtree: false,
        attributes: true,
    });

    if (isSafemode) runSafemode();
})();
