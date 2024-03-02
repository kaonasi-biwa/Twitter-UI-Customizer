import { TUICLibrary } from "@content/library";
import { TUICI18N } from "@content/modules/i18n";

const _data = {
    html: (): string => {
        return `
    <a href="https://twitter.com/i/display" id="TUICDisplayRightSidebar" dir="ltr" role="link" class="TUICOriginalContent css-1rynq56 r-bcqeeo r-qvutc0 r-1tl8opc r-16dba41 r-hrzydr r-1loqt21 ${TUICLibrary.fontSizeClass(
            "r-1enofrn r-1f529hi r-mszm1p",
            "r-1enofrn r-fxxt2n r-mszm1p",
            "r-n6v787 r-1cwl3u0 r-j2kj52",
            "r-1b43r93 r-14yzgew r-1ba89he",
            "r-ubezar r-hjklzo r-n3sdqm",
        )}" style="text-overflow: unset; color: rgb(${TUICLibrary.backgroundColorClass<string>("113, 118, 123", "139, 152, 165", "83, 100, 113")});padding-top: 1.5px;">
        <span class="css-1qaijid r-bcqeeo r-qvutc0 r-1tl8opc" style="text-overflow: unset;">${TUICI18N.get("common-displaySetting")}</span>
    </a>
            `.replace(/\s\s+/g, "");
    },
    make: () => {
        const elem = TUICLibrary.parseHtml(_data.html()).item(0);

        elem.addEventListener("click", (e) => {
            e.preventDefault();
            const moreMenu = document.querySelector<HTMLElement>(`[data-testid="AppTabBar_More_Menu"] > div > div`);
            if (document.querySelector(`[role="menu"]`) == null) moreMenu.click();
            setTimeout(async () => {
                //document.querySelector<HTMLElement>(`:is([role="group"],[data-testid="Dropdown"]) [data-testid="settingsAndSupport"]`).click();
                await TUICLibrary.waitAndClickElement(`[href="/settings"]`);
                await TUICLibrary.waitAndClickElement(`[href="/settings/accessibility_display_and_languages"]`);
                await TUICLibrary.waitAndClickElement(`[href="/settings/display"]`);
            }, 150);
        });
        return elem;
    },
};

export function placeDisplayButton() {
    if (!document.querySelector("#TUICDisplayRightSidebar")) {
        const moreMenuButton = document.querySelector(`[data-testid="sidebarColumn"] nav > [role="button"]`);
        if (moreMenuButton) {
            moreMenuButton.parentElement.appendChild(_data.make());
        }
    }
}
