<template>
    <button :class="['TUIC_icon_button_con', btnAction]" :title="TUICI18N.get(tooltiptag)">
        {{ src }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TUICI18N } from "@content/i18n";

export default defineComponent({
    props: ["btnAction", "tooltiptag", "src"],
    setup() {
        return { TUICI18N };
    },
});
</script>

<style scoped></style>
