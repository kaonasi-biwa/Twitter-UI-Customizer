<template>
    <template v-for="i in getSettingData(id)" :key="i.id">
        <CheckBox :value="`${id}.${i.id}`" :name="i.i18n" />
    </template>
</template>

<script setup lang="ts">
import { getSettingData, SettingGroupKeys } from "@content/settings";
import CheckBox from "./CheckBox.vue";

defineProps<{ id: SettingGroupKeys<"boolean"> }>();
</script>

<style scoped></style>
