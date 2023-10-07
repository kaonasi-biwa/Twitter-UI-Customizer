module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["src/**/*"],
            env: {
                node: false,
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
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
