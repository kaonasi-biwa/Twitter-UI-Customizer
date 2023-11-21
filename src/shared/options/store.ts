import { defineStore } from "pinia";

export const useStore = defineStore({
    id: "optionMain",
    state: () => ({
        editingColorType: "buttonColor",
        colors: {},
    }),
});
