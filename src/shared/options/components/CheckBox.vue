<template>
    <div class="TUICCheckBoxParent">
        <input type="checkbox" :id="value.replace(/\./g, '-_-')" :checked="TUICPref.get(value)" @change="changePref(value, $event)" />
        <div>
            <label class="TUIC_setting_text" :for="value.replace(/\./g, '-_-')">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "../../../content/i18n";
import { TUICPref, TUICLibrary } from "../../../content/library";
import { TUICObserver } from "../../../content/observer";

export default defineComponent({
    //チェックボックスの一行。(id:設定のid value:Boolで値 name:設定の名前 type:設定の分類)
    props: {
        name: {
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
    methods: {
        changePref(path, event) {
            TUICPref.set(path, event.target.checked);
            TUICPref.save();
            TUICLibrary.getClasses.update();
            TUICObserver.titleObserverFunction();
        },
    },
});
</script>

<style scoped></style>
