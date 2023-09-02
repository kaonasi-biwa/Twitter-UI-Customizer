module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        indent: ["error", 4, {"SwitchCase": 1}],
        "linebreak-style": ["error", "unix"],
        semi: ["error", "always"],
        "no-unused-vars": [0],
        "no-empty": [0],
        "prefer-const": ["error"],
        "no-unsafe-option-chaining": "off",
    },
    globals: {
        chrome: true,
        i18nApply: true,
        process: true,
    },
};
