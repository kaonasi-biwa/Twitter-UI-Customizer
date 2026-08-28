import { transform } from "lightningcss";
import type { ReturnedRule, Visitor, CustomAtRules } from "lightningcss";
import postcss from "postcss";
import postcssUnocss from "unocss/postcss";
import type { UserConfig } from "unocss";
import type { Plugin } from "vite";

let unoResult: postcss.Result;

export const vitePluginUnoCSS = async (configOrPath?: string | UserConfig): Promise<Plugin> => {
    return {
        name: "unocss",
        enforce: "pre",
        async buildStart() {
            unoResult = await postcss([
                postcssUnocss({
                    configOrPath: configOrPath,
                }),
            ]).process("@unocss;", { from: "src/content/styles/uno.css" });
            //unoResult.messages.map((message) => console.log("[vitePluginUnocss]", message.file));
        },
        shouldTransformCachedModule(options) {
            if (options.id.endsWith("src/content/styles/uno.css?transform-only")) {
                return true;
            }
        },
    };
};

const visitor: Visitor<CustomAtRules> = {
    Rule: {
        custom: {
            unocss(rule): ReturnedRule[] {
                let rules: ReturnedRule[];
                transform({
                    filename: "uno.css",
                    code: Buffer.from(unoResult.css),
                    visitor: {
                        StyleSheet(stylesheet) {
                            rules = stylesheet.rules;
                            //return stylesheet;
                        },
                    },
                });
                return rules;
            },
        },
    },
};

const customAtRules: CustomAtRules = {
    unocss: {
        //prelude: "<string>#",
    },
};

export const lightningcssPluginUnoCSS = {
    customAtRules: customAtRules,
    visitor: visitor,
};
