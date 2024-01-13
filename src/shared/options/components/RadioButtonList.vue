<template>
    <RadioButton v-for="i in TUICData[id].all" :key="i" :id="id" :valueName="i" :name="TUICData[id].i18n[i]" />
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import RadioButton from "./RadioButton.vue";
import { TUICData } from "@content/data";

const props = defineProps<{ id: string }>();
</script>

<style scoped></style>
