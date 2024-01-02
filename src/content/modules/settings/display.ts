import { injectOptionMain } from "@shared/options/injectOption2Entry";

export function displaySetting(rootElement: HTMLElement) {
    //document.querySelector("#TUICOptionMain");
    if (!document.querySelector("#TUIC_setting")) {
        if (document.querySelector("#TUICOptionEntry") == null) {
            const div = document.createElement("div");
            div.id = "TUICOptionEntry";
            rootElement.appendChild(div);
        }
        injectOptionMain();
    }
}
