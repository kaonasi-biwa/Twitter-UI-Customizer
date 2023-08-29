const fs = require("fs");

fs.cpSync("./assets", "./dist", { recursive: true });
