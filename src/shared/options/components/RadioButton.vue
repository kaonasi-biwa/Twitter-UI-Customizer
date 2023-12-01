<template>
    <div class="TUICCheckBoxParent">
        <input type="radio" :name="id" :value="valueName" :id="valueName" :class="type" :checked="value" @change="changePref(id, valueName)" />
        <div>
            <label class="TUIC_setting_text" :for="valueName">{{ TUICI18N.get(name) }}</label>
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
    props: ["id", "valueName", "type", "value", "name"],
    setup() {
        return { TUICI18N };
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
