/**
 * Twitter UI Customizer
 * << Twitter を思いのままに。 >>
 */
(async () => {
    const { TUICObserver } = await import("./observer.js");
    const { TUICLibrary } = await import("./library.js");
    const { TUICI18N } = await import("./i18n.js");
    const { addCssElement } = await import("./applyCSS.js");

    await TUICI18N.fetch();

    console.log(`%cTwitter UI Customizer%c\nby kaonasi_biwa with Ablaze\n\nLanguage: ${TUICI18N.get("@JapaneseLanguageName")}`, "font-size: 1.2em; font-family: -system-ui, Ubuntu, Roboto, 'Noto Sans JP', sans-serif; font-weight: bold; text-align: center; background: #1da1f2; color: #ffffff; padding: 0.5em 2em;", "margin-top: 0.5em; color: #1da1f2;");

    await TUICLibrary.waitForElement("#react-root");

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
        console.log(document.querySelector(`#placeholder > svg`));
        TUICObserver.functions.twitterIcon(
            document.querySelector(`#placeholder > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`),
            document.querySelector(`#placeholder`)
        );
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
})();