<template>
    <template v-for="i in TUICData[id].all" :key="i">
        <CheckBox :value="`${id}.${i}`" :name="TUICData[id].i18n[i]" />
    </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckBox from "./CheckBox.vue";
import { TUICData } from "../../../content/data.js";

export default defineComponent({
    components: { CheckBox },
    props: ["id"],
    setup() {
        return { TUICData };
    },
});
</script>

<style scoped></style>
