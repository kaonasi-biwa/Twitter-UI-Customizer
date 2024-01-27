<template>
    <div class="TUIC_setting_easysetting_buttons_container">
        <IconButton v-for="(btInfo, index) in buttonList" :key="btInfo.i18n" :i18n="btInfo.i18n" :icon="btInfo.iconSource" @click="clickEv(index)" />
        <defaultPrefButton />
    </div>
</template>

<script setup lang="ts">
import BRAND_TWITTER from "@content/icons/brand/twitter.svg?component";
import ICON_VERIFIED from "@content/icons/common/verified.svg?component";
import ICON_MORE from "@content/icons/common/more.svg?component";
import BRAND_X from "@content/icons/brand/x.svg?component";
import IconButton from "@shared/settings/components/IconButton.vue";
import defaultPrefButton from "../components/defaultPrefButton.vue";
import { TUICLibrary } from "@content/library";
import { TUICObserver } from "@content/observer";
import { isSafemode } from "@content/safemode";
import { TUICData } from "@content/data";
import { TUICPref } from "@content/modules";
// copied from old component; @shared/options/modules/SettingsHeader.vue
const buttonList = [
    {
        i18n: "easySetting-restoreIcon",
        iconSource: BRAND_TWITTER,
        changePref: {
            otherBoolSetting: {
                faviconSet: true,
            },
            XToTwitter: {
                XToTwitter: true,
                PostToTweet: true,
            },
            sidebarSetting: { homeIcon: "birdGoBack" },
            twitterIcon: "twitter",
        },
    },
    {
        i18n: "easySetting-deleteVerified",
        iconSource: ICON_VERIFIED,
        changePref: {
            invisibleItems: {
                verifiedNotifications: true,
            },
            profileSetting: {
                invisible: {
                    "subscribe-profile": true,
                    verifiedFollowerTab: true,
                },
            },
            rightSidebar: {
                verified: true,
            },
            tweetDisplaySetting: {
                "twitter-pro-promotion-btn": true,
                "subscribe-tweets": true,
            },
        },
        changeFunc: () => {
            TUICPref.setPref(
                "sidebarButtons",
                TUICPref.getPref("sidebarButtons").filter((elem) => {
                    return elem != "verified-choose";
                }),
            );
        },
    },
    {
        i18n: "easySetting-discoverMoreDelete",
        iconSource: ICON_MORE,
        changePref: {
            "timeline-discoverMore": "discoverMore_invisible",
        },
    },
    {
        i18n: "easySetting-defaultTwitterColor",
        iconSource: BRAND_X,
        changePref: structuredClone(TUICData.defaultTwitterColor),
    },
];
const clickEv = (index) => {
    TUICPref.setPref("", TUICPref.mergePref(TUICPref.getPref(""), buttonList[index].changePref ?? {}));
    buttonList[index]?.changeFunc?.();
    TUICPref.save();
    if (!isSafemode) {
        document.querySelector("#TUIC_setting").remove();
    }
    TUICLibrary.getClasses.update();
    TUICObserver.titleObserverFunction();
    if (!TUICPref.getPref("XToTwitter.XToTwitter") && document.title.endsWith(" / Twitter")) {
        document.title = document.title.replace(" / Twitter", " / X");
    }
};
// end of copied codes
</script>
