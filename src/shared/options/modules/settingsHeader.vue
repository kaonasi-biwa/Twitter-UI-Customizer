<template>
    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title" style="font-size: 18px; margin-bottom: 1px">
        {{ TUICI18N.get("settingUI-easySetting") }}
    </h2>
    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title" style="font-size: 14px">
        {{ TUICI18N.get("settingUI-easySetting-detail") }}
    </h2>
    <div class="TUICEasySetting" style="margin-top: 15px">
        <button class="TUIC_setting_text TUIC_setting_button TUICEasySettingButtons" v-for="(i, index) in buttonList" :key="i.i18n" @click="clickEv(index)">
            {{ TUICI18N.get(i.i18n) }}
        </button>

        <defaultPrefButton :class-list="['TUICEasySettingButtons']" />
    </div>
    <br />
    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title" style="font-size: 18px">
        {{ TUICI18N.get("settingUI-everythingSetting") }}
    </h2>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";
import { isSafemode } from "@modules/settings/safemode/isSafemode.ts";
import { ColorData } from "@shared/sharedData";
import defaultPrefButton from "../components/defaultPrefButton.vue";
import { TUICPref } from "@content/modules";
import { titleObserverFunction } from "@modules/observer/titleObserver";
import { updateClasses } from "@modules/htmlClass/classManager";

const buttonList = [
    {
        i18n: "easySetting-restoreIcon",
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
        changePref: {
            "timeline-discoverMore": "discoverMore_invisible",
        },
    },
    {
        i18n: "easySetting-defaultTwitterColor",
        changePref: structuredClone(ColorData.defaultXColors),
    },
];
const clickEv = (index) => {
    TUICPref.setPref("", TUICPref.mergePref(TUICPref.getPref(""), buttonList[index].changePref ?? {}));
    buttonList[index]?.changeFunc?.();
    TUICPref.save();
    if (!isSafemode) {
        document.querySelector("#TUIC_setting").remove();
    }
    updateClasses();
    titleObserverFunction();
    if (!TUICPref.getPref("XToTwitter.XToTwitter") && document.title.endsWith(" / Twitter")) {
        document.title = document.title.replace(" / Twitter", " / X");
    }
};
</script>

<style scoped></style>
@modules/observer/observer @modules/settings/safemode/safemode @modules/i18n/i18n
