<template>
    <div class="TUICCheckBoxParent">
        <input type="checkbox" :id="value.replace(/\./g, '-_-')" ref="checkboxElem" :checked="TUICPrefStore.get(value)" @change="changePref(value, $event)" />
        <div>
            <label class="TUIC_setting_text" :for="value.replace(/\./g, '-_-')">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TUICI18N } from "../../../content/i18n";
import { TUICPrefStore } from "../prefStoreLib";

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const checkboxElem = ref();
        TUICPrefStore.watch(props.value, (checked) => {
            console.log(props.value);
            console.log(checkboxElem.value);
            if (checkboxElem.value.checked != checked) {
                checkboxElem.value.checked = checked;
            }
        });
        return { TUICI18N, TUICPrefStore, checkboxElem };
    },
    methods: {
        changePref(path, event) {
            TUICPrefStore.set(path, event.target.checked, ["classUpdate"]);
        },
    },
});
</script>

<style scoped></style>
