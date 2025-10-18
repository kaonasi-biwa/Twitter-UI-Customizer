import fs from "node:fs/promises";

import { pwaManifest } from "./pwa-manifest.config";

export const generatePWAManifest = async (locale: string, ti18n: Record<string, string>) => {
    await fs.writeFile(
        `public/pwa-manifests/${locale}.json`,
        JSON.stringify(pwaManifest(
            ti18n["XtoTwitter-PostToTweet-pwaManifest-description"],
            ti18n["XtoTwitter-PostToTweet-pwaManifest-newTweet"],
            ti18n["XtoTwitter-PostToTweet-pwaManifest-explore"],
            ti18n["XtoTwitter-PostToTweet-pwaManifest-notifications"],
            ti18n["XtoTwitter-PostToTweet-pwaManifest-directMessages"],
        ), null, 2),
    );
};
