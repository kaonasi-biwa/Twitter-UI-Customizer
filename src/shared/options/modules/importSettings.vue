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
import { TUICI18N } from "@content/i18n";
import { TUICLibrary } from "@content/library";
import { TUICObserver } from "@content/modules/observer/index.ts";
import { applySystemCss } from "@content/applyCSS";
import { isSafemode } from "@content/safemode";
import { Dialog } from "@shared/tlui/components/Dialog.ts";
import { ButtonComponent } from "@shared/tlui/components/ButtonComponent.ts";
import { TUICPref } from "@content/modules";

const importBox = defineModel<HTMLInputElement>();
const importFunc = async (type: number) => {
    try {
        const importPref = JSON.parse(importBox.value.value);
        if (type == 1) {
            TUICPref.setPref("", TUICPref.mergePref(TUICPref.getPref(""), importPref));
        } else if (type == 2) {
            TUICPref.setPref("", TUICPref.mergePref(structuredClone(TUICPref.defaultPref), importPref));
        }

        TUICPref.save();
        if (isSafemode) {
            location.href = `${location.protocol}//${location.hostname}`;
        } else {
            document.querySelector("#TUIC_setting").remove();
            TUICLibrary.getClasses.update();
            applySystemCss();
            TUICObserver.observerFunction(null);
            TUICObserver.titleObserverFunction();
            if (!TUICPref.getPref("otherBoolSetting.XtoTwitter") && document.title.endsWith(" / Twitter")) {
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
@content/modules/observer/observer
