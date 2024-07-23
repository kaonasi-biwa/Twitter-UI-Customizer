import js from "@eslint/js";
import globals from "globals";

import typescript_eslint from "@typescript-eslint/eslint-plugin";
import typescript_parser from "@typescript-eslint/parser";

import vue_eslint from "eslint-plugin-vue";
import vue_parser from "vue-eslint-parser";

import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        ignores: ["dist/**", "node_modules/**", "third-party/**"],
    },
    {
        files: ["**/*.{js,ts,tsx,vue}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                i18nApply: true,
                process: true,
            },
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...prettier.rules,
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
            parser: vue_parser,
            parserOptions: {
                parser: typescript_parser,
            },
        },
        plugins: {
            "@typescript-eslint": typescript_eslint,
            vue: vue_eslint,
        },
        rules: {
            ...typescript_eslint.configs.recommended.rules,
            ...vue_eslint.configs["vue3-recommended"].rules,
            "no-undef": 0,
            "@typescript-eslint/no-unused-vars": 0,
            "vue/no-unused-vars": 0,
            "vue/no-unused-components": 0,
            "vue/attribute-hyphenation": 0,
            "vue/attributes-order": 0,
            "vue/require-prop-types": 0,
            "vue/prop-name-casing": 0,
        },
    },
    {
        files: ["src/**"],
        languageOptions: {
            globals: {
                chrome: true,
            },
        },
    },
];
