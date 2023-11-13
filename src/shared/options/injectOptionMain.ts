import { createApp } from "vue";
import optionMain from "./OptionMain.ce.vue";

if (optionMain.styles !== undefined) {
    const style = document.createElement("style");
    style.textContent = optionMain.styles;
    document.head.appendChild(style);
}

const app = createApp(optionMain);
app.mount("#TUICOptionMain");
