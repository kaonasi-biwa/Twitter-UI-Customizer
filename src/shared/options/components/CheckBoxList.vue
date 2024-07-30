<template>
    <template v-for="i of getSettingData(id)" :key="i.id">
        <CheckBox :value="`${id}.${i.id}`" :name="i.i18n" />
    </template>
</template>

<script setup lang="ts">
import { getSettingData, TUICSettingIDs } from "@modules/pref";
import CheckBox from "./CheckBox.vue";

const props = defineProps<{ id: TUICSettingIDs }>();
</script>

<style scoped></style>
