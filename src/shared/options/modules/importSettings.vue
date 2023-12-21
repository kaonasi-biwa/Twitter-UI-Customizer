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

<script lang="ts">
import { defineComponent, ref } from "vue";

import { TUICI18N } from "@content/i18n";
import { TUICPref, TUICLibrary } from "@content/library";
import { TUICObserver } from "@content/observer";
import { applySystemCss } from "@content/applyCSS";
import { isSafemode } from "@content/safemode";
import { Dialog } from "../../../content//tlui/components/Dialog.ts";
import { ButtonComponent } from "../../../content//tlui/components/ButtonComponent.ts";

export default defineComponent({
    setup() {
        const importBox = ref(null);
        const importFunc = async (type) => {
            try {
                const importPref = JSON.parse(importBox.value.value);
                if (type == 1) {
                    TUICPref.set("", TUICPref.merge(TUICPref.get(""), importPref));
                } else if (type == 2) {
                    TUICPref.set("", TUICPref.merge(structuredClone(TUICPref.defaultPref), importPref));
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
                    if (!TUICPref.get("otherBoolSetting.XtoTwitter") && document.title.endsWith(" / Twitter")) {
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
        return { TUICI18N, importFunc, importBox };
    },
});
</script>

<style scoped></style>
