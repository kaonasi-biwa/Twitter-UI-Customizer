import fetch from "node-fetch";
import fs from "fs";

(async () => {
    // CLI引数または_langList.jsonファイルからロケールを取得
    const config = JSON.parse(fs.readFileSync("./manifestConfigs.json", "utf8"));

    let output = {};
    if (process.argv[2] == "chromeCRX") {
        output = Object.assign(config.common, config.chrome, config.chromeCRX);
    } else {
        output = Object.assign(config.common, config[process.argv[2]]);
    }

    fs.writeFileSync(`./manifest.json`, JSON.stringify(output, undefined, 4));
})();
