import { TUICLibrary } from "@content/library";
import { isSafemode } from "@content/safemode";
import { TUICObserver } from "@content/observer";
import { TUICPref } from "@content/modules";

export const XToTwitterRestoreIcon = () => {
    const importPref = {
        otherBoolSetting: {
            faviconSet: true,
        },
        sidebarSetting: { buttonConfig: { birdGoBackHome: true } },
        twitterIcon: "twitter",
    };
    TUICPref.setPref("", TUICPref.mergePref(TUICPref.getPref(""), importPref));
    TUICPref.save();
    TUICLibrary.getClasses.update();
    TUICObserver.titleObserverFunction();
    if (!isSafemode) {
        document.querySelector("#TUIC_setting").remove();
    }
    if (!TUICPref.getPref("XToTwitter.XToTwitter") && document.title.endsWith(" / Twitter")) {
        document.title = document.title.replace(" / Twitter", " / X");
    }
};
