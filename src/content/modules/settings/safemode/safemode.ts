import { injectSafeMode } from "@shared/options/injectSafeMode";

export function runSafemode() {
    document.querySelector("#TUIC_safemode")?.remove();
    document.querySelector(".twitter_ui_customizer_css")?.remove();
    document.querySelector<HTMLElement>("#react-root").style.display = "none";

    const entry = document.createElement("div");
    entry.id = "TUICOptionSafemodeEntry";
    document.body.appendChild(entry);

    injectSafeMode();
}
