<template>
    <div class="TUIC_input_color_rounded__container">
        <div class="TUIC_input_color_rounded">
            <input type="color" :id="inputId" class="TUIC_RoundedColorPicker_input TUICButtonColor" @change="onValueChanged($event)" :value="inputColorValue" ref="colorPicker" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    inputId: string;
    inputColorValue: string;
}>();
const emit = defineEmits<{ (e: "valueChanged", value: unknown): void }>();

const onValueChanged = ($event: Event) => {
    console.log("called onValueChanged");
    emit("valueChanged", ($event.currentTarget as HTMLInputElement).value);
};
</script>
