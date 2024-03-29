// https://stackoverflow.com/questions/42800035/why-cant-you-create-custom-elements-in-content-scripts
// import "@webcomponents/custom-elements";

import { createApp } from "vue";
import safemodeVue from "./SafeMode.ce.vue";
import { createPinia } from "pinia";

export const injectSafeMode = () => {
    // styles, not style
    if (safemodeVue.styles !== undefined) {
        const style = document.createElement("style");
        style.textContent = safemodeVue.styles;
        document.head.appendChild(style);
    }

    const app = createApp(safemodeVue);
    app.use(createPinia());
    app.mount("#TUICOptionSafemodeEntry");
    console.log("injectSafemode End");
};

// TUICI18N.fetch().then(() => {
// in Twitter, occurs bugs abt CustomElement

// {
//     const ce = defineCustomElement(safemodeVue);
//     customElements.define("tuic-option-entry", ce);
// }

//document.querySelector("#TUICOptionSafemodeMain").appendChild(new ce({}));
// });
