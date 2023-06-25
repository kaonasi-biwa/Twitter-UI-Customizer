
//ここから実際に動かしてゆく
let TUICPref = JSON.parse(localStorage.getItem("TUIC") ?? TUICLibrary.defaultPref.getString())
let TUICCount = 0
function replaceRunningIcon(){
    if(document.getElementById("react-root") != null){
        console.log(document.TUICQuery)
        if(document.querySelector("#twitter_ui_customizer_query") == null){
            let queryElem = document.createElement("meta")
            queryElem.id = "twitter_ui_customizer_query"
            queryElem.setAttribute("query","")
            document.querySelector("head").appendChild(queryElem)
        }else{
            TUICLibrary.getClasses.query = document.querySelector("#twitter_ui_customizer_query").getAttribute("query") + "A"
            document.querySelector("#twitter_ui_customizer_query").setAttribute("query",TUICLibrary.getClasses.query)
            console.log(TUICLibrary.getClasses.getClass(""))
            console.log(document.TUICQuery)
        }

        TUICRunFirst()
        if(document.querySelector(`#placeholder > svg`)){
            TUICObserver.functions.twitterIcon(
                document.querySelector(`#placeholder > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`),
                document.querySelector(`#placeholder`));
        }

            (async () => {
                await TUICLibrary.fetchI18n();
                TUICRunFirst()
                console.log(TUICLibrary.getI18n("@JapaneseLanguageName"))
                chrome.runtime.sendMessage({type:"update", updateType: "openTwitter" });
        
                /*旧バージョンからのアップデート*/
                TUICLibrary.updatePref.update()
                /*Fin 旧バージョンからのアップデート*/
                TUICObserver.target = document.querySelector("body"),
                TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);

                const bodyObserver = new MutationObserver(TUICRunFirst)
                bodyObserver.observe(document.querySelector("body"), { childList: false, subtree: false, attributes: true })

            })()
    }else{
        if(TUICCount <= 10){
            window.setTimeout(replaceRunningIcon,100)
        }
        TUICCount++;
    }
}

replaceRunningIcon()
