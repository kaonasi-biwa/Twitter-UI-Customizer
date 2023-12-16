<template>
    <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title TUICSettingSubTitle">
        {{ TUICI18N.get(i18n) }}
    </h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "@content/i18n";
export default defineComponent({
    props: ["i18n"],
    setup() {
        return { TUICI18N };
    },
});
</script>

<style scoped></style>
