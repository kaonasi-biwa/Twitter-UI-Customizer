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

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "@content/i18n";
import { TUICPref, TUICLibrary } from "@content/library";
import { TUICObserver } from "@content/observer";
import { isSafemode } from "@content/safemode";
import { TUICData } from "@content/data";
import defaultPrefButton from "../components/defaultPrefButton.vue";

export default defineComponent({
    components: {
        defaultPrefButton,
    },
    setup() {
        const buttonList = [
            {
                i18n: "easySetting-restoreIcon",
                changePref: {
                    otherBoolSetting: {
                        faviconSet: true,
                    },
                    XToTwitter: {
                        XToTwitter: true,
                        PostToTweet: true,
                    },
                    sidebarSetting: { buttonConfig: { birdGoBackHome: true } },
                    twitterIcon: "twitter",
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
                    TUICPref.set(
                        "sidebarButtons",
                        TUICPref.get("sidebarButtons").filter((elem) => {
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
                changePref: structuredClone(TUICData.defaultTwitterColor),
            },
        ];
        const clickEv = (index) => {
            TUICPref.set("", TUICPref.merge(TUICPref.get(""), buttonList[index].changePref ?? {}));
            buttonList[index]?.changeFunc?.();
            TUICPref.save();
            if (!isSafemode) {
                document.querySelector("#TUIC_setting").remove();
            }
            TUICLibrary.getClasses.update();
            TUICObserver.titleObserverFunction();
            if (!TUICPref.get("XToTwitter.XToTwitter") && document.title.endsWith(" / Twitter")) {
                document.title = document.title.replace(" / Twitter", " / X");
            }
        };
        return { TUICI18N, buttonList, clickEv };
    },
});
</script>

<style scoped></style>
