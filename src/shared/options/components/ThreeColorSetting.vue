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

import { TUICData } from "@content/data";
import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";

import ColorSetting from "./ColorSetting.vue";

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
        const _color = TUICData.colors[props.id];
        const typeColor = _color["typeColor"] === "imageColor" ? "settingUI-colorPicker-svgColor" : "settingUI-colorPicker-textColor";
        return { typeColor, TUICLibrary, TUICPref, _color };
    },
});
</script>

<style scoped></style>
