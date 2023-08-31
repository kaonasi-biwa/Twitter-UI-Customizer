import fs from "fs";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url);
process.chdir(__dirname);

fs.cpSync("../assets", "../dist", { recursive: true });
