export function startTluiObserver() {
    function changedTheme() {
        document.documentElement.style.setProperty("--tlui-dialog-background", document.body.style.backgroundColor);
        document.documentElement.style.setProperty("--tlui-dialog-text", getComputedStyle(document.querySelector("span")).color);
    }

    new MutationObserver(changedTheme).observe(document.body, { attributes: true, attributeFilter: ["style"] });
    changedTheme();
}