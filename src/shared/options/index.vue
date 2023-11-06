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

            <UpDownList id="visibleButtons" title="bottomTweetButtons-settingTitle">
                <Checkbox id="bottomScroll" :value="TUICPref.get('others.bottomScroll')" name="bottomTweetButtons-setting-visibleScrollBar" type="otherBoolSetting" />
                <Checkbox id="bottomSpace" :value="TUICPref.get('others.bottomSpace')" name="bottomTweetButtons-setting-removeSpaceBottomTweet-v2" type="otherBoolSetting" />
                <Checkbox id="RTNotQuote" :value="TUICPref.get('others.RTNotQuote')" name="bottomTweetButtons-setting-RTNotQuote" type="otherBoolSetting" />
                <Checkbox id="noModalbottomTweetButtons" :value="TUICPref.get('others.noModalbottomTweetButtons')" name="bottomTweetButtons-setting-noModal" type="otherBoolSetting" />
                <Checkbox id="noNumberBottomTweetButtons" :value="TUICPref.get('others.noNumberBottomTweetButtons')" name="bottomTweetButtons-setting-noNumber" type="otherBoolSetting" />
            </UpDownList>
            <UpDownList id="fixEngagements" title="fixEngagements-settingTitle">
                <Checkbox id="placeEngagementsLink" :value="TUICPref.get('others.placeEngagementsLink')" name="bottomTweetButtons-setting-placeEngagementsLink" type="otherBoolSetting" />
                <Checkbox id="placeEngagementsLinkShort" :value="TUICPref.get('others.placeEngagementsLinkShort')" name="fixEngagements-shortName" type="otherBoolSetting" />
            </UpDownList>
            <UpDownList id="sidebarButtons" title="sidebarButton-settingTitle">
                <Checkbox id="smallerSidebarContent" :value="TUICPref.get('others.smallerSidebarContent') ?? true" name="sidebarButton-setting-narrowBetweenButtons" type="otherBoolSetting" />
                <Checkbox id="sidebarNoneScrollbar" :value="TUICPref.get('others.sidebarNoneScrollbar') ?? false" name="sidebarButton-setting-sidebarNoneScrollbar" type="otherBoolSetting" />
            </UpDownList>
            <RadioButtonList id="twitterIcon" title="twitterIcon-settingTitle" type="TUICRadio">
                <br />
                <Checkbox id="faviconSet" :value="TUICPref.get('others.faviconSet') ?? true" name="twitterIcon-favicon" type="otherBoolSetting" />
                <Checkbox id="roundIcon" :value="TUICPref.get('others.roundIcon') ?? true" name="twitterIcon-roundIcon" type="otherBoolSetting" />
                <UploadImageFile title="twitterIcon-usedIcon" id="IconImg" />
            </RadioButtonList>
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
    },
});
</script>
