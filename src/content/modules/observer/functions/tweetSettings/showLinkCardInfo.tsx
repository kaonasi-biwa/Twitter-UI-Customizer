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
                class="css-4rbku5 css-18t94o4 css-175oi2r cursor-pointer flex-row grow r-1wtj0ep outline-none duration-200 r-6416eg"
            >
                <div
                    class={`css-175oi2r grow shrink r-z5qs1h justify-center ${fontSizeClass(
                        "r-1t982j2 r-1qfz7tf r-1b3ntt7",
                        "r-1t982j2 r-1qfz7tf r-1b3ntt7",
                        "r-kzbkwu r-1e081e0 r-ttdzmv",
                        "r-ig955 r-1orpq53 r-19urhcx",
                        "r-i03k3n r-779j7e r-5t7p9m",
                    )}`}
                    id="id__7fpkgwkoke8"
                    data-testid="card.layoutSmall.detail"
                    style={{ padding: "12px 15px" }}
                >
                    <div
                        dir="auto"
                        class={`css-901oao css-1hf3ou5 ${backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} r-37j5jr ${fontSizeClass(
                            "text-[14px] r-14yzgew",
                            "text-[14px] r-hjklzo",
                            "text-[15px] leading-[20px]",
                            "text-[17px] r-hbpseb",
                            "r-1i10wst leading-[24px]",
                        )} font-normal min-w-[0px] wrap-break-word`}
                    >
                        <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">
                            <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">{domain}</span>
                        </span>
                    </div>
                    <div
                        dir="auto"
                        class={`css-901oao css-1hf3ou5 ${backgroundColorClass("r-1nao33i", "r-vlxjld", "r-18jsvk2")} r-37j5jr ${fontSizeClass(
                            "text-[14px] r-14yzgew",
                            "text-[14px] r-hjklzo",
                            "text-[15px] leading-[20px]",
                            "text-[17px] r-hbpseb",
                            "r-1i10wst leading-[24px]",
                        )} font-normal min-w-[0px] wrap-break-word`}
                    >
                        <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">
                            <span class="css-901oao css-16my406 r-1tl8opc min-w-[0px] wrap-break-word">{title}</span>
                        </span>
                    </div>
                    <div
                        dir="auto"
                        class={`css-901oao css-cens5h ${backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} r-37j5jr ${fontSizeClass(
                            "text-[14px] r-14yzgew",
                            "text-[14px] r-hjklzo",
                            "text-[15px] leading-[20px]",
                            "text-[17px] r-hbpseb",
                            "r-1i10wst leading-[24px]",
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
