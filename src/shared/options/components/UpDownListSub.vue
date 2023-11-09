<template>
    <div style="display: flex" :TUICUDBox="id" TUICSelectedItem="">
        <div style="flex: 1 2; width: 50px">
            <h2 style="font-size: 15px" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">
                {{ TUICI18N.get("settingUI-upDownList-visible") }}
            </h2>
            <br />
            <div id="TUIC_visible" class="TUIC_selectbox" :style="{ '--contentCount': _contentCount }">
                <UpDownButtons :id="id" :settings="TUICPref.get(id)" />
            </div>
        </div>
        <div class="UpDownButtons" style="text-align: center; width: 30px">
            <br />
            <br />
            <!-- eslint-disable-next-line vue/no-v-html -->
            <button v-for="item in UpdownButtonFuncs" :key="item.btnAction" :class="['TUIC_icon_button_con', item.btnAction]" :title="TUICI18N.get(item.tooltiptag)"><component :is="item.iconSrc" /></button>
        </div>
        <div style="flex: 1 2; width: 50px">
            <h2 style="font-size: 15px" class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_text">
                {{ TUICI18N.get("settingUI-upDownList-invisible") }}
            </h2>
            <br />
            <div id="TUIC_invisible" class="TUIC_selectbox" :style="{ '--contentCount': _contentCount }">
                <UpDownButtons
                    :id="id"
                    :settings="
                        TUICData.settings[id].all.filter((value) => {
                            return !TUICPref.get(id).includes(value);
                        })
                    "
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import UpDownButtons from "./UpDownButtons.vue";

// new URL("./img.png", import.meta.url).href;

import ARROW_LEFT from "../../../content/icons/arrow/arrow_left.svg?component";
import ARROW_RIGHT from "../../../content/icons/arrow/arrow_right.svg?component";
import ARROW_UP from "../../../content/icons/arrow/arrow_up.svg?component";
import ARROW_DOWN from "../../../content/icons/arrow/arrow_down.svg?component";
import RESET from "../../../content/icons/arrow/reset.svg?component";

// import { ARROW_LEFT, ARROW_UP, ARROW_DOWN, ARROW_RIGHT, RESET } from "../../../content/data/icons";

import { TUICI18N } from "../../../content/i18n";
import { TUICData } from "../../../content/data";
import { TUICPref } from "../../../content/library";

export default defineComponent({
    props: ["id"],
    setup(props) {
        const UpdownButtonFuncs = [
            {
                iconSrc: ARROW_LEFT,
                btnAction: "TUIC_up_down_list_to_left",
                tooltiptag: "settingUI-upDownList-toLeft",
            },
            {
                iconSrc: ARROW_UP,
                btnAction: "TUIC_up_down_list_to_up",
                tooltiptag: "settingUI-upDownList-toUp",
            },
            {
                iconSrc: ARROW_DOWN,
                btnAction: "TUIC_up_down_list_to_down",
                tooltiptag: "settingUI-upDownList-toDown",
            },
            {
                iconSrc: ARROW_RIGHT,
                btnAction: "TUIC_up_down_list_to_right",
                tooltiptag: "settingUI-upDownList-toRight",
            },
            {
                iconSrc: RESET,
                btnAction: "TUIC_up_down_list_to_default",
                tooltiptag: "settingUI-upDownList-restoreDefault",
            },
        ];
        const UDALL = TUICData.settings[props.id].all;
        let _contentCount = 5;
        if (UDALL.length > 5) {
            _contentCount = UDALL.length;
        }
        return { UpdownButtonFuncs, TUICI18N, TUICData, TUICPref, _contentCount };
    },
});
</script>

<style scoped></style>
