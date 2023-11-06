<template>
    <template v-if="isBtnColors">
        <ColorSetting :id="id" type="background" :color_="TUICLibrary.color.getColorFromPref(id, 'background', editingColorType)" text="settingUI-colorPicker-background" :isDefault="TUICPref.get(editingColorType)?.[id].background === true" :color-kind="editingColorType" />
        <ColorSetting :id="id" type="border" :color_="TUICLibrary.color.getColorFromPref(id, 'border', editingColorType)" text="settingUI-colorPicker-border" :isDefault="TUICPref.get(editingColorType)?.[id].border === true" :color-kind="editingColorType" />
        <ColorSetting :id="id" type="color" :color_="TUICLibrary.color.getColorFromPref(id, 'color', editingColorType)" text="settingUI-colorPicker-textColor" :isDefault="TUICPref.get(editingColorType)?.[id].color === true" :color-kind="editingColorType" />
    </template>
    <template v-else-if="isIcnColors">
        <ColorSetting :id="id" type="color" :color_="TUICLibrary.color.getColorFromPref(id, 'color', editingColorType)" text="settingUI-colorPicker-svgColor" :isDefault="TUICPref.get(editingColorType)?.[id].color === true" :color-kind="editingColorType" />
    </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TUICData } from "../../../content/data";
import { TUICLibrary } from "../../../content/library";
import { TUICPref } from "../../../content/library";

import ColorSetting from "./ColorSetting.vue";

//色の設定のひとまとまり(id:色のID。種類・色はTUICPrefから自動補完される)
// threeColorSetting: function (id: keyof typeof TUICData.colors) {
//     let returnItem = "";
//     const result = zBtnColors.safeParse(TUICData.colors[id]);
//     if (result.success) {
//         returnItem += this.colorSetting(
//             id,
//             "background",
//             TUICLibrary.color.getColorFromPref(id, "background", editingColorType),
//             "settingUI-colorPicker-background",
//             !!settings[editingColorType]?.[id].background,
//             editingColorType,
//         );
//         returnItem += this.colorSetting(
//             id,
//             "border",
//             TUICLibrary.color.getColorFromPref(id, "border", editingColorType),
//             "settingUI-colorPicker-border",
//             !!settings[editingColorType]?.[id].border,
//             editingColorType,
//         );
//         returnItem += this.colorSetting(
//             id,
//             "color",
//             TUICLibrary.color.getColorFromPref(id, "color", editingColorType),
//             TUICData.colors[id]?.typeColor == "imageColor"
//                 ? "settingUI-colorPicker-svgColor"
//                 : "settingUI-colorPicker-textColor",
//             !!settings[editingColorType]?.[id].color,
//             editingColorType,
//         );
//     }
//     const result2 = zIcnColors.safeParse(TUICData.colors[id]);
//     if (result2.success) {
//         returnItem += this.colorSetting(
//             id,
//             "color",
//             TUICLibrary.color.getColorFromPref(id, "color", editingColorType),
//             TUICData.colors[id]?.typeColor == "imageColor"
//                 ? "settingUI-colorPicker-svgColor"
//                 : "settingUI-colorPicker-textColor",
//             !!settings[editingColorType]?.[id].color,
//             editingColorType,
//         );
//     }

//     return returnItem;
// },

export default defineComponent({
    setup(props) {
        const isBtnColors = !!TUICData.colors[props.id]["background"];
        const isIcnColors = !TUICData.colors[props.id]["background"];
        return { isBtnColors, isIcnColors, TUICLibrary, TUICPref };
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        editingColorType: {
            type: String,
        },
    },
    components: {
        ColorSetting,
    },
});
</script>

<style scoped></style>
