import type { SidebarButtonDefinition } from "../types";
import { createSidebarButton } from "../components";
import { SIDEBAR_BUTTON_ICON } from "@shared/icons";
import { buttonClickInMoreMenu } from "../utils";
import { SidebarHistory } from "../constants";

export const bookmarks: SidebarButtonDefinition = () => createSidebarButton({
    id: SidebarHistory.legacyId,
    svg: () => <path d={SIDEBAR_BUTTON_ICON.bookmarks.unselected}></path>,
    url: SidebarHistory.route,
    onclick: (e: Event) => {
        e?.preventDefault?.();
        buttonClickInMoreMenu(SidebarHistory.link);
    },
});
