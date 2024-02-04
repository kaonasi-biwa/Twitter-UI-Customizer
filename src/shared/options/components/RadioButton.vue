<template>
    <div class="TUICCheckBoxParent">
        <input type="radio" :id="`${id.replace(/\./g, '-_-')}-_-${valueName}`" :name="id.replace(/\./g, '-_-')" :value="valueName" :checked="TUICPref.getPref(id) == valueName" @change="changePref(id, valueName)" />
        <div>
            <label class="TUIC_setting_text" :for="`${id.replace(/\./g, '-_-')}-_-${valueName}`">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@content/i18n";
import { TUICObserver } from "@content/modules/observer/index.ts";
import { TUICPref } from "@content/modules";
import { updateClasses } from "@content/modules/htmlClass/classManager";

const props = defineProps<{ id: string; valueName: string; name: string }>();

const changePref = (path, valueName) => {
    TUICPref.setPref(path, valueName);
    TUICPref.save();
    updateClasses();
    TUICObserver.observerFunction();
};
</script>
@content/modules/observer/observer
