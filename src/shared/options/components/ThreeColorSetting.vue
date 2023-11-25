<template>
    <template v-if="_color['background']">
        <ColorSetting :id="id" type="background" text="settingUI-colorPicker-background" />
    </template>
    <template v-if="_color['border']">
        <ColorSetting :id="id" type="border" text="settingUI-colorPicker-border" />
    </template>
    <template v-if="_color['color']">
        <ColorSetting :id="id" type="color" :text="typeColor" />
    </template>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { TUICData } from "../../../content/data";
import { TUICLibrary } from "../../../content/library";
import { TUICPref } from "../../../content/library";

import ColorSetting from "./ColorSetting.vue";

//色の設定のひとまとまり(id:色のID。種類・色はTUICPrefから自動補完される)
// threeColorSetting: function (id) {
//     let returnItem = "";
//     if (TUICData.colors[id]["background"]) {
//         returnItem += this.colorSetting(id, "background", TUICLibrary.color.getColorFromPref(id, "background", TUICLibrary.getEditingColorType()), "settingUI-colorPicker-background", !!TUICPref.get(TUICLibrary.getEditingColorType())?.[id]?.background, TUICLibrary.getEditingColorType());
//     }
//     if (TUICData.colors[id]["border"]) {
//         returnItem += this.colorSetting(id, "border", TUICLibrary.color.getColorFromPref(id, "border", TUICLibrary.getEditingColorType()), "settingUI-colorPicker-border", !!TUICPref.get(TUICLibrary.getEditingColorType())?.[id]?.border, TUICLibrary.getEditingColorType());
//     }
//     if (TUICData.colors[id]["color"]) {
//         returnItem += this.colorSetting(
//             id,
//             "color",
//             TUICLibrary.color.getColorFromPref(id, "color", TUICLibrary.getEditingColorType()),
//             TUICData.colors[id]?.typeColor == "imageColor" ? "settingUI-colorPicker-svgColor" : "settingUI-colorPicker-textColor",
//             !!TUICPref.get(TUICLibrary.getEditingColorType())?.[id]?.color,
//             TUICLibrary.getEditingColorType(),
//         );
//     }
//     return returnItem;
// },

import { useStore } from "../store";

export default defineComponent({
    components: {
        ColorSetting,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();
        const _color = computed(() => {
            return TUICData.colors[props.id];
        });
        const typeColor = computed(() => {
            return _color.value["typeColor"] === "imageColor" ? "settingUI-colorPicker-svgColor" : "settingUI-colorPicker-textColor";
        });
        return { typeColor, TUICLibrary, TUICPref, store, _color };
    },
});
</script>

<style scoped></style>
