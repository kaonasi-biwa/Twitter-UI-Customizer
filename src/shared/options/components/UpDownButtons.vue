<template>
    <div v-for="i in settings" :key="i" :value="i" :id="i" class="TUICUpDownContent">
        <span>{{ TUICI18N.get(TUICData.settings[id].i18n[i]) }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "../../../content/i18n";
import { TUICData } from "../../../content/data";

// //アップダウンリストの内容(id:設定のID)
// upDownListItem: function (id: keyof typeof TUICData.settings) {
//         let TUICVisibleButtons = "";
//         let TUICInvisibleButtons = "";
//         for (const i of settings[id]) {
//             TUICVisibleButtons += `<div value="${i}" id="${i}" class="TUICUpDownContent"><span>${TUICI18N.get(
//                 TUICData.settings[id].i18n[i],
//             )}</span></div>`;
//         }
//         for (const i of TUICData.settings[id].all) {
//             if (!settings[id].includes(i)) {
//                 TUICInvisibleButtons += `<div value="${i}" id="${i}" class="TUICUpDownContent"><span>${TUICI18N.get(
//                     TUICData.settings[id].i18n[i],
//                 )}</span></div>`;
//             }
//         }
//         return [TUICVisibleButtons, TUICInvisibleButtons];
//     }

export default defineComponent({
    props: ["id", "settings"],
    setup() {
        return { TUICI18N, TUICData };
    },
});
</script>

<style scoped></style>
