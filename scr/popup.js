window.onload = function(){
    document.getElementById("link1").onclick = function(){
        chrome.tabs.create({"url":"https://twitter.com/settings/display"})
    }
    document.getElementById("link2").onclick = function(){
        chrome.tabs.create({"url":"https://twitter.com/kaonasi_biwa_ar"})
    }
}

