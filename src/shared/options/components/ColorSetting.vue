<template>
    <div :class="['TUIC_setting_color_colmn', !isDefault ? 'TUIC_ISNOTDEFAULT' : '']" ref="colorPickerBlock">
        <h4 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 18px">
            {{ TUICI18N.get(text) }}
        </h4>
        <div class="TUIC_setting_input_container">
            <template v-if="isEditable">
                <label class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 10px"> {{ TUICI18N.get("settingColors-pleaseLD") }} </label><br />
            </template>
            <template v-else>
                <div class="TUIC_input_color_rounded__container">
                    <div class="TUIC_input_color_rounded">
                        <input type="color" :id="`${id}-${type}`" class="TUICButtonColor" @change="changeColor(id, type, editingColorType)" ref="colorPicker" :value="TUICColor1" />
                    </div>
                </div>
                <button :id="`${id}-${type}-check`" class="TUICButtonColorCheck" @click="changeColorCheck(id, type, editingColorType)" :data-checked="isTransparent" ref="transparentColorButton"></button>
                <label :for="`${id}-${type}-check`" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 15px">{{ TUICI18N.get("settingUI-colorPicker-transparent") }}</label
                ><br />
            </template>
        </div>
    </div>
    <button
        :id="id + '-' + type + '-default'"
        :class="['TUIC_icon_button_con', 'TUIC_setting_button', 'TUIC_setting_button_default', 'TUICDefaultColor', !isDefault ? 'TUIC_DISPNONE' : '']"
        :title="TUICI18N.get('settingUI-colorPicker-restoreDefault')"
        @click="defaultColor(id, type, editingColorType)"
        ref="defaultColorButton"
    >
        <component :is="RESET" />
    </button>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from "vue";
import { storeToRefs } from "pinia";
import { TUICI18N } from "../../../content/i18n";
import { TUICLibrary } from "../../../content/library";
import { TUICData } from "../../../content/data";
import { useTUICPrefStore } from "../prefStore";

import RESET from "../../../content/icons/arrow/reset.svg?component";

import { useStore } from "../store";

import { TUICPrefStore } from "../prefStoreLib";

const getColorFromPref = function (name: string, type: string, mode: "buttonColor" | "buttonColorLight" | "buttonColorDark" | null) {
    let _mode = "";
    _mode = mode ? mode : TUICLibrary.backgroundColorCheck() == "light" ? "buttonColorLight" : "buttonColorDark";
    return TUICPrefStore.get(`${_mode}.${name}.${type}`) ?? TUICData?.["colors-" + _mode]?.[name]?.[type] ?? TUICPrefStore.get(`buttonColor.${name}.${type}`) ?? TUICData.colors[name][type];
};

