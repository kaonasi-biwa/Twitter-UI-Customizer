import { createApp } from "vue";
import optionMain from "./OptionMain.ce.vue";
import { createPinia } from "pinia";

export const injectOptionMain = () => {
    if (optionMain.styles !== undefined) {
        const style = document.createElement("style");
        style.textContent = optionMain.styles;
        document.head.appendChild(style);
    }

    const app = createApp(optionMain);
    app.use(createPinia());
    app.mount("#TUICOptionEntry");
};
