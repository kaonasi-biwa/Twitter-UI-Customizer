<template>
    <div id="TUICSelectedColorType">
        <input type="radio" name="TUICColorType" value="buttonColor" id="TUICColorType-Base" class="TUICColorSettingRadio" @change="ColorSettingRadio" checked />
        <label class="TUIC_setting_button TUIC_setting_button_width TUICSettingRadioTypeBigButton" for="TUICColorType-Base" style="background: linear-gradient(125deg, #ffffff 0%, #ffffff 42.5%, #000000 42.5%, #000000 100%)">
            <span>
                <span>{{ TUICI18N.get("settingColors-select-base") }}</span>
            </span>
        </label>
        <input type="radio" name="TUICColorType" value="buttonColorLight" id="TUICColorType-Light" class="TUICColorSettingRadio" @change="ColorSettingRadio" />
        <label class="TUIC_setting_button TUIC_setting_button_width TUICSettingRadioTypeBigButton" for="TUICColorType-Light" style="background-color: rgb(255, 255, 255)">
            <span>
                <span>{{ TUICI18N.get("settingColors-select-light") }}</span>
            </span>
        </label>
        <input type="radio" name="TUICColorType" value="buttonColorDark" id="TUICColorType-Dark" class="TUICColorSettingRadio" @change="ColorSettingRadio" />
        <label class="TUIC_setting_button TUIC_setting_button_width TUICSettingRadioTypeBigButton" for="TUICColorType-Dark" style="background-color: rgb(0, 0, 0)">
            <span>
                <span>{{ TUICI18N.get("settingColors-select-dark") }} </span>
            </span>
        </label>
    </div>
    <div style="margin-left: 10px; margin-right: 10px">
        <span class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 12px">{{ TUICI18N.get("settingColors-select-explain") }} </span>
    </div>
    <br />
    <button class="TUIC_setting_text TUIC_setting_button TUICEasySettingButtons" style="margin-top: 10px; margin-bottom: 10px" @click="setDefaultTwitterColor">
        {{ TUICI18N.get("settingColors-newTwitterColor") }}
    </button>
    <br />
    <ColorsList />
</template>

<script setup lang="ts">
import { TUICI18N } from "@content/i18n";
import { isSafemode } from "@content/safemode";

import ColorsList from "../components/ColorsList.vue";

import { TUICPref } from "@content/modules";

import { useStore } from "../store";
import { ColorData } from "@shared/sharedData";
import { updateClasses } from "@content/modules/htmlClass/classManager";

const ColorSettingRadio = (event) => {
    const store = useStore();
    store.editingColorType = event.currentTarget.getAttribute("value");
};

const setDefaultTwitterColor = () => {
    const importPref = structuredClone(ColorData.defaultXColors);
    TUICPref.setPref("", TUICPref.mergePref(TUICPref.getPref(""), importPref));
    TUICPref.save();
    if (!isSafemode) {
        document.querySelector("#TUIC_setting").remove();
    }
    updateClasses();
};
</script>

<style scoped></style>
