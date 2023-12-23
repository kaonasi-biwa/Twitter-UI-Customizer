import fs from "fs/promises";
import fsSync from "fs";
import url from "url";
import manifest from "../manifest.config.js";

export async function changeManifest(target) {
    // CLI引数または_langList.jsonファイルからロケールを取得
    const config = manifest;

    const targets = Object.keys(config).filter((k) => k !== "common");

    if (!targets.includes(target)) {
        console.error(`Error: Invalid platform "${target ?? ""}". (${targets.join(", ")})`);
        process.exit(1);
    }

    let output = {};
    if (target == "chromiumCRX") {
        output = Object.assign(config.common, config.chromium, config.chromiumCRX);
        const repo = process.env["GITHUB_REPO"];
        output.update_url = output.update_url.replace("${github.repository}", repo);
    } else {
        output = Object.assign(config.common, config[target]);
    }

    if (!fsSync.existsSync("./dist")) {
        await fs.mkdir("./dist");
    }

    await fs.writeFile("./dist/manifest.json", JSON.stringify(output, undefined, 4));
}

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    changeManifest(process.argv[2]);
}
