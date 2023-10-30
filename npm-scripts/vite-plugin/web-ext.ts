import type { MultiExtensionRunner } from "web-ext/lib/extension-runners";
import type WebExt from "web-ext";

type Args = {
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
};

class WebExtRun {
    webExtRunner: MultiExtensionRunner;
    webExt: typeof WebExt;

    // workerThreads: typeof import("node:worker_threads");

    args: Args;

    constructor(args: Args) {
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

        console.log("Run web-ext");
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
                    console.error("Currently Chromium is not supported.");
                    // this.webExtRunner = await this.webExt.cmd.run(
                    //     {
                    //         sourceDir: this.args.sourceDir,
                    //         noReload: true,
                    //         startUrl: "twitter.com",
                    //         target: "chromium",
                    //         chromium: this.args.chromium.executable,
                    //         chromiumProfile: this.args.chromium.profile,
                    //         keepProfileChanges: this.args.chromium.keep_profile_changes,
                    //     },
                    //     {},
                    // );
                }
            } else {
                console.log(this.args.sourceDir);
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
export { Args, WebExtRun };
