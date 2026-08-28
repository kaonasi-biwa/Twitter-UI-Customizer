import type { SidebarButtonDefinition } from "../types";
import { createSidebarButton } from "../components";
import { SIDEBAR_BUTTON_ICON } from "@shared/icons";
import { buttonClickInMoreMenu } from "../utils";

export const communitynotes: SidebarButtonDefinition = () => createSidebarButton({
    id: "communitynotes",
    svg: () => <path d={SIDEBAR_BUTTON_ICON.communitynotes.unselected}></path>,
    url: "/i/communitynotes",
    onclick: (e: Event) => {
        e?.preventDefault?.();
        buttonClickInMoreMenu(`[href="/i/communitynotes"]`);
    },
});
