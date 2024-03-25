<template>
    <input id="TUICImportBox" class="TUICTextInput" type="text" ref="importBox" />
    <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" @click="importFunc(1)">
        {{ TUICI18N.get("import-importAppend") }}
    </button>
    <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" @click="importFunc(2)">
        {{ TUICI18N.get("import-importReplace") }}
    </button>
    <div style="margin-left: 10px; margin-right: 10px">
        <span class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 12px">
            {{ TUICI18N.get("import-select-explain") }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";
import { TUICLibrary } from "@content/library";
import { TUICObserver } from "@modules/observer/index.ts";
import { applySystemCss } from "@content/applyCSS";
import { isSafemode } from "@modules/settings/safemode/isSafemode.ts";
import { Dialog } from "@shared/tlui/components/Dialog.ts";
import { ButtonComponent } from "@shared/tlui/components/ButtonComponent.ts";
import { TUICPref } from "@content/modules";
import { updateClasses } from "@modules/htmlClass/classManager";
import { titleObserverFunction } from "@modules/observer/titleObserver";

const importBox = defineModel<HTMLInputElement>();
const importFunc = async (type: number) => {
    try {
        const importedPref = JSON.parse(importBox.value.value);
        await TUICPref.updatePref(importedPref);
        if (type == 1) {
            TUICPref.setPref("", TUICPref.mergePref(TUICPref.getPref(""), importedPref));
        } else if (type == 2) {
            TUICPref.setPref("", TUICPref.mergeDefaultPref(importedPref));
        }

        TUICPref.save();
        if (isSafemode) {
            location.href = `${location.protocol}//${location.hostname}`;
        } else {
            document.querySelector("#TUIC_setting").remove();
            updateClasses();
            applySystemCss();
            TUICObserver.callback();
            titleObserverFunction();
            if (!TUICPref.getPref("XToTwitter.XtoTwitter") && document.title.endsWith(" / Twitter")) {
                document.title = document.title.replace(" / Twitter", " / X");
            }
        }
    } catch (x) {
        console.error(x);
        await TUICLibrary.waitForElement("#layers");
        const dialog = new Dialog(TUICI18N.get("common-error"));
        dialog.addComponents([TUICI18N.get("import-error"), new ButtonComponent(TUICI18N.get("common-close"), () => dialog.close())]).open();
    }
};
</script>

<style scoped></style>
@modules/observer/observer @modules/settings/safemode/safemode @modules/i18n/i18n
