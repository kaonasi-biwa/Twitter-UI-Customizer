// @ts-expect-error idk
import type { MultiExtensionRunner } from "web-ext/lib/extension-runners";
import type WebExt from "web-ext";

export interface WebExtRunArgs {
    mode: string;
    watch: boolean;
    sourceDir: string;
    artifactsDir: string;
    firefox: {
        executable: string | undefined;
        profile: string | undefined;
        keep_profile_changes: boolean;
    };
    chromium: {
        executable: string | undefined;
        profile: string | undefined;
        keep_profile_changes: boolean;
    };
}

export class WebExtRun {
    webExtRunner: MultiExtensionRunner;
    webExt: typeof WebExt;

    // workerThreads: typeof import("node:worker_threads");

    args: WebExtRunArgs;

    constructor(args: WebExtRunArgs) {
        this.args = args;
    }

    exit() {
        this.webExtRunner.exit();
    }

    async run() {
        if (!this.webExt) {
            this.webExt = await import("web-ext");
            // this.workerThreads = await import("node:worker_threads");
        }

        // console.log(this.workerThreads.isMainThread);
        if (this.args.mode === "disable-web-ext") {
            return;
        }
        if (this.webExtRunner) {
            await this.webExtRunner.reloadExtensionBySourceDir();
            // //webExtRunner.reloadAllExtensions();
        } else {
            if (this.args.watch) {
                if (this.args.mode === "firefox") {
                    this.webExtRunner = await this.webExt.cmd.run(
                        {
                            target: "firefox-desktop",
                            sourceDir: this.args.sourceDir,
                            noReload: true,
                            startUrl: "twitter.com",
                            firefox: this.args.firefox.executable,
                            firefoxProfile: this.args.firefox.profile,
                            keepProfileChanges: this.args.firefox.keep_profile_changes,
                        },
                        {},
                    );
                    this.webExtRunner.registerCleanup(() => {
                        process.exit(0);
                    });
                } else if (this.args.mode === "chromium") {
                    if (!this.args.chromium.keep_profile_changes) {
                        console.warn("Chromiumで実行の場合、.env.localや環境変数にkeepProfileChangesを指定することをおすすめします。");
                        console.warn("このオプションを有効にしない場合、プロファイルをコピーして実行されますが、");
                        console.warn("ログイン情報が利用できません。詳細は.env.local.exampleファイルを参照してください。");
                    }
                    if (!this.args.chromium.profile) {
                        console.error("Chromiumで実行の場合、.env.localや環境変数にプロファイルを指定してください。");
                        console.error("defaultプロファイルで実行した場合、設定の汚染が起こるおそれがあります。");
                        console.error("詳しくは.env.local.exampleファイルを参照してください。");
                        process.exit(-1);
                    }
                    this.webExtRunner = await this.webExt.cmd.run(
                        {
                            target: "chromium",
                            sourceDir: this.args.sourceDir,
                            //noReload: true,
                            startUrl: "twitter.com",
                            chromiumBinary: this.args.chromium.executable,
                            chromiumProfile: this.args.chromium.profile,
                            keepProfileChanges: this.args.chromium.keep_profile_changes,
                        },
                        {},
                    );
                    this.webExtRunner.registerCleanup(() => {
                        process.exit(0);
                    });
                }
            } else {
                await this.webExt.cmd.build(
                    {
                        sourceDir: this.args.sourceDir,
                        artifactsDir: this.args.artifactsDir,
                        overwriteDest: true,
                    },
                    {},
                );
            }
        }
    }
}
