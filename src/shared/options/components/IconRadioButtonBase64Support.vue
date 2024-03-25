<template>
    <div class="TUICIconRadioButton">
        <input type="radio" :id="`${id.replace(/\./g, '-_-')}-_-${valueName}`" :name="id.replace(/\./g, '-_-')"
            :value="valueName" :checked="TUICPref.getPref(id) == valueName" @change="changePref(id, valueName)" />
        <div>
            <label class="TUIC_setting_IconRadioButton" :for="`${id.replace(/\./g, '-_-')}-_-${valueName}`"
                :title="TUICI18N.get(name)">
                <img style="width: 24px;padding-right: 3px;" :src="base64Img" />
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@content/i18n";
import { TUICLibrary } from "@content/library";
import { TUICObserver } from "@content/observer";
import { TUICPref } from "@content/modules";
import { Component } from "vue";

const props = defineProps<{ id: string; valueName: string; name: string; base64Img: string }>();

const changePref = (path, valueName) => {
    TUICPref.setPref(path, valueName);
    TUICPref.save();
    TUICLibrary.getClasses.update();
    TUICObserver.observerFunction(null);
};
</script>
