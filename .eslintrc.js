module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
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
