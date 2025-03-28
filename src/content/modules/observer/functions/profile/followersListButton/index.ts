import { hideElement, hasClosest, showElement, processElement } from "@modules/utils/controlElements";
import { getPref } from "@modules/pref";
import { ProcessedClass } from "@shared/sharedData";
import { render } from "solid-js/web";
import { followersListButton } from "./buttons";
import { data } from "./data";

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
