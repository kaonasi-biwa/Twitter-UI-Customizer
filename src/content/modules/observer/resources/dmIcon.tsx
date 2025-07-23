import { fontSizeClass } from "@modules/utils/fontSize";
import { JSX } from "solid-js";

export const IconElement = (): JSX.Element => {
    return (
        <div class="css-175oi2r r-obd0qt flex-row TUICOriginalContent TUICDMIconBox">
            <div class="css-175oi2r" style={{ width: `${fontSizeClass("47", "49", "52", "57", "62")}px` }}></div>
            <div class="css-175oi2r absolute left-[0px]">
                <div
                    class="css-175oi2r block r-bztko3"
                    style={{ width: `${fontSizeClass("36", "38", "40", "44", "48")}px`, height: `${fontSizeClass("36", "38", "40", "44", "48")}px` }}
                    data-testid="UserAvatar-Container-unknown"
                >
                    <div class="block w-full" style={{ "padding-bottom": "100%" }}></div>
                    <div class="bottom-[0px] h-full absolute left-[0px] top-[0px] w-full">
                        <div class="css-175oi2r block h-full w-full absolute r-1wyvozj r-desppf r-bztko3">
                            <div class="bottom-[0px] h-full absolute left-[0px] top-[0px] w-full">
                                <div class="css-175oi2r r-sdzlij r-1udh08x absolute r-ggadg3 top-[-2px]" style={{ width: "calc(100% + 4px)", height: "calc(100% + 4px)" }}>
                                    <a
                                        href={document.querySelector<HTMLAnchorElement>(`[data-testid="DM_Conversation_Avatar"]:not([data-testid="conversation"] *)`)?.href ?? ""}
                                        role="link"
                                        class="css-175oi2r h-full w-full duration-200 r-6416eg outline-none cursor-pointer"
                                        style={{ "background-color": "rgba(0, 0, 0, 0)" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector<HTMLElement>(
                                                    `:is([data-testid="DM_Conversation_Avatar"]:not([data-testid="conversation"] *) [data-testid="UserAvatar-Container-unknown"] [role="presentation"] > div+div+div > div > div > div > div,[data-testid="DmScrollerContainer"] [data-testid="UserAvatar-Container-unknown"]:not([href$="/followers_you_follow"] *) [style*="background-image:"])`,
                                                )
                                                .click();
                                        }}
                                    >
                                        <div
                                            class="css-175oi2r r-sdzlij r-1udh08x pointer-events-none! absolute r-1wyvozj r-desppf"
                                            style={{ "background-color": "rgb(21, 32, 43)", width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
                                        >
                                            <div class="css-175oi2r block r-1udh08x">
                                                <div class="block w-full" style={{ "padding-bottom": "100%" }}></div>
                                                <div class="bottom-[0px] h-full absolute left-[0px] top-[0px] w-full">
                                                    <div
                                                        class="css-175oi2r basis-auto r-1udh08x z-0"
                                                        style={{ position: "absolute", inset: "0px" }}
                                                        aria-label={document.querySelector<HTMLSpanElement>(`#detail-header div > span:nth-child(1) > span > span:nth-child(1)`).textContent}
                                                    >
                                                        <div
                                                            class="css-175oi2r bg-transparent bg-center bg-no-repeat bottom-[0px] h-full left-[0px] absolute right-[0px] top-[0px] w-full -z-1 bg-cover TUICDMIconDisplay"
                                                            style={{
                                                                "background-image": document.querySelector<HTMLElement>(
                                                                    `:is([data-testid="DM_Conversation_Avatar"]:not([data-testid="conversation"] *) [data-testid="UserAvatar-Container-unknown"] [role="presentation"] > div+div+div > div > div > div > div,[data-testid="DmScrollerContainer"] [data-testid="UserAvatar-Container-unknown"]:not([href$="/followers_you_follow"] *) [style*="background-image:"])`,
                                                                ).style.backgroundImage,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
