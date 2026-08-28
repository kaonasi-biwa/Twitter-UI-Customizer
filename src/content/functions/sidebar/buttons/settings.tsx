import type { SidebarButtonDefinition } from "../types";
import { SIDEBAR_BUTTON_ICON } from "@shared/icons";
import { createSidebarButton } from "../components";
import { buttonClickInMoreMenu } from "../utils";

export const settings: SidebarButtonDefinition = () =>
    createSidebarButton({
        id: "settings",
        svg: () => <path d={SIDEBAR_BUTTON_ICON.settings.unselected}></path>,
        url: "/settings/",
        onclick: async (e: Event) => {
            e?.preventDefault?.();

            if (location.pathname.includes("/settings")) return;
            await buttonClickInMoreMenu(`[href="/settings"]`);
        },
    });
