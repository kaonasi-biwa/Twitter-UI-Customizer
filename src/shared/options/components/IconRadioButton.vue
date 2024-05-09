<template>
    <div class="TUICIconRadioButton">
        <input type="radio" :id="`${id.replace(/\./g, '-_-')}-_-${valueName}`" :name="id.replace(/\./g, '-_-')" :value="valueName" :checked="TUICPref.getPref(id) == valueName" @change="changePref(id, valueName)" />
        <div>
            <label class="TUIC_setting_IconRadioButton" :for="`${id.replace(/\./g, '-_-')}-_-${valueName}`" :title="TUICI18N.get(name)">
                <component :is="props.icon" />
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";
import { TUICPref } from "@content/modules";
import { Component } from "vue";
import { updateClasses } from "@content/modules/htmlClass/classManager";

const props = defineProps<{ id: string; valueName: string; name: string; icon: Component }>();

const changePref = (path, valueName) => {
    TUICPref.setPref(path, valueName);
    TUICPref.save();
    updateClasses();
};
</script>
