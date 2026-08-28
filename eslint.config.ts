import antfu from "@antfu/eslint-config";
import globals from "globals";

import importx from "eslint-plugin-import-x";

export default antfu(
    {
        gitignore: true,
        ignores: [
            "i18n/ti18n",
            "public/pwa-manifests",
            "third-party",
        ],
        lessOpinionated: true,
        test: false,
        toml: false,
        markdown: false,
        stylistic: {
            indent: 4,
            quotes: "double",
            semi: true,
            //braceStyle: "1tbs",
            //quoteProps: "as-needed",
            //severity: "warn",
            overrides: {
                "style/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: "always" }],
                "style/brace-style": ["error", "1tbs"],
                "style/quote-props": ["error", "as-needed"],
                "style/arrow-parens": ["error", "always"],
                "style/jsx-closing-tag-location": 0,

                "style/spaced-comment": 0,
                "style/lines-between-class-members": 0,
            },
        },
        typescript: {
            //tsconfigPath: "tsconfig.json",
            overrides: {
                "ts/no-use-before-define": 0,
                "unicorn/prefer-module": "error",

                "ts/consistent-type-imports": 0, //["error", { fixStyle: "inline-type-imports" }],
            },
        },
        vue: {
            overrides: {
                "vue/html-comment-content-spacing": 0,
                "vue/attribute-hyphenation": 0,
                "vue/html-self-closing": ["warn", {
                    html: {
                        void: "always",
                        normal: "never",
                    },
                }],
                "vue/block-order": 0,
                "vue/attributes-order": 0,

                "vue/prefer-separate-static-class": 0,
                "vue/dot-notation": 0,
                "vue/no-required-prop-with-default": 0,
                "vue/eqeqeq": 0,
            },
        },
        solid: {
            overrides: {
                "solid/self-closing-comp": ["warn", { html: "void" }],
            },
        },
        unocss: {
            strict: true,
        },
        jsonc: true,
        yaml: {
            overrides: {
                "yaml/indent": ["error", 2],
                "pnpm/yaml-enforce-settings": 0,

                "yaml/quotes": 0,
                "yaml/spaced-comment": 0,
            },
        },
        rules: {
            "no-cond-assign": ["error", "except-parens"],
            "no-alert": 0,
            "node/prefer-global/buffer": 0,
            "unocss/order": 0,
            "perfectionist/sort-imports": 0,
            "perfectionist/sort-named-imports": 0,
            "perfectionist/sort-named-exports": 0,
            "jsonc/sort-keys": 0,

            "no-console": 0,
            "prefer-template": 0,
            "dot-notation": 0,
            "object-shorthand": 0,
            curly: 0,
            eqeqeq: 0,
            "no-useless-return": 0,
            "no-unneeded-ternary": 0,
            "antfu/consistent-list-newline": 0,
            "unicorn/escape-case": 0,
            "unicorn/prefer-number-properties": 0,
            "unused-imports/no-unused-vars": 0,
            "import/consistent-type-specifier-style": 0,
            "jsdoc/check-param-names": 0,
            "node/prefer-global/process": ["error", "always"],
            "regexp/prefer-d": 0,
            "regexp/no-useless-flag": 0,
            "e18e/prefer-static-regex": 0,
        },
    },
    {
        files: ["**/*.{js,ts,tsx,vue}"],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
        },
        extends: [
            importx.flatConfigs.typescript,
        ],
        rules: {
            "import-x/export": "error",
            "import-x/default": "error",
            "import-x/namespace": "error",
            "import-x/no-self-import": "error",
            "import-x/no-cycle": "error",
            "import-x/no-unresolved": ["error", { ignore: ["^virtual:"] }],
        },
    },
    {
        files: [".vscode/*.json", "tsconfig*.json"],
        language: "jsonc/jsonc",
        rules: {
            "jsonc/comma-dangle": ["error", "always-multiline"],
        },
    },
    {
        files: ["{_locales/**,i18n}/*.json"],
        rules: {
            "no-irregular-whitespace": 0,
            "style/no-multiple-empty-lines": 0,

            "jsonc/key-spacing": 0,
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
                ...globals.webextensions,
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
