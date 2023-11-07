<template>
    <button :class="['TUIC_icon_button_con', btnAction]" :title="TUICI18N.get(tooltiptag)">
        {{ src }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// iconButton: function (src, btnAction, tooltiptag) {
//         return `<button class="TUIC_icon_button_con ${btnAction}" title="${TUICI18N.get(
//             tooltiptag,
//         )}">${src}</button>`;
//     },

import { TUICI18N } from "../../../content/i18n";

export default defineComponent({
    setup() {
        return { TUICI18N };
    },
    props: ["btnAction", "tooltiptag", "src"],
});
</script>

<style scoped></style>
