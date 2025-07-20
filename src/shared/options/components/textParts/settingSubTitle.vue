<template>
    <h2 class="text-white r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">
        {{ TUICI18N.get(i18n) }}
    </h2>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { TUICI18N } from "@modules/i18n";

defineProps<{
    i18n: string;
}>();
</script>

<style scoped></style>
