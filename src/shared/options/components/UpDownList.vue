<template>
    <div style="display: flex" :TUICUDBox="id" TUICSelectedItem="">
        <div style="flex: 1 2; width: 50px">
            <h2 style="font-size: 15px" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text TUICUpDownTitle">
                {{ TUICI18N.get("settingUI-upDownList-visible") }}
            </h2>
            <div id="TUIC_visible" class="TUIC_selectbox TUICSelectBox-left" :style="{ '--contentCount': _contentCount }">
                <UpDownButtons :id="id" :settings="list" />
            </div>
        </div>
        <div class="UpDownButtons" style="text-align: center; width: 30px">
            <br />
            <br />
            <!-- eslint-disable-next-line vue/no-v-html -->
            <button v-for="item in UpdownButtonFuncs" :key="item.btnAction" @click="item.func" :class="['TUIC_icon_button_con', item.btnAction]" :title="TUICI18N.get(item.tooltiptag)">
                <component :is="item.iconSrc" />
            </button>
        </div>
        <div style="flex: 1 2; width: 50px">
            <h2 style="font-size: 15px" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text TUICUpDownTitle">
                {{ TUICI18N.get("settingUI-upDownList-invisible") }}
            </h2>
            <div id="TUIC_invisible" class="TUIC_selectbox TUICSelectBox-right" :style="{ '--contentCount': _contentCount }">
                <UpDownButtons
                    :id="id"
                    :settings="
                        TUICData.settings[id].all.filter((value) => {
                            return !list.includes(value);
                        })
                    "
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import UpDownButtons from "./UpDownButtons.vue";

// new URL("./img.png", import.meta.url).href;

import ARROW_LEFT from "../../../content/icons/arrow/arrow_left.svg?component";
import ARROW_RIGHT from "../../../content/icons/arrow/arrow_right.svg?component";
import ARROW_UP from "../../../content/icons/arrow/arrow_up.svg?component";
import ARROW_DOWN from "../../../content/icons/arrow/arrow_down.svg?component";
import RESET from "../../../content/icons/arrow/reset.svg?component";

// import { ARROW_LEFT, ARROW_UP, ARROW_DOWN, ARROW_RIGHT, RESET } from "../../../content/data/icons";

import { TUICI18N } from "../../../content/i18n.js";
import { TUICData } from "../../../content/data.js";
import { TUICPref } from "../../../content/library.js";

// const funcs = {
//     ToLeft: {},
//     ToRight: {},
//     ToUp: {},
//     ToDown: {},
//     upDownListSetting(parentBox) {
//         const id = parentBox.getAttribute("TUICUDBox");
//         const visible_button_list = [];
//         const visibleButtonsT = parentBox.children[0].children[2].querySelectorAll(".TUICUpDownContent");
//         for (let i = 0; i < visibleButtonsT.length; i++) {
//             visible_button_list.push(visibleButtonsT[i].id);
//         }
//         TUICPref.set(id, visible_button_list);
//         TUICPref.save();
//         TUICLibrary.getClasses.update();
//         applySystemCss();
//     },
//     ".TUIC_up_down_list_to_left": {
//         type: "click",
//         function: function (event) {
//             const parentBox = event.currentTarget.parentElement.parentElement;
//             const leftBox = parentBox.children[0].children[2];
//             const rightBox = parentBox.children[2].children[2];

//             const selectedItem = parentBox.getAttribute("TUICSelectedItem");
//             if ((selectedItem ?? "") != "") {
//                 const selectedItemElem = rightBox.querySelector(`#${selectedItem}`);
//                 if (selectedItemElem != null) {
//                     leftBox.appendChild(selectedItemElem);
//                     TUICOptionHTML.upDownListSetting(parentBox);
//                 }
//             }
//         },
//         single: false,
//     },
//     ".TUIC_up_down_list_to_right": {
//         type: "click",
//         function: function (event) {
//             const parentBox = event.currentTarget.parentElement.parentElement;
//             const leftBox = parentBox.children[0].children[2];
//             const rightBox = parentBox.children[2].children[2];

