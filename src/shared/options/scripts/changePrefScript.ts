import { isSafemode } from "@modules/settings/safemode/isSafemode.ts";
import { TUICPref } from "@content/modules";
import { titleObserverFunction } from "@modules/observer/titleObserver";
import { updateClasses } from "@modules/htmlClass/classManager";

export const XToTwitterRestoreIcon = () => {
    const importPref = {
        otherBoolSetting: {
            faviconSet: true,
        },
        sidebarSetting: { buttonConfig: { birdGoBack: true } },
        twitterIcon: "twitter",
    };
    TUICPref.setPref("", TUICPref.mergePref(TUICPref.getPref(""), importPref));
    TUICPref.save();
    updateClasses();
    titleObserverFunction();
    if (!isSafemode) {
        document.querySelector("#TUIC_setting").remove();
    }
    if (!TUICPref.getPref("XToTwitter.XToTwitter") && document.title.endsWith(" / Twitter")) {
        document.title = document.title.replace(" / Twitter", " / X");
    }
};
