<template>
    <div :class="['TUIC_setting_color_colmn', !isDefault ? 'TUIC_ISNOTDEFAULT' : '', `TUICColorBoxRoot`]" ref="colorRoot">
        <h4 class="r-jwli3a r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">
            {{ TUICI18N.get(text) }}
        </h4>
        <div class="TUIC_setting_input_container">
            <template v-if="ColorData.defaultTUICColor.colors[id]?.ldColor && store.editingColorType == 'buttonColor'">
                <label class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 10px"> {{ TUICI18N.get("settingColors-pleaseLD") }} </label><br />
            </template>
            <template v-else>
                <ColorResetButton :btn-id="`${id}-${type}-default`" :btn-title="TUICI18N.get('settingUI-colorPicker-restoreDefault')" @clicked-btn="resetBtnClicked" />
                <RoundedColorPicker :input-id="`${id}-${type}`" :input-color-value="TUICColor1" @valueChanged="colorChanged" ref="rColorPicker" />
                <TransparentToggleButton :btn-id="`${id}-${type}`" :is-checked="TUIC_color[3] == '0'" @btn-clicked="TransparentToggleButtonClicked" :title-string="TUICI18N.get(`settingUI-colorPicker-transparent`)" ref="transparentButton" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { TUICI18N } from "@modules/i18n";
import { TUICLibrary } from "@content/library";

import RoundedColorPicker from "@shared/settings/components/RoundedColorPicker.vue";
import TransparentToggleButton from "@shared/settings/components/TransparentToggleButton.vue";
import ColorResetButton from "@shared/settings/components/ColorResetButton.vue";
import { TUICPref } from "@content/modules";
import { applySystemCss } from "@content/applyCSS";

import { useStore } from "../store";
import { ColorData } from "@shared/sharedData";

const transparentButton = ref(null);
const colorRoot = ref(null);
const rColorPicker = ref(null);

const props = defineProps<{
    id: string;
    type: string;
    text: string;
}>();

const store = useStore();

function colorChanged(value) {
    changeColor(props.id, props.type, store.editingColorType, value);
}
function TransparentToggleButtonClicked(value) {
    changeColorCheck(props.id, props.type, store.editingColorType, value);
}
function resetBtnClicked() {
    defaultColor(props.id, props.type, store.editingColorType);
}

// Prefにデータが保持されているか確認して、あるならデフォルトじゃない
const isDefault = computed(() => {
    return !!TUICPref.getPref(store.editingColorType)?.[props.id]?.[props.type];
});
// Prefから設定された色を取得(配列で[R: string, G: string, B: string]の形式)
// このコンポーネントを呼び出すときのpropsから取得する色の場所などが決定される
const TUIC_color = computed(() => {
    return TUICLibrary.color.getColorFromPref(props.id, props.type, store.editingColorType).replace("rgba(", "").replace(")", "").replaceAll(" ", "").split(",");
});

// TUIC_colorで取得した色をhex形式に変換して返す
const TUICColor1 = computed(() => {
    return TUICLibrary.color.rgb2hex(TUIC_color.value.slice(0, 3).map((elem) => Number(elem)));
});

function defaultColor(colorAttr, colorType, colorKind) {
    if (TUICPref.getPref(`${colorKind}.${colorAttr}`) && TUICPref.getPref(`${colorKind}.${colorAttr}.${colorType}`)) TUICPref.deletePref(`${colorKind}.${colorAttr}.${colorType}`);

    const TUIC_color = TUICLibrary.color.getColorFromPref(colorAttr, colorType, colorKind).replace("rgba(", "").replace(")", "").replaceAll(" ", "").split(",");
    const TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])]);

    // 各子コンポーネントの関数を呼び出し、デフォルトに設定した色を反映します
    rColorPicker.value.setInputValue(TUICColor1);
    transparentButton.value.setCheckedValue(TUIC_color[3] == 0);
    colorRoot.value.classList.add("TUIC_ISNOTDEFAULT");

    TUICPref.save();

    applySystemCss();
}

function changeColor(colorAttr, colorType, colorKind, colorPickerVal) {
    const colorValue = TUICLibrary.color.hex2rgb(colorPickerVal);
    const isChecked = transparentButton.value.checked;

    TUICPref.setPref(`${colorKind}.${colorAttr}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`);

    // CHECKの出現？
    colorRoot.value.classList.remove("TUIC_ISNOTDEFAULT");

    TUICPref.save();

    applySystemCss();
}

function changeColorCheck(colorAttr, colorType, colorKind, isChecked) {
    const colorValue = TUICLibrary.color.getColorFromPref(props.id, props.type, store.editingColorType).replace("rgba(", "").replace(")", "").replaceAll(" ", "").split(",");

    TUICPref.setPref(`${colorKind}.${colorAttr}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`);
    colorRoot.value.classList.remove("TUIC_ISNOTDEFAULT");

    TUICPref.save();

    applySystemCss();
}
</script>

<style scoped></style>
@modules/i18n/i18n
