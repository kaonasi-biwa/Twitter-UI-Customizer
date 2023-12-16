import { TUICPref, TUICLibrary } from "../../../content/library";
import { isSafemode } from "../../../content/safemode";
import { TUICObserver } from "../../../content/observer";

export const XToTwitterRestoreIcon = () => {
    const importPref = {
        otherBoolSetting: {
            faviconSet: true,
        },
        sidebarSetting: { buttonConfig: { birdGoBackHome: true } },
        twitterIcon: "twitter",
    };
    TUICPref.set("", TUICLibrary.updatePref.merge(TUICPref.get(""), importPref));
    TUICPref.save();
    TUICLibrary.getClasses.update();
    TUICObserver.titleObserverFunction();
    if (!isSafemode) {
        document.querySelector("#TUIC_setting").remove();
    }
    if (!TUICPref.get("XToTwitter.XToTwitter") && document.title.endsWith(" / Twitter")) {
        document.title = document.title.replace(" / Twitter", " / X");
    }
};
