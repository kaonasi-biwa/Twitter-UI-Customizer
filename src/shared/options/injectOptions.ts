import { createApp } from "vue";
import index from "./index.vue";

import { createPinia } from "pinia";

export const inject = () => {
    const app = createApp(index);
    app.use(createPinia());
    app.mount("#TUICOptionMain");
};
