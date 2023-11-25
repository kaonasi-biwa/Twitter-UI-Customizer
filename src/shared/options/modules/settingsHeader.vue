<template>
    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title" style="font-size: 18px; margin-bottom: 1px">
        {{ TUICI18N.get("settingUI-easySetting") }}
    </h2>
    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title" style="font-size: 14px">
        {{ TUICI18N.get("settingUI-easySetting-detail") }}
    </h2>
    <div class="TUICEasySetting" style="margin-top: 15px">
        <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" style="margin-top: 10px; margin-bottom: 10px" id="restoreIcon">
            {{ TUICI18N.get("easySetting-restoreIcon") }}
        </button>
        <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" style="margin-top: 10px; margin-bottom: 10px" id="deleteVerified">
            {{ TUICI18N.get("easySetting-deleteVerified") }}
        </button>
        <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" style="margin-top: 10px; margin-bottom: 10px" id="discoverMoreDelete">
            {{ TUICI18N.get("easySetting-discoverMoreDelete") }}
        </button>
        <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" style="margin-top: 10px; margin-bottom: 10px" id="defaultTwitterColor">
            {{ TUICI18N.get("easySetting-defaultTwitterColor") }}
        </button>
        <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width default_set" style="margin-top: 10px; margin-bottom: 10px">
            {{ TUICI18N.get("settingUI-restoreDefaultAll") }}
        </button>
    </div>
    <br />
    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title" style="font-size: 18px">
        {{ TUICI18N.get("settingUI-everythingSetting") }}
    </h2>
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
