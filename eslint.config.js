import eslint from "@eslint/js";
import globals from "globals";

import stylistic from "@stylistic/eslint-plugin";

import tseslint from "typescript-eslint";
import solideslint from "eslint-plugin-solid";
import vueeslint from "eslint-plugin-vue";

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
            eslint.configs.recommended, //
        ],
        rules: {
            indent: 0,
            semi: ["error", "always"],
            "prefer-const": ["error"],
            "linebreak-style": 0,
            "no-unused-vars": 0,
            "no-empty": 0,
            "no-unsafe-option-chaining": 0,
            "style/spaced-comment": 0,
            "style/lines-between-class-members": 0,
            "style/jsx-closing-tag-location": 0,
            "style/arrow-parens": ["error", "always"],
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
            ...tseslint.configs.stylistic, //TypeChecked
            solideslint.configs["flat/typescript"],
            ...vueeslint.configs["flat/recommended"],
        ],
        rules: {
            "no-undef": 0,
            "@typescript-eslint/no-unused-vars": 0,
            "solid/self-closing-comp": ["warn", { html: "void" }],
            "vue/html-indent": ["warn", 4],
            "vue/html-self-closing": ["warn", {
                html: {
                    void: "always",
                    normal: "never",
                },
            }],
            "vue/max-attributes-per-line": 0,
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
