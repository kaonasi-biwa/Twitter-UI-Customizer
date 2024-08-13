import fs from "node:fs/promises";
import fsSync from "node:fs";
import url from "node:url";
import manifest from "../manifest.config";

export async function changeManifest(target: string) {
    if (target !== "firefox" && target !== "chromium" && target !== "chromiumCRX") return;
    // CLI引数または_langList.jsonファイルからロケールを取得
    const config = manifest;

    const targets = Object.keys(config).filter((k) => k !== "common");

    if (!targets.includes(target)) {
        console.error(`Error: Invalid platform "${target ?? ""}". (${targets.join(", ")})`);
        process.exit(1);
    }

    type ExcludeAll<T> = { [P in keyof T]?: never };
    type Firefox = typeof manifest.common & typeof manifest.firefox;
    type Chromium = typeof manifest.common & typeof manifest.chromium & ExcludeAll<typeof manifest.chromiumCRX>;
    type ChromiumCRX = typeof manifest.common & typeof manifest.chromium & typeof manifest.chromiumCRX;
    let output: Firefox | Chromium | ChromiumCRX;
    if (target == "chromiumCRX") {
        output = Object.assign(config.common, config.chromium, config.chromiumCRX);
        const repo = process.env["GITHUB_REPO"];
        output.update_url = output.update_url.replace("$(github.repository)", repo);
    } else {
        output = Object.assign(config.common, config[target]);
    }

    if (!fsSync.existsSync("./dist")) {
        await fs.mkdir("./dist");
    }

    await fs.writeFile("./dist/manifest.json", JSON.stringify(output, undefined, 4));
}

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    const target = process.argv[2];
    if (target === "firefox" || target === "chromium" || target === "chromiumCRX") {
        changeManifest(target);
    } else {
        console.error(`Error: Invalid platform "${target ?? ""}".`);
        process.exit(1);
    }
}
