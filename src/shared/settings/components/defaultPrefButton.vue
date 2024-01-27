<template>
    <IconButton i18n="settingUI-restoreDefaultAll" :icon="ICON_RESET" class="TUIC_setting_defaultprefbutton" @click="setDefault" />
</template>

<script setup lang="ts">
import IconButton from "@shared/settings/components/IconButton.vue";
import ICON_RESET from "@content/icons/common/reset.svg?component";
import { TUICI18N } from "@content/i18n";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { TUICObserver } from "@content/observer";
import { isSafemode } from "@content/safemode";
import { Dialog } from "@shared/tlui/components/Dialog.ts";
import { ButtonComponent } from "@shared/tlui/components/ButtonComponent.ts";
const setDefault = async () => {
    await TUICLibrary.waitForElement("#layers");
    const dialog = new Dialog(TUICI18N.get("common-confirm"));
    dialog
        .addComponents([
            TUICI18N.get("settingUI-restoreDefaultAll-confirm"),
            new ButtonComponent(TUICI18N.get("common-yes"), () => {
                console.log("aiueo");
                dialog.close();
                localStorage.setItem("TUIC", JSON.stringify(TUICPref.defaultPref));
                TUICPref.setPref("", TUICPref.defaultPref);
                if (isSafemode) {
                    location.href = `${location.protocol}//${location.hostname}`;
                } else {
                    document.querySelector("#TUIC_setting").remove();
                    TUICLibrary.getClasses.update();
                    TUICObserver.titleObserverFunction();
                    if (!TUICPref.getPref("otherBoolSetting.XtoTwitter") && document.title.endsWith(" / Twitter")) {
                        document.title = document.title.replace(" / Twitter", " / X");
                    }
                }
            }),
            new ButtonComponent(TUICI18N.get("common-no"), () => dialog.close(), {
                invertColor: true,
            }),
        ])
        .open();
};
</script>
