<template>
    <div id="TUICColorSettingsDivBox">
        <template v-for="i in TUICPref.getSettingData(`buttonColor`)" :key="i.id">
            <div class="TUICColorSettingsThree__container">
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title TUIC_setting_text">
                    {{ TUICI18N.get(i.i18n) }}
                </h2>
                <div class="TUIC_col_setting_container_2">
                    <ThreeColorSetting :id="i.id" />
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";
import ThreeColorSetting from "./ThreeColorSetting.vue";
import { TUICPref } from "@content/modules";
</script>

<style scoped></style>
@modules/i18n/i18n
