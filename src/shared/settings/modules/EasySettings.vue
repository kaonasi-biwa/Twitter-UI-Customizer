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

import { ColorData } from "@shared/sharedData";

import { getPref, setPref, savePref, mergePref } from "@modules/pref";
import { titleObserverFunction } from "@content/modules/observer/titleObserver";
import { updateClasses } from "@content/modules/htmlClass/classManager";
import { isSafemode } from "@content/modules/settings/safemode/isSafemode";

// copied from old component; @shared/options/modules/SettingsHeader.vue
const buttonList = [
    {
        i18n: "easySetting-restoreIcon",
        iconSource: BRAND_TWITTER,
        changePref: {
            twitterIcon: {
                options: {
                    faviconSet: true,
                },
                icon: "twitter",
            },
            XToTwitter: {
                XToTwitter: true,
                PostToTweet: true,
            },
            sidebarSetting: { homeIcon: "birdGoBack" },
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
                invisible: {
                    //"twitter-pro-promotion-btn": true,
                    "subscribe-tweets": true,
                },
            },
        },
        changeFunc: () => {
            setPref(
                "sidebarButtons",
                getPref("sidebarButtons").filter((elem) => {
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
        changePref: structuredClone(ColorData.defaultXColors),
    },
];

const clickEv = (index) => {
    setPref("", mergePref(getPref(""), buttonList[index].changePref ?? {}));
    buttonList[index]?.changeFunc?.();
    savePref();
    if (!isSafemode) {
        document.querySelector("#TUIC_setting").remove();
    }
    updateClasses();
    titleObserverFunction();
    if (!getPref("XToTwitter.XToTwitter") && document.title.endsWith(" / Twitter")) {
        document.title = document.title.replace(" / Twitter", " / X");
    }
};
// end of copied codes
</script>
