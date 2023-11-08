<template>
    <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">
            {{ TUICI18N.get("settingColors-settingTitle") }}
        </summary>
        <div id="colorSettingList" class="TUIC_col_setting_container">
            <div style="display: flex">
                <input type="radio" name="TUICColorType" value="buttonColor" id="TUICColorType-Base" class="TUICColorSettingRadio" checked />
                <label class="TUIC_setting_button TUIC_setting_button_width TUICSettingRadioTypeBigButton" for="TUICColorType-Base" style="background: linear-gradient(125deg, #ffffff 0%, #ffffff 42.5%, #000000 42.5%, #000000 100%)"
                    ><span
                        ><span>{{ TUICI18N.get("settingColors-select-base") }}</span></span
                    ></label
                >
                <input type="radio" name="TUICColorType" value="buttonColorLight" id="TUICColorType-Light" class="TUICColorSettingRadio" />
                <label class="TUIC_setting_button TUIC_setting_button_width TUICSettingRadioTypeBigButton" for="TUICColorType-Light" style="background-color: rgb(255, 255, 255)"
                    ><span
                        ><span>{{ TUICI18N.get("settingColors-select-light") }}</span></span
                    ></label
                >
                <input type="radio" name="TUICColorType" value="buttonColorDark" id="TUICColorType-Dark" class="TUICColorSettingRadio" />
                <label class="TUIC_setting_button TUIC_setting_button_width TUICSettingRadioTypeBigButton" for="TUICColorType-Dark" style="background-color: rgb(0, 0, 0)"
                    ><span>
                        <span>{{ TUICI18N.get("settingColors-select-dark") }} </span>
                    </span>
                </label>
            </div>
            <div style="margin-left: 10px; margin-right: 10px">
                <span class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text" style="font-size: 12px">{{ TUICI18N.get("settingColors-select-explain") }} </span>
            </div>
            <br />
            <ColorsList :editing-color-type="TUICLibrary.getEditingColorType()" />
        </div>
    </details>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "../../../content/i18n";

import ColorsList from "../components/ColorsList.vue";

import { TUICLibrary } from "../../../content/library";

export default defineComponent({
    components: { ColorsList },
    setup() {
        return { TUICI18N, TUICLibrary };
    },
});
</script>

<style scoped></style>
