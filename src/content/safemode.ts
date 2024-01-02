import { injectSafeMode } from "../shared/options/injectSafeMode.ts";

export const isSafemode = location.pathname === "/tuic/safemode";

export function runSafemode() {
    document.querySelector("#TUIC_safemode")?.remove();
    document.querySelector(".twitter_ui_customizer_css")?.remove();
    (document.querySelector("#react-root") as HTMLElement).style.display = "none";

    const entry = document.createElement("div");
    entry.id = "TUICOptionSafemodeEntry";
    document.body.appendChild(entry);

    injectSafeMode();
    //TUICOptionHTML.eventHandle(entry);
}
