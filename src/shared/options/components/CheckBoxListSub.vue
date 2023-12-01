<template>
    <template v-for="i in TUICData[id].all" :key="i">
        <CheckBox :id="i" :value="`${id}.${i}`" :name="TUICData[id].i18n[i]" :type="type" />
    </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckBox from "./CheckBox.vue";
import { TUICData } from "../../../content/data";

export default defineComponent({
    components: { CheckBox },
    props: ["id", "type"],
    setup() {
        return { TUICData };
    },
});
</script>

<style scoped></style>
