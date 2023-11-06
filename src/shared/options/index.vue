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
            <br /><br />
            <settingsHeader />
            <br /><br />
            <settingColors />

            <UpDownList id="visibleButtons" title="bottomTweetButtons-settingTitle-v2">
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("bottomTweetButtons-settingTitle") }}</h2>
                <Checkbox id="bottomScroll" :value="TUICPref.get('tweetDisplaySetting.bottomScroll')" name="bottomTweetButtons-setting-visibleScrollBar" type="tweetDisplaySetting" />
                <Checkbox id="RTNotQuote" :value="TUICPref.get('tweetDisplaySetting.RTNotQuote')" name="bottomTweetButtons-setting-RTNotQuote" type="tweetDisplaySetting" />
                <Checkbox id="noModalbottomTweetButtons" :value="TUICPref.get('tweetDisplaySetting.noModalbottomTweetButtons')" name="bottomTweetButtons-setting-noModal" type="tweetDisplaySetting" />
                <Checkbox id="noNumberBottomTweetButtons" :value="TUICPref.get('tweetDisplaySetting.noNumberBottomTweetButtons')" name="bottomTweetButtons-setting-noNumber" type="tweetDisplaySetting" />

                <RadioButtonListSub id="tweetDisplaySetting.linkCopyURL" title="bottomTweetButtons-setting-linkCopyURL" type="TUICRadio" />
                <RadioButtonListSub id="timeline-discoverMore" title="timeline-discoverMore" type="TUICRadio" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("fixEngagements-settingTitle") }}</h2>
                <UpDownListSub id="fixEngagements" />
                <br />
                <Checkbox id="placeEngagementsLink" :value="TUICPref.get('otherBoolSetting.placeEngagementsLink')" name="bottomTweetButtons-setting-placeEngagementsLink" type="otherBoolSetting" />
                <Checkbox id="placeEngagementsLinkShort" :value="TUICPref.get('otherBoolSetting.placeEngagementsLinkShort')" name="fixEngagements-shortName" type="otherBoolSetting" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("bottomTweetButtons-settingTitle-linkCard") }}</h2>
                <Checkbox id="showLinkCardInfo" :value="TUICPref.get('otherBoolSetting.showLinkCardInfo')" name="bottomTweetButtons-setting-showLinkCardInfo" type="otherBoolSetting" />
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">{{ TUICI18N.get("invisibleItems-settingTitle") }}</h2>
                <CheckBoxListSub id="tweetDisplaySetting" type="tweetDisplaySetting" />
            </UpDownList>
            <RadioButtonList id="twitterIcon" title="twitterIcon-settingTitle" type="TUICRadio">
                <br />
                <Checkbox id="faviconSet" :value="TUICPref.get('others.faviconSet') ?? true" name="twitterIcon-favicon" type="otherBoolSetting" />
                <Checkbox id="roundIcon" :value="TUICPref.get('others.roundIcon') ?? true" name="twitterIcon-roundIcon" type="otherBoolSetting" />
                <UploadImageFile title="twitterIcon-usedIcon" id="IconImg" />
            </RadioButtonList>
            <UpDownList id="sidebarButtons" title="sidebarButton-settingTitle">
                <Checkbox id="smallerSidebarContent" :value="TUICPref.get('others.smallerSidebarContent') ?? true" name="sidebarButton-setting-narrowBetweenButtons" type="otherBoolSetting" />
                <Checkbox id="sidebarNoneScrollbar" :value="TUICPref.get('others.sidebarNoneScrollbar') ?? false" name="sidebarButton-setting-sidebarNoneScrollbar" type="otherBoolSetting" />
            </UpDownList>

            <CheckboxList id="invisibleItems" title="invisibleItems-settingTitle" type="TUICInvisibleItems" />
            <CheckboxList id="timeline" title="timeline-settingTitle" type="timelineSetting">
                <RadioButtonListSub id="timeline-discoverMore" title="timeline-discoverMore" type="TUICRadio" />
            </CheckboxList>
            <CheckboxList id="XToTwitter" title="XToTwitter-settingTitle" type="TUICXToTwitter">
                <button class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" style="margin-bottom: 10px" id="XToTwitterRestoreIcon">
                    {{ TUICI18N.get("XtoTwitter-twitterIcon") }}
                </button>
            </CheckboxList>
            <CheckboxList id="rightSidebar" title="rightSidebar-settingTitle" type="rightSidebar" />
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
import Checkbox from "./components/Checkbox.vue";
import RadioButtonList from "./components/RadioButtonList.vue";
import UploadImageFile from "./components/UploadImageFile.vue";
import CheckboxList from "./components/CheckboxList.vue";
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
    setup() {
        return { TUICI18N, TUICPref };
    },
    components: {
        UpDownList,
        Checkbox,
        RadioButtonList,
        UploadImageFile,
        CheckboxList,
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
});
</script>
