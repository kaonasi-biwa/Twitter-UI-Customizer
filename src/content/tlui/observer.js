import { TUICLibrary } from "../library";

export function startTluiObserver() {
    async function changedTheme() {
        document.documentElement.style.setProperty("--tlui-dialog-background", document.body.style.backgroundColor);
        document.documentElement.style.setProperty("--tlui-dialog-text", getComputedStyle((await TUICLibrary.waitForElement("span"))[0]).color);
    }

    new MutationObserver(changedTheme).observe(document.body, { attributes: true, attributeFilter: ["style"] });
    changedTheme();
}