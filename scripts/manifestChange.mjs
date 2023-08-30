import fs from "fs/promises";
import fsSync from "fs";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url);
process.chdir(__dirname);

(async () => {
    // CLI引数または_langList.jsonファイルからロケールを取得
    const config = JSON.parse(await fs.readFile("./manifestConfigs.json", "utf8"));

    const targets = Object.keys(config).filter((k) => k !== "common");
    const target = process.argv[2];

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

    if (!fsSync.existsSync("../dist")) {
        fsSync.mkdirSync("../dist");
    }

    await fs.writeFile("../dist/manifest.json", JSON.stringify(output, undefined, 4));
})();
