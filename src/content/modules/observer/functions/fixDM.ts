import { TUICData } from "@content/data";
import { TUICObserver } from "@content/observer";
import { TUICPref } from "../..";

export function fixDMBox() {
    if (!TUICObserver.data.fixedDMBox) {
        const dmBox = document.querySelector(`[data-testid="DMDrawerHeader"]`);
        if (dmBox) {
            if (dmBox.querySelector(`[d="M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z"]`)) {
                dmBox.querySelector<HTMLDivElement>(`div[role="button"]+div[role="button"]`).click();
                window.setTimeout(() => {
                    document.querySelector<HTMLDivElement>(`[data-testid="DMDrawerHeader"] div[role="button"]+div[role="button"]`).click();
                }, 100);
            }
            TUICObserver.data.fixedDMBox = true;
        }
    }
}

export function dmPage() {
    if (TUICPref.getPref("dmPage.showIcon")) {
        if (
            document.querySelector(
                `:is([data-testid="DM_Conversation_Avatar"]:not([data-testid="conversation"] *) [data-testid="UserAvatar-Container-unknown"] [role="presentation"] > div+div+div > div > div > div > div,[data-testid="DmScrollerContainer"] [data-testid="UserAvatar-Container-unknown"]:not([href$="/followers_you_follow"] *) [style*="background-image:"])`,
            )
        ) {
            for (const elem of document.querySelectorAll(`[data-testid="messageEntry"]:not([role="button"]):not(.TUICDMIcon)`)) {
                elem.classList.add("TUICDMIcon");
                if (elem.parentElement.querySelector(`[data-testid="messageEntry"] > div > div+div+div:not(.TUICDMIconBox)`)) {
                    continue;
                }
                //old Element
                elem.querySelector("div > div+div+div.TUICDMIconBox")?.remove();

                const elemParent = elem.parentElement.querySelector(`[data-testid="messageEntry"] > div`);
                elemParent.appendChild(TUICData.dmPage.element.make(false));
            }
        }
    } else {
        document.querySelectorAll(".TUICDMIconBox").forEach((elem) => {
            elem.remove();
        });
    }
}
