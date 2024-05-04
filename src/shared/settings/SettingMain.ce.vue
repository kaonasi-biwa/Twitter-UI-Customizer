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
            <detailsBox summaryI18N="settingDetailsBox-color" :icon="ICON_BRUSH" :icon-opened="ICON_BRUSH_ENABLED">
                <settingColors />
            </detailsBox>
            <detailsBox summaryI18N="settingDetailsBox-sidebar" :icon="ICON_SIDEBAR" :icon-opened="ICON_SIDEBAR_ENABLED">
                <settingSidebar />
            </detailsBox>
            <detailsBox summaryI18N="settingDetailsBox-effect_and_text" :icon="ICON_PENCIL" :icon-opened="ICON_PENCIL_ENABLED">
                <settingEffectText />
            </detailsBox>
        </div>
        <hr class="TUIC_setting_divider" />
        <div>
            <SectionTitle titleI18N="settingSection-page" />
            <detailsBox summaryI18N="timeline-setting-timeline" :icon="ICON_HOME" :icon-opened="ICON_HOME_ENABLED">
                <SettingTimeline />
            </detailsBox>
            <detailsBox summaryI18N="tweetbuttons-setting-tweet" :icon="ICON_TWEET" :icon-opened="ICON_TWEET_ENABLED">
                <SettingTweet />
            </detailsBox>
            <detailsBox summaryI18N="dmPage-setting-dm" :icon="ICON_DM" :icon-opened="ICON_DM_ENABLED">
                <SettingDM />
            </detailsBox>
            <detailsBox summaryI18N="profileSetting-profile" :icon="ICON_PROFILE" :icon-opened="ICON_PROFILE_ENABLED">
                <SettingProfile />
            </detailsBox>
            <detailsBox summaryI18N="uncategorizedSettings-settingTitle" :icon="ICON_MORE_CIRCLE" :icon-opened="ICON_MORE_CIRCLE_ENABLED">
                <SettingUncategorized />
            </detailsBox>
        </div>
        <hr class="TUIC_setting_divider" />
        <div>
            <SectionTitle titleI18N="settingSection-other" />
        </div>
    </div>
</template>

<script setup lang="ts">
import TUICLOGO_GRAY from "@content/icons/branding/tuic_logo_gray.svg?component";
import ICON_BRUSH from "@content/icons/common/brush.svg?component";
import ICON_BRUSH_ENABLED from "@content/icons/common/brush_enabled.svg?component";
import ICON_SIDEBAR from "@content/icons/common/sidebar.svg?component";
import ICON_SIDEBAR_ENABLED from "@content/icons/common/sidebar_enabled.svg?component";
import ICON_PENCIL from "@content/icons/common/pencil.svg?component";
import ICON_PENCIL_ENABLED from "@content/icons/common/pencil_enabled.svg?component";
import ICON_HOME from "@content/icons/common/home.svg?component";
import ICON_HOME_ENABLED from "@content/icons/common/home_enabled.svg?component";
import ICON_TWEET from "@content/icons/common/tweet.svg?component";
import ICON_TWEET_ENABLED from "@content/icons/common/tweet_enabled.svg?component";
import ICON_DM from "@content/icons/common/dm.svg?component";
import ICON_DM_ENABLED from "@content/icons/common/dm_enabled.svg?component";
import ICON_PROFILE from "@content/icons/common/profile.svg?component";
import ICON_PROFILE_ENABLED from "@content/icons/common/profile_enabled.svg?component";
import ICON_MORE_CIRCLE from "@content/icons/common/more_circle.svg?component";
import ICON_MORE_CIRCLE_ENABLED from "@content/icons/common/more_circle_enabled.svg?component";
import settingsHeader from "@shared/settings/modules/SettingsHeader.vue";
import EasySettings from "./modules/EasySettings.vue";
import SectionTitle from "./components/SectionTitle.vue";
import detailsBox from "./components/detailsBox.vue";
import settingColors from "@shared/options/modules/settingColors.vue";
import settingSidebar from "./modules/settingSidebar.vue";
import settingEffectText from "./modules/settingEffectText.vue";
import { TUICI18N } from "@content/i18n";
import { TUICPref } from "@content/modules";
import SettingTimeline from "./modules/settingTimeline.vue";
import SettingTweet from "./modules/settingTweet.vue";
import SettingDM from "./modules/settingDM.vue";
import SettingProfile from "./modules/settingProfile.vue";
import SettingUncategorized from "./modules/settingUncategorized.vue";
</script>
<!--
<style scoped>
* {
    background: red;
}
</style> -->
