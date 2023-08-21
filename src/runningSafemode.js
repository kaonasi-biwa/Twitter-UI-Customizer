import { TUICI18N } from "./i18n";
import { TUICLibrary } from "./library";
import { TUICOptionHTML } from "./option";

(async () => {
    if (document.getElementById("react-root") && window.location.pathname == "/tuic/safemode") {
        if (document.querySelector("#safemode") == null) {
            await TUICI18N.fetch();
            document.querySelector("#react-root").style = "display:none !important;";
            const safemode = document.createElement("div");
            safemode.id = "safemode";
            safemode.style = "height:100%;width:100%";
            document.querySelector("body").appendChild(safemode);
            document.querySelector(".twitter_ui_customizer_css")?.remove();
            const setTitle = () => {
                document.title = TUICI18N.get("safemode-title");
                window.setTimeout(setTitle, 5000);
            };
            setTitle();
            TUICOptionHTML.displaySetting(document.querySelector("#safemode"));
        }
    }
})();