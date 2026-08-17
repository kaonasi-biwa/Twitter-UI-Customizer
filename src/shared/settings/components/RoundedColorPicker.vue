<template>
    <div class="TUIC_input_color_rounded__container">
        <div class="TUIC_input_color_rounded">
            <input type="color" :id="inputId" class="TUIC_RoundedColorPicker_input TUICButtonColor" @change="onValueChanged($event)" :value="inputColorValue" ref="colorPicker" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
    inputId: string;
    inputColorValue: string;
}>();
const emit = defineEmits<(e: "valueChanged", value: string) => void>();
defineExpose({ setInputValue });

const colorPicker = ref<HTMLInputElement>(null);

const onValueChanged = ($event: Event) => {
    console.log("called onValueChanged");
    emit("valueChanged", ($event.currentTarget as HTMLInputElement).value);
};

function setInputValue(value: string) {
    colorPicker.value.value = value;
}
</script>

<style scoped>
/* type=colorなinputタグを無理やり丸くするためのマスク */
.TUIC_input_color_rounded {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
}

/* ホバー時の背景色変化とクリック時のサイズ変更を加えるためだけのコンテナ */
.TUIC_input_color_rounded__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #9c9c9c80;
    border: solid 3px color-mix(in srgb, var(--TUIC-container-background), var(--twitter-TUIC-color) 20%);
    border-radius: 50%;
    transition: none;

    &:is(:hover, :focus-visible) {
        background: var(--TUIC-color-hover-efect);
    }

    &:active {
        border-color: color-mix(in srgb, var(--TUIC-container-background), var(--twitter-TUIC-color) 40%);
    }
}

.TUIC_RoundedColorPicker_input {
    width: 200%;
    height: 200%;
    appearance: none;
    cursor: pointer;
    background: transparent;
    border: none;
    transform: translate(-25%, -25%);
}
</style>
