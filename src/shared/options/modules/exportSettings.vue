<template>
    <input id="TUICExportBox" class="TUICTextInput" type="text" v-model="exportText" readonly />
    <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExport" @click="exportPref()">
        {{ TUICI18N.get("export-exportButton") }}
    </button>
    <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExportCopy" @click="exportPrefCopy()">
        {{ TUICI18N.get("export-exportButtonCopy") }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TUICPref } from "../../../content/library";
import { TUICI18N } from "../../../content/i18n";

export default defineComponent({
    setup() {
        return { TUICI18N };
    },
    data: function () {
        return {
            exportText: "",
        };
    },
    methods: {
        exportPref() {
            this.exportText = TUICPref.export();
        },
        exportPrefCopy() {
            navigator.clipboard.writeText(this.exportText);
        },
    },
});
</script>
