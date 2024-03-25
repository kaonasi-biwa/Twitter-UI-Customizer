<template>
    <!-- defaultRadioBtnがテキストか否かで変える(一応) -->
    <RadioButton style="gap: 15px" v-if="defaultRadioBtn.isText" id="twitterIcon" :valueName="defaultRadioBtn.radioName" :name="TUICData.twitterIcon.i18n.nomal" />
    <IconRadioButton v-if="!defaultRadioBtn.isText" id="twitterIcon" :valueName="defaultRadioBtn.radioName" :name="TUICData.twitterIcon.i18n.nomal" :icon="defaultRadioBtn.svgComponent" />
    <div style="display: flex; justify-content: space-between; align-items: center">
        <span style="margin-left: 28px">{{ TUICI18N.get("twitterIcon-preset") }}</span>
        <div>
            <div style="display: flex; gap: 10px">
                <template v-for="i in presetsRadioButtonsIconAvailable" :key="i.radioName">
                    <IconRadioButton v-if="i.svgComponent" id="twitterIcon" :valueName="i.radioName" :name="TUICData.twitterIcon.i18n[i.radioName]" :icon="i.svgComponent" />
                    <IconRadioButtonBase64Support v-if="i.base64Img" id="twitterIcon" :valueName="i.radioName" :name="TUICData.twitterIcon.i18n[i.radioName]" :base64-img="i.base64Img" />
                </template>
            </div>
            <!-- アイコンが利用不可なものがあるならdetailsboxメニューに追いやる -->
            <details v-if="presetsRadioButtonsText.length !== 0">
                <summary style="list-style-type: revert; list-style: revert; height: fit-content; margin-top: 6px">{{ TUICI18N.get("twitterIcon-other") }}</summary>
                <RadioButton v-for="i in presetsRadioButtonsText" :key="i.radioName" id="twitterIcon" :valueName="i.radioName" :name="TUICData.twitterIcon.i18n[i.radioName]" />
            </details>
        </div>
    </div>
    <!-- customRadioBtnがテキストか否かで(ry -->
    <RadioButton v-if="customRadioBtn.isText" id="twitterIcon" :valueName="customRadioBtn.radioName" :name="TUICData.twitterIcon.i18n.custom" />
    <IconRadioButton v-if="!customRadioBtn.isText" id="twitterIcon" :valueName="customRadioBtn.radioName" :name="TUICData.twitterIcon.i18n.custom" :icon="customRadioBtn.svgComponent" />
</template>

<script setup lang="ts">
import { Component } from "vue";
import RadioButton from "@shared/options/components/RadioButton.vue";
import IconRadioButton from "@shared/options/components/IconRadioButton.vue";
import IconRadioButtonBase64Support from "@shared/options/components/IconRadioButtonBase64Support.vue";
import { TUICI18N } from "@content/i18n";
import { TUICData } from "@content/data";

export type twIconsRadioListProps = {
    radioName: "nomal" | "invisible" | "dog" | "twitter" | "twitterIcon-X" | "custom" | string;
    // テキストの場合iconNameのTUICDataでI18Nから取ってくるので情報いらない
    isText: boolean;
    // アイコンの場合どっちか
    base64Img?: string;
    svgComponent?: Component;
};

const props = defineProps<{
    iconsList: twIconsRadioListProps[];
}>();
// デフォルトが一番上、カスタムが一番下、プリセットが真ん中
// なのでプリセット以外を特別扱いすることにする
// ただ、規定の手順を踏んでTUICDataのtwitterIcon.all等を変更した場合、自動でプリセット欄が増えるようにする

// nomal
const defaultRadioBtn = props.iconsList.find((btn) => btn.radioName === "nomal");
// custom
const customRadioBtn = props.iconsList.find((btn) => btn.radioName === "custom");
// preset
const presetsRadioButtons = props.iconsList.filter((btn) => btn.radioName !== "nomal" && btn.radioName !== "custom");
// プリセットでかつアイコンが利用可
const presetsRadioButtonsIconAvailable = presetsRadioButtons.filter((btn) => !btn.isText);
// プリセットでかつアイコンが利用不可
const presetsRadioButtonsText = presetsRadioButtons.filter((btn) => btn.isText);
</script>
