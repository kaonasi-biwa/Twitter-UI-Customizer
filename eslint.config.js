import eslint from "@eslint/js";
import globals from "globals";

import stylistic from "@stylistic/eslint-plugin";
import unusedimports from "eslint-plugin-unused-imports";
import importx from "eslint-plugin-import-x";

import tseslint from "typescript-eslint";
import solideslint from "eslint-plugin-solid";
import vueeslint from "eslint-plugin-vue";
import unocsseslint from "@unocss/eslint-plugin";

export default tseslint.config(
    {
        ignores: ["dist/**", "node_modules/**", "third-party/**"],
    },
    stylistic.configs.customize({
        pluginName: "style",
        indent: 4,
        quotes: "double",
        semi: true,
        braceStyle: "1tbs",
        quoteProps: "as-needed",
    }),
    {
        files: ["**/*.{js,ts,tsx,vue}"],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
            },
        },
        extends: [
            eslint.configs.recommended,
            unocsseslint.configs.flat,
            importx.flatConfigs.recommended,
            importx.flatConfigs.typescript,
        ],
        plugins: {
            "unused-imports": unusedimports,
        },
        rules: {
            "no-unused-vars": 0,
            "unused-imports/no-unused-imports": "error",
            "import-x/first": "error",
            "import-x/no-named-default": "error",
            "import-x/no-self-import": "error",
            "import-x/newline-after-import": "error",
            "import-x/no-cycle": "warn",
            "import-x/no-named-as-default-member": 0,
            "unocss/order": 0,
            "style/spaced-comment": 0,
            "style/lines-between-class-members": 0,
            "style/jsx-closing-tag-location": 0,
            "style/arrow-parens": ["error", "always"],
            "style/switch-colon-spacing": ["error", { after: true, before: false }],
            "style/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
        },
    },
    {
        files: ["**/*.{ts,tsx,vue}"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
        extends: [
            ...tseslint.configs.recommended,
            //...tseslint.configs.strict,
            ...tseslint.configs.stylistic, //TypeChecked
            solideslint.configs["flat/typescript"],
            ...vueeslint.configs["flat/recommended"],
        ],
        rules: {
            "@typescript-eslint/no-unused-vars": 0,
            "solid/self-closing-comp": ["warn", { html: "void" }],
            "vue/html-indent": ["warn", 4],
            "vue/html-self-closing": ["warn", {
                html: {
                    void: "always",
                    normal: "never",
                },
            }],
            "vue/block-tag-newline": "error",
            "vue/define-macros-order": "error",
            "vue/padding-line-between-blocks": "error",
            "vue/v-for-delimiter-style": "error",
            "vue/max-attributes-per-line": 0,
            "vue/attribute-hyphenation": 0,
            "vue/attributes-order": 0,
            "vue/require-default-prop": 0,
            "vue/no-required-prop-with-default": 0,
        },
    },
    {
        files: ["scripts/**"],
        languageOptions: {
            globals: {
                ...globals.nodeBuiltin,
            },
        },
    },
    {
        files: ["public/**", "src/**"],
        languageOptions: {
            globals: {
                ...globals.browser,
                chrome: "readonly",
            },
        },
    },
    {
        files: ["src/background.ts"],
        languageOptions: {
            globals: {
                ...globals.serviceworker,
            },
        },
    },
);
