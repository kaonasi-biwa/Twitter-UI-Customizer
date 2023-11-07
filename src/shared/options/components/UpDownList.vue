<template>
    <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">
            {{ TUICI18N.get(title) }}
        </summary>
        <div class="TUIC_col_setting_container">
            <UpDownListSub :id="id" />
            <br />
            <slot></slot>
        </div>
        <br />
    </details>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import UpDownListSub from "./UpDownListSub.vue";

import { TUICI18N } from "../../../content/i18n";
export default defineComponent({
    setup(props) {
        return { TUICI18N };
    },
    //アップダウンリスト(id:設定のID。TUICPref直下 title:設定の名前, option:下に表示する設定)
    props: ["title", "id"],
    components: { UpDownListSub },
});
</script>
