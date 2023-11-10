import { createApp, defineCustomElement } from "vue";
import safemodeVue from "../shared/options/SafeMode.ce.vue";

import { TUICI18N } from "./i18n";

TUICI18N.fetchA().then(() => {
    const ce = defineCustomElement(safemodeVue);
    customElements.define("tuic-safemode", ce);
    document.querySelector("#TUICOptionSafemodeMain").appendChild(new ce({}));
});
