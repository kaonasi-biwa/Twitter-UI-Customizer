<template>
    <div style="display: flex; align-items: center; justify-content: space-between">
        <input type="file" accept="image/*" class="TUIC_setting_text TUICSelectImg" @change="changeCustomCSS()" ref="twitterIcon" />
        <div style="display: flex; gap: 8px; align-items: center">
            <p style="color: rgb(113 118 124)" class="TUIC_setting_text">
                {{ translate("twitterIcon-nowIcon") }}
            </p>
            <span id="TUICIcon_IconImg" class="TUICUploadedImg"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { injectSettingsIconStyle, injectSettingsStyle } from "@content/applyCSS";
import { translate } from "@shared/i18n";
import { ref } from "vue";

const twitterIcon = ref(null);

async function changeCustomCSS() {
    if (twitterIcon.value.files.length >= 1) {
        await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                localStorage.setItem("TUIC_IconImg", reader.result as string);
                const element = document.createElement("canvas");
                element.height = 200;
                element.width = 200;
                const context = element.getContext("2d");
                context.beginPath();
                context.arc(100, 100, 100, (0 * Math.PI) / 180, (360 * Math.PI) / 180);
                context.clip();
                const image = new Image();
                image.onload = function (this: HTMLImageElement) {
                    context.beginPath();
                    context.drawImage(this, 0, 0, this.naturalHeight, this.naturalWidth, 0, 0, 200, 200);
                    localStorage.setItem("TUIC_IconImg_Favicon", element.toDataURL());
                    resolve(null);
                };

                image.src = reader.result as string;
            });
            reader.readAsDataURL(twitterIcon.value.files[0]);
        });
    } else {
        localStorage.setItem("TUIC_IconImg", "");
        localStorage.setItem("TUIC_IconImg_Favicon", "");
    }

    injectSettingsStyle();
    injectSettingsIconStyle();
}
</script>

<style scoped>
.TUICUploadedImg {
    background-size: cover;
}
:root[data-tuic-settings*="|twitterIcon.options.roundIcon|"] #TUICIcon_IconImg {
    border-radius: 9999px !important;
}

.TUICUploadedImg:not([data-testid="interstitialGraphic"] > svg) {
    display: inline-block;
    width: 64px;
    height: 64px;
    border: 1px solid;
    border-color: var(--TUIC-detail-border) !important;
}

.TUICSelectImg {
    font-size: 15px;
}
.TUICSelectImg::file-selector-button {
    padding: 10px 20px;
    margin-right: 12px;
    background-color: color-mix(in srgb, var(--TUIC-container-background), var(--twitter-TUIC-color) 20%);
    border: none;
    border-radius: 10px;
}
</style>
