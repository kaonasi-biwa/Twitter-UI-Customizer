<template>
    <IconRadioButton v-for="(i, index) in TUICData[id].all" :key="i" :id="id" :valueName="i" :name="TUICData[id].i18n[i]" :icon="props.iconsList[index]" />
</template>

<script setup lang="ts">
import { Component } from "vue";
import IconRadioButton from "./IconRadioButton.vue";
import { TUICData } from "@content/data";

const props = defineProps<{
    id: string;
    iconsList: Component[];
}>();
</script>

<style scoped></style>
