
let TUICI18N;

const TUICLibrary = {
    color: {
        rgb2hex: function (rgb) {
            return (
                `#${rgb.map(function (value) { return ("0" + value.toString(16)).slice(-2); }).join("")}`
            );
        },
        hex2rgb: function (hex) {
            if (hex.slice(0, 1) == "#") hex = hex.slice(1);
            return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(function (str) { return parseInt(str, 16); });
        },
        getColorFromPref:function(name,type,mode_){
            let mode = ""
            if((mode_ ?? "unknwon") == "unknwon"){
                mode = TUICLibrary.backgroundColorCheck() == "light" ? "buttonColorLight" : "buttonColorDark"
            }
            else{
                mode = mode_
            }
            return ((TUICPref?.[mode]?.[name]?.[type] ?? TUICPref.buttonColor[name]?.[type]) ?? TUICData.colors[name]?.[type]).escapeToUseHTML()
        }
    },
    getClasses: {
        TUICScrollBottom: function () {
            return "TUIC_SCROLL_BOTTOM" + TUICLibrary.query
        },
        getClass:function(id){
            return id + this.query
        },
        update: function () {
            this.query += "_"
            TUICCss()
            TUICObserver.observerFunction()
        },
        query: ""
    },
    defaultPref: {
        get: function () {
            return JSON.parse(this.getString())
        },
        getString: function () {
            return JSON.stringify(TUICData.defaultPref)
        }
    },
    updatePref: {
        update: function () {
            dPref = TUICLibrary.defaultPref.get()
            if ((localStorage.getItem('unsent-tweet-background') ?? "unknown") != "unknown") {
                this.parallelToSerial()
            }

            if(TUICPref.otherBoolSetting.clientInfo == true){
                TUICPref.clientInfo = {}
                TUICPref.clientInfo.clientInfoVisible = true
            }
            delete TUICPref.otherBoolSetting.clientInfo
            if(TUICPref.otherBoolSetting.invisibleTwitterLogo == true){
                TUICPref.twitterIcon = "invisible"
            }
            delete TUICPref.otherBoolSetting.invisibleTwitterLogo
            if("CSS" in TUICPref){
                localStorage.setItem("TUIC_CSS", TUICPref.CSS)
            }
            delete TUICPref.CSS

            if(typeof TUICPref.visibleButtons == "object" && TUICPref.visibleButtons.indexOf("downvote-button") != -1){
                TUICPref.visibleButtons = TUICPref.visibleButtons.filter(elem => {return elem != "downvote-button"});
            }
            if(typeof TUICPref.sidebarButtons == "object" && TUICPref.sidebarButtons.indexOf("verified-orgs-signup") != -1){
                TUICPref.sidebarButtons = TUICPref.sidebarButtons.filter(elem => {return elem != "verified-orgs-signup"});
            }

            this.updateToDefault(TUICPref,dPref)
        },
        parallelToSerial: function () {
            TUICPref.CSS = localStorage.getItem('CSS');
            TUICPref.invisibleItems["osusume-user-timeline"] = (localStorage.getItem('osusume-user-timeline') ?? "0") == "1";
            TUICPref.visibleButtons = JSON.parse(localStorage.getItem('visible-button'))
            for (let i of TUICData.settings.colors.id) {
                let a = localStorage.getItem(`${i}-background`) ?? "unknown"
                if (a != "unknown") {
                    TUICPref.buttonColor[i] = {}
                    TUICPref.buttonColor[i].background = a
                    TUICPref.buttonColor[i].border = localStorage.getItem(`${i}-border`)
                    TUICPref.buttonColor[i].color = localStorage.getItem(`${i}-color`)
                }
            }

            localStorage.removeItem('unsent-tweet-background')
            localStorage.removeItem('unsent-tweet-border')
            localStorage.removeItem('unsent-tweet-color')
            localStorage.removeItem('not-following-background')
            localStorage.removeItem('not-following-border')
            localStorage.removeItem('not-following-color')
            localStorage.removeItem('following-background')
            localStorage.removeItem('following-border')
            localStorage.removeItem('following-color')
            localStorage.removeItem('un-following-background')
            localStorage.removeItem('un-following-border')
            localStorage.removeItem('un-following-color')
            localStorage.removeItem('profile-background')
            localStorage.removeItem('profile-border')
            localStorage.removeItem('profile-color')
            localStorage.removeItem('profile-save-background')
            localStorage.removeItem('profile-save-border')
            localStorage.removeItem('profile-save-color')
            localStorage.removeItem('birthday-background')
            localStorage.removeItem('birthday-border')
            localStorage.removeItem('birthday-color')
            localStorage.removeItem('profile-link-background')
            localStorage.removeItem('profile-link-border')
            localStorage.removeItem('profile-link-color')

            localStorage.removeItem('reply-button')
            localStorage.removeItem('retweet-button')
            localStorage.removeItem('like-button')
            localStorage.removeItem('downvote-button')
            localStorage.removeItem('share-button')
            localStorage.removeItem('tweet_analytics')
            localStorage.removeItem('visible-button')
            localStorage.removeItem('osusume-user-timeline')
            localStorage.removeItem('CSS')

            localStorage.setItem("TUIC", JSON.stringify(TUICPref))
        },
        updateToDefault:function(object,defObject){
            for (let i in defObject) {
                if (!(i in object)) {
                    object[i] = defObject[i]
                }else if(typeof defObject[i] == "object" && !Array.isArray(defObject[i])){
                    this.updateToDefault(object[i],defObject[i])
                }
            }
            console.log(TUICPref.visibleButtons)
        }
    },
    backgroundColorCheck:function(){
        bodyStyle = document
        .querySelector("body").style.backgroundColor.toString()
        if(bodyStyle == "rgb(0, 0, 0)"){
            return "dark"
        }else if(bodyStyle == "rgb(21, 32, 43)"){
            return "blue"
        } else{
            return "light"
        }
    },
    TUICParser: new DOMParser(),
    HTMLParse:function(elem){
        return this.HTMLParseFunc(elem).querySelector("body > *")
    },
    HTMLParseAll:function(elem){
        return this.HTMLParseFunc(elem).querySelectorAll("body > *")
    },
    HTMLParseFunc:function(elem){
        return this.TUICParser.parseFromString(elem,"text/html")
    },
    getI18n:function(elem){
        let lang = document.querySelector("html").getAttribute("lang").toLowerCase()
        if(lang in TUICI18N && elem in TUICI18N[lang]){
            return TUICI18N[lang][elem].escapeToUseHTML()
        }else if(elem in TUICI18N.en){
            return TUICI18N.en[elem].escapeToUseHTML()
        }else if(elem in TUICI18N.en){
            return TUICI18N.ja[elem].escapeToUseHTML()
        }else{
            return "404"
        }
    },
    escapeToUseHTML:function(text){
        return text.replace(/[&'`"<>=;]/g, function(match) {
            return {
              '&': '&amp;',
              "'": '&#x27;',
              '`': '&#x60;',
              '"': '&quot;',
              '<': '&lt;',
              '>': '&gt;',
              '=': '&equals;',
              ";": "&semi;",
            }[match]
          });
    }
}

String.prototype.escapeToUseHTML = function(){return TUICLibrary.escapeToUseHTML(this)}