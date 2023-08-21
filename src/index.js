/**
 * Twitter UI Customizer
 * << Twitter を思いのままに。 >>
 */
(async () => {
    console.log("%cTwitter UI Customizer%c\nby kaonasi_biwa with Ablaze", "font-size: 1.2em; font-family: -system-ui, Ubuntu, Roboto, 'Noto Sans JP', sans-serif; font-weight: bold; text-align: center; background: #1da1f2; color: #ffffff; padding: 0.5em 2em;", "margin-top: 0.5em; color: #1da1f2;");

    const { TUICObserver } = await import("./observer.js");
    await import("./data.js");
    const { TUICLibrary } = await import("./library.js");
    await import("./option.js");
    const { addCssElement: applyCss } = await import("./applyCSS.js");

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

    applyCss();
    if (document.querySelector(`#placeholder > svg`)) {
        TUICObserver.functions.twitterIcon(
            document.querySelector(`#placeholder > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`),
            document.querySelector(`#placeholder`)
        );
    }

    await TUICLibrary.fetchI18n();
    console.log(TUICLibrary.getI18n("@JapaneseLanguageName"));
    chrome.runtime.sendMessage({
        type: "update",
        updateType: "openTwitter",
    });

    /*旧バージョンからのアップデート*/
    await TUICLibrary.updatePref.update();
    /*Fin 旧バージョンからのアップデート*/
    (TUICObserver.target = document.querySelector("body")), TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    TUICObserver.observerFunction();

    const bodyAttributeObserver = new MutationObserver(applyCss);
    bodyAttributeObserver.observe(document.querySelector("body"), {
        childList: false,
        subtree: false,
        attributes: true,
    });

    (async function setTitleObserver() {
        await TUICLibrary.waitForElement("title");

        TUICObserver.headObserver = new MutationObserver(TUICObserver.titleObserverFunction);
        TUICObserver.headObserver.observe(document.querySelector("title"), {
            characterData: true,
            childList: true,
            subtree: true,
            attributes: true,
        });
        TUICObserver.titleObserverFunction();
    })();
})();