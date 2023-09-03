import { Plugin } from "vite";
import { MultiExtensionRunner } from "web-ext/lib/extension-runners";
import type webExt from "web-ext";
import { exec } from "child_process";
import dotenv from "dotenv";
import webext from "web-ext";
dotenv.config({ path: ".env.local" });

export default async (sourceDir: string, artifactsDir: string, mode: string): Promise<Plugin> => {
    const webExt = await import("web-ext");
    let watch = false;
    let firefox_executable = process.env["TUIC_WEBEXT_FIREFOX_EXECUTABLE"];
    let firefox_profile = process.env["TUIC_WEBEXT_FIREFOX_PROFILE"];
    let chromium_executable = process.env["TUIC_WEBEXT_CHROMIUM_EXECUTABLE"];
    let chromium_profile = process.env["TUIC_WEBEXT_CHROMIUM_PROFILE"];

    let firefox_keep_profile_changes = process.env["TUIC_WEBEXT_FIREFOX_KEEP_PROFILE_CHANGES"] === "true";
    let chromium_keep_profile_changes = process.env["TUIC_WEBEXT_CHROMIUM_KEEP_PROFILE_CHANGES"] === "true";
    let webExtRunner: MultiExtensionRunner | null = null;

    if (!firefox_profile) {
        firefox_profile = "development";
    }
    console.log("firefox_executable");
    console.log(firefox_executable);
    console.log(chromium_profile);
    //let chromium_executable = process.env["TUIC_WEBEXT_CHROMIUM_EXECUTABLE"];
    return {
        name: "web-ext",
        enforce: "post",
        apply: "build",
        buildStart(options) {
            // console.log(options.watch);

            switch (mode) {
                case "firefox":
                case "chromium":
                case "disable-web-ext":
                    break;
                default:
                    this.error("mode should be 'firefox', 'chromium', or 'disable-web-ext'");
            }
        },
        options(options) {
            watch = options.watch !== undefined && options.watch !== false;
        },
        async closeBundle() {
            console.log("Run web-ext");
            if (mode === "disable-web-ext") {
                return;
            }
            if (webExtRunner) {
                // webExtRunner.reloadExtensionBySourceDir();
                // //webExtRunner.reloadAllExtensions();
            } else {
                if (watch) {
                    if (mode === "firefox") {
                        webExtRunner = await webExt.cmd.run(
                            {
                                sourceDir,
                                // noReload: true,
                                startUrl: "twitter.com",
                                firefox: firefox_executable,
                                firefoxProfile: firefox_profile,
                                keepProfileChanges: firefox_keep_profile_changes,
                            },
                            {},
                        );
                    } else if (mode === "chromium") {
                        webExtRunner = await webExt.cmd.run(
                            {
                                sourceDir,
                                // noReload: true,
                                startUrl: "twitter.com",
                                target: "chromium",
                                chromium: chromium_executable,
                                chromiumProfile: chromium_profile,
                                keepProfileChanges: chromium_keep_profile_changes,
                            },
                            {},
                        );
                    }
                } else {
                    console.log(sourceDir);
                    await webExt.cmd.build(
                        {
                            sourceDir,
                            artifactsDir,
                            overwriteDest: true,
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
