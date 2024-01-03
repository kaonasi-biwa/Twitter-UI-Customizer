<template>
    <div :class="['TUIC_setting_color_colmn', !isDefault ? 'TUIC_ISNOTDEFAULT' : '', `TUICColorBoxRoot`]" ref="colorRoot">
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
                        <input type="color" :id="`${id}-${type}`" class="TUICButtonColor" @change="changeColor(id, type, store.editingColorType)" :value="TUICColor1" ref="colorPicker" />
                    </div>
                </div>
                <button :id="`${id}-${type}-check`" class="TUICButtonColorCheck" @click="changeColorCheck(id, type, store.editingColorType)" :data-checked="TUIC_color[3] == '0'" ref="transparentButton"></button>
                <label :for="`${id}-${type}-check`" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 15px">{{ TUICI18N.get("settingUI-colorPicker-transparent") }}</label
                ><br />
            </template>
        </div>
    </div>
    <button :id="id + '-' + type + '-default'" :class="['TUIC_icon_button_con', 'TUIC_setting_button', 'TUICDefaultColor']" :title="TUICI18N.get('settingUI-colorPicker-restoreDefault')" @click="defaultColor(id, type, store.editingColorType)">
        <component :is="RESET" />
    </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { TUICI18N } from "@content/i18n";
import { TUICLibrary } from "@content/library";
import { TUICData } from "@content/data";

import RESET from "@content/icons/arrow/reset.svg?component";
import { TUICPref } from "@content/modules";
import { applySystemCss } from "@content/applyCSS";

import { useStore } from "../store";

export default defineComponent({
    props: ["id", "type", "text"],
    setup(props) {
        const store = useStore();

        const isDefault = computed(() => {
            return !!TUICPref.getPref(store.editingColorType)?.[props.id]?.[props.type];
        });
        const TUIC_color = computed(() => {
            return TUICLibrary.color.getColorFromPref(props.id, props.type, store.editingColorType).replace("rgba(", "").replace(")", "").replaceAll(" ", "").split(",");
        });

        const TUICColor1 = computed(() => {
            return TUICLibrary.color.rgb2hex([Number(TUIC_color.value[0]), Number(TUIC_color.value[1]), Number(TUIC_color.value[2])]);
        });

        return { TUICI18N, TUICLibrary, TUICData, RESET, TUICColor1, TUIC_color, store, isDefault };
    },
    methods: {
        defaultColor: function (colorAttr, colorType, colorKind) {
            const colorPicker = this.$refs.colorPicker;
            const transparentButton = this.$refs.transparentButton;
            const colorRoot = this.$refs.colorRoot;

            if (TUICPref.getPref(`${colorKind}.${colorAttr}`) && TUICPref.getPref(`${colorKind}.${colorAttr}.${colorType}`)) TUICPref.deletePref(`${colorKind}.${colorAttr}.${colorType}`);

            const TUIC_color = TUICLibrary.color.getColorFromPref(colorAttr, colorType, colorKind).replace("rgba(", "").replace(")", "").replaceAll(" ", "").split(",");
            const TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])]);

            colorPicker.value = TUICColor1;

            transparentButton.dataset.checked = TUIC_color[3] == 0;

            colorRoot.classList.add("TUIC_ISNOTDEFAULT");

            TUICPref.save();

            applySystemCss();
        },
        changeColor: function (colorAttr, colorType, colorKind) {
            const colorPicker = this.$refs.colorPicker;
            const transparentButton = this.$refs.transparentButton;
            const colorRoot = this.$refs.colorRoot;

            const colorValue = TUICLibrary.color.hex2rgb(colorPicker.value);
            const isChecked = transparentButton.checked;

            TUICPref.setPref(`${colorKind}.${colorAttr}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`);

            // CHECKの出現？
            colorRoot.classList.remove("TUIC_ISNOTDEFAULT");

            TUICPref.save();

            applySystemCss();
        },
        changeColorCheck: function (colorAttr, colorType, colorKind) {
            const colorPicker = this.$refs.colorPicker;
            const transparentButton = this.$refs.transparentButton;
            const colorRoot = this.$refs.colorRoot;

            transparentButton.dataset.checked = transparentButton.dataset.checked !== "true";

            const colorValue = TUICLibrary.color.hex2rgb(colorPicker.value);
            const isChecked = transparentButton.dataset.checked === "true";

            TUICPref.setPref(`${colorKind}.${colorAttr}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`);

            colorRoot.classList.remove("TUIC_ISNOTDEFAULT");

            TUICPref.save();

            applySystemCss();
        },
    },
});
</script>

<style scoped></style>
