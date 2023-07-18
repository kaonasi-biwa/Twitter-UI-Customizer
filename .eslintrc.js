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
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-unused-vars": [0],
        "no-empty": [0],
        "prefer-const": ["error"],
    },
    globals: {
        chrome: true,
        TUICLibrary: true,
        TUICOptionHTML: true,
        TUICData: true,
        TUICPref: true,
        TUICCss: true,
        TUICObserver: true,
        TUICCustomCSS: true,
        TUICRunFirst: true,
        i18nApply: true,
    },
};