//             const selectedItem = parentBox.getAttribute("TUICSelectedItem");
//             if (selectedItem) {
//                 const selectedItemElem = leftBox.querySelector(`#${selectedItem}`);
//                 if (selectedItemElem != null) {
//                     rightBox.appendChild(selectedItemElem);
//                     TUICOptionHTML.upDownListSetting(parentBox);
//                 }
//             }
//         },
//         single: false,
//     },
//     ".TUIC_up_down_list_to_up": {
//         type: "click",
//         function: function (event) {
//             const parentBox = event.currentTarget.parentElement.parentElement;
//             const leftBox = parentBox.children[0].children[2];
//             const selectedItem = parentBox.getAttribute("TUICSelectedItem");
//             if (selectedItem) {
//                 const selectedItemIndex = Array.from(parentBox.querySelectorAll(".TUICUpDownContent")).findIndex((list) => list === leftBox.querySelector(`#${selectedItem}`));

//                 if (selectedItemIndex > 0) {
//                     leftBox.insertBefore(leftBox.children[selectedItemIndex], leftBox.children[selectedItemIndex - 1]);
//                     TUICOptionHTML.upDownListSetting(parentBox);
//                 }
//             }
//         },
//         single: false,
//     },
//     ".TUIC_up_down_list_to_down": {
//         type: "click",
//         function: function (event) {
//             const parentBox = event.currentTarget.parentElement.parentElement;
//             const leftBox = parentBox.children[0].children[2];
//             const selectedItem = parentBox.getAttribute("TUICSelectedItem");
//             if (selectedItem) {
//                 const selectedItemIndex = Array.from(parentBox.querySelectorAll(".TUICUpDownContent")).findIndex((list) => list === leftBox.querySelector(`#${selectedItem}`));

//                 if (selectedItemIndex != -1) {
//                     leftBox.insertBefore(leftBox.children[selectedItemIndex], leftBox.children[selectedItemIndex].nextSibling.nextSibling);
//                     TUICOptionHTML.upDownListSetting(parentBox);
//                 }
//             }
//         },
//         single: false,
//     },
//     ".TUIC_up_down_list_to_default": {
//         type: "click",
//         function: function (event) {
//             const parentBox = event.currentTarget.parentElement.parentElement;
//             const leftBox = parentBox.children[0].children[2];
//             const rightBox = parentBox.children[2].children[2];

//             const settingId = parentBox.getAttribute("TUICUDBox");
//             TUICPref.set(settingId, structuredClone(TUICData.defaultPref[settingId]));
//             TUICPref.save();
//             parentBox.setAttribute("TUICSelectedItem", "");
//             const ListItem = TUICOptionHTML.upDownListItem(settingId);
//             let listElem;

//             listElem = leftBox.children;
//             while (listElem.length != 0) {
//                 listElem[0].remove();
//             }

//             listElem = TUICLibrary.HTMLParse(ListItem[0]);
//             while (listElem.length != 0) {
//                 leftBox.appendChild(listElem[0]);
//             }

//             listElem = rightBox.children;
//             while (listElem.length != 0) {
//                 listElem[0].remove();
//             }

//             listElem = TUICLibrary.HTMLParse(ListItem[1]);
//             while (listElem.length != 0) {
//                 rightBox.appendChild(listElem[0]);
//             }

//             TUICOptionHTML.upDownListSetting(parentBox);
//             TUICOptionHTML.eventHandle(parentBox);
//         },
//         single: false,
//     },
// };

import { TUICLibrary } from "../../../content/library.js";
import { applySystemCss } from "../../../content/applyCSS.js";
import { useStore } from "../store.js";

