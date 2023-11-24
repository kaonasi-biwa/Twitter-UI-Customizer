<template>
    <div :class="['TUIC_setting_color_colmn', !isDefault ? 'TUIC_ISNOTDEFAULT' : '']">
        <h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 18px">
            {{ TUICI18N.get(text) }}
        </h4>
        <div class="TUIC_setting_input_container">
            <template v-if="TUICData.colors[id]?.ldColor && store.editingColorType == 'buttonColor'">
                <label class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 10px"> {{ TUICI18N.get("settingColors-pleaseLD") }} </label><br />
            </template>
            <template v-else>
                <div class="TUIC_input_color_rounded__container">
                    <div class="TUIC_input_color_rounded">
                        <input type="color" :id="`${id}-${type}`" class="TUICButtonColor" @change="changeColor" :TUICColor="id" :TUICColorType="type" :value="TUICColor1" :TUICColorKind="store.editingColorType" />
                    </div>
                </div>
                <button :id="`${id}-${type}-check`" class="TUICButtonColorCheck" @change="changeColorCheck" :data-checked="TUIC_color[3] == '0'" :TUICColor="id" :TUICColorType="type" :TUICColorKind="store.editingColorType"></button>
                <label :for="`${id}-${type}-check`" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 15px">{{ TUICI18N.get("settingUI-colorPicker-transparent") }}</label
                ><br />
            </template>
        </div>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <button
        :id="id + '-' + type + '-default'"
        :class="['TUIC_icon_button_con', 'TUIC_setting_button', 'TUIC_setting_button_default', 'TUICDefaultColor', !isDefault ? 'TUIC_DISPNONE' : '']"
        :title="TUICI18N.get('settingUI-colorPicker-restoreDefault')"
        :TUICColor="id"
        :TUICColorType="type"
        :TUICColorKind="store.editingColorType"
        @click="defaultColor"
        v-html="RESET"
    ></button>
    <!-- eslint-enable vue/no-v-html -->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { TUICI18N } from "../../../content/i18n";
import { TUICLibrary } from "../../../content/library";
import { TUICData } from "../../../content/data";
import { RESET } from "../../../content/data/icons";

// //色の設定の一行(id,type:色のIDと種類。これで判別 color:rgba形式の色,text:色の名前)
// colorSetting: function (id, type, color_, text, isDefault, colorKind) {
//     const [color] = [color_.escapeToUseHTML()];
//     const TUIC_color = color.replace("rgba(", "").replace(")", "").split(", ");

//     const TUICColor1 = TUICLibrary.color.rgb2hex([
//         Number(TUIC_color[0]),
//         Number(TUIC_color[1]),
//         Number(TUIC_color[2]),
//     ]); /* eslint-disable */
//     return `
//     <div class="TUIC_setting_color_colmn${
//         !isDefault ? " " + TUICLibrary.getClasses.getClass("TUIC_ISNOTDEFAULT") : ""
//     }">
//     <h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:18px;">${TUICI18N.get(
//         text,
//     )}</h4>
//     <div class="TUIC_setting_input_container">
//     ${
//         TUICData.colors[id]?.ldColor && editingColorType == "buttonColor"
//             ? `<label class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:10px;">${TUICI18N.get(
//                     "settingColors-pleaseLD",
//                 )}</label><br>`
//             : `
//         <div class="TUIC_input_color_rounded__container">
//             <div class="TUIC_input_color_rounded">
//                 <input type="color" id="${
//                     id + "-" + type
//                 }" TUICColor="${id}" TUICColorType="${type}" value="${TUICColor1}" class="TUICButtonColor" TUICColorKind=${colorKind}>
//                 </input>
//             </div>
//         </div>
//         <button type="checkbox" id="${`${id}-${type}-check`}" data-checked="${
//             TUIC_color[3] == "0" ? "true" : "false"
//         }" TUICColor="${id}"
//             TUICColorType="${type}" class="TUICButtonColorCheck" TUICColorKind=${colorKind}>
//         </button>
//         <label for="${`${id}-${type}-check`}" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size:15px;">${TUICI18N.get(
//             "settingUI-colorPicker-transparent",
//         )}</label><br>
//     `
//     }
//     </div>
//     </div>
//     <button class="TUIC_icon_button_con TUIC_setting_button TUIC_setting_button_default TUICDefaultColor${
//     !isDefault ? " " + TUICLibrary.getClasses.getClass("TUIC_DISPNONE") : ""
//     }" title="${TUICI18N.get(
//     "settingUI-colorPicker-restoreDefault",
//     )}" TUICColor="${id}" TUICColorType="${type}" id="${`${id}-${type}-default`}" TUICColorKind="${colorKind}">${RESET}</button>`; /* eslint-enable */
// },

