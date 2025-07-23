import { waitForElement } from "@modules/utils/controlElements";
import { fontSizeClass } from "@modules/utils/fontSize";
import { TUICI18N } from "@content/modules/i18n";
import { backgroundColorClass } from "@content/modules/utils/color";
import { JSX } from "solid-js";
import { render } from "solid-js/web";
import { Dialog } from "@shared/tlui/components/Dialog";
import { ButtonComponent } from "@shared/tlui/components/ButtonComponent";
import { DivBoxComponent } from "@shared/tlui/components/DivBox";

const elem = (): JSX.Element => {
    return (
        <a
            href="https://twitter.com/i/display"
            id="TUICDisplayRightSidebar"
            dir="ltr"
            role="link"
            class={`TUICOriginalContent css-1rynq56 min-w-[0px] wrap-break-word r-1tl8opc font-normal r-hrzydr cursor-pointer ${fontSizeClass(
                "r-1enofrn r-1f529hi r-mszm1p",
                "r-1enofrn r-fxxt2n r-mszm1p",
                "text-[13px] leading-[16px] r-j2kj52",
                "text-[14px] r-14yzgew r-1ba89he",
                "r-ubezar r-hjklzo r-n3sdqm",
            )}`}
            style={{
                "text-overflow": "unset",
                color: `rgb(${backgroundColorClass<string>("113, 118, 123", "139, 152, 165", "83, 100, 113")})`,
                "padding-top": "1.5px",
            }}
            onClick={(e) => {
                e.preventDefault();
                setTimeout(async () => {
                    await waitForElement("#layers");
                    const dialog = new Dialog(TUICI18N.get("common-displaySetting"));
                    dialog.contentWidth = "50vw";
                    //dialog.fitContentWidth = true;
                    dialog
                        .addComponents([
                            new ButtonComponent(TUICI18N.get("common-close"), () => {
                                dialog.close();
                            }),
                            new DivBoxComponent({ id: "TUICOriginalDisplaySetting" }),
                            new ButtonComponent(TUICI18N.get("common-close"), () => {
                                dialog.close();
                            }),
                        ])
                        .open();
                }, 150);
                /*
                const moreMenu = document.querySelector<HTMLElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
                if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
                setTimeout(async () => {
                    //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                    (await waitForElement<HTMLAnchorElement>(`[href="/settings"]`))[0].click();
                    (await waitForElement<HTMLAnchorElement>(`[href="/settings/accessibility_display_and_languages"]`))[0].click();
                    (await waitForElement<HTMLAnchorElement>(`[href="/settings/display"]`))[0].click();
                }, 150);*/
            }}
        >
            <span class="css-1qaijid min-w-[0px] wrap-break-word r-1tl8opc" style={{ "text-overflow": "unset" }}>
                {TUICI18N.get("common-displaySetting")}
            </span>
        </a>
    );
};

export function placeDisplayButton() {
    if (!document.querySelector("#TUICDisplayRightSidebar")) {
        const moreMenuButton = document.querySelector(`[data-testid="sidebarColumn"] nav > [role="button"]`);
        if (moreMenuButton) {
            render(elem, moreMenuButton.parentElement);
        }
    }
}
