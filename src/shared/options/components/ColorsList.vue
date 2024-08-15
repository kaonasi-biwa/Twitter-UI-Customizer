<template>
    <div id="TUICColorSettingsDivBox">
        <template v-for="i in getColorIDs()" :key="i">
            <div class="TUICColorSettingsThree__container">
                <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title TUIC_setting_text">
                    {{ TUICI18N.get(getColorI18n(i)) }}
                </h2>
                <div class="TUIC_col_setting_container_2">
                    <ThreeColorSetting :id="i" />
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { TUICI18N } from "@modules/i18n";
import ThreeColorSetting from "./ThreeColorSetting.vue";
import { getColorI18n, getColorIDs } from "@modules/pref";
</script>

<style scoped></style>
@modules/i18n/i18n
