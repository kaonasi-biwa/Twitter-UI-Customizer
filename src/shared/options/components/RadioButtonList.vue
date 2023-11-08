<template>
    <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">
            {{ TUICI18N.get(title) }}
        </summary>
        <div class="TUIC_col_setting_container">
            <RadioButton v-for="i in TUICData[id].all" :key="i" :id="id" :valueName="i" :value="TUICPref.get(id) === i" :name="TUICData[id].i18n[i]" :type="type" />
            <slot></slot>
        </div>
        <br />
    </details>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "../../../content/i18n";
import RadioButton from "./RadioButton.vue";
import { TUICData } from "../../../content/data";
import { TUICPref } from "../../../content/library";

// radioButtonList: function (id, title, type, option) {
//     let TUICInvisibleRadioBox = "";
//     for (const i of TUICData[id].all) {
//         TUICInvisibleRadioBox += this.radioButton(
//             id,
//             i,
//             settings[id] == i,
//             TUICData[id].i18n[i],
//             type,
//         );
//     }
//     return `
//     <details class="TUICDetails">
//     <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">${TUICI18N.get(
//         title,
//     )}</summary>
//     <div class="TUIC_col_setting_container">
//         ${TUICInvisibleRadioBox}
//         ${option}
//     </div>
//     <br>
//     </details>`;
// },

export default defineComponent({
    components: {
        RadioButton,
    },
    props: ["title", "id", "type"],
    setup() {
        return { TUICI18N, TUICData, TUICPref };
    },
});
</script>

<style scoped></style>
