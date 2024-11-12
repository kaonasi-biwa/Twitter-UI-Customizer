import autoprefixer from "autoprefixer";
import importPlugin from "postcss-import";
import nesting from "postcss-nesting";
import UnoCSS from "unocss/postcss";

/** @type {import("postcss-load-config").Config} */
export default {
    plugins: [
        importPlugin(),
        nesting(),
        UnoCSS(),
        autoprefixer(),
    ],
};
