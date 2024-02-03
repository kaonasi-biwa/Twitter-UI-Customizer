<template>
    <div class="TUICCheckBoxParent">
        <input type="checkbox" :id="value.replace(/\./g, '-_-')" :checked="TUICPref.getPref(value)" @change="changePref(value, $event)" />
        <div>
            <label class="TUIC_setting_text" :for="value.replace(/\./g, '-_-')">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@content/i18n";
import { TUICLibrary } from "@content/library";
import { TUICObserver } from "@content/observer";
import { TUICPref } from "@content/modules";

const props = defineProps<{
    name: string;
    value: string;
}>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changePref = (path: string, event: any) => {
    TUICPref.setPref(path, event.target.checked);
    TUICPref.save();
    TUICLibrary.getClasses.update();
    TUICObserver.titleObserverFunction();
};
</script>

<style scoped></style>
@content/modules/observer/observer
