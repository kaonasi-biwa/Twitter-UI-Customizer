import { fontSizeClass } from "@modules/utils/fontSize";
import { backgroundColorClass } from "@content/modules/utils/color";
import { JSX } from "solid-js";
import { data } from "./data";

export function followersListButton(id: string, baseElement: HTMLElement): () => JSX.Element {
    return (): JSX.Element => (
        <div
            class="css-175oi2r flex-row r-1h0z5md r-1cwvpvk TUICOriginalContent"
            data-tuic-follower-list-button={id}
            onKeyDown={(e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    data[id].clickEvent(baseElement);
                }
            }}
            onClick={() => data[id].clickEvent(baseElement)}
        >
            <div role="button" tabindex="0" class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr cursor-pointer r-1ny4l3l">
                <div
                    dir="ltr"
                    class={`css-1rynq56 r-bcqeeo r-qvutc0 r-37j5jr leading-[20px] font-normal r-1awozwy flex r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q ${
                        fontSizeClass("text-[14px]", "text-[14px]", "text-[15px]", "text-[17px]", "r-1i10wst")
                    }`}
                >
                    <div class="css-175oi2r inline-flex">
                        <div class="css-175oi2r inline-flex r-1p0dtai r-1d2f490 absolute r-zchlnj r-ipm5af bg-transparent r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l TUIC_ButtonHover"></div>
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class={`inline-block fill-current r-dnmrzs relative r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi ${
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
