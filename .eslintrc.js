module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ["@typescript-eslint", "vue"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended", "prettier"],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    overrides: [
        {
            files: ["src/**/*"],
            env: {
                node: false,
            },
        },
    ],
    rules: {
        indent: 0,
        semi: ["error", "always"],
        "prefer-const": ["error"],
        "linebreak-style": 0,
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "vue/no-unused-vars": 0,
        "vue/no-unused-components": 0,
        "vue/attribute-hyphenation": 0,
        "vue/attributes-order": 0,
        "vue/require-prop-types": 0,
        "vue/prop-name-casing": 0,
        "no-empty": 0,
        "no-unsafe-option-chaining": 0,
    },
    globals: {
        chrome: true,
        i18nApply: true,
        process: true,
    },
    ignorePatterns: ["dist/", "node_modules/"],
};
