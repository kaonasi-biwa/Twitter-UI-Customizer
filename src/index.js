//ここから実際に動かしてゆく
/* eslint-disable */
let TUICPref = JSON.parse(localStorage.getItem("TUIC") ?? TUICLibrary.defaultPref.getString());
/* eslint-enable */
let TUICCount = 0;
function replaceRunningIcon() {
    if (document.getElementById("react-root")) {
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

        TUICRunFirst();
        if (document.querySelector(`#placeholder > svg`)) {
            TUICObserver.functions.twitterIcon(
                document.querySelector(`#placeholder > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`),
                document.querySelector(`#placeholder`)
            );
        }

        (async () => {
            await TUICLibrary.fetchI18n();
            TUICRunFirst();
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

            const bodyObserver = new MutationObserver(TUICRunFirst);
            bodyObserver.observe(document.querySelector("body"), {
                childList: false,
                subtree: false,
                attributes: true,
            });
            {
                const setObserver = () => {
                    if (document.querySelector("title") == null) {
                        window.setTimeout(setObserver, 100);
                    } else {
                        TUICObserver.headObserver = new MutationObserver(TUICObserver.titleObserverFunction);
                        TUICObserver.headObserver.observe(document.querySelector("title"), {
                            characterData: true,
                            childList: true,
                            subtree: true,
                            attributes: true,
                        });
                        TUICObserver.titleObserverFunction();
                    }
                };
                setObserver();
            }
        })();
    } else {
        if (TUICCount <= 10) {
            window.setTimeout(replaceRunningIcon, 100);
        }
        TUICCount++;
    }
}

replaceRunningIcon();
