<template>
    <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">
            {{ TUICI18N.get("export-settingTitle") }}
        </summary>
        <div class="TUIC_col_setting_container">
            <input id="TUICExportBox" class="TUICTextInput" type="text" readonly />
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExport">
                {{ TUICI18N.get("export-exportButton") }}
            </button>
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICExportCopy">
                {{ TUICI18N.get("export-exportButtonCopy") }}
            </button>
        </div>
    </details>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TUICI18N } from "../../../content/i18n";

export default defineComponent({
    setup() {
        return { TUICI18N };
    },
});
</script>
