import { createApp } from "vue";
import safemodeVue from "../shared/options/safemode.vue";

const app = createApp(safemodeVue);
app.mount("#TUICOptionSafemodeMain");
