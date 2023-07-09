const isFirefox = 'browser' in window;

window.onload = async ()=>{
    chrome.runtime.sendMessage({type:"update",updateType:"iconClick"});
    document.getElementById("link1").onclick = ()=>{
        chrome.tabs.create({"url":"https://twitter.com/settings/display"});
    }
    document.getElementById("link2").onclick = ()=>{
        chrome.tabs.create({"url":"https://twitter.com/kaonasi_biwa_ar"});
    }
    document.getElementById("link3").onclick = ()=>{
        chrome.runtime.openOptionsPage();
    }
    document.getElementById("link4").onclick = ()=>{
        chrome.tabs.create({"url":"https://twitter.com/tuic/safemode"});
    }
    
    const $link5 = document.getElementById("link5")
    if (isFirefox) {
        fetch("https://api.github.com/repos/kaonasi-biwa/Twitter-UI-Customizer/releases/latest", { cache: "no-store" })
            .then(res => res.json())
            .then(json => json.tag_name)
            .then(version => {
                $link5.href = `https://github.com/kaonasi-biwa/Twitter-UI-Customizer/releases/download/${version}/Twitter_UI_Customizer_Firefox.xpi`
                $link5.hidden = false;
            });
        } // Firefoxの場合のみ有効
    i18nApply()
}

