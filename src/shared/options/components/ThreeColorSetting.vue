<template>
    <template v-if="background">
        <ColorSetting :id="id" type="background" :color_="TUICLibrary.color.getColorFromPref(id, 'background', editingColorType)" text="settingUI-colorPicker-background" :isDefault="TUICPref.get(editingColorType)?.[id].background === true" :color-kind="editingColorType" />
    </template>
    <template v-if="border">
        <ColorSetting :id="id" type="border" :color_="TUICLibrary.color.getColorFromPref(id, 'border', editingColorType)" text="settingUI-colorPicker-border" :isDefault="TUICPref.get(editingColorType)?.[id].border === true" :color-kind="editingColorType" />
    </template>
    <template v-if="color">
        <ColorSetting :id="id" type="color" :color_="TUICLibrary.color.getColorFromPref(id, 'color', editingColorType)" :text="typeColor" :isDefault="TUICPref.get(editingColorType)?.[id].color === true" :color-kind="editingColorType" />
    </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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

export default defineComponent({
    components: {
        ColorSetting,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        editingColorType: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const _color = TUICData.colors[props.id];
        const background = !!_color["background"];
        const border = !!_color["border"];
        const color = !!_color["color"];
        const typeColor = _color["typeColor"] === "imageColor" ? "settingUI-colorPicker-svgColor" : "settingUI-colorPicker-textColor";
        return { background, border, color, typeColor, TUICLibrary, TUICPref };
    },
});
</script>

<style scoped></style>
