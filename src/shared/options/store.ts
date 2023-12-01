import { defineStore } from "pinia";

export const useStore = defineStore({
    id: "optionMain",
    state: () =>
        ({
            editingColorType: "buttonColor",
            selectedElem: "",
        }) as {
            editingColorType: "buttonColor" | "buttonColorLight" | "buttonColorDark";
            selectedElem: string;
        },
});
