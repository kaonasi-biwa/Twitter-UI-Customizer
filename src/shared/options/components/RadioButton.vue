<template>
    <div class="TUICCheckBoxParent">
        <input type="radio" :id="`${id.replace(/\./g, '-_-')}-_-${valueName}`" ref="radiobuttonElem" :name="id.replace(/\./g, '-_-')" :value="valueName" :checked="TUICPrefStore.get(id) == valueName" @change="changePref(id, valueName)" />
        <div>
            <label class="TUIC_setting_text" :for="`${id.replace(/\./g, '-_-')}-_-${valueName}`">{{ TUICI18N.get(name) }}</label>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TUICI18N } from "../../../content/i18n";
import { TUICPrefStore } from "../prefStoreLib";

export default defineComponent({
    props: ["id", "valueName", "name"],
    setup(props) {
        const radiobuttonElem = ref();
        TUICPrefStore.watch(props.id, (selectedItem) => {
            if ((props.valueName == selectedItem) != radiobuttonElem.value.checked) {
                radiobuttonElem.value.checked = props.valueName == selectedItem;
            }
        });
        return { TUICI18N, TUICPrefStore, radiobuttonElem };
    },
    methods: {
        changePref(path, valueName) {
            TUICPrefStore.set(path, valueName, ["classUpdate", "titleUpdate"]);
        },
    },
});
</script>

<style scoped></style>
