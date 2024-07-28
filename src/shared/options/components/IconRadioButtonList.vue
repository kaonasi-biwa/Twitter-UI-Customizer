<template>
    <IconRadioButton v-for="(i, index) in TUICPref.getSettingData(id)" :key="i.id" :id="id" :valueName="i.id" :name="i.i18n" :icon="props.iconsList[index]" />
</template>

<script setup lang="ts">
import { Component } from "vue";
import IconRadioButton from "./IconRadioButton.vue";
import { TUICPref } from "@content/modules";
const props = defineProps<{
    id: TUICPref.TUICSettingIDs;
    iconsList: Component[];
}>();
</script>

<style scoped></style>
