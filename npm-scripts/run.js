/* eslint-disable no-undef */
const fs = require("fs");
const { exec } = require("child_process");
const browser = process.argv[2];

const Functions = {
    debug: {
        debugInFirefox() {
            fs.copyFile("manifest_firefox.json", "manifest.json", (err) => {
                if (err) {
                    console.error("Failed to copy and rename the file:", err);
                    process.exit(1);
                }
      
                exec(`web-ext run --keep-profile-changes --firefox-profile=development --start-url=twitter.com`, (error, stdout, stderr) => {
                    if (error) {
                        console.error("Error occurred while running web-ext:", error.message);
                        console.error("Did you run `npm install`?");
                        process.exit(1);
                    }
                    console.log(stdout);
                    console.log("If Firefox didn't open, Please check if you have 'Firefox' installed. & Profile 'development' exists.");
                });
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
