import { defineStore } from "pinia";

// editingColorType : 指定する色のタイプがベース / ダーク / ライトどれで使用されるかを保持
export const useStore = defineStore({
    id: "optionMain",
    state: () =>
        ({
            editingColorType: "normal",
        }) as {
            editingColorType: "normal" | "light" | "dark";
        },
});
