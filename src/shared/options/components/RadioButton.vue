<template>
    <div class="TUICCheckBoxParent">
        <input type="radio" :name="id" :value="valueName" :id="valueName" :class="type" :checked="value" />
        <div>
            <label class="TUIC_setting_text" :for="valueName">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "../../../content/i18n";

// radioButton: function (id, valueName, value, name, type) {
//     return `
//     <div class="TUICCheckBoxParent">
//             <input type="radio" name="${id}" value="${valueName}" id="${valueName}" class="${type}" ${
//                 value ? "checked" : ""
//             }>
//             <div>
//             <label class="TUIC_setting_text" for="${valueName}">${TUICI18N.get(name)}</label>
//             </div>
//         </div>
//     `;
// },

export default defineComponent({
    setup() {
        return { TUICI18N };
    },
    props: ["id", "valueName", "type", "value", "name"],
});
</script>

<style scoped></style>
