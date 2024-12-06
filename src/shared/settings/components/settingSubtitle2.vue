<template>
    <h4 class="TUIC_settings_subtitle2">
        {{ TUICI18N.get(titleI18N) }}
    </h4>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";

defineProps<{
    titleI18N: string;
}>();
</script>
