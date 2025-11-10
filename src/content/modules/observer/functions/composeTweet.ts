import { processElement, waitForElement } from "@content/modules/utils/controlElements";
import { ProcessedClass } from "@shared/sharedData";

export function composetweet(){
    if(location.pathname === "/compose/post" && document.querySelector(`[data-testid="tweetButton"]:not(.${ProcessedClass})`)){
        const composeTweetButton = document.querySelector<HTMLButtonElement>(`[data-testid="tweetButton"]`);
        composeTweetButton.addEventListener("click", async () => {
            if(composeTweetButton.disabled) return;
            await waitForElement(`[data-testid="toast"]`);
            window.setTimeout(() => document.querySelector<HTMLButtonElement>(`[data-testid="SideNav_NewTweet_Button"]`)?.click(), 500)
        });
        processElement(composeTweetButton);
    }
}
