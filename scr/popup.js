window.onload = ()=>{
    chrome.runtime.sendMessage({updateType:"iconClick"});
    document.getElementById("link1").onclick = ()=>{
        chrome.tabs.create({"url":"https://twitter.com/settings/display"});
    }
    document.getElementById("link2").onclick = ()=>{
        chrome.tabs.create({"url":"https://twitter.com/kaonasi_biwa_ar"});
    }
    document.getElementById("link3").onclick = ()=>{
        chrome.runtime.openOptionsPage();
    }
}

