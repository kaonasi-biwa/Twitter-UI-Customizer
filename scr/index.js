
//ここから実際に動かしてゆく
let TUICPref = JSON.parse(localStorage.getItem("TUIC") ?? TUICLibrary.defaultPref.getString())
let TUICCount = 0
function replaceRunningIcon(){
    if(document.getElementById("react-root") != null){
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
