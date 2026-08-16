/** Supports X's current History route and legacy Bookmarks route with one persisted key. */
export class SidebarBookmarks {
    static readonly id = "bookmarks";
    static readonly currentRoute = "/i/history";
    static readonly legacyRoute = "/i/bookmarks";
    static readonly routes = [SidebarBookmarks.currentRoute, SidebarBookmarks.legacyRoute] as const;
    static readonly currentLink = `[href="${SidebarBookmarks.currentRoute}"]`;
    static readonly legacyLink = `[href="${SidebarBookmarks.legacyRoute}"]`;
    static readonly link = `:is(${SidebarBookmarks.currentLink},${SidebarBookmarks.legacyLink})`;
    static readonly custom = `#TUICSidebar_${SidebarBookmarks.id}`;
    static readonly button = `${SidebarBookmarks.link},${SidebarBookmarks.custom}`;
    static readonly native = `${SidebarBookmarks.link}:not(${SidebarBookmarks.custom})`;
}
