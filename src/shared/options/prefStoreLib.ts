import { useTUICPrefStore } from "./prefStore";
import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { TUICPref, TUICLibrary } from "../../content/library";
import { applySystemCss } from "../../content/applyCSS";
import { TUICObserver } from "../../content/observer";
import { watch } from "vue";

setActivePinia(createPinia());
const prefStore = useTUICPrefStore();
export const TUICPrefStore = {
    get: function (identifier) {
        if (prefStore.pref == null) {
            prefStore.injectPref();
        }
        return prefStore.get(identifier);
    },
    set: function (identifier, value, settings = []) {
        if (prefStore.pref == null) {
            prefStore.injectPref();
        }
        prefStore.set(identifier, value);
        TUICPref.set(identifier, value);
        TUICPref.save();
        this.runAction(settings);
    },
    watch: function (identifier, callback) {
        if (prefStore.pref == null) {
            prefStore.injectPref();
        }
        const { pref } = storeToRefs(prefStore);
        let nowData = prefStore.get(identifier);
        watch(
            pref,
            () => {
                const updatedData = prefStore.get(identifier);
                if (nowData != updatedData) {
                    nowData = updatedData;
                    callback(updatedData);
                }
            },
            { deep: true },
        );
    },
    delete: function (identifier, settings) {
        if (prefStore.pref == null) {
            prefStore.injectPref();
        }
        prefStore.delete(identifier);
        TUICPref.delete(identifier);
        TUICPref.save();
        this.runAction(settings);
    },
    runAction: function (type = []) {
        if (type.includes("classUpdate")) {
            TUICLibrary.getClasses.update();
        }
        if (type.includes("titleUpdate")) {
            TUICObserver.titleObserverFunction();
        }
        if (type.includes("systemCSSUpdate")) {
            applySystemCss();
        }
    },
};
