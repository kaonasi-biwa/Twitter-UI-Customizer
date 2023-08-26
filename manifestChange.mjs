import fs from "fs/promises";

(async () => {
    // CLI引数または_langList.jsonファイルからロケールを取得
    const config = JSON.parse(await fs.readFile("./manifestConfigs.json", "utf8"));

    const target = process.argv[2];

    if (target === undefined) {
        console.error(`Error: Please specify a platform for generate. (${Object.keys(config).filter(k => k !== "common").join(", ")})`);
        process.exit(1);
    }

    let output = {};
    if (target == "chromeCRX") {
        output = Object.assign(config.common, config.chrome, config.chromeCRX);
    } else {
        output = Object.assign(config.common, config[target]);
    }

    await fs.writeFile("./manifest.json", JSON.stringify(output, undefined, 4));
})();
