<template>
    <div v-for="i in settings" :key="i" :value="i" :id="i" class="TUICUpDownContent" @click="clickEv" :TUICSelectedUpDownContent="i === store.selectedElem">
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

import { useStore } from "../store";

const clickEv = (event) => {
    const parentBox = event.currentTarget.parentElement.parentElement.parentElement;
    // const selectedItem = parentBox.getAttribute("TUICSelectedItem");
    // if (selectedItem) parentBox.querySelector(`#${selectedItem}`).removeAttribute("TUICSelectedUpDownContent");
    const selectItem = event.currentTarget.id;
    // parentBox.querySelector(`#${selectItem}`).setAttribute("TUICSelectedUpDownContent", "true");
    parentBox.setAttribute("TUICSelectedItem", selectItem);
    const store = useStore();
    store.selectedElem = selectItem;
};

export default defineComponent({
    props: ["id", "settings"],
    setup() {
        const store = useStore();
        return { TUICI18N, TUICData, clickEv, store };
    },
});
</script>

<style scoped></style>
