import { defineConfig, presetUno } from "unocss";
import type { Theme } from "unocss/preset-uno";

export default defineConfig<Theme>({
    presets: [presetUno()],
});
