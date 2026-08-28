<template>
    <button :id="btnId" class="TUICButtonColorCheck" @click="btnClicked($event)" :data-checked="isChecked" ref="transparentButton" :title="titleString">
        <div class="TUICButtonColorCheck_innersvg__container">
            <ICON_TRANSPARENT />
        </div>
    </button>
</template>

<script setup lang="ts">
import ICON_TRANSPARENT from "@shared/icons/common/transparent.svg?component";
import { ref } from "vue";

defineProps<{
    btnId: string;
    isChecked: boolean;
    titleString: string;
}>();
const emit = defineEmits<(e: "btnClicked", value: boolean) => void>();
defineExpose({ setCheckedValue });

const transparentButton = ref<HTMLButtonElement>(null);

const btnClicked = ($event: Event) => {
    // チェックを反転させて
    ($event.currentTarget as HTMLButtonElement).dataset.checked = (!(($event.currentTarget as HTMLButtonElement).dataset.checked === "true")).toString();
    // 親コンポーネントに処理を移す
    emit("btnClicked", ($event.currentTarget as HTMLButtonElement).dataset.checked === "true");
};

function setCheckedValue(value: boolean) {
    transparentButton.value.dataset.checked = value.toString();
}
</script>

<style scoped>
/* チェックボタン(Transparent) */
.TUICButtonColorCheck {
    display: flex;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    object-fit: cover;
    border: solid 3px color-mix(in srgb, var(--TUIC-container-background), var(--twitter-TUIC-color) 20%);
    border-radius: 50%;
}

.TUICButtonColorCheck_innersvg__container {
    width: 30px;
    height: 30px;

    > svg {
        width: 100%;
        height: 100%;
    }
}

.TUICButtonColorCheck[data-checked="true"] {
    background-color: rgb(29 161 242 / 100%);
    background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'></polyline></svg>");
    /* チェックされている */
    border: solid 3px #1da1f2;
}
</style>
