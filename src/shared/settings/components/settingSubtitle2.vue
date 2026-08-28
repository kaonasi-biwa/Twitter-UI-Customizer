<template>
    <h4 class="TUIC_settings_subtitle2">
        {{ translate(titleI18N) }}
    </h4>
</template>

<script setup lang="ts">
import { translate } from "@content/i18n";

defineProps<{
    titleI18N: string;
}>();
</script>

<style scoped>
.TUIC_settings_subtitle2 {
    margin: 20px 0 10px;
    font-size: 15px;
    font-feature-settings: "palt";
    color: rgb(113 118 124);
    letter-spacing: 1px;
}
</style>
