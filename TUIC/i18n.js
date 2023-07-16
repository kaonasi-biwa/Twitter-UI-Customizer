function i18nApply() {
    for (let elem of document.querySelectorAll(".i18n")) {
        elem.textContent = chrome.i18n.getMessage(elem.getAttribute("i18n-id") ?? "");
    }
}
