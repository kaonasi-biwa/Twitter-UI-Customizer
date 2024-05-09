<template>
    <div>
        <CheckBoxList id="profileSetting.tabs" />

        <SettingSubtitle2 title-i18-n="profileSetting-profileInitialTab-settingTitle" />
        <RadioButtonList id="profileSetting.profileInitialTab" />

        <SettingSubtitle2 title-i18-n="common-hidebelow" />
        <CheckBoxList id="profileSetting.invisible" />
    </div>
</template>

<script setup lang="ts">
import SettingSubtitle2 from "../components/settingSubtitle2.vue";
import CheckBoxList from "@shared/options/components/CheckBoxList.vue";
import RadioButtonList from "@shared/options/components/RadioButtonList.vue";
</script>
