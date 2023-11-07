import { createApp } from "vue";
import index from "./index.vue";

export const inject = () => {
    const app = createApp(index);
    app.mount("#TUICOptionMain");
};
