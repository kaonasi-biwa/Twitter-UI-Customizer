<template>
    <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">
            {{ TUICI18N.get(i18n) }}
        </summary>
        <div class="TUIC_col_setting_container">
            <slot></slot>
        </div>
    </details>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TUICI18N } from "@modules/i18n";

export default defineComponent({
    props: {
        i18n: {
            type: String,
            required: true,
        },
    },
    setup() {
        return { TUICI18N };
    },
});
</script>

<style scoped></style>
