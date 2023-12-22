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
import { TUICI18N } from "@content/i18n";
import { TUICPref, TUICLibrary } from "@content/library";
import { TUICObserver } from "@content/observer";

export default defineComponent({
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
        const changePref = (path, event) => {
            TUICPref.set(path, event.target.checked);
            TUICPref.save();
            TUICLibrary.getClasses.update();
            TUICObserver.titleObserverFunction();
        };
        return { TUICI18N, TUICPref, changePref };
    },
});
</script>

<style scoped></style>
