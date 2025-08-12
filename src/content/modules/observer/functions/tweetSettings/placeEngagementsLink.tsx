import type { JSX } from "solid-js";
import { For } from "solid-js";
import { render } from "solid-js/web";
import { TUICI18N } from "@modules/i18n";
import { waitForElement, hasClosest } from "@modules/utils/controlElements";
import { getPref } from "@modules/pref";
import { backgroundColorClass } from "@content/modules/utils/color";
import { fontSizeClass } from "@modules/utils/fontSize";

const _data = {
    engagementsBox: (ids: string[], article: Element, isShort: boolean): () => JSX.Element => {
        return () => (
            <div class="twcss-flex">
                <div
                    class={`TUICEngagementsBox twcss-flex ${
                        backgroundColorClass("border-t-tw-dark-border", "border-t-tw-darkblue-border", "border-t-tw-light-border")
                    } border-t-solid border-t-[1px] flex-1 flex-row flex-nowrap px-[4px] ${
                        fontSizeClass("py-[14px]", "py-[15px]", "py-[16px]", "py-[18px]", "py-[19px]")
                    }`}
                >
                    <For each={ids}>{(id) => _data.links(id, article, isShort)}</For>
                </div>
            </div>
        );
    },
    links: (id: string, article: Element, isShort: boolean): JSX.Element => {
        return (
            <div class="twcss-flex mr-[20px]">
                <div class="twcss-flex">
                    <a
                        href={id === "quotes" ? "/retweets/with_comments" : `/${id}`}
                        dir="auto"
                        role="link"
                        class={`twcss-text-explicit cursor-pointer font-tw2  ${
                            fontSizeClass("text-[14px]", "text-[14px]", "text-[15px]", "text-[17px]", "text-[18px]")
                        } font-normal ${
                            fontSizeClass("leading-[18px]", "leading-[19px]", "leading-[20px]", "leading-[22px]", "leading-[24px]")
                        } min-w-[0px] wrap-break-word ${
                            backgroundColorClass("text-tw-dark-text", "text-tw-darkblue-text", "text-tw-light-text")
                        }`}
                        onClick={async (e) => {
                            e.preventDefault();
                            article.querySelector<HTMLInputElement>(`[data-testid="caret"]`).click();
                            await waitForElement(`[data-testid="tweetEngagements"]`);
                            document.querySelector<HTMLButtonElement>(`[data-testid="tweetEngagements"]`).click();
                            await waitForElement(`[role="tab"][href$="/${id}"]`);
                            document.querySelector<HTMLAnchorElement>(`[role="tab"][href$="/${id}"]`).click();
                        }}
                    >
                        <div class="twcss-flex inline-flex overflow-hidden">
                            <span
                                data-testid="app-text-transition-container"
                                style={{
                                    "transition-property": "transform",
                                    "transition-duration": "0.3s",
                                    transform: "translate3d(0, 0, 0)",
                                }}
                            >
                                <span
                                    class={`twcss-text-inherit font-inherit ${
                                        fontSizeClass("text-[13px]", "text-[13px]", "text-[14px]", "text-[15px]", "text-[17px]")
                                    } font-bold ${
                                        fontSizeClass("leading-[14px]", "leading-[15px]", "leading-[16px]", "leading-[18px]", "leading-[19px]")
                                    } min-w-[0px] wrap-break-word`}
                                >
                                    <span class="twcss-text-inherit font-inherit min-w-[0px] wrap-break-word">
                                        {}
                                    </span>
                                </span>
                            </span>
                        </div>
                        <span
                            class={`twcss-text-inherit ${
                                backgroundColorClass("text-tw-dark-text2", "text-tw-darkblue-text2", "text-tw-light-text2")
                            } font-inherit ${
                                fontSizeClass("text-[14px]", "text-[14px]", "text-[15px]", "text-[17px]", "text-[18px]")
                            } leading-[16px] min-w-[0px] wrap-break-word`}
                        >
                            <span class="twcss-text-inherit font-inherit min-w-[0px] wrap-break-word">
                                {TUICI18N.get("bottomTweetButtons-setting-placeEngagementsLink-" + id + (isShort ? "-short" : ""))}
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        );
    },
};

export function placeEngagementsLink(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    const buttonBarBase = articleInfo.elements.buttonBarBase;
    for (const boxElem of Array.from(articleBase.querySelectorAll(`.TUICEngagementsBox`))) {
        boxElem.remove();
    }

    if (getPref("engagementsLink.option.placeEngagementsLink")) {
        const engageentsTypeList: string[] = getPref("fixEngagements");
        const shortName = getPref("engagementsLink.option.placeEngagementsLinkShort");

        const engagementsFixList: string[][] = [];
        const engageFixListFunc = (count: number) => {
            let tempArr: string[] = [];
            for (const engageentsType of engageentsTypeList) {
                tempArr.push(engageentsType);
                if (tempArr.length == count) {
                    engagementsFixList.push(tempArr);
                    tempArr = [];
                }
            }
            if (tempArr.length != 0) {
                engagementsFixList.push(tempArr);
            }
        };
        const isPhotoPage = location.pathname.includes("/photo/") || location.pathname.includes("/video/");
        if (shortName && !isPhotoPage) {
            engageFixListFunc(3);
        } else if ((shortName && isPhotoPage) || (!shortName && !isPhotoPage)) {
            engageFixListFunc(2);
        } else {
            engageFixListFunc(1);
        }
        for (const engageList of engagementsFixList) {
            const engagementsBox = _data.engagementsBox(engageList, articleBase, shortName);
            const engagementsBoxBase = document.createElement("div");
            engagementsBoxBase.className = "twcss-flex TUICEngagementsBoxBase";
            hasClosest(buttonBarBase, `:scope > .TUICTweetButtomBarBase`).insertBefore(engagementsBoxBase, buttonBarBase.closest(`.TUICTweetButtomBarBase`));
            render(engagementsBox, engagementsBoxBase);
        }
    }
}
