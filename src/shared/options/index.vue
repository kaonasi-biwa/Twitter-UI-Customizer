<!-- eslint-disable vue/multi-word-component-names -->
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
            <settingColors />

            <UpDownList id="visibleButtons" title="bottomTweetButtons-settingTitle-v2">
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("bottomTweetButtons-settingTitle") }}</h2>
                <CheckBox value="tweetDisplaySetting.bottomScroll" name="bottomTweetButtons-setting-visibleScrollBar" />
                <CheckBox value="tweetDisplaySetting.RTNotQuote" name="bottomTweetButtons-setting-RTNotQuote" />
                <CheckBox value="tweetDisplaySetting.noModalbottomTweetButtons" name="bottomTweetButtons-setting-noModal" />
                <CheckBox value="tweetDisplaySetting.noNumberBottomTweetButtons" name="bottomTweetButtons-setting-noNumber" />

                <RadioButtonListSub id="tweetDisplaySetting.linkCopyURL" title="bottomTweetButtons-setting-linkCopyURL" type="TUICRadio" />
                <RadioButtonListSub id="tweetDisplaySetting.linkShareCopyURL" title="bottomTweetButtons-setting-linkShareCopyURL" type="TUICRadio" />
                <RadioButtonListSub id="timeline-discoverMore" title="timeline-discoverMore" type="TUICRadio" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("fixEngagements-settingTitle") }}</h2>
                <UpDownListSub id="fixEngagements" />
                <br />
                <CheckBox value="otherBoolSetting.placeEngagementsLink" name="bottomTweetButtons-setting-placeEngagementsLink" />
                <CheckBox value="otherBoolSetting.placeEngagementsLinkShort" name="fixEngagements-shortName" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("bottomTweetButtons-settingTitle-linkCard") }}</h2>
                <CheckBox value="otherBoolSetting.showLinkCardInfo" name="bottomTweetButtons-setting-showLinkCardInfo" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("invisibleItems-settingTitle") }}</h2>
                <CheckBoxListSub id="tweetDisplaySetting" />
            </UpDownList>
            <RadioButtonList id="twitterIcon" title="twitterIcon-settingTitle" type="TUICRadio">
                <br />
                <CheckBox value="otherBoolSetting.faviconSet" name="twitterIcon-favicon" />
                <CheckBox value="otherBoolSetting.roundIcon" name="twitterIcon-roundIcon" />
                <UploadImageFile id="IconImg" title="twitterIcon-usedIcon" />
            </RadioButtonList>

            <UpDownList id="sidebarButtons" title="sidebarButton-settingTitle">
                <CheckBox value="sidebarSetting.buttonConfig.smallerSidebarContent" name="sidebarButton-setting-narrowBetweenButtons" />
                <CheckBox value="sidebarSetting.buttonConfig.sidebarNoneScrollbar" name="sidebarButton-setting-sidebarNoneScrollbar" />
                <CheckBox value="sidebarSetting.buttonConfig.birdGoBackHome" name="sidebarButton-setting-birdGoBackHome" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("sidebarButton-accountSwitcher-settingTitle") }}</h2>
                <CheckBox value="accountSwitcher.icon" name="sidebarButton-accountSwitcher-Icon" />
                <CheckBox value="accountSwitcher.nameID" name="sidebarButton-accountSwitcher-NameID" />
                <CheckBox value="accountSwitcher.moreMenu" name="sidebarButton-accountSwitcher-MoreMenu" />
            </UpDownList>

            <details class="TUICDetails">
                <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">{{ TUICI18N.get("profileSetting-settingTitle") }}</summary>
                <div class="TUIC_col_setting_container">
                    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("profileSetting-tabs-settingTitle") }}</h2>
                    <CheckBoxListSub id="profileSetting.tabs" />
                    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("invisibleItems-settingTitle") }}</h2>
                    <CheckBoxListSub id="profileSetting.invisible" />
                </div>
            </details>

            <CheckBoxList id="invisibleItems" title="invisibleItems-settingTitle" />
            <CheckBoxList id="timeline" title="timeline-settingTitle" />
            <CheckBoxList id="XToTwitter" title="XToTwitter-settingTitle">
                <button id="XToTwitterRestoreIcon" class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" style="margin-bottom: 10px">
                    {{ TUICI18N.get("XtoTwitter-twitterIcon") }}
                </button>
            </CheckBoxList>
            <CheckBoxList id="rightSidebar" title="rightSidebar-settingTitle" />
            <br />
            <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width default_set">
                {{ TUICI18N.get("settingUI-restoreDefaultAll") }}
            </button>
            <br /><br />

            <customCSS />
            <exportSettings />
            <importSettings />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TUICI18N } from "../../content/i18n";
import { TUICPref } from "../../content/library";

import UpDownList from "./components/UpDownList.vue";
import CheckBox from "./components/CheckBox.vue";
import RadioButtonList from "./components/RadioButtonList.vue";
import UploadImageFile from "./components/UploadImageFile.vue";
import CheckBoxList from "./components/CheckBoxList.vue";
import RadioButtonListSub from "./components/RadioButtonListSub.vue";
import ColorsList from "./components/ColorsList.vue";
import UpDownListSub from "./components/UpDownListSub.vue";
import CheckBoxListSub from "./components/CheckBoxListSub.vue";

import customCSS from "./modules/customCSS.vue";
import exportSettings from "./modules/exportSettings.vue";
import importSettings from "./modules/importSettings.vue";
import settingColors from "./modules/settingColors.vue";
import settingsHeader from "./modules/settingsHeader.vue";

export default defineComponent({
    components: {
        UpDownList,
        CheckBox,
        RadioButtonList,
        UploadImageFile,
        CheckBoxList,
        RadioButtonListSub,
        ColorsList,
        customCSS,
        exportSettings,
        importSettings,
        settingColors,
        settingsHeader,
        UpDownListSub,
        CheckBoxListSub,
    },
    setup() {
        return { TUICI18N, TUICPref };
    },
});
</script>