import { TUICPref } from "../../../content/library";
import { applySystemCss } from "../../../content/applyCSS";

import { useStore } from "../store";

const defaultColor = (event) => {
    const colorAttr = event.target.getAttribute("TUICColor");
    const colorType = event.target.getAttribute("TUICColorType");
    const colorKind = event.target.getAttribute("TUICColorKind");
    const TUIC_color = TUICData.colors[colorAttr][colorType].replace("rgba(", "").replace(")", "").split(", ");
    const TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])]);

    document.getElementById(`${colorAttr}-${colorType}`).value = TUICColor1;

    document.getElementById(`${colorAttr}-${colorType}-check`).setAttribute("data-checked", TUIC_color[3] == 0);

    if (TUICPref.get(`${colorKind}.${colorAttr}`) && TUICPref.get(`${colorKind}.${colorAttr}.${colorType}`)) TUICPref.delete(`${colorKind}.${colorAttr}.${colorType}`);

    document.getElementById(`${colorAttr}-${colorType}-check`).parentElement.parentElement.classList.add("TUIC_ISNOTDEFAULT");
    event.currentTarget.classList.add("TUIC_DISPNONE");

    TUICPref.save();

    applySystemCss();
};
const changeColor = (event) => {
    const colorAttr = event.target.getAttribute("TUICColor");
    const colorType = event.target.getAttribute("TUICColorType");
    const colorValue = TUICLibrary.color.hex2rgb(event.target.value);
    const colorKind = event.target.getAttribute("TUICColorKind");
    const isChecked = document.getElementById(`${colorAttr}-${colorType}-check`).checked;

    TUICPref.set(`${colorKind}.${colorAttr}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`);

    // CHECKの出現？
    document.getElementById(`${colorAttr}-${colorType}-default`).classList.remove("TUIC_DISPNONE");
    event.currentTarget.parentElement.parentElement.parentElement.parentElement.classList.remove("TUIC_ISNOTDEFAULT");

    TUICPref.save();

    applySystemCss();
};

const changeColorCheck = (event) => {
    event.target.dataset.checked = event.target.dataset.checked !== "true";

    const colorAttr = event.target.getAttribute("TUICColor");
    const colorType = event.target.getAttribute("TUICColorType");
    const colorValue = TUICLibrary.color.hex2rgb(document.getElementById(`${colorAttr}-${colorType}`).value);
    const colorKind = event.target.getAttribute("TUICColorKind");
    const isChecked = event.target.dataset.checked === "true";

    TUICPref.set(`${colorKind}.${colorAttr}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`);

    document.getElementById(`${colorAttr}-${colorType}-default`).classList.remove("TUIC_DISPNONE");
    event.currentTarget.parentElement.parentElement.classList.remove("TUIC_ISNOTDEFAULT");

    TUICPref.save();

    applySystemCss();
};

export default defineComponent({
    props: ["id", "type", "text"],
    setup(props) {
        const store = useStore();

        const isDefault = computed(() => {
            return !!TUICPref.get(store.editingColorType)?.[props.id][props.type];
        });
        const color_ = computed(() => {
            return TUICLibrary.color.getColorFromPref(props.id, props.type, store.editingColorType);
        });
        const color = computed(() => {
            return color_.value.replace("rgba(", "").replace(")", "").replaceAll(" ", "").escapeToUseHTML();
        });
        const TUIC_color = computed(() => {
            return color.value.split(",");
        });

        const TUICColor1 = computed(() => {
            return TUICLibrary.color.rgb2hex([Number(TUIC_color.value[0]), Number(TUIC_color.value[1]), Number(TUIC_color.value[2])]);
        });

        return { TUICI18N, TUICLibrary, TUICData, RESET, TUICColor1, TUIC_color, changeColor, changeColorCheck, store, defaultColor, isDefault };
    },
});
</script>

<style scoped></style>
