import util from "util";
import { execSync } from "child_process";
import fs from "fs";

const run_vite = () => {
    console.log("$ vite build --mode html");
    execSync("vite build --mode html");
    console.log("$ vite build --mode content");
    execSync("vite build --mode content");
};
run_vite();

fs.watch("./src", { recursive: true }, (ev, filename) => {
    run_vite();
});
