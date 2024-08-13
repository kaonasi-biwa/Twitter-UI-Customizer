/** @type {import("stylelint").Config} */
export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-recommended-vue",
        "stylelint-config-recess-order",
    ],
    rules: {
        // https://stylelint.io/user-guide/rules
        "at-rule-no-unknown": null,
        "comment-empty-line-before": null,
        "property-no-vendor-prefix": null,
        "rule-empty-line-before": null,
        "no-descending-specificity": null,
        "declaration-empty-line-before": null,
        "no-empty-source": null,

        // kebab-case
        "custom-property-pattern": null,
        "selector-id-pattern": null,
        "selector-class-pattern": null,
        "keyframes-name-pattern": null,
    },
    ignoreFiles: ["dist/**/*", "node_modules/**/*"],
};
