import type { JSX } from "solid-js";
import { render } from "solid-js/web";
import { hideElement } from "@modules/utils/controlElements";
import { fontSizeClass } from "@modules/utils/fontSize";
import { getPref } from "@modules/pref";
import { backgroundColorClass } from "@content/modules/utils/color";

const showLinkCardInfoElement = (link: string, domain: string, title: string, description: string): () => JSX.Element => {
    return () => (
        <div class="css-175oi2r grow shrink justify-center TUIC_LinkCardInfo">
            <a
                href={link}
                rel="noopener noreferrer nofollow"
                target="_blank"
                role="link"
                class="css-4rbku5 css-18t94o4 css-175oi2r cursor-pointer flex-row grow justify-between outline-none duration-200 r-6416eg"
            >
                <div
                    class={`css-175oi2r grow shrink gap-[2px] justify-center ${fontSizeClass(
                        "pb-[11px] px-[11px] r-1b3ntt7",
                        "pb-[11px] px-[11px] r-1b3ntt7",
                        "pb-[12px] px-[12px] pt-[12px]",
                        "pb-[13px] px-[13px] pt-[13px]",
                        "pb-[14px] px-[14px] pt-[14px]",
                    )}`}
                    id="id__7fpkgwkoke8"
                    data-testid="card.layoutSmall.detail"
                    style={{ padding: "12px 15px" }}
                >
                    <div
                        dir="auto"
                        class={`css-901oao css-1hf3ou5 ${backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} r-37j5jr ${fontSizeClass(
                            "text-[14px] leading-[18px]",
                            "text-[14px] leading-[19px]",
                            "text-[15px] leading-[20px]",
                            "text-[17px] leading-[22px]",
                            "text-[18px] leading-[24px]",
                        )} font-normal min-w-[0px] wrap-break-word`}
                    >
                        <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">
                            <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">{domain}</span>
                        </span>
                    </div>
                    <div
                        dir="auto"
                        class={`css-901oao css-1hf3ou5 ${backgroundColorClass("r-1nao33i", "r-vlxjld", "r-18jsvk2")} r-37j5jr ${fontSizeClass(
                            "text-[14px] leading-[18px]",
                            "text-[14px] leading-[19px]",
                            "text-[15px] leading-[20px]",
                            "text-[17px] leading-[22px]",
                            "text-[18px] leading-[24px]",
                        )} font-normal min-w-[0px] wrap-break-word`}
                    >
                        <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">
                            <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">{title}</span>
                        </span>
                    </div>
                    <div
                        dir="auto"
                        class={`css-901oao css-cens5h ${backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} r-37j5jr ${fontSizeClass(
                            "text-[14px] leading-[18px]",
                            "text-[14px] leading-[19px]",
                            "text-[15px] leading-[20px]",
                            "text-[17px] leading-[22px]",
                            "text-[18px] leading-[24px]",
                        )} font-normal min-w-[0px] wrap-break-word`}
                        style={{ "-webkit-line-clamp": "2", "white-space": "normal" }}
                    >
                        <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">
                            <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">{description}</span>
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
};

// リンクカードを設置
export function showLinkCardInfo(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    if (getPref("showLinkCardInfo.showLinkCardInfo")) {
        if (articleBase.querySelector(`[data-testid="card.layoutLarge.media"] a[aria-label] > div+div`)) {
            const card = articleBase.querySelector('[data-testid="card.wrapper"] [data-testid="card.layoutLarge.media"]').parentElement;

            if (card.querySelector(".TUIC_LinkCardInfo") == null) {
                hideElement(card.children[1] as HTMLElement);
                hideElement(card.parentElement.children[1] as HTMLElement);
                hideElement(card.querySelector('[data-testid="card.layoutLarge.media"] a > div+div'));

                const link = card.querySelector<HTMLAnchorElement>('[data-testid="card.layoutLarge.media"] a').href;
                const domain = card.querySelector('[data-testid="card.layoutLarge.media"] a').getAttribute("aria-label").replace(/ .*$/, "");
                const title = card.querySelector('[data-testid="card.layoutLarge.media"] a').getAttribute("aria-label").replace(/^.*? /, "");
                const description = "";
                const oldDisplay = showLinkCardInfoElement(link, domain, title, description);
                render(oldDisplay, card);
            }
        }
    } else {
        articleBase.querySelector(".TUIC_LinkCardInfo")?.remove();
    }
}
