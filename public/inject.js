(async () => {
    // eslint-disable-next-line no-undef
    const src = chrome.runtime.getURL("index.js");
    await import(src);
})();
