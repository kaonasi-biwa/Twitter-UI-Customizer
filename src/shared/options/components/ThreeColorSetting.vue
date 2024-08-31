<template>
    <template v-for="colorType in colorTypeList" :key="colorType">
        <ColorSetting :id="id" :type="colorType" :text="`settingUI-colorPicker-${colorType}`" />
    </template>
</template>

<script setup lang="ts">
import { getColorTypes, TUICColorIDs } from "@content/modules/pref";
import ColorSetting from "./ColorSetting.vue";

const props = defineProps<{ id: TUICColorIDs }>();

const colorTypeList = getColorTypes(props.id);
</script>

<style scoped></style>
