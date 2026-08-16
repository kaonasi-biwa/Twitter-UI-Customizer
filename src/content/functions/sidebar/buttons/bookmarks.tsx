import type { SidebarButtonDefinition } from "../types";
import { createSidebarButton } from "../components";
import { SIDEBAR_BUTTON_ICON } from "@shared/icons";
import { buttonClickInMoreMenu } from "../utils";
import { SidebarBookmarks } from "../constants";

export const bookmarks: SidebarButtonDefinition = () => createSidebarButton({
    id: SidebarBookmarks.id,
    svg: () => <path d={SIDEBAR_BUTTON_ICON.bookmarks.unselected}></path>,
    url: () => document.querySelector<HTMLAnchorElement>(SidebarBookmarks.native)?.href ?? SidebarBookmarks.currentRoute,
    onclick: (e: Event) => {
        e?.preventDefault?.();
        buttonClickInMoreMenu(SidebarBookmarks.link);
    },
});
