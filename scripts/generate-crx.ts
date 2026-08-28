import fs from "node:fs";
import path from "node:path";

import ChromeExtenson from "crx";

async function generateCRX() {
    const crx = new ChromeExtenson({
        codebase: `https://github.com/${process.env.GITHUB_REPO}/releases/latest/download/Twitter_UI_Customizer_Chromium.crx`,
        privateKey: process.env.CHROME_EXTENSION_KEY,
    });

    await crx.load(path.resolve("dist"));
    const crxBuffer = await crx.pack();
    fs.writeFileSync("crxupdate.xml", crx.generateUpdateXML());
    fs.writeFileSync("Twitter_UI_Customizer_Chromium.crx", crxBuffer);
    console.log("\x1b[32m✓\x1b[0m CRX generated.");
}

if (process.argv[1] === import.meta.filename) {
    await generateCRX();
}
