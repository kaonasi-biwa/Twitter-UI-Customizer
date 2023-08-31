import { exec } from "node:child_process";
import { Plugin } from "vite";

export default function myPlugin(): Plugin {
    return {
        name: "web-ext",
        enforce: "post",
        watchChange(id, change) {
            console.log(change.event);
        },
        // buildStart: (options) => {
        //     exec("node ./scripts/manifes");
        // },
    };
}
