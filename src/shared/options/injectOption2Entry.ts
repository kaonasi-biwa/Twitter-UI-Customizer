import { createApp } from "vue";
import optionMain from "./OptionMain.ce.vue";

export const injectOptionMain = () => {
    if (optionMain.styles !== undefined) {
        const style = document.createElement("style");
        style.textContent = optionMain.styles;
        document.head.appendChild(style);
    }

    const app = createApp(optionMain);
    app.mount("#TUICOptionEntry");
};
