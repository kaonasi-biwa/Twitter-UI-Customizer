<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="TUIC_setting" class="css-1dbjc4n r-1wtj0ep r-ymttw5 r-1f1sjgu r-1e081e0 TUICOriginalContent">
        <div class="css-901oao css-cens5h r-jwli3a r-1tl8opc r-adyw6z r-1vr29t4 r-135wba7 r-bcqeeo r-qvutc0">
            <h2 aria-level="2" role="heading" class="css-4rbku5 css-1dbjc4n r-18u37iz">
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
                <CheckBox id="bottomScroll" :value="TUICPref.get('tweetDisplaySetting.bottomScroll')" name="bottomTweetButtons-setting-visibleScrollBar" type="tweetDisplaySetting" />
                <CheckBox id="RTNotQuote" :value="TUICPref.get('tweetDisplaySetting.RTNotQuote')" name="bottomTweetButtons-setting-RTNotQuote" type="tweetDisplaySetting" />
                <CheckBox id="noModalbottomTweetButtons" :value="TUICPref.get('tweetDisplaySetting.noModalbottomTweetButtons')" name="bottomTweetButtons-setting-noModal" type="tweetDisplaySetting" />
                <CheckBox id="noNumberBottomTweetButtons" :value="TUICPref.get('tweetDisplaySetting.noNumberBottomTweetButtons')" name="bottomTweetButtons-setting-noNumber" type="tweetDisplaySetting" />

                <RadioButtonListSub id="tweetDisplaySetting.linkCopyURL" title="bottomTweetButtons-setting-linkCopyURL" type="TUICRadio" />
                <RadioButtonListSub id="tweetDisplaySetting.linkShareCopyURL" title="bottomTweetButtons-setting-linkShareCopyURL" type="TUICRadio" />
                <RadioButtonListSub id="timeline-discoverMore" title="timeline-discoverMore" type="TUICRadio" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("fixEngagements-settingTitle") }}</h2>
                <UpDownListSub id="fixEngagements" />
                <br />
                <CheckBox id="placeEngagementsLink" :value="TUICPref.get('otherBoolSetting.placeEngagementsLink')" name="bottomTweetButtons-setting-placeEngagementsLink" type="otherBoolSetting" />
                <CheckBox id="placeEngagementsLinkShort" :value="TUICPref.get('otherBoolSetting.placeEngagementsLinkShort')" name="fixEngagements-shortName" type="otherBoolSetting" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("bottomTweetButtons-settingTitle-linkCard") }}</h2>
                <CheckBox id="showLinkCardInfo" :value="TUICPref.get('otherBoolSetting.showLinkCardInfo')" name="bottomTweetButtons-setting-showLinkCardInfo" type="otherBoolSetting" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("invisibleItems-settingTitle") }}</h2>
                <CheckBoxListSub id="tweetDisplaySetting" type="tweetDisplaySetting" />
            </UpDownList>
            <RadioButtonList id="twitterIcon" title="twitterIcon-settingTitle" type="TUICRadio">
                <br />
                <CheckBox id="faviconSet" :value="TUICPref.get('others.faviconSet') ?? true" name="twitterIcon-favicon" type="otherBoolSetting" />
                <CheckBox id="roundIcon" :value="TUICPref.get('others.roundIcon') ?? true" name="twitterIcon-roundIcon" type="otherBoolSetting" />
                <UploadImageFile id="IconImg" title="twitterIcon-usedIcon" />
            </RadioButtonList>

            <UpDownList id="sidebarButtons" title="sidebarButton-settingTitle">
                <CheckBox id="smallerSidebarContent" :value="TUICPref.get('sidebarSetting.buttonConfig.smallerSidebarContent') ?? true" name="sidebarButton-setting-narrowBetweenButtons" type="sidebarSettingButtonConfig" />
                <CheckBox id="sidebarNoneScrollbar" :value="TUICPref.get('sidebarSetting.buttonConfig.sidebarNoneScrollbar') ?? false" name="sidebarButton-setting-sidebarNoneScrollbar" type="sidebarSettingButtonConfig" />
                <CheckBox id="birdGoBackHome" :value="TUICPref.get('sidebarSetting.buttonConfig.birdGoBackHome') ?? false" name="sidebarButton-setting-birdGoBackHome" type="sidebarSettingButtonConfig" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("sidebarButton-accountSwitcher-settingTitle") }}</h2>
                <CheckBox id="icon" :value="TUICPref.get('accountSwitcher.icon') ?? false" name="sidebarButton-accountSwitcher-Icon" type="accountSwitcher" />
                <CheckBox id="nameID" :value="TUICPref.get('accountSwitcher.nameID') ?? false" name="sidebarButton-accountSwitcher-NameID" type="accountSwitcher" />
                <CheckBox id="moreMenu" :value="TUICPref.get('accountSwitcher.moreMenu') ?? false" name="sidebarButton-accountSwitcher-MoreMenu" type="accountSwitcher" />
            </UpDownList>

            <details class="TUICDetails">
                <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">{{ TUICI18N.get("profileSetting-settingTitle") }}</summary>
                <div class="TUIC_col_setting_container">
                    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("profileSetting-tabs-settingTitle") }}</h2>
                    <CheckBoxListSub id="profileSetting.tabs" type="profileSettingTabs" />
                    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("invisibleItems-settingTitle") }}</h2>
                    <CheckBoxListSub id="profileSetting.invisible" type="profileSettingInvisible" />
                </div>
            </details>

            <CheckBoxList id="invisibleItems" title="invisibleItems-settingTitle" type="TUICInvisibleItems" />
            <CheckBoxList id="timeline" title="timeline-settingTitle" type="timelineSetting" />
            <CheckBoxList id="XToTwitter" title="XToTwitter-settingTitle" type="TUICXToTwitter">
                <button id="XToTwitterRestoreIcon" class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" style="margin-bottom: 10px">
                    {{ TUICI18N.get("XtoTwitter-twitterIcon") }}
                </button>
            </CheckBoxList>
            <CheckBoxList id="rightSidebar" title="rightSidebar-settingTitle" type="rightSidebar" />
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