export default defineComponent({
    props: ["id", "type", "text"],
    setup(props) {
        console.log("aiueo");
        const store = useStore();
        const prefStore = useTUICPrefStore();

        /*const color_ = computed(() => {
            return getColorFromPref(props.id, props.type, store.editingColorType);
        });
        const color = computed(() => {
            return color_.value.replace("rgba(", "").replace(")", "").replaceAll(" ", "");
        });
        const TUIC_color = computed(() => {
            return color.value.split(",");
        });

        const TUICColor1 = computed(() => {
            return TUICLibrary.color.rgb2hex([Number(TUIC_color.value[0]), Number(TUIC_color.value[1]), Number(TUIC_color.value[2])]);
        });*/
        const { editingColorType } = storeToRefs(store);
        if (prefStore.pref == null) {
            prefStore.injectPref();
        }
        const { pref } = storeToRefs(prefStore);
        const editable = () => {
            return TUICData.colors[props.id]?.ldColor && store.editingColorType == "buttonColor";
        };
        const isDefaultFunc = () => {
            return !!TUICPrefStore.get(`${store.editingColorType}.${props.id}.${props.type}`);
        };
        const makeColorArray = () => {
            return getColorFromPref(props.id, props.type, store.editingColorType).replace("rgba(", "").replace(")", "").replaceAll(" ", "").split(",");
        };
        const makeColor = () => {
            const colorArray = makeColorArray();
            console.log([colorArray[0], colorArray[1], colorArray[2]]);
            return TUICLibrary.color.rgb2hex([Number(colorArray[0]), Number(colorArray[1]), Number(colorArray[2])]);
        };
        const makeColorTranparent = () => {
            return makeColorArray()[3] == "0";
        };
        const isEditable = ref(editable());
        const isDefault = ref(isDefaultFunc());
        const TUICColor1 = ref(makeColor());
        const isTransparent = ref(makeColorTranparent());
        watch(
            () => [editingColorType, pref],
            () => {
                console.log("aiueo");
                isEditable.value = editable();
                isDefault.value = isDefaultFunc();
                TUICColor1.value = makeColor();
                isTransparent.value = makeColorTranparent();
            },
            { deep: true },
        );
        console.log(TUICColor1.value);

        return { TUICI18N, TUICLibrary, TUICData, RESET, TUICColor1, isTransparent, editingColorType, isDefault, isEditable };
    },
    methods: {
        defaultColor: function (colorPath, colorType, colorKind) {
            const colorPicker = this.$refs.colorPicker;
            const defaultColorButton = this.$refs.defaultColorButton;
            const colorPickerBlock = this.$refs.colorPickerBlock;
            const transparentColorButton = this.$refs.transparentColorButton;

            const TUIC_color = getColorFromPref(colorPath, colorType, colorKind).replace("rgba(", "").replace(")", "").split(", ");
            const TUICColor1 = TUICLibrary.color.rgb2hex([Number(TUIC_color[0]), Number(TUIC_color[1]), Number(TUIC_color[2])]);
            colorPicker.value = TUICColor1;

            transparentColorButton.setAttribute("data-checked", TUIC_color[3] == 0);

            TUICPrefStore.delete(`${colorKind}.${colorPath}.${colorType}`, ["systemCSSUpdate", colorPath == "twitterIconFavicon" ? "classUpdate" : ""]);

            colorPickerBlock.classList.add("TUIC_ISNOTDEFAULT");
            defaultColorButton.classList.add("TUIC_DISPNONE");
        },
        changeColor: function (colorPath, colorType, colorKind) {
            const colorPicker = this.$refs.colorPicker;
            const defaultColorButton = this.$refs.defaultColorButton;
            const colorPickerBlock = this.$refs.colorPickerBlock;
            const transparentColorButton = this.$refs.transparentColorButton;

            const colorValue = TUICLibrary.color.hex2rgb(colorPicker.value);
            const isChecked = transparentColorButton.checked;

            TUICPrefStore.set(`${colorKind}.${colorPath}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`, ["systemCSSUpdate", colorPath == "twitterIconFavicon" ? "classUpdate" : ""]);

            defaultColorButton.classList.remove("TUIC_DISPNONE");
            colorPickerBlock.classList.remove("TUIC_ISNOTDEFAULT");
        },
        changeColorCheck: function (colorPath, colorType, colorKind) {
            const colorPicker = this.$refs.colorPicker;
            const defaultColorButton = this.$refs.defaultColorButton;
            const colorPickerBlock = this.$refs.colorPickerBlock;
            const transparentColorButton = this.$refs.transparentColorButton;

            transparentColorButton.dataset.checked = transparentColorButton.dataset.checked !== "true";

            const colorValue = TUICLibrary.color.hex2rgb(colorPicker.value);
            const isChecked = transparentColorButton.dataset.checked === "true";

            TUICPrefStore.set(`${colorKind}.${colorPath}.${colorType}`, `rgba(${colorValue[0]}, ${colorValue[1]}, ${colorValue[2]}, ${isChecked ? 0 : 1})`, ["systemCSSUpdate", colorPath == "twitterIconFavicon" ? "classUpdate" : ""]);

            defaultColorButton.classList.remove("TUIC_DISPNONE");
            colorPickerBlock.classList.remove("TUIC_ISNOTDEFAULT");
        },
    },
});
</script>

<style scoped></style>
