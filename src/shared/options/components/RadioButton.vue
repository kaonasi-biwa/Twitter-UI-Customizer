<template>
    <div class="TUICCheckBoxParent">
        <input type="radio" :id="`${id.replace(/\./g, '-_-')}-_-${valueName}`" :name="id.replace(/\./g, '-_-')" :value="valueName" :checked="TUICPref.getPref(id) == valueName" @change="changePref(id, valueName)" />
        <div>
            <label class="TUIC_setting_text" :for="`${id.replace(/\./g, '-_-')}-_-${valueName}`">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";
import { TUICObserver } from "@modules/observer/index.ts";
import { TUICPref } from "@content/modules";
import { updateClasses } from "@modules/htmlClass/classManager";

const props = defineProps<{ id: string; valueName: string; name: string }>();

const changePref = (path, valueName) => {
    TUICPref.setPref(path, valueName);
    TUICPref.save();
    updateClasses();
    TUICObserver.callback();
};
</script>
@modules/observer/observer @modules/i18n/i18n
