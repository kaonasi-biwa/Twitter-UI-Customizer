<template>
    <div :class="['TUIC_setting_color_colmn', !isDefault ? 'TUIC_ISNOTDEFAULT' : '']">
        <h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 18px">
            {{ TUICI18N.get(text) }}
        </h4>
        <div class="TUIC_setting_input_container">
            <template v-if="TUICData.colors[id]?.ldColor && editingColorType == 'buttonColor'">
                <label class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 10px"> {{ TUICI18N.get("settingColors-pleaseLD") }} </label><br />
            </template>
            <template v-else>
                <div class="TUIC_input_color_rounded__container">
                    <div class="TUIC_input_color_rounded">
                        <input type="color" :id="id + '-' + type" class="TUICButtonColor" :TUICColor="id" :TUICColorType="type" :value="TUICColor1" :TUICColorKind="colorKind" />
                    </div>
                </div>
                <button :id="id + '-' + type + '-check'" class="TUICButtonColorCheck" :data-checked="TUIC_color[3] == '0'" :TUICColor="'' + id" :TUICColorType="'' + type" :TUICColorKind="'' + colorKind"></button>
                <label :for="id + '-' + type + '-check'" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 15px">{{ TUICI18N.get("settingUI-colorPicker-transparent") }}</label
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
        :TUICColorKind="colorKind"
        v-html="RESET"
    ></button>
    <!-- eslint-enable vue/no-v-html -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
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

export default defineComponent({
    props: ["isDefault", "editingColorType", "id", "type", "text", "colorKind", "color_"],
    setup(props) {
        const color = props.color_.escapeToUseHTML();
        const TUIC_color = color.replace("rgba(", "").replace(")", "").split(", ");
        const TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])]);
        return { TUICI18N, TUICLibrary, TUICData, RESET, TUICColor1, TUIC_color };
    },
});
</script>

<style scoped></style>
