<template>
    <button :class="[`TUIC_setting_text`, 'TUIC_setting_button', ...(classList ?? [])]" @click="setDefault">
        {{ TUICI18N.get("settingUI-restoreDefaultAll") }}
    </button>
</template>
<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { isSafemode } from "@modules/settings/safemode/isSafemode.ts";
import { Dialog } from "@shared/tlui/components/Dialog.ts";
import { ButtonComponent } from "@shared/tlui/components/ButtonComponent.ts";
import { titleObserverFunction } from "@modules/observer/titleObserver";
import { updateClasses } from "@modules/htmlClass/classManager";

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
                dialog.close();
                const defaultPref = TUICPref.mergeDefaultPref({});
                localStorage.setItem("TUIC", JSON.stringify(defaultPref));
                TUICPref.setPref("", defaultPref);

                if (isSafemode) {
                    location.href = `${location.protocol}//${location.hostname}`;
                } else {
                    document.querySelector("#TUIC_setting").remove();
                    updateClasses();
                    titleObserverFunction();
                    if (!TUICPref.getPref("XToTwitter.XtoTwitter") && document.title.endsWith(" / Twitter")) {
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
@modules/observer/observer @modules/settings/safemode/safemode @modules/i18n/i18n
