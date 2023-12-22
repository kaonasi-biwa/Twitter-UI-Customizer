import fs from "fs/promises";
import fsSync from "fs";
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
    if (target == "chromeCRX") {
        output = Object.assign(config.common, config.chrome, config.chromeCRX);
    } else {
        output = Object.assign(config.common, config[target]);
    }

    if (!fsSync.existsSync("./dist")) {
        await fs.mkdir("./dist");
    }

    await fs.writeFile("./dist/manifest.json", JSON.stringify(output, undefined, 4));
}

if (typeof module !== "undefined" && require.main === module) {
    changeManifest(process.argv[2]);
}
