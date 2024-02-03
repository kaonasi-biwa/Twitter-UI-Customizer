import { TUICData } from "@content/data";
import { TUICPref } from "../..";

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
