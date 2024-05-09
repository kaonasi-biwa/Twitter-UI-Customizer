<template>
    <h2 class="TUICSettingSubTitle TUICSettingSubTitleNomargin">{{ TUICI18N.get(i18n) }}</h2>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";

const props = defineProps<{
    i18n: string;
}>();
</script>
