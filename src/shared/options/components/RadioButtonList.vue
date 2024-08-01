<template>
    <RadioButton v-for="i of getSettingData(id)" :key="i.id" :id="id" :valueName="i.id" :name="i.i18n" />
</template>

<script setup lang="ts">
import { getSettingData, TUICSettingIDs } from "@modules/pref";
import RadioButton from "./RadioButton.vue";

defineProps<{ id: TUICSettingIDs }>();
</script>

<style scoped></style>
