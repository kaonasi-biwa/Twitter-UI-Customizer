(async () => {
    const src = chrome.runtime.getURL("index.js");
    await import(src);
})();
