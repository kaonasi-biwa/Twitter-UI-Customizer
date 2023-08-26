import fs from "fs/promises";

(async () => {
    // CLI引数または_langList.jsonファイルからロケールを取得
    const config = JSON.parse(await fs.readFile("./manifestConfigs.json", "utf8"));

    let output = {};
    if (process.argv[2] == "chromeCRX") {
        output = Object.assign(config.common, config.chrome, config.chromeCRX);
    } else {
        output = Object.assign(config.common, config[process.argv[2]]);
    }

    await fs.writeFile("./manifest.json", JSON.stringify(output, undefined, 4));
})();
