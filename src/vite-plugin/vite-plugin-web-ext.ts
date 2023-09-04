import { Plugin } from "vite";
import { MultiExtensionRunner } from "web-ext/lib/extension-runners";
import type webExt from "web-ext";
import { exec } from "child_process";
import { Worker, workerData, isMainThread, parentPort } from "node:worker_threads";

// import { Args, WebExtRun } from "./wip/worker-web-ext";

import dotenv from "dotenv";
import { Args, WebExtRun } from "./web-ext";
dotenv.config({ path: ".env.local" });

export default async (root: string, sourceDir: string, artifactsDir: string, mode: string): Promise<Plugin> => {
    const webExt = await import("web-ext");
    let watch = false;
    let firefox_executable = process.env["TUIC_WEBEXT_FIREFOX_EXECUTABLE"];
    let firefox_profile = process.env["TUIC_WEBEXT_FIREFOX_PROFILE"];
    let chromium_executable = process.env["TUIC_WEBEXT_CHROMIUM_EXECUTABLE"];
    let chromium_profile = process.env["TUIC_WEBEXT_CHROMIUM_PROFILE"];

    let firefox_keep_profile_changes = process.env["TUIC_WEBEXT_FIREFOX_KEEP_PROFILE_CHANGES"] === "true";
    let chromium_keep_profile_changes = process.env["TUIC_WEBEXT_CHROMIUM_KEEP_PROFILE_CHANGES"] === "true";
    // let webExtRunner: MultiExtensionRunner | null = null;

    // let worker;

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
            console.log(isMainThread);
            if (mode === "disable-web-ext") {
                return;
            }
            const args: Args = {
                mode,
                watch,
                sourceDir,
                artifactsDir,
                firefox: { executable: firefox_executable, profile: firefox_profile, keep_profile_changes: firefox_keep_profile_changes },
                chromium: { executable: chromium_executable, profile: chromium_profile, keep_profile_changes: chromium_keep_profile_changes },
            };
            if (mode === "firefox") {
                //TODO: この変数再利用＆Reload
                const webExtRunner = new WebExtRun(args);
                await webExtRunner.run();
            } else if (mode === "chromium") {
                //TODO: outputをコンソールに直結＆終了時kill
                exec("web-ext run --source-dir ./dist -t chromium --keep-profile-changes --firefox-profile=development --start-url=twitter.com");
            }

            // if (!worker) {
            // const args: Args = {
            //     mode,
            //     watch,
            //     sourceDir,
            //     artifactsDir,
            //     firefox: { executable: firefox_executable, profile: firefox_profile, keep_profile_changes: firefox_keep_profile_changes },
            //     chromium: { executable: chromium_executable, profile: chromium_profile, keep_profile_changes: chromium_keep_profile_changes },
            // };
            //     worker = new Worker(root + "/src/vite-plugin/worker-web-ext.js", { workerData: args });
            // }
            console.log("init");

            //worker.postMessage("run");
        },
        buildEnd(error) {
            // webExtRunner?.exit();
        },
    };
};
