<template>
    <div id="TUICColorSettingsDivBox">
        <template v-for="i in TUICData.settings.colors.id" :key="i">
            <h2 class="r-jwli3a r-1tl8opc r-qvutc0 r-bcqeeo css-901oao TUIC_setting_title TUIC_setting_text">
                {{ TUICI18N.get(TUICData.settings.colors.i18n[i]) }}
            </h2>
            <div class="TUIC_col_setting_container_2">
                <ThreeColorSetting :id="i" />
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TUICData } from "@content/data";
import { TUICI18N } from "@content/i18n";

import ThreeColorSetting from "./ThreeColorSetting.vue";

export default defineComponent({
    components: {
        ThreeColorSetting,
    },
    setup() {
        return { TUICData, TUICI18N };
    },
});
</script>

<style scoped></style>
