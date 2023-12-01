<template>
    <div class="TUICCheckBoxParent">
        <input type="radio" :id="`${id.replace(/\./g, '-_-')}-_-${valueName}`" :name="id.replace(/\./g, '-_-')" :value="valueName" :checked="TUICPref.get(id) == valueName" @change="changePref(id, valueName)" />
        <div>
            <label class="TUIC_setting_text" :for="`${id.replace(/\./g, '-_-')}-_-${valueName}`">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "../../../content/i18n";
import { TUICPref, TUICLibrary } from "../../../content/library";
import { TUICObserver } from "../../../content/observer";

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
    props: ["id", "valueName", "name"],
    setup() {
        return { TUICI18N, TUICPref };
    },
    methods: {
        changePref(path, valueName) {
            TUICPref.set(path, valueName);
            TUICPref.save();
            TUICLibrary.getClasses.update();
            TUICObserver.observerFunction(null);
        },
    },
});
</script>

<style scoped></style>
