<template>
    <div style="display: flex" :TUICUDBox="id">
        <div style="flex: 1 2; width: 50px">
            <h2 style="font-size: 15px" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text TUICUpDownTitle">
                {{ TUICI18N.get("settingUI-upDownList-visible") }}
            </h2>
            <div id="TUIC_visible" class="TUIC_selectbox TUICSelectBox-left" :style="{ '--contentCount': _contentCount }">
                <div v-for="i in list" :key="i" :value="i" :id="i" class="TUICUpDownContent" @click="clickEv(i)" :TUICSelectedUpDownContent="i === selectedElem">
                    <span>{{ TUICI18N.get(TUICData.settings[id].i18n[i]) }}</span>
                </div>
            </div>
        </div>
        <div class="UpDownButtons" style="text-align: center; width: 30px">
            <br />
            <br />
            <button v-for="item in UpdownButtonFuncs" :key="item.btnAction" @click="item.func" :class="['TUIC_icon_button_con', item.btnAction]" :title="TUICI18N.get(item.tooltiptag)">
                <component :is="item.iconSrc" />
            </button>
        </div>
        <div style="flex: 1 2; width: 50px">
            <h2 style="font-size: 15px" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text TUICUpDownTitle">
                {{ TUICI18N.get("settingUI-upDownList-invisible") }}
            </h2>
            <div id="TUIC_invisible" class="TUIC_selectbox TUICSelectBox-right" :style="{ '--contentCount': _contentCount }">
                <div
                    v-for="i in TUICData.settings[id].all.filter((value) => {
                        return !list.includes(value);
                    })"
                    :key="i"
                    :value="i"
                    :id="i"
                    class="TUICUpDownContent"
                    @click="clickEv(i)"
                    :TUICSelectedUpDownContent="i === selectedElem"
                >
                    <span>{{ TUICI18N.get(TUICData.settings[id].i18n[i]) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";

// new URL("./img.png", import.meta.url).href;

import ARROW_LEFT from "@content/icons/arrow/arrow_left.svg?component";
import ARROW_RIGHT from "@content/icons/arrow/arrow_right.svg?component";
import ARROW_UP from "@content/icons/arrow/arrow_up.svg?component";
import ARROW_DOWN from "@content/icons/arrow/arrow_down.svg?component";
import RESET from "@content/icons/arrow/reset.svg?component";

// import { ARROW_LEFT, ARROW_UP, ARROW_DOWN, ARROW_RIGHT, RESET } from "@content/data/icons";

import { TUICI18N } from "@content/i18n.js";
import { TUICData } from "@content/data.js";
import { TUICPref } from "@content/modules";

import { TUICLibrary } from "@content/library.js";

const props = defineProps<{ id: string }>();

const list = ref([]);
list.value = TUICPref.getPref(props.id);
const selectedElem = ref("");

const clickEv = (selectItem) => {
    selectedElem.value = selectItem;
};

const apply2Settings = () => {
    const id = props.id;
    TUICPref.setPref(id, list.value);
    TUICPref.save();
    TUICLibrary.getClasses.update();
};

const toLeft = () => {
    if (selectedElem.value && !list.value.includes(selectedElem.value)) {
        list.value.push(selectedElem.value);
        apply2Settings();
    }
};

const toRight = () => {
    if (selectedElem.value && list.value.includes(selectedElem.value)) {
        list.value = list.value.filter((v) => v !== selectedElem.value);
        apply2Settings();
    }
};

const toUp = () => {
    const selectedItem = selectedElem.value;
    if (selectedItem && list.value.includes(selectedItem)) {
        const idx = list.value.findIndex((v) => v === selectedItem);
        if (idx > 0) {
            [list.value[idx - 1], list.value[idx]] = [list.value[idx], list.value[idx - 1]];
        }
        apply2Settings();
    }
};

const toDown = () => {
    const selectedItem = selectedElem.value;
    if (selectedItem && list.value.includes(selectedItem)) {
        const idx = list.value.findIndex((v) => v === selectedItem);
        if (idx < list.value.length - 1) {
            [list.value[idx + 1], list.value[idx]] = [list.value[idx], list.value[idx + 1]];
        }
        apply2Settings();
    }
};

const toDefault = () => {
    const settingId = props.id;
    list.value = structuredClone(TUICPref.defaultPref[settingId]);
    selectedElem.value = "";
    apply2Settings();
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
</script>

<style scoped></style>
