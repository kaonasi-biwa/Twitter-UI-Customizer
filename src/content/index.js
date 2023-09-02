/**
 * Twitter UI Customizer
 * << Twitter を思いのままに。 >>
 */
(async () => {
    const { TUICObserver } = await import(chrome.runtime.getURL("src/content/observer.js"));
    const { TUICLibrary } = await import(chrome.runtime.getURL("src/content/library.js"));
    const { TUICI18N } = await import(chrome.runtime.getURL("src/content/i18n.js"));
    const { addCssElement } = await import(chrome.runtime.getURL("src/content/applyCSS.js"));
    const { isSafemode, runSafemode } = await import(chrome.runtime.getURL("src/content/safemode.js"));

    await TUICI18N.fetch();
    await TUICLibrary.waitForElement("#react-root");

    String.prototype.escapeToUseHTML = function () {
        return TUICLibrary.escapeToUseHTML(this);
    };
    TUICObserver.titleObserverFunction();

    console.log(
        `%cTwitter UI Customizer${isSafemode ? " (Safe Mode)" : ""}%cby kaonasi_biwa\n\nTwitter を思いのままに。⧸ Language: ${TUICI18N.get("@JapaneseLanguageName")}`,
        `font-family: system-ui, -apple-system, sans-serif, monospace; font-size: 1.2em; font-weight: bold; text-align: center; background: ${isSafemode ? "#5a9e1b" : "#1da1f2"}; color: #ffffff; padding: 0.5em 2em; margin-top: 0.5em; margin-left: 0.5em;`,
        `font-family: system-ui, -apple-system, sans-serif, monospace; margin: 0.5em; color: ${isSafemode ? "#5a9e1b" : "#1da1f2"};`,
    );

    if (document.querySelector("#twitter_ui_customizer_query") == null) {
        const queryElem = document.createElement("meta");
        queryElem.id = "twitter_ui_customizer_query";
        queryElem.setAttribute("query", "");
        document.querySelector("head").appendChild(queryElem);
    } else {
        const queryElem = document.querySelector("#twitter_ui_customizer_query");
        const query = queryElem.getAttribute("query") + "A";

        TUICLibrary.getClasses.query = query;
        queryElem.setAttribute("query", query);
    }

    for (const elem of document.querySelectorAll(".TUICOriginalContent")) {
        elem.remove();
    }

    addCssElement();
    if (document.querySelector(`#placeholder > svg`)) {
        TUICObserver.functions.twitterIcon(document.querySelector(`#placeholder > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`), document.querySelector(`#placeholder`));
    }

    chrome.runtime.sendMessage({
        type: "update",
        updateType: "openTwitter",
    });

    // 旧バージョンからのアップデート
    await TUICLibrary.updatePref.update();

    (TUICObserver.target = document.querySelector("body")), TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    TUICObserver.observerFunction();

    const bodyAttributeObserver = new MutationObserver(addCssElement);
    bodyAttributeObserver.observe(document.querySelector("body"), {
        childList: false,
        subtree: false,
        attributes: true,
    });

    if (isSafemode) runSafemode();
})();
