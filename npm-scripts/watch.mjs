// import util from "util";
import { execSync } from "child_process";
import fs from "fs";
import webExt from "web-ext";
import path from "path";
import { CPromise } from "c-promise2";
import { build } from "vite";
import chokidar from "chokidar";

process.stdin.resume();

const __dirname = process.cwd();
console.log(process.cwd());
// import { MultiExtensionRunner } from "web-ext/lib/extension-runners";

/** @typedef {import("web-ext/lib/extension-runners").MultiExtensionRunner} MultiExtensionRunner **/
/** @type MultiExtensionRunner */
let webExtRunner = null;
const run_web_ext = async () => {
    console.log("lint");
    webExt.cmd.lint(
        {
            sourceDir: path.resolve(__dirname, "dist"),
        },
        { shouldExitProgram: false },
    );

    console.log("build");
    if (webExtRunner) {
        webExtRunner.reloadAllExtensions();
    } else {
        webExtRunner = await webExt.cmd.run(
            {
                args: "-v",
                sourceDir: path.resolve(__dirname, "dist"),
                noReload: true,
                firefoxProfile: "development",

                //verbose: true,
            },
            {},
        );
    }
};

const run_vite = () => {
    console.log("$ vite build --mode html");
    execSync("vite build --mode html");
    // console.log("$ vite build --mode content");
    // execSync("vite build --mode content");
};

const run_build = CPromise.promisify(async () => {
    run_vite();
    // console.log("RUN WEB_EXT");
    // await run_web_ext();
});
await run_build();

let running = false;
/** @type CPromise */
let build_ref = null;
const watcher = chokidar.watch("./src", { cwd: "./src" });
watcher.on("all", (ev, path, stats) => {
    console.log(ev);
    // console.log(filename);
    if (running) build_ref.cancel();
    build_ref = run_build();
    running = true;
    build_ref.done(() => {
        running = false;
    });
});
// fs.watch("./src", { recursive: true, persistent: false }, async (ev, filename) => {});

async function exitHandler(options, exitCode) {
    if (options.cleanup) {
        console.log("clean");
        await webExtRunner.exit();
    }
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on("exit", exitHandler.bind(null, { cleanup: true }));

//catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, { cleanup: true }));

// // catches "kill pid" (for example: nodemon restart)
// process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
// process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

// //catches uncaught exceptions
// process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
