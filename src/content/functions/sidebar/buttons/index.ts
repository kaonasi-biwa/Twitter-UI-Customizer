import type { SidebarButtonDefinition } from "../types";
import { topics } from "./topics";
import { lists } from "./lists";
import { communities } from "./communities";
import { communitynotes } from "./communitynotes";
import { drafts } from "./drafts";
import { connect } from "./connect";
import { display } from "./display";
import { muteAndBlock } from "./muteAndBlock";
import { bookmarks } from "./bookmarks";
import { settings } from "./settings";
import { jobs } from "./jobs";
import { spaces } from "./spaces";
// import { chat } from "./chat";

import type { SettingGroupChildIds } from "@content/settings";

// TODO: スクリーンネームの取得処理が分散しているので、共通化する

export const sidebarButtonsData: Partial<Record<SettingGroupChildIds<"sidebarButtons">, SidebarButtonDefinition>> = {
    topics,
    lists,
    communities,
    communitynotes,
    drafts,
    connect,
    display,
    muteAndBlock,
    bookmarks,
    settings,
    jobs,
    spaces,
    /*chat,*/
};
