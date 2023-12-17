import { Plugin } from "vite";
import { ChildProcessWithoutNullStreams, spawn } from "node:child_process";
import { isMainThread } from "node:worker_threads";
import dotenv from "dotenv";
import { WebExtRunArgs, WebExtRun } from "./web-ext";

dotenv.config({ path: ".env.local" });

export default async (root: string, sourceDir: string, artifactsDir: string, mode: string): Promise<Plugin> => {
    let watch = false;
    const firefox_executable = process.env["TUIC_WEBEXT_FIREFOX_EXECUTABLE"];
    let firefox_profile = process.env["TUIC_WEBEXT_FIREFOX_PROFILE"];
    const chromium_executable = process.env["TUIC_WEBEXT_CHROMIUM_EXECUTABLE"];
    const chromium_profile = process.env["TUIC_WEBEXT_CHROMIUM_PROFILE"];

    const firefox_keep_profile_changes = process.env["TUIC_WEBEXT_FIREFOX_KEEP_PROFILE_CHANGES"] === "true";
    const chromium_keep_profile_changes = process.env["TUIC_WEBEXT_CHROMIUM_KEEP_PROFILE_CHANGES"] === "true";
    // let webExtRunner: MultiExtensionRunner | null = null;

    // let worker;
    let child: ChildProcessWithoutNullStreams;
    let webExtRunner: WebExtRun;

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
            if (mode === "disable-web-ext") {
                return;
            }
            console.log("Running web-ext in " + (isMainThread ? "main thread" : "worker") + " at " + sourceDir);

            const args: WebExtRunArgs = {
                mode,
                watch,
                sourceDir,
                artifactsDir,
                firefox: { executable: firefox_executable, profile: firefox_profile, keep_profile_changes: firefox_keep_profile_changes },
                chromium: { executable: chromium_executable, profile: chromium_profile, keep_profile_changes: chromium_keep_profile_changes },
            };
            if (!watch || mode !== "chromium") {
                //TODO: この変数再利用＆Reload
                if (!webExtRunner) webExtRunner = new WebExtRun(args);
                await webExtRunner.run();
            } else if (mode === "chromium") {
                //TODO: outputをコンソールに直結＆終了時kill
                let com_args = "";
                if (args.chromium.keep_profile_changes) {
                    com_args += " --keep-profile-changes";
                }
                if (args.chromium.profile) {
                    com_args += ` --chromium-profile "${args.chromium.profile}"`;
                }
                if (args.chromium.executable) {
                    com_args += ` --chromium-binary "${args.chromium.executable}"`;
                }
                if (!child) {
                    if (!args.chromium.keep_profile_changes) {
                        console.warn("Chromiumで実行の場合、.env.localや環境変数にkeepProfileChangesを指定することをおすすめします。");
                        console.warn("このオプションを有効にしない場合、プロファイルをコピーして実行されますが、");
                        console.warn("ログイン情報が利用できません。詳細は.env.local.exampleファイルを参照してください。");
                    }
                    if (!args.chromium.profile) {
                        console.error("Chromiumで実行の場合、.env.localや環境変数にプロファイルを指定してください。");
                        console.error("defaultプロファイルで実行した場合、設定の汚染が起こるおそれがあります。");
                        console.error("詳しくは.env.local.exampleファイルを参照してください。");
                        process.exit(-1);
                    }

                    child = spawn(`web-ext`, [`run -s "./dist" -t chromium -u twitter.com ${com_args}`], { shell: true });
                    child.stdout.on("data", (data) => {
                        console.log(decodeURIComponent(data));
                    });
                    child.stderr.on("data", (data) => {
                        console.error(decodeURIComponent(data));
                    });
                    child.on("exit", (code) => {
                        console.log("web-ext process exited with code " + code);
                        process.exit(code);
                    });
                    child.on("error", (err) => {
                        console.error(err);
                        process.exit(-1);
                    });
                }
                //child.kill();
            }

            // if (!worker) {
            // const args: WebExtRunArgs = {
            //     mode,
            //     watch,
            //     sourceDir,
            //     artifactsDir,
            //     firefox: { executable: firefox_executable, profile: firefox_profile, keep_profile_changes: firefox_keep_profile_changes },
            //     chromium: { executable: chromium_executable, profile: chromium_profile, keep_profile_changes: chromium_keep_profile_changes },
            // };
            //     worker = new Worker(root + "/npm-scripts/vite-plugin/worker-web-ext.js", { workerData: args });
            // }

            //worker.postMessage("run");
        },
        buildEnd(error) {
            child?.kill();
            webExtRunner?.exit();
        },
    };
};
