import { fontSizeClass } from "@modules/utils/fontSize";
import { backgroundColorClass } from "@content/modules/utils/color";
import { JSX } from "solid-js";
import { data } from "./data";

export function followersListButton(id: string, baseElement: HTMLElement): () => JSX.Element {
    return (): JSX.Element => (
        <div
            class="css-175oi2r flex-row justify-start r-1cwvpvk TUICOriginalContent"
            data-tuic-follower-list-button={id}
            onKeyDown={(e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    data[id].clickEvent(baseElement);
                }
            }}
            onClick={() => data[id].clickEvent(baseElement)}
        >
            <div role="button" tabindex="0" class="css-175oi2r justify-center min-h-[20px] overflow-visible select-none cursor-pointer outline-none">
                <div
                    dir="ltr"
                    class={`css-1rynq56 min-w-[0px] wrap-break-word r-37j5jr leading-[20px] font-normal items-center flex justify-start duration-200 [transition-property:color] whitespace-nowrap ${
                        fontSizeClass("text-[14px]", "text-[14px]", "text-[15px]", "text-[17px]", "text-[18px]")
                    }`}
                >
                    <div class="css-175oi2r inline-flex">
                        <div class="css-175oi2r inline-flex bottom-[0px] left-[0px] absolute right-[0px] top-[0px] bg-transparent rounded-full m-[-8px] duration-200 r-6416eg outline-none TUIC_ButtonHover"></div>
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class={`inline-block fill-current max-w-full relative align-text-bottom select-none h-[1.25em] r-1hdv0qi ${
                                backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")
                            }`}
                        >
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
