<template>
    <div>
        <settingSubtitle2 style="margin-top: 0" title-i18-n="XToTwitter-settingTitle" />
        <CheckBoxList id="XToTwitter" />
        <button @click="XToTwitterRestoreIcon" class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width TUICEasySettingButtons TUIC_resetOnly_colorSettings" style="margin-bottom: 10px">
            {{ TUICI18N.get("XtoTwitter-twitterIcon") }}
        </button>

        <settingSubtitle2 title-i18-n="settingPerformance-settingTitle" />
        <CheckBoxList id="uncategorizedSettings" />
    </div>
</template>

<script setup lang="ts">
import settingSubtitle2 from "../components/settingSubtitle2.vue";
import CheckBoxList from "@shared/options/components/CheckBoxList.vue";
import { TUICI18N } from "@modules/i18n";
import { XToTwitterRestoreIcon } from "@shared/options/scripts/changePrefScript";
</script>
