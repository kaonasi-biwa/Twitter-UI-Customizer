<template>
    <input id="TUICExportBox" class="TUICTextInput" type="text" ref="exportText" readonly />
    <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExport" @click="exportPref()">
        {{ TUICI18N.get("export-exportButton") }}
    </button>
    <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExportCopy" @click="exportPrefCopy()">
        {{ TUICI18N.get("export-exportButtonCopy") }}
    </button>
</template>

<script setup lang="ts">
import { TUICPref } from "@content/modules";
import { TUICI18N } from "@content/i18n";

const exportText = defineModel<HTMLInputElement>();

function exportPref() {
    exportText.value.value = TUICPref.exportPref();
}
function exportPrefCopy() {
    navigator.clipboard.writeText(exportText.value.value);
}
</script>
@content/modules/i18n/i18n