export default defineComponent({
    components: { UpDownButtons },
    props: ["id"],
    setup(props) {
        const list = ref([]);
        list.value = TUICPref.get(props.id);

        const apply2Settings = (parentElem) => {
            const id = parentElem.getAttribute("TUICUDBox");
            TUICPref.set(id, list.value);
            TUICPref.save();
            TUICLibrary.getClasses.update();
            applySystemCss();
        };

        const toLeft = (event) => {
            const parentBox = event.currentTarget.parentElement.parentElement;

            const selectedItem = parentBox.getAttribute("TUICSelectedItem");
            list.value.push(selectedItem);

            apply2Settings(parentBox);
            const store = useStore();
            store.selectedElem = parentBox.getAttribute("TUICSelectedItem");
        };

        const toRight = (event) => {
            const parentBox = event.currentTarget.parentElement.parentElement;

            const selectedItem = parentBox.getAttribute("TUICSelectedItem");
            list.value = list.value.filter((v) => v !== selectedItem);

            apply2Settings(parentBox);
            const store = useStore();
            store.selectedElem = parentBox.getAttribute("TUICSelectedItem");
        };

        const toUp = (event) => {
            const parentBox = event.currentTarget.parentElement.parentElement;

            const leftBox = parentBox.querySelector(".TUICSelectBox-left");
            const selectedItem = parentBox.getAttribute("TUICSelectedItem");
            if (leftBox.querySelector(`#${selectedItem}`)) {
                const idx = list.value.findIndex((v) => v === selectedItem);
                if (idx > 0) {
                    const upper = list.value[idx - 1];
                    const under = list.value[idx];
                    list.value.splice(idx - 1, 1, under);
                    list.value.splice(idx, 1, upper);
                }
                apply2Settings(parentBox);
            }
        };

        const toDown = (event) => {
            const parentBox = event.currentTarget.parentElement.parentElement;

            const leftBox = parentBox.querySelector(".TUICSelectBox-left");
            const selectedItem = parentBox.getAttribute("TUICSelectedItem");
            if (leftBox.querySelector(`#${selectedItem}`)) {
                const idx = list.value.findIndex((v) => v === selectedItem);
                if (idx < list.value.length - 1) {
                    const upper = list.value[idx];
                    const under = list.value[idx + 1];
                    list.value.splice(idx, 1, under);
                    list.value.splice(idx + 1, 1, upper);
                }
                apply2Settings(parentBox);
            }
        };

        const toDefault = (event) => {
            const parentBox = event.currentTarget.parentElement.parentElement;

            const settingId = parentBox.getAttribute("TUICUDBox");
            const selectedItem = parentBox.getAttribute("TUICSelectedItem");
            //if (selectedItem) parentBox.querySelector(`#${selectedItem}`).removeAttribute("TUICSelectedUpDownContent");
            parentBox.setAttribute("TUICSelectedItem", "");
            list.value = structuredClone(TUICData.defaultPref[settingId]);
            TUICPref.set(settingId, structuredClone(TUICData.defaultPref[settingId]));
            TUICPref.save();
            const store = useStore();
            store.selectedElem = "";
        };

        const UpdownButtonFuncs = [
            {
                iconSrc: ARROW_LEFT,
                btnAction: "TUIC_up_down_list_to_left",
                func: toLeft,
                tooltiptag: "settingUI-upDownList-toLeft",
            },
            {
                iconSrc: ARROW_UP,
                btnAction: "TUIC_up_down_list_to_up",
                func: toUp,
                tooltiptag: "settingUI-upDownList-toUp",
            },
            {
                iconSrc: ARROW_DOWN,
                btnAction: "TUIC_up_down_list_to_down",
                func: toDown,
                tooltiptag: "settingUI-upDownList-toDown",
            },
            {
                iconSrc: ARROW_RIGHT,
                btnAction: "TUIC_up_down_list_to_right",
                func: toRight,
                tooltiptag: "settingUI-upDownList-toRight",
            },
            {
                iconSrc: RESET,
                btnAction: "TUIC_up_down_list_to_default",
                func: toDefault,
                tooltiptag: "settingUI-upDownList-restoreDefault",
            },
        ];
        const UDALL = TUICData.settings[props.id].all;
        let _contentCount = 5;
        if (UDALL.length > 5) {
            _contentCount = UDALL.length;
        }
        return { UpdownButtonFuncs, TUICI18N, TUICData, TUICPref, _contentCount, list };
    },
});
</script>

<style scoped></style>
