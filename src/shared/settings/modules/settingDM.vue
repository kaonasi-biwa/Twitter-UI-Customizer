<template>
    <div>
        <CheckBoxList id="dmPage" />

        <settingSubtitle2 title-i18-n="common-hidebelow" />
        <p class="TUIC_setting_notice_paragraph">
            {{ translate("temp-notice-hideDMSheetOnBottomRight") }}
        </p>
    </div>
</template>

<script setup lang="ts">
import CheckBoxList from "@shared/options/components/CheckBoxList.vue";
import settingSubtitle2 from "../components/settingSubtitle2.vue";
import { translate } from "@content/i18n";
</script>

<style scoped>
.TUIC_setting_notice_paragraph {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
    color: rgb(113 118 124);
}
</style>
