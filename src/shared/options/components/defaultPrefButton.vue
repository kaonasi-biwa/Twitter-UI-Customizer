<template>
    <button :class="[`TUIC_setting_text`, 'TUIC_setting_button', ...(classList ?? [])]" @click="setDefault">
        {{ TUICI18N.get("settingUI-restoreDefaultAll") }}
    </button>
</template>
<script setup lang="ts">
import { TUICI18N } from "@content/i18n";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { TUICObserver } from "@content/observer";
import { isSafemode } from "@content/safemode";
import { Dialog } from "@shared/tlui/components/Dialog.ts";
import { ButtonComponent } from "@shared/tlui/components/ButtonComponent.ts";

const props = defineProps<{
    classList: string[];
}>();

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
            new ButtonComponent(
                TUICI18N.get("common-no"),
                () => dialog.close(),

                {
                    invertColor: true,
                },
            ),
        ])
        .open();
};
</script>
