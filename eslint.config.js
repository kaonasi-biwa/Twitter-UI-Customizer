import eslint from "@eslint/js";
import globals from "globals";

import tseslint from "typescript-eslint";
import solideslint from "eslint-plugin-solid";
import vueeslint from "eslint-plugin-vue";

import prettier from "eslint-config-prettier";

export default tseslint.config(
    {
        ignores: ["dist/**", "node_modules/**", "third-party/**"],
    },
    {
        files: ["**/*.{js,ts,tsx,vue}"],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
            },
        },
        extends: [
            eslint.configs.recommended, //
            prettier,
        ],
        rules: {
            indent: 0,
            semi: ["error", "always"],
            "prefer-const": ["error"],
            "linebreak-style": 0,
            "no-unused-vars": 0,
            "no-empty": 0,
            "no-unsafe-option-chaining": 0,
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
            //...tseslint.configs.stylisticTypeChecked,
            solideslint.configs["flat/typescript"],
            ...vueeslint.configs["flat/recommended"],
            prettier,
        ],
        rules: {
            "no-undef": 0,
            "@typescript-eslint/no-unused-vars": 0,
            "solid/self-closing-comp": ["warn", { html: "void" }],
            "vue/no-unused-vars": 0,
            "vue/no-unused-components": 0,
            "vue/attribute-hyphenation": 0,
            "vue/attributes-order": 0,
            "vue/require-prop-types": 0,
            "vue/prop-name-casing": 0,
            "vue/require-default-prop": 0,
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
                chrome: false,
            },
        },
    },
);
