<template>
    <template v-for="i in TUICData[id].all">
        <CheckBox :id="i" :value="TUICPref.get(id)[i]" :name="TUICData[id].i18n[i]" :type="type" />
    </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CheckBox from "./CheckBox.vue";

import { TUICPref } from "../../../content/library";
import { TUICData } from "../../../content/data";

export default defineComponent({
    components: { CheckBox },
    props: ["id", "type"],
    setup() {
        return { TUICData, TUICPref };
    },
});
</script>

<style scoped></style>
