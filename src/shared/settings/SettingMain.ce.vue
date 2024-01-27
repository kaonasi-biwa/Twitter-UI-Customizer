<template>
    <div id="TUIC_setting" class="css-175oi2r r-1wtj0ep r-ymttw5 r-1f1sjgu r-1e081e0 TUICOriginalContent">
        <div class="css-901oao css-cens5h r-jwli3a r-1tl8opc r-adyw6z r-1vr29t4 r-135wba7 r-bcqeeo r-qvutc0">
            <hr class="TUIC_setting_divider TUIC_setting_divider_m35" />
            <div class="TUIC_setting_toplogo_container">
                <TUICLOGO_GRAY class="TUIC_setting_toplogo" />
            </div>
        </div>

        <div class="TUIC_setting_easysetting_container">
            <settingsHeader titleI18N="settingUI-easySetting" descI18N="settingUI-easySetting-detail" />
            <EasySettings />
        </div>
        <hr class="TUIC_setting_divider TUIC_setting_divider_nomargin" />
        <div>
            <settingsHeader titleI18N="settingUI-everythingSetting" level="2" />
            <SectionTitle titleI18N="settingSection-general" style="margin-top: 25px" />
        </div>
        <hr class="TUIC_setting_divider" />
        <div>
            <SectionTitle titleI18N="settingSection-page" />
        </div>
        <hr class="TUIC_setting_dividern" />
        <div>
            <SectionTitle titleI18N="settingSection-other" />
        </div>
        <hr class="TUIC_setting_dividern" />
        <div>
            <SectionTitle titleI18N="settingSection-extentionInfo" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TUICLOGO_GRAY from "@content/icons/branding/tuic_logo_gray.svg?component";
import settingsHeader from "@shared/settings/modules/SettingsHeader.vue";
import EasySettings from "./modules/EasySettings.vue";
import SectionTitle from "./components/SectionTitle.vue";
import { TUICI18N } from "@content/i18n";
import { TUICPref } from "@content/modules";
export default defineComponent({
    components: {
        TUICLOGO_GRAY,
        settingsHeader,
        EasySettings,
        SectionTitle,
    },
    setup() {
        return { TUICI18N, TUICPref };
    },
});
</script>
<!-- 
<style scoped>
* {
    background: red;
}
</style> -->
