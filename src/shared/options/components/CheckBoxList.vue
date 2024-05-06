<template>
    <template v-for="i of TUICPref.getSettingData(id)" :key="i.id">
        <CheckBox :value="`${id}.${i.id}`" :name="i.i18n" />
    </template>
</template>

<script setup lang="ts">
import { TUICPref } from "@content/modules";
import CheckBox from "./CheckBox.vue";

const props = defineProps<{ id: string }>();
</script>

<style scoped></style>
