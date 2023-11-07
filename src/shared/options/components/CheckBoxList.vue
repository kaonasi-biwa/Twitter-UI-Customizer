<template>
    <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">
            {{ TUICI18N.get(title) }}
        </summary>
        <div class="TUIC_col_setting_container">
            <checkbox v-for="i in TUICData[id].all" :id="i" :value="TUICPref.get(id)[i]" :name="TUICData[id].i18n[i]" :type="type" />
        </div>
        <br />
        <slot></slot>
    </details>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CheckBox from "./CheckBox.vue";

import { TUICI18N } from "../../../content/i18n";
import { TUICData } from "../../../content/data";
import { TUICPref } from "../../../content/library";

export default defineComponent({
    components: { CheckBox },
    //チェックボックスリスト(id:ID title:Stringでタイトル)
    props: {
        title: {
            type: String,
            required: true,
        },
        id: {
            type: String as PropType<keyof typeof TUICData>,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
    },
    setup() {
        return { TUICI18N, TUICData, TUICPref };
    },
});
</script>

<style scoped></style>
