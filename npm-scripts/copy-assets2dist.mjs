import fs from "fs";
// import { fileURLToPath } from "url";
// const __dirname = fileURLToPath(new URL(".", import.meta.url));
// const __filename = fileURLToPath(import.meta.url);
// process.chdir(__dirname);

fs.cpSync("./i18n", "./dist/i18n", { recursive: true });
fs.cpSync("./src/content/style.css", "./dist/style.css");
fs.cpSync("./_locales", "./dist/_locales", { recursive: true });
fs.cpSync("./icon", "./dist/icon", { recursive: true });
