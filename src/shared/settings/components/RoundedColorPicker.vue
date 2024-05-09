<template>
    <div class="TUIC_input_color_rounded__container">
        <div class="TUIC_input_color_rounded">
            <input type="color" :id="inputId" class="TUIC_RoundedColorPicker_input TUICButtonColor" @change="onValueChanged($event)" :value="inputColorValue" ref="colorPicker" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const colorPicker = ref(null);

defineProps<{
    inputId: string;
    inputColorValue: string;
}>();
const emit = defineEmits<{ (e: "valueChanged", value: unknown): void }>();
defineExpose({ setInputValue });

const onValueChanged = ($event: Event) => {
    console.log("called onValueChanged");
    emit("valueChanged", ($event.currentTarget as HTMLInputElement).value);
};

function setInputValue(value: string) {
    colorPicker.value.value = value;
}
</script>
