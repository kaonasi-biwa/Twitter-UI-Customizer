<template>
    <RadioButton v-for="i of TUICPref.getSettingData(id)" :key="i.id" :id="id" :valueName="i.id" :name="i.i18n" />
</template>

<script setup lang="ts">
import { TUICPref } from "@content/modules";
import RadioButton from "./RadioButton.vue";

const props = defineProps<{ id: TUICPref.TUICSettingIDs }>();
</script>

<style scoped></style>
