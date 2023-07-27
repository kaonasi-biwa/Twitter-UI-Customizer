/* eslint-disable no-undef */
const fs = require("fs");
const { exec } = require("child_process");
const browser = process.argv[2];
const BinaryPath = `"${process.argv[3]}"`;

// Check if web-ext is installed
try {
    require.resolve("web-ext");
} catch (e) {
    console.error("web-ext is not installed. Please run `npm install`.");
    process.exit(1);
}

const Functions = {
    debug: {
        debugInFirefox() {
            fs.copyFile("manifest_firefox.json", "manifest.json", (err) => {
                if (err) {
                    console.error("Failed to copy and rename the file:", err);
                    process.exit(1);
                }

                if (BinaryPath) {
                    exec(`web-ext run --keep-profile-changes --firefox-profile=development --start-url=twitter.com ${BinaryPath}`, (error, stdout, stderr) => {
                        if (error) {
                            console.error("Error occurred while running web-ext:", error.message);
                            console.error("If you are using a custom Firefox binary, Please check if it exists. get more info: https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#firefox");
                            process.exit(1);
                        }
                        console.log(stdout);
                        console.log("If Firefox didn't open, Please check if you have 'Firefox' installed. & Profile 'development' exists.");
                    });

                } else {
                    exec(`web-ext run --keep-profile-changes --firefox-profile=development --start-url=twitter.com`, (error, stdout, stderr) => {
                        if (error) {
                            console.error("Error occurred while running web-ext:", error.message);
                            process.exit(1);
                        }
                        console.log(stdout);
                        console.log("If Firefox didn't open, Please check if you have 'Firefox' installed. & Profile 'development' exists.");
                    });
                }
            });
        },

        debugInChrome() {
            fs.copyFile("manifest_chrome.json", "manifest.json", (err) => {
                if (err) {
                    console.error("Failed to copy and rename the file:", err);
                    process.exit(1);
                }
                // Chrome doesn"t support web-ext, so we have to run it manually.
                console.log("Please load Twitetr UI Customizer as an unpacked extension.");
            });
        }
    }
};

// Run code
switch (browser) {
case "firefox":
    Functions.debug.debugInFirefox();
    break;
case "chrome":
    Functions.debug.debugInChrome();
    break;
default:
    console.log("Not a valid browser or browser name is not provided. Debug in Firefox by default.");
    Functions.debug.debugInFirefox();
}
