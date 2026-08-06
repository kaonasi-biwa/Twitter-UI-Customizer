import { renderSolid } from "@content/utils/renderLifecycle";
import { JSX } from "solid-js";
import { fontSizeClass } from "@content/utils/fontSize";

const toastMessage = (message: string): (() => JSX.Element) => {
    return () => {
        return (
            <div class="css-g5y9jx r-aqfbo4 r-zchlnj r-1d2f490 r-1xcajam r-1p0dtai r-12vffkv TUICToastMessage">
                <div class="css-g5y9jx r-12vffkv">
                    <div class="css-g5y9jx r-12vffkv">
                        <div class="css-g5y9jx r-633pao r-f8sm7e r-13qz1uu r-1ye8kvj">
                            <div
                                role="alert"
                                data-testid="toast"
                                class={`css-g5y9jx r-1awozwy r-l5o3uw r-18u37iz r-1wtj0ep r-105ug2t r-yz1j6i r-1kihuf0 r-z2wwpe ${fontSizeClass(
                                    "r-1vxqurs", "r-1yflyrw", "r-zd98yo", "r-1v456y7", "r-sr82au",
                                )} ${fontSizeClass("r-q81ovl", "r-q81ovl", "r-xyw6el", "r-kq9wsh", "r-1slz7xr")}`}
                                style={{
                                    "transition-property": "opacity",
                                    "transition-duration": "170ms",
                                    "transition-timing-function": "cubic-bezier(0, 0, 1, 1)",
                                    "opacity": "1"
                                }}
                            >
                                <div
                                    dir="ltr"
                                    class={`css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-a023e6 r-rjixqe r-16dba41 r-1wbh5a2 r-3o4zer ${fontSizeClass(
                                        "r-1b43r93", "r-1b43r93", "r-a023e6", "r-1inkyih", "r-1i10wst",
                                    )} ${fontSizeClass("r-1qfz7tf", "r-1qfz7tf", "r-1e081e0", "r-1orpq53", "r-779j7e")}`}
                                    style={{
                                        color: "rgb(255, 255, 255)",
                                    }}
                                >
                                    <span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc">{ message }</span>
                                </div>
                                <div aria-hidden="true" class="css-g5y9jx r-18u37iz"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export const placeToastMessage = (message: string, duration = 3000) => {
    const baseElem = document.querySelector(`#layers`);
    if (baseElem) {
        renderSolid(toastMessage(message), baseElem);
        window.setTimeout(() => {
            document.querySelector(`.TUICToastMessage`).remove();
        }, duration);
    }
};
