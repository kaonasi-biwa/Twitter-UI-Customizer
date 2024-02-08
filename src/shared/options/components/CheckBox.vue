<template>
    <div class="TUICCheckBoxParent">
        <input type="checkbox" :id="value.replace(/\./g, '-_-')" :checked="TUICPref.getPref(value)" @change="changePref(value, $event)" />
        <div>
            <label class="TUIC_setting_text" :for="value.replace(/\./g, '-_-')">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";
import { TUICPref } from "@content/modules";
import { titleObserverFunction } from "@modules/observer/titleObserver";
import { updateClasses } from "@modules/htmlClass/classManager";
const props = defineProps<{
    name: string;
    value: string;
}>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changePref = (path: string, event: any) => {
    TUICPref.setPref(path, event.target.checked);
    TUICPref.save();
    updateClasses();
    titleObserverFunction();
};
</script>

<style scoped></style>
@modules/observer/observer @modules/i18n/i18n
