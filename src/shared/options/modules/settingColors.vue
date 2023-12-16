<template>
    <div style="display: flex">
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
    <button class="TUIC_setting_text TUIC_setting_button TUICEasySettingButtons" style="margin-top: 10px; margin-bottom: 10px" @click="defaultTwitterColor">
        {{ TUICI18N.get("settingColors-newTwitterColor") }}
    </button>
    <br />
    <ColorsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "@content/i18n";
import { isSafemode } from "@content/safemode";
import { TUICData } from "@content/data";

import ColorsList from "../components/ColorsList.vue";

import { TUICLibrary, TUICPref } from "@content/library";

import { useStore } from "../store";

const ColorSettingRadio = (event) => {
    const store = useStore();
    store.editingColorType = event.currentTarget.getAttribute("value");
};

export default defineComponent({
    components: { ColorsList },
    setup() {
        const defaultTwitterColor = () => {
            const importPref = structuredClone(TUICData.defaultTwitterColor);
            TUICPref.set("", TUICLibrary.updatePref.merge(TUICPref.get(""), importPref));
            TUICPref.save();
            if (!isSafemode) {
                document.querySelector("#TUIC_setting").remove();
            }
            TUICLibrary.getClasses.update();
        };
        return { TUICI18N, TUICLibrary, ColorSettingRadio, defaultTwitterColor };
    },
});
</script>

<style scoped></style>
