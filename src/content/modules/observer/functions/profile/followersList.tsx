import { hideElement, waitForElement, hasClosest, showElement, processElement } from "@modules/utils/controlElements";
import { fontSizeClass } from "@modules/utils/fontSize";
import { getPref } from "@modules/pref";
import { backgroundColorClass } from "@content/modules/utils/color";
import { ProcessedClass } from "@shared/sharedData";
import { JSX } from "solid-js";
import { render } from "solid-js/web";

function followersListButton(id: string, baseElement: HTMLElement): () => JSX.Element {
    return (): JSX.Element => (
        <div
            class="css-175oi2r r-18u37iz r-1h0z5md r-1cwvpvk TUICOriginalContent"
            data-tuic-follower-list-button={id}
            onKeyDown={(e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    data[id].clickEvent(baseElement);
                }
            }}
            onClick={() => data[id].clickEvent(baseElement)}
        >
            <div role="button" tabindex="0" class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l">
                <div dir="ltr" class={`css-1rynq56 r-bcqeeo r-qvutc0 r-37j5jr r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q ${fontSizeClass("r-1b43r93", "r-1b43r93", "r-a023e6", "r-1inkyih", "r-1i10wst")}`}>
                    <div class="css-175oi2r r-xoduu5">
                        <div class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l TUIC_ButtonHover"></div>
                        <svg viewBox="0 0 24 24" aria-hidden="true" class={`r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi ${backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")}`}>
                            <g>
                                <path d={data[id].svg}></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

const data: Record<string, { selector: string; clickEvent?: (baseElement: HTMLElement) => void; svg?: string }> = {
    followButton: {
        selector: `[role="button"]:is([aria-label*="@"],[data-testid$="-unblock"])`,
    },
    moremenuButton: {
        selector: `[role="button"][aria-haspopup="menu"]`,
    },
    blockButton: {
        selector: `[data-tuic-follower-list-button="blockButton"]`,
        svg: `M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z`,
        clickEvent(baseElement) {
            baseElement.querySelector<HTMLButtonElement>(data.moremenuButton.selector).click();
            waitForElement<HTMLButtonElement>(`[data-testid="Dropdown"] > [role="menuitem"]`).then((elem) => {
                document.querySelector<HTMLButtonElement>(`[data-testid="block"`).click();
                if (getPref("profileSetting.followersListButtonsOptions.noModalbottomTweetButtons")) {
                    waitForElement<HTMLButtonElement>(`[data-testid="confirmationSheetConfirm"]`).then((elem) => {
                        elem[0].click();
                    });
                }
            });
        },
    },
    muteButton: {
        selector: `[data-tuic-follower-list-button="muteButton"]`,
        svg: `M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z`,
        clickEvent(baseElement) {
            baseElement.querySelector<HTMLButtonElement>(data.moremenuButton.selector).click();
            waitForElement<HTMLButtonElement>(`[data-testid="Dropdown"] > [role="menuitem"]`).then((elem) => {
                document.querySelector<HTMLButtonElement>(`[data-testid="mute"]`).click();
            });
        },
    },
    reportButton: {
        selector: `[data-tuic-follower-list-button="reportButton"]`,
        svg: `M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z`,
        clickEvent(baseElement) {
            baseElement.querySelector<HTMLButtonElement>(data.moremenuButton.selector).click();
            waitForElement<HTMLButtonElement>(`[data-testid="Dropdown"] > [role="menuitem"]`).then((elem) => {
                document.querySelector<HTMLButtonElement>(`[data-testid="report"]`).click();
            });
        },
    },
    removeFollowerButton: {
        selector: `[data-tuic-follower-list-button="removeFollowerButton"]`,
        svg: `M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm12.586 3l-2.043-2.04 1.414-1.42L20 7.59l2.043-2.05 1.414 1.42L21.414 9l2.043 2.04-1.414 1.42L20 10.41l-2.043 2.05-1.414-1.42L18.586 9zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z`,
        clickEvent(baseElement) {
            baseElement.querySelector<HTMLButtonElement>(data.moremenuButton.selector).click();
            waitForElement<HTMLButtonElement>(`[data-testid="Dropdown"] > [role="menuitem"]`).then((elem) => {
                document.querySelector<HTMLButtonElement>(`[data-testid="removeFollower"]`).click();
                if (getPref("profileSetting.followersListButtonsOptions.noModalbottomTweetButtons")) {
                    waitForElement<HTMLButtonElement>(`[data-testid="confirmationSheetConfirm"]`).then((elem) => {
                        elem[0].click();
                    });
                }
            });
        },
    },
};

export function followersList() {
    if (location.pathname.endsWith("/followers") && document.querySelectorAll(`[aria-haspopup="menu"]`)) {
        for (const elem of document.querySelectorAll(`[data-testid="primaryColumn"] [data-testid="UserCell"]:not(.${ProcessedClass})`)) {
            if (document.querySelector(`[data-testid="UserCell"] ${data.moremenuButton.selector}`)) {
                processElement(elem);
                const followButton = elem.querySelector(data.followButton.selector);
                if (followButton) {
                    const baseElement = hasClosest<HTMLElement>(followButton, data.moremenuButton.selector);
                    baseElement.classList.add("TUICFollowerListButtons");
                    let elementCounter = 0;
                    for (const id of getPref("profileSetting.followersListButtons")) {
                        const buttonElement = baseElement.querySelector<HTMLElement>(data[id].selector);
                        if (buttonElement) {
                            showElement(buttonElement);
                            baseElement.appendChild(buttonElement.closest(".TUICFollowerListButtons > *"));
                            elementCounter++;
                            if (id == "followButton") {
                                const undisplayedElem = baseElement.querySelector(`div[id]`);
                                if (undisplayedElem) {
                                    baseElement.appendChild(baseElement.querySelector(`div[id]`));
                                    elementCounter++;
                                }
                            }
                        } else if (id in data) {
                            render(followersListButton(id, baseElement), baseElement);
                            elementCounter++;
                        }
                    }
                    const baseElementChildren = baseElement.children.length;
                    if (elementCounter != baseElementChildren) {
                        for (let i = 0; elementCounter + i < baseElementChildren; i++) {
                            hideElement(baseElement.children[i] as HTMLElement);
                        }
                    }
                }
            }
        }
    }
}
