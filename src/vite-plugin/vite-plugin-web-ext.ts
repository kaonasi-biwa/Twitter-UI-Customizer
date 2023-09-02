import { Plugin } from "vite";
import { MultiExtensionRunner } from "web-ext/lib/extension-runners";
import type webExt from "web-ext";

let webExtRunner: MultiExtensionRunner | null = null;

export default async (sourceDir: string, artifactsDir: string): Promise<Plugin> => {
    const webExt = await import("web-ext");
    let watch = false;
    let firefox_executable = process.env["TUIC_WEBEXT_FIREFOX_EXECUTABLE"];
    //let chromium_executable = process.env["TUIC_WEBEXT_CHROMIUM_EXECUTABLE"];
    return {
        name: "web-ext",
        enforce: "post",
        apply: "build",
        options(options) {
            console.log(options.watch);
            watch = options.watch != undefined && options.watch != false;
        },
        async closeBundle() {
            console.log("Run web-ext");
            if (webExtRunner) {
                webExtRunner.reloadAllExtensions();
            } else {
                if (watch) {
                    webExtRunner = await webExt.cmd.run(
                        {
                            sourceDir,
                            noReload: true,
                            firefoxProfile: "development",
                            startUrl: "twitter.com",
                            firefox: firefox_executable,
                            // keepProfileChanges: true,
                        },
                        {},
                    );
                } else {
                    console.log(sourceDir);
                    await webExt.cmd.build(
                        {
                            sourceDir,
                            artifactsDir,
                        },
                        {},
                    );
                }
            }
        },
        buildEnd(error) {
            webExtRunner?.exit();
        },
    };
};
