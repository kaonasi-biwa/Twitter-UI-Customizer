<template>
    <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">
            {{ TUICI18N.get("import-settingTitle") }}
        </summary>
        <div class="TUIC_col_setting_container">
            <input class="TUICTextInput" type="text" id="TUICImportBox" />
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICImportWrite">
                {{ TUICI18N.get("import-importAppend") }}
            </button>
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" id="TUICImportReplace">
                {{ TUICI18N.get("import-importReplace") }}
            </button>
            <div style="margin-left: 10px; margin-right: 10px">
                <span class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 12px">
                    {{ TUICI18N.get("import-select-explain") }}
                </span>
            </div>
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

<style scoped></style>
