import { defineStore } from "pinia";

// editingColorType : 指定する色のタイプがベース / ダーク / ライトどれで使用されるかを保持
export const useStore = defineStore("optionMain", {
    state: () =>
        ({
            editingColorType: "buttonColor",
        }) as {
            editingColorType: "buttonColor" | "buttonColorLight" | "buttonColorDark";
        },
});
