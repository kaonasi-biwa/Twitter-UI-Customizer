<template>
    <!--Export-->
    <div>
        <SectionTitle2 title-i18-n="export-settingTitle" />
        <p class="TUIC_setting_intro_paragraph TUIC_setting_intro_paragraph_bold">
            {{ TUICI18N.get("export-intro") }}
        </p>

        <!--STEP1-->
        <p class="TUIC_setting_intro_paragraph">
            {{ TUICI18N.get("export-intro-step1") }}
        </p>
        <button class="TUIC_setting_button_new TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExport" @click="exportPref()">
            {{ TUICI18N.get("export-exportButton") }}
        </button>
        <input style="min-height: 150px; margin: 20px 0" id="TUICExportBox" class="TUIC_setting_textarea_new TUICTextInput" type="text" ref="exportText" readonly />

        <!--STEP2-->
        <p class="TUIC_setting_intro_paragraph">
            {{ TUICI18N.get("export-intro-step2") }}
        </p>
        <button class="TUIC_setting_button_new TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExportCopy" @click="exportPrefCopy()">
            {{ TUICI18N.get("export-exportButtonCopy") }}
        </button>
        <!--EXPLAIN IMPORTING-->
        <p class="TUIC_setting_intro_paragraph">
            {{ TUICI18N.get("export-intro-toRestore") }}
        </p>
    </div>
    <hr class="TUIC_setting_divider TUIC_setting_divider_nomargin" />
    <!--Import-->
    <div>
        <SectionTitle2 style="margin-top: 0" title-i18-n="import-settingTitle" />
        <p class="TUIC_setting_intro_paragraph TUIC_setting_intro_paragraph_bold">
            {{ TUICI18N.get("import-intro") }}
        </p>

        <!--STEP1-->
        <p class="TUIC_setting_intro_paragraph">
            {{ TUICI18N.get("import-intro-step1") }}
        </p>
        <input id="TUICImportBox" style="min-height: 50px" class="TUIC_setting_textarea_new TUICTextInput" type="text" ref="importBox" />

        <!--STEP2-->
        <p class="TUIC_setting_intro_paragraph">
            {{ TUICI18N.get("import-intro-step2") }}
        </p>
        <div style="display: flex; gap: 10px; flex-direction: column">
            <button class="TUIC_setting_button_new TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" @click="importFunc(1)">
                {{ TUICI18N.get("import-importAppend") }}
            </button>
            <button class="TUIC_setting_button_new TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" @click="importFunc(2)">
                {{ TUICI18N.get("import-importReplace") }}
            </button>
        </div>

        <!--EXPLAIN APPEND/REPLACE-->
        <div style="margin: 35px 0 20px 0; display: flex; flex-direction: column; gap: 35px">
            <div>
                <SettingSubTitle i18n="import-importAppend" />
                <FIGURE_IMPORTAPPEND height="87px" />
                <p class="TUIC_setting_intro_paragraph">
                    {{ TUICI18N.get("import-intro-append") }}
                </p>
            </div>

            <div>
                <SettingSubTitle i18n="import-importReplace" />
                <FIGURE_IMPORTREPLACE height="87px" />
                <p class="TUIC_setting_intro_paragraph">
                    {{ TUICI18N.get("import-intro-replace") }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";
import { TUICPref } from "@content/modules";
import { TUICLibrary } from "@content/library";
import { applySystemCss } from "@content/applyCSS";
import { Dialog } from "@shared/tlui/components/Dialog.ts";
import { ButtonComponent } from "@shared/tlui/components/ButtonComponent.ts";

import FIGURE_IMPORTAPPEND from "@content/icons/figure/import_append.svg?component";
import FIGURE_IMPORTREPLACE from "@content/icons/figure/import_replace.svg?component";
import SectionTitle2 from "../components/SectionTitle2.vue";
import SettingSubTitle from "@shared/options/components/textParts/settingSubTitle.vue";
import { ref } from "vue";
import { titleObserverFunction } from "@content/modules/observer/titleObserver";
import { updateClasses } from "@content/modules/htmlClass/classManager";
import { isSafemode } from "@content/modules/settings/safemode/isSafemode";

// EXPORT LOGIC
const exportText = ref<HTMLInputElement>();

function exportPref() {
    exportText.value.value = TUICPref.exportPref();
}
function exportPrefCopy() {
    navigator.clipboard.writeText(exportText.value.value);
}

// IMPORT LOGIC
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

            titleObserverFunction();
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
