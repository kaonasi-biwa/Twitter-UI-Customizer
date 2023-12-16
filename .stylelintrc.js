module.exports = {
    extends: ["stylelint-config-standard-scss"],
    plugins: ["stylelint-scss"],
    overrides: [
        {
            files: ["**/*.scss"],
            customSyntax: "postcss-scss",
        },
    ],
    rules: {
        // https://stylelint.io/user-guide/rules
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["tailwind", "apply", "responsive", "screen", "variants"],
            },
        ],
        "comment-empty-line-before": null,
        "property-no-vendor-prefix": null,
        "rule-empty-line-before": null,
        "no-descending-specificity": null,
        "declaration-empty-line-before": null,
        "scss/dollar-variable-empty-line-before": null,
        "scss/double-slash-comment-empty-line-before": null,

        // kebab-case
        "custom-property-pattern": null,
        "selector-id-pattern": null,
        "selector-class-pattern": null,
        "keyframes-name-pattern": null,
        "scss/at-function-pattern": null,
        "scss/at-mixin-pattern": null,
        "scss/dollar-variable-pattern": null,
        "scss/percent-placeholder-pattern": null,
    },
    ignoreFiles: ["dist/**/*", "node_modules/**/*"],
};
