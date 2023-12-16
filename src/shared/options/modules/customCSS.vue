<template>
    <form>
        <textarea id="css_textarea" v-model="customCSS" ref="CustomCSSBox"></textarea>
    </form>
    <button id="save" class="TUIC_setting_text TUIC_setting_button TUIC_setting_button_width" @click="changeCustomCSS()">
        {{ TUICI18N.get("customCSS-save") }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { applyCustomCss } from "@content/applyCSS";
import { TUICI18N } from "@content/i18n";

export default defineComponent({
    setup() {
        const customCSS = localStorage.getItem("TUIC_CSS");
        return { TUICI18N, customCSS };
    },
    methods: {
        changeCustomCSS() {
            localStorage.setItem("TUIC_CSS", this.$refs.CustomCSSBox.value);
            applyCustomCss();
        },
    },
});
</script>
