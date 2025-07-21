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
            <div role="button" tabindex="0" class="css-175oi2r justify-center min-h-[20px] r-bztko3 r-lrvibr cursor-pointer r-1ny4l3l">
                <div
                    dir="ltr"
                    class={`css-1rynq56 min-w-[0px] r-qvutc0 r-37j5jr leading-[20px] font-normal items-center flex justify-start r-o7ynqc r-clp7b1 r-3s2u2q ${
                        fontSizeClass("text-[14px]", "text-[14px]", "text-[15px]", "text-[17px]", "r-1i10wst")
                    }`}
                >
                    <div class="css-175oi2r inline-flex">
                        <div class="css-175oi2r inline-flex bottom-[0px] left-[0px] absolute right-[0px] top-[0px] bg-transparent r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l TUIC_ButtonHover"></div>
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class={`inline-block fill-current max-w-full relative r-1plcrui r-lrvibr h-[1.25em] r-1hdv0qi ${
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
