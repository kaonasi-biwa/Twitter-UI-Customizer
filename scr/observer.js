
const TUICObserver = {
    observerFunction:function(){
        TUICObserver.observer.disconnect();
        let timeout = window.setTimeout(function () { TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config) }, 10000)

        if(document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`) != null){
            TUICObserver.functions.twitterIcon(
                document.querySelector(`header h1 a > div > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`),
                document.querySelector(`header [role="heading"]`));
        }
        if(document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`) != null){
            TUICObserver.functions.twitterIcon(
                document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] > svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`),
                document.querySelector(`[role="alertdialog"] [data-testid="confirmationSheetDialog"] [role="heading"]`));
        }
        if(document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`) != null){
            TUICObserver.functions.twitterIcon(
                document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`),
                document.querySelector(`#layers [data-testid="TopNavBar"] div+svg:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}`).parentElement);
        }

        TUICObserver.functions.sidebarButtons()

        TUICObserver.functions.buttonUnderTweet()

        TUICObserver.functions.osusumeUser()

        TUICObserver.functions.clientInfo()

        TUICObserver.functions.updateStyles()

        TUICRunFirst()
        if (window.location.pathname == "/tuic/safemode") {
        } else if (document.querySelector('#unsent-tweet-background') == null && document.querySelector('[role="slider"]') != null && (window.location.pathname == "/settings/display")) {
            TUICOptionHTML.displaySetting(document.querySelector('[role="slider"]').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
        } else if (document.querySelector('#unsent-tweet-background') == null && document.querySelector('[role="slider"]') != null && (window.location.pathname == "/i/display")) {
            TUICOptionHTML.displaySetting(document.querySelector('[role="slider"]').parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
        }

        window.clearTimeout(timeout)
        TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
    },
    config: {
        childList: true,
        subtree: true
    },
    functions:{
        twitterIcon:function(elem,base){
            switch(TUICPref.twitterIcon){
                case "invisible":
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE"))
                    base.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                    break
                case "twitter":
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE"))
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_Twitter"))
                    break;
                case "dog":
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE"))
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_Dog"))
                    break;
                case "custom":
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_SVGDISPNONE"))
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUICTwitterIcon_IconImg"))
                    break;
                default:
                    elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_NOTSVGDISPNONE"))
                    break
            }


        },
        sidebarButtons:function(){
            let bannerRoot = document.querySelector(`[role=banner] > div > div > div > div > div > nav`)
            if (bannerRoot != null && bannerRoot.querySelector(`a:not(.${"NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE")}):not(.${TUICLibrary.getClasses.getClass("TUIC_DISPNONE")})`) != null) {
                for (const i of TUICPref.sidebarButtons) {
                    let moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i])
                    if(moveElem != null){
                        bannerRoot.appendChild(moveElem)
                        moveElem.classList.add("NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                    }else if(i in TUICData.sidebarButtons.html){
                        moveElem =TUICLibrary.HTMLParse(TUICData.sidebarButtons.html[i]())
                        moveElem.classList.add("NOT_" + TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                        moveElem.onclick = TUICData.sidebarButtons.buttonFunctions[i]
                        bannerRoot.appendChild(moveElem)
                    }
                }
                for (const i of TUICData.settings.sidebarButtons.all) {
                    if(!TUICPref.sidebarButtons.includes(i)){
                        const moveElem = bannerRoot.querySelector(TUICData.sidebarButtons.selectors[i])
                        if(moveElem != null) moveElem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                    }

                }

            }
        },
        buttonUnderTweet:function(){
            let articles = document.querySelectorAll(`article:not([TUIC_ARTICLE="${TUICLibrary.getClasses.getClass("TUICDidArticle")}"])`)
            if (articles.length != 0) {
                articles.forEach(function (elem) {
                    if (elem.querySelector("[data-testid$=\"reply\"]") != null && elem.querySelector("[data-testid$=\"like\"]") != null) {
                        let bar_base = elem.querySelector("[data-testid$=\"reply\"]")
                        while (bar_base.querySelector("[data-testid$=\"like\"]") == null) {
                            bar_base = bar_base.parentElement
                        }
                        if (TUICPref.otherBoolSetting.bottomScroll) bar_base.parentElement.classList.add(TUICLibrary.getClasses.getClass("TUICScrollBottom"))
                        let bar_item = {}
                        for (const elem_item of bar_base.children) {
                            for (const sel in TUICData.visibleButtons.selectors) {
                                if (elem_item.querySelector(TUICData.visibleButtons.selectors[sel]) != null) {
                                    bar_item[sel] = elem_item
                                    break
                                }
                            }
                        }
                        let lastButton
                        for (let i of TUICPref.visibleButtons) {
                            let div = -1
                            if (i in bar_item) {
                                div = bar_item[i]
                            } else if (i in TUICData.visibleButtons.buttonElement) {
                                div = TUICData.visibleButtons.buttonElement[i]()
                            }
                            if (div != -1) {
                                if ((bar_item["reply-button"].querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") != null) && div.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") == null) div.querySelector("svg").parentElement.parentElement.appendChild(TUICData.visibleButtons.emptyElement())
                                lastButton = div
                                bar_base.appendChild(div)
                            }
                        }
                        if (lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x") != null && lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x").children[0].children[0].childElementCount == 0) {
                            lastButton.querySelector(".css-1dbjc4n.r-xoduu5.r-1udh08x").remove()
                        }
    
                        for (var i = 0; i < TUICData.settings.visibleButtons.all.length; i++) {
                            if (!TUICPref.visibleButtons.includes(TUICData.settings.visibleButtons.all[i]) && TUICData.settings.visibleButtons.all[i] in bar_item) {
                                bar_item[TUICData.settings.visibleButtons.all[i]].classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"));
                            }
                        }
                    }
                    elem.setAttribute("TUIC_ARTICLE", TUICLibrary.getClasses.getClass("TUICDidArticle"))
                })
            }
        },
        osusumeUser:function(){
            if (TUICPref.invisibleItems["osusume-user-timeline"] && location.search.indexOf("f=user") == -1 && location.href != "https://twitter.com/settings/device_follow") {
                let cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not(.${TUICLibrary.getClasses.getClass("TUICDidArticle")}):not([aria-labelledby="modal-header"] > div > div > div > section > div > div > div):not([aria-labelledby="modal-header"] > div > div > div > div > div > div > div):not([aria-labelledby="modal-header"] > div > div > div > div > div > div):not([data-testid="primaryColumn"] > div > section > div > div > div)`)
                if (cells.length != 0) {
                    cells.forEach(function (elem) {
                        if (elem.querySelector(`[data-testid="UserCell"]`) != null && elem.getAttribute("TUIC_ARTICLE") != TUICLibrary.getClasses.getClass("TUICDidArticle")) {
                            elem.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                            if (elem.previousElementSibling != null && elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) == null) {
                                if (elem.previousElementSibling != null) elem.previousElementSibling.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                                if (elem.previousElementSibling.previousElementSibling != null) elem.previousElementSibling.previousElementSibling.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                            }
                            let cellElement = elem.nextElementSibling
                            while (cellElement != null && cellElement.querySelector(`[href^="/search?q="]`) == null && cellElement.querySelector(`[href^="/i/connect_people?user_id="]`) == null) {
                                cellElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                                cellElement = cellElement.nextElementSibling
                            }
                            if (cellElement != null) cellElement.classList.add(TUICLibrary.getClasses.getClass("TUIC_DISPNONE"))
                        }
                    })
                }
            }
        },
        clientInfo:function(){
            if (document.getElementById("client-info") == null && TUICPref.clientInfo.clientInfoVisible && !isNaN((new URL(location.href)).pathname.split('/')[3]) && document.getElementsByClassName("css-1dbjc4n r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2").length >= 1) {
                TUICObserver.functions.clientInfoVisible()
            } else if (document.getElementById("client-info") != null && !TUICPref.clientInfo.clientInfoVisible) {
                document.getElementById("client-info").remove()
            }
        },
        clientInfoVisible:async function(){
            let client = document.createElement("a");
            client.style.marginLeft = "4px";
            client.id = "client-info";
            client.classList.add("css-4rbku5", "css-18t94o4", "css-901oao", "css-16my406", "r-1loqt21", "r-xoduu5", "r-1q142lx", "r-1w6e6rj", "r-1tl8opc", "r-9aw3ui", "r-bcqeeo", "r-3s2u2q", "r-qvutc0");
            document.querySelector(".css-1dbjc4n.r-1d09ksm.r-1471scf.r-18u37iz.r-1wbh5a2").children[0].appendChild(client);
            chrome.runtime.sendMessage(
                {
                    type:"clientInfo",
                    endpoint: 'https://mico.re/api/getclient.php?id=' + (new URL(location.href)).pathname.split('/')[3]
                },
                (response) => {
                        json = response;
                        let cliantInfoElem = document.querySelector("#client-info")
                        console.log(json.source)
                        if (json.source ?? "unknwon" != "unknwon") {
                            cliantInfoElem.textContent = json.source.replace("</a>", "").split(">")[1];
                        }else{
                            cliantInfoElem.textContent = TUICLibrary.getI18n("clientInfo-cannotGetInfo")
                        }
                }
            );
        },
        updateStyles:function(){
            for(let i of document.querySelectorAll(".TUICSidebarButton")){
                let itemId = i.id.replace("TUICSidebar_","")
                let locationBool = false
                if(TUICData.sidebarButtons.tuicButtonUrl[itemId].endsWith("/")){
                    locationBool = location.pathname.includes(TUICData.sidebarButtons.tuicButtonUrl[itemId])
                }else{
                    locationBool = location.pathname.endsWith(TUICData.sidebarButtons.tuicButtonUrl[itemId])
                }
                if( locationBool && !i.classList.value.includes("TUICSidebarSelected")){
                    i.classList.add("TUICSidebarSelected")
                }else if(!locationBool && i.classList.value.includes("TUICSidebarSelected")){
                    i.classList.remove("TUICSidebarSelected")
                }
                i.querySelector("[dir]").style.display = (document.querySelector(TUICData.sidebarButtons.selectors.bookmarks).children[0].childNodes.length == 2) ? "" : "none"
            }
        }
    },

}
TUICObserver.observer =  new MutationObserver(TUICObserver.observerFunction)