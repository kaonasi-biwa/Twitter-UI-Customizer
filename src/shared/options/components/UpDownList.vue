<template>
    <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">
            {{ TUICI18N.get(title) }}
        </summary>
        <div class="TUIC_col_setting_container">
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
                    <button v-for="item in UpdownButtonFuncs" :class="['TUIC_icon_button_con', item.btnAction]" :title="TUICI18N.get(item.tooltiptag)" v-html="item.iconSrc"></button>
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
                                    // console.log(TUICData.settings[id].all);
                                    // console.log(
                                    //     TUICData.settings[id].all.filter((value) => {
                                    //         console.log(!settings[id].includes(value));
                                    //         return !settings[id].includes(value);
                                    //     }),
                                    // );
                                    // // console.log(value);
                                    // console.log(settings[id].includes(value));
                                    return !TUICPref.get(id).includes(value);
                                })
                            "
                        />
                        {{ TUICInvisibleButtons }}
                    </div>
                </div>
            </div>
            <br />
            <slot></slot>
        </div>
        <br />
    </details>
</template>

<script lang="ts">
import { TUICPref } from "../../../content/library";
import { defineComponent } from "vue";

import UpDownButtons from "./UpDownButtons.vue";

import { ARROW_LEFT, ARROW_UP, ARROW_DOWN, ARROW_RIGHT, RESET } from "../../../content/data/icons";
import { TUICI18N } from "../../../content/i18n";
import { TUICData } from "../../../content/data";

export default defineComponent({
    setup(props) {
        console.log(props.id);
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
    //アップダウンリスト(id:設定のID。TUICPref直下 title:設定の名前, option:下に表示する設定)
    props: ["title", "TUICVisibleButtons", "TUICInvisibleButtons", "id"],
    components: { UpDownButtons },
});
</script>
