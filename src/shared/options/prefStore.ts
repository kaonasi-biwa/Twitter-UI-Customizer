import { defineStore } from "pinia";
import { TUICPref, TUICLibrary, getPointerFromKey } from "../../content/library";

export const useTUICPrefStore = defineStore({
    id: "TUICPrefStore",
    state: () => {
        return {
            pref: null,
        };
    },
    getters: {
        get: function (state) {
            return (identifier) => {
                const { object, key } = getPointerFromKey(state.pref, identifier);
                return object[key];
            };
        },
    },
    actions: {
        injectPref: function () {
            TUICPref.getConfig();
            this.$patch({
                pref: TUICPref.config,
            });
        },
        set: function (identifier, value) {
            if (identifier == "") {
                this.pref.config = value;
            } else {
                const { object, key } = getPointerFromKey(this.pref, identifier);
                object[key] = value;
            }
        },
        delete: function (identifier) {
            const { object, key } = getPointerFromKey(this.pref, identifier);
            delete object[key];
        },
    },
});
