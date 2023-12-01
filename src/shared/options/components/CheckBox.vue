<template>
    <div class="TUICCheckBoxParent">
        <input type="checkbox" :id="id" :checked="TUICPref.get(value)" :class="type" />
        <div>
            <label class="TUIC_setting_text" :for="id">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "../../../content/i18n";
import { TUICPref } from "../../../content/library";

export default defineComponent({
    //チェックボックスの一行。(id:設定のid value:Boolで値 name:設定の名前 type:設定の分類)
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    setup() {
        return { TUICI18N, TUICPref };
    },
});
</script>

<style scoped></style>
