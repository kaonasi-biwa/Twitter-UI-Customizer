(async () => {
    const src = chrome.runtime.getURL("index.js");
    await import(src);
})();

// const scriptElem = document.createElement("script");
// scriptElem.src = chrome.runtime.getURL("/js/copied_es_module.js");
// scriptElem.type = "module";
// document.head.appendChild(scriptElem);
// sciptElem.addEventListener("load", action);
// function action(e) {
//     // code using the module...
// }
