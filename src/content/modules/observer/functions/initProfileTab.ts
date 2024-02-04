import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { ProcessedClass } from "@shared/sharedData";
import { I18nAndAllContent } from "@shared/types";

export const i18nAndAllContent: I18nAndAllContent = {
    all: ["tweets", "replies", "media", "likes"],
    i18n: {
        tweets: "profileSetting-profileInitialTab-tweet",
        replies: "profileSetting-profileInitialTab-reply",
        media: "profileSetting-profileInitialTab-media",
        likes: "profileSetting-profileInitialTab-likes",
    },
};

const _data = {
    selectors: {
        replies: `[href$="/with_replies"]`,
        media: `[href$="/media"]`,
        likes: `[href$="/likes"]`,
    },
};

export function profileInitialTab() {
    for (const elem of document.querySelectorAll(`[data-testid^="UserAvatar-"] a:not([href$="/photo"]):not(.${ProcessedClass})`)) {
        elem.process();

        const userName = elem.closest(`[data-testid^="UserAvatar-"]`).getAttribute(`data-testid`).replace(`UserAvatar-Container-`, "");
        elem.addEventListener("click", profileInitialTabRedirect(userName));
    }
    for (const elem of document.querySelectorAll(`[data-testid="tweet"] a[style*="color"]:not(.${ProcessedClass})`)) {
        elem.process();
        if (elem.textContent.startsWith("@")) {
            elem.addEventListener("click", profileInitialTabRedirect(elem.textContent.slice(1)));
        }
    }
    const profileButtonInSidebar = document.querySelector(`[data-testid="AppTabBar_Profile_Link"]:not(.${ProcessedClass})`);

    profileButtonInSidebar?.process();
    profileButtonInSidebar?.addEventListener("click", profileInitialTabRedirect(profileButtonInSidebar.getAttribute("href").replace("/", "")));
}

function profileInitialTabRedirect(userName: string) {
    return () => {
        if (TUICPref.getPref("profileSetting.profileInitialTab") != "tweets") {
            window.setTimeout(async () => {
                await TUICLibrary.waitForElement(`a[href="/${userName}/photo"]`);
                await TUICLibrary.waitForElement(`nav [role="presentation"]`);

                for (let i = 0; i <= 25; i++) {
                    const re = await new Promise((resolve2) => {
                        if (window.scrollY == 0) {
                            document.querySelector<HTMLAnchorElement>(`nav [role="presentation"] a${_data.selectors[TUICPref.getPref("profileSetting.profileInitialTab")]}`).click();
                            resolve2("ok");
                        }
                        resolve2("bb");
                    });
                    if (re == "ok") return true;
                    await new Promise((resolve2) => {
                        window.setTimeout(() => {
                            resolve2("");
                        }, 100);
                    });
                }
            }, 100);
        }
    };
}
