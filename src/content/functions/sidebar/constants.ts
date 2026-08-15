/** X replaced the Bookmarks destination with History; keep the legacy ID for stored preferences. */
export class SidebarHistory {
    static readonly legacyId = "bookmarks";
    static readonly route = "/i/history";
    static readonly link = `[href="${SidebarHistory.route}"]`;
    static readonly custom = `#TUICSidebar_${SidebarHistory.legacyId}`;
    static readonly button = `${SidebarHistory.link},${SidebarHistory.custom}`;
    static readonly native = `${SidebarHistory.link}:not(${SidebarHistory.custom})`;
}
