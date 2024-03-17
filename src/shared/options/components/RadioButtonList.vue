<template>
    <RadioButton v-for="i in TUICPref.ids[id].all" :key="i" :id="id" :valueName="i" :name="TUICPref.ids[id].i18n[i]" />
</template>

<script setup lang="ts">
import { TUICPref } from "@content/modules";
import RadioButton from "./RadioButton.vue";

const props = defineProps<{ id: string }>();
</script>

<style scoped></style>
