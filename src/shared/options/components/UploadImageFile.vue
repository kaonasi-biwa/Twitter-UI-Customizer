<template>
    <input type="file" accept="image/*" class="TUIC_setting_text TUICSelectImg" :TUICImgID="id" />
    <p class="TUIC_setting_text">{{ TUICI18N.get("twitterIcon-nowIcon") }}</p>
    <span :id="'TUICIcon_' + id" class="TUICUploadedImg"></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TUICI18N } from "../../../content/i18n";

export default defineComponent({
    props: ["id"],
    setup() {
        return { TUICI18N };
    },
});
</script>

<style scoped></style>
