<template>
    <button :id="btnId" :class="['TUIC_icon_button_con', 'TUIC_setting_button', 'TUICDefaultColor']" :title="btnTitle" @click="clickedBtn">
        <div class="TUICButtonRest_innersvg__container">
            <component :is="ICON_RESET" />
        </div>
    </button>
</template>

<script setup lang="ts">
import ICON_RESET from "@shared/icons/common/reset.svg?component";

defineProps<{
    btnId: string;
    btnTitle: string;
}>();
const emit = defineEmits<(e: "clickedBtn") => void>();

const clickedBtn = () => {
    emit("clickedBtn");
};
</script>

<style scoped>
.TUICDefaultColor {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px !important;
    height: 36px !important;
    border-color: #71767b !important;

    &:is(:hover, :focus-visible) {
        background: color-mix(in srgb, var(--TUIC-container-background), var(--twitter-TUIC-color) 5%);
    }
    &:active {
        background: color-mix(in srgb, var(--TUIC-container-background), var(--twitter-TUIC-color) 10%);
    }
}
.TUICButtonRest_innersvg__container {
    svg {
        width: 22px;
        height: 22px;
        opacity: 1;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
}
</style>
