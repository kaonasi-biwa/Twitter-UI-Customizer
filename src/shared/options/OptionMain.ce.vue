<template>
    <div id="TUIC_setting" class="css-175oi2r r-1wtj0ep r-ymttw5 r-1f1sjgu r-1e081e0 TUICOriginalContent">
        <div class="css-901oao css-cens5h r-jwli3a r-1tl8opc r-adyw6z r-1vr29t4 r-135wba7 r-bcqeeo r-qvutc0">
            <h2 aria-level="2" role="heading" class="css-4rbku5 css-175oi2r r-18u37iz">
                <span class="css-901oao css-16my406 r-1tl8opc r-bcqeeo r-qvutc0 TUIC_setting_text">
                    {{ TUICI18N.get("brandingName") }}
                </span>
            </h2>
        </div>

        <div>
            <settingsHeader />
            <detailsBox i18n="settingColors-settingTitle">
                <settingColors />
            </detailsBox>

            <detailsBox i18n="bottomTweetButtons-settingTitle-v2">
                <UpDownList id="visibleButtons" /><br />

                <SettingSubTitle i18n="bottomTweetButtons-settingTitle" />
                <CheckBoxList id="tweetDisplaySetting.option" />

                <br />
                <SettingSubTitle i18n="bottomTweetButtons-setting-linkCopyURL" />
                <RadioButtonList id="tweetDisplaySetting.linkCopyURL" /><br />

                <SettingSubTitle i18n="bottomTweetButtons-setting-linkShareCopyURL" />
                <RadioButtonList id="tweetDisplaySetting.linkShareCopyURL" /><br />

                <SettingSubTitle i18n="timeline-discoverMore" />
                <RadioButtonList id="timeline-discoverMore" /><br />

                <SettingSubTitle i18n="fixEngagements-settingTitle" />
                <UpDownList id="fixEngagements" />
                <br />
                <CheckBoxList id="engagementsLink.option" />

                <SettingSubTitle i18n="bottomTweetButtons-settingTitle-linkCard" />
                <CheckBoxList id="showLinkCardInfo" />

                <SettingSubTitle i18n="tweetTopButton-settingTitle" />
                <UpDownList id="tweetTopButton" />
                <br />
                <CheckBoxList id="tweetTopButtonBool" />

                <SettingSubTitle i18n="tweetMoreMenuItems-settingTitle" />
                <CheckBoxList id="tweetDisplaySetting.tweetMoreMenuItems" />

                <SettingSubTitle i18n="invisibleItems-settingTitle" />
                <CheckBoxList id="tweetDisplaySetting.invisible" />
            </detailsBox>

            <detailsBox i18n="twitterIcon-settingTitle">
                <RadioButtonList id="twitterIcon.icon" />

                <br />
                <CheckBoxList id="twitterIcon.options" />

                <br />
                <SettingSubTitle i18n="twitterIcon-usedIcon" />
                <UploadImageFile />
            </detailsBox>

            <detailsBox i18n="sidebarButton-settingTitle">
                <UpDownList id="sidebarButtons" /><br />

                <CheckBoxList id="sidebarSetting.buttonConfig" />

                <SettingSubTitle i18n="sidebarButton-homeIcon-settingTitle" />
                <RadioButtonList id="sidebarSetting.homeIcon" /><br />

                <SettingSubTitle i18n="sidebarButton-accountSwitcher-settingTitle" />
                <CheckBoxList id="accountSwitcher" />

                <SettingSubTitle i18n="sidebarButton-moreMenuItems-settingTitle" />
                <CheckBoxList id="sidebarSetting.moreMenuItems" />
            </detailsBox>

            <detailsBox i18n="profileSetting-settingTitle">
                <SettingSubTitle i18n="profileSetting-tabs-settingTitle" />
                <CheckBoxList id="profileSetting.tabs" />

                <SettingSubTitle i18n="profileSetting-profileInitialTab-settingTitle" />
                <RadioButtonList id="profileSetting.profileInitialTab" />

                <SettingSubTitle i18n="invisibleItems-settingTitle" />
                <CheckBoxList id="profileSetting.invisible" /><br />

                <SettingSubTitle i18n="profileSetting-followersListButtons-settingTitle" />
                <UpDownList id="profileSetting.followersListButtons" /><br />
                <CheckBoxList id="profileSetting.followersListButtonsOptions" /><br />
            </detailsBox>

            <detailsBox i18n="invisibleItems-settingTitle">
                <CheckBoxList id="invisibleItems" />
            </detailsBox>

            <detailsBox i18n="timeline-settingTitle">
                <CheckBoxList id="timeline" />
            </detailsBox>

            <detailsBox i18n="XToTwitter-settingTitle">
                <CheckBoxList id="XToTwitter" /><br />
                <button @click="XToTwitterRestoreIcon" class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" style="margin-bottom: 10px">
                    {{ TUICI18N.get("XtoTwitter-twitterIcon") }}
                </button>
            </detailsBox>

            <detailsBox i18n="rightSidebar-settingTitle">
                <CheckBoxList id="rightSidebar" />
            </detailsBox>

            <detailsBox i18n="composetweet-settingTitle">
                <CheckBoxList id="composetweet" />
            </detailsBox>

            <detailsBox i18n="dmPage-settingTitle">
                <CheckBoxList id="dmPage" />
            </detailsBox>

            <detailsBox i18n="uncategorizedSettings-settingTitle">
                <CheckBoxList id="uncategorizedSettings" />
            </detailsBox>

            <br />
            <DefaultPrefButton :class-list="['TUIC_setting_button_width']" />
            <br /><br />

            <detailsBox i18n="customCSS-settingTitle">
                <customCSS />
            </detailsBox>

            <detailsBox i18n="export-settingTitle">
                <exportSettings />
            </detailsBox>

            <detailsBox i18n="import-settingTitle">
                <importSettings />
            </detailsBox>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TUICI18N } from "@modules/i18n";
import { TUICPref } from "@content/modules";

import CheckBox from "./components/CheckBox.vue";
import UploadImageFile from "./components/UploadImageFile.vue";
import RadioButtonList from "./components/RadioButtonList.vue";
import ColorsList from "./components/ColorsList.vue";
import UpDownList from "./components/UpDownList.vue";
import CheckBoxList from "./components/CheckBoxList.vue";

import customCSS from "./modules/customCSS.vue";
import exportSettings from "./modules/exportSettings.vue";
import importSettings from "./modules/importSettings.vue";
import settingColors from "./modules/settingColors.vue";
import settingsHeader from "./modules/settingsHeader.vue";
import SettingSubTitle from "./components/textParts/settingSubTitle.vue";
import detailsBox from "./components/textParts/detailsBox.vue";
import DefaultPrefButton from "./components/defaultPrefButton.vue";

import { XToTwitterRestoreIcon } from "./scripts/changePrefScript";

export default defineComponent({
    components: {
        CheckBox,
        UploadImageFile,
        RadioButtonList,
        ColorsList,
        customCSS,
        exportSettings,
        importSettings,
        settingColors,
        settingsHeader,
        UpDownList,
        CheckBoxList,
        SettingSubTitle,
        detailsBox,
        DefaultPrefButton,
    },
    setup() {
        return { TUICI18N, TUICPref, XToTwitterRestoreIcon };
    },
});
</script>
<!--
<style scoped>
* {
    background: red;
}
</style> -->
@modules/i18n/i18n
