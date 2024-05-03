<template>
    <div>
        <SectionTitle2 title-i18-n="bottomTweetButtons-settingTitle" />
        <FIGURE_TWEETBUTTONS_BOTTOM class="TUIC_setting_TwButtonFigure" />

        <UpDownList id="visibleButtons" />
        <CheckBox style="padding-top: 20px" value="tweetDisplaySetting.bottomScroll" name="bottomTweetButtons-setting-visibleScrollBar" />
        <CheckBox value="tweetDisplaySetting.likeToFavo" name="bottomTweetButtons-setting-likeToFavo" />

        <settingSubtitle2 title-i18-n="common-hidebelow" />
        <CheckBox value="tweetDisplaySetting.RTNotQuote" name="bottomTweetButtons-setting-RTNotQuote" />
        <CheckBox value="tweetDisplaySetting.noModalbottomTweetButtons" name="bottomTweetButtons-setting-noModal" />
        <CheckBox value="tweetDisplaySetting.noNumberBottomTweetButtons" name="bottomTweetButtons-setting-noNumber" />

        <div style="margin-top: 20px">
            <SettingSubTitle i18n="setting-linkShareCopyURL" />
            <settingSubtitle2 title-i-18-n="bottomTweetButtons-setting-linkCopy" />
            <RadioButtonList id="tweetDisplaySetting.linkCopyURL" /><br />

            <settingSubtitle2 style="margin-top: 0" title-i-18-n="bottomTweetButtons-setting-linkShareMenuCopy" />
            <RadioButtonList id="tweetDisplaySetting.linkShareCopyURL" /><br />
        </div>
    </div>
    <hr class="TUIC_setting_divider TUIC_setting_divider_nomargin" />
    <div>
        <SectionTitle2 title-i18-n="tweetTopButton-settingTitle" />
        <FIGURE_TWEETBUTTONS_TOP class="TUIC_setting_TwButtonFigure_top TUIC_setting_TwButtonFigure" />

        <UpDownList id="tweetTopButton" />

        <settingSubtitle2 title-i18-n="common-hidebelow" />
        <CheckBox value="tweetTopButtonBool.noModalbottomTweetButtons" name="bottomTweetButtons-setting-noModal" />
    </div>
    <hr class="TUIC_setting_divider TUIC_setting_divider_nomargin" />
    <div>
        <SectionTitle2 title-i18-n="tweetMoreMenuItems-settingTitle" />

        <settingSubtitle2 title-i18-n="common-hidebelow" />
        <CheckBoxList id="tweetDisplaySetting.tweetMoreMenuItems" />
    </div>
    <hr class="TUIC_setting_divider TUIC_setting_divider_nomargin" />
    <div>
        <SectionTitle2 title-i18-n="fixEngagements-settingTitle" />
        <FIGURE_TWEET_ENGAGEMENT class="TUIC_setting_TwEngagementFigure" />
        <UpDownList style="margin-top: 20px" id="fixEngagements" />
        <CheckBox style="margin-top: 20px" value="otherBoolSetting.placeEngagementsLink" name="bottomTweetButtons-setting-placeEngagementsLink" />
        <CheckBox value="otherBoolSetting.placeEngagementsLinkShort" name="fixEngagements-shortName" />
    </div>
    <hr class="TUIC_setting_divider TUIC_setting_divider_nomargin" />
    <div>
        <SectionTitle2 style="margin-bottom: 15px" titleI18N="timeline-discoverMore" />
        <RadioButtonList id="timeline-discoverMore" />
    </div>
    <hr class="TUIC_setting_divider TUIC_setting_divider_nomargin" />
    <div>
        <SectionTitle2 titleI18N="tweetViewSettings-other" />

        <settingSubtitle2 title-i18-n="common-hidebelow" />
        <CheckBoxList id="tweetDisplaySetting" />
    </div>
</template>

<script setup lang="ts">
import UpDownList from "@shared/options/components/UpDownList.vue";
import SectionTitle2 from "../components/SectionTitle2.vue";
import settingSubtitle2 from "../components/settingSubtitle2.vue";
import FIGURE_TWEETBUTTONS_BOTTOM from "@content/icons/figure/tweet_buttons.svg?component";
import FIGURE_TWEETBUTTONS_TOP from "@content/icons/figure/tweet_buttons_top.svg?component";
import FIGURE_TWEET_ENGAGEMENT from "@content/icons/figure/tweet_engagement.svg?component";
import CheckBox from "@shared/options/components/CheckBox.vue";
import CheckBoxList from "@shared/options/components/CheckBoxList.vue";
import RadioButtonList from "@shared/options/components/RadioButtonList.vue";
import SettingSubTitle from "@shared/options/components/textParts/settingSubTitle.vue";
</script>
