<template>
    <template v-for="i in TUICData[id].all">
        <Checkbox :id="i" :value="TUICPref.get(id)[i]" :name="TUICData[id].i18n[i]" :type="type" />
    </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Checkbox from "./Checkbox.vue";

import { TUICPref } from "../../../content/library";
import { TUICData } from "../../../content/data";

export default defineComponent({
    setup() {
        return { TUICData, TUICPref };
    },
    props: ["id", "type"],
    components: { Checkbox },
});
</script>

<style scoped></style>
