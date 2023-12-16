<template>
    <RadioButton v-for="i in TUICData[id].all" :key="i" :id="id" :valueName="i" :name="TUICData[id].i18n[i]" />
    <br />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RadioButton from "./RadioButton.vue";
import { TUICData } from "@content/data";

export default defineComponent({
    components: {
        RadioButton,
    },
    props: ["id"],
    setup() {
        return { TUICData };
    },
});
</script>

<style scoped></style>
