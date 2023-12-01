<template>
    <details class="TUICDetails">
        <summary class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo TUIC_setting_title">
            {{ TUICI18N.get(title) }}
        </summary>
        <div class="TUIC_col_setting_container">
            <CheckBoxListSub :id="id" />
        </div>
        <br />
        <slot></slot>
    </details>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckBoxListSub from "./CheckBoxListSub.vue";

import { TUICI18N } from "../../../content/i18n";

export default defineComponent({
    components: { CheckBoxListSub },
    //チェックボックスリスト(id:ID title:Stringでタイトル)
    props: {
        title: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
    setup() {
        return { TUICI18N };
    },
});
</script>

<style scoped></style>
