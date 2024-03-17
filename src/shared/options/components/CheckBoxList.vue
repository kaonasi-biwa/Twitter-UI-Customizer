<template>
    <template v-for="i in TUICPref.ids[id].all" :key="i">
        <CheckBox :value="`${id}.${i}`" :name="TUICPref.ids[id].i18n[i]" />
    </template>
</template>

<script setup lang="ts">
import { TUICPref } from "@content/modules";
import CheckBox from "./CheckBox.vue";

const props = defineProps<{ id: string }>();
</script>

<style scoped></style>
