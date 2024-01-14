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

<script setup lang="ts">
import { TUICData } from "@content/data";

import ColorSetting from "./ColorSetting.vue";

const props = defineProps<{ id: string }>();

const _color = TUICData.colors[props.id];
const typeColor = _color["typeColor"] === "imageColor" ? "settingUI-colorPicker-svgColor" : "settingUI-colorPicker-textColor";
</script>

<style scoped></style>
