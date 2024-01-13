<template>
    <template v-for="i in TUICData[id].all" :key="i">
        <CheckBox :value="`${id}.${i}`" :name="TUICData[id].i18n[i]" />
    </template>
</template>

<script setup lang="ts">
import CheckBox from "./CheckBox.vue";

import { TUICData } from "@content/data.js";

const props = defineProps<{ id: string }>();
</script>

<style scoped></style>
