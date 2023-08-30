const fs = require("fs");
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url);
process.chdir(__dirname);

fs.cpSync("../assets", "../dist", { recursive: true });
