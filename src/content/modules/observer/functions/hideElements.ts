import { TUICPref } from "@content/modules";

// NOTE: 条件分岐とClass付与を一行にまとめる場合は、.? をつけるのを忘れないようにしましょう
export function hideElements() {
    document.querySelectorAll('a[href$="quick_promote_web/intro"]').forEach((e) => {
        if (TUICPref.getPref("tweetDisplaySetting.twitter-pro-promotion-btn")) {
            e.hide();
        } else {
            e.show();
        }
    });

    rightSidebar();
    profile();
    osusumeUser();

    if (TUICPref.getPref("timeline.accountStart") && location.search.indexOf("f=user") === -1 && !location.href.includes("/settings/") && document.querySelector(`[href="/settings/profile"]`)) {
        const cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not(.TUICDidArticle):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *) [aria-live="polite"]`);
        for (const elem of cells) {
            elem.closest(`div[data-testid="cellInnerDiv"]`).hide();
            elem.closest(`div[data-testid="cellInnerDiv"]`).previousElementSibling?.hide();
        }
    }

    if (TUICPref.getPref("tweetDisplaySetting.subscribe-tweets") && window.location.pathname.includes("/status/") && /^\d+$/.test(new URL(location.href).pathname.split("/")[3])) {
        document.querySelector(`*:not(.TUIC_DISPNONE) > [data-testid$="-subscribe"]`)?.parentElement.hide();
    }

    if (TUICPref.getPref("accountSwitcher.icon") && TUICPref.getPref("accountSwitcher.nameID") && TUICPref.getPref("accountSwitcher.moreMenu")) {
        document.querySelector(`:not(TUIC_DISPNONE) > * > [data-testid="SideNav_AccountSwitcher_Button"]`)?.hasClosest(`:scope > * > [data-testid="SideNav_AccountSwitcher_Button"]`).hide();
    }

    document.querySelectorAll('[href="/settings/monetization"], [href="/i/premium_sign_up"], [href="/settings/manage_subscriptions"]').forEach((e) => {
        if (TUICPref.getPref("invisibleItems.config-premium")) {
            e.hide();
        } else {
            e.show();
        }
    });

    if (TUICPref.getPref("invisibleItems.verifiedNotifications") && location.pathname.includes("/notifications")) {
        document.querySelector(`[href="/notifications/verified"][role="tab"]:not(.TUIC_DISPNONE > *)`)?.parentElement.hide();
    }
}

function rightSidebar() {
    if (TUICPref.getPref("rightSidebar.verified")) {
        document.querySelector(`*:not(.TUIC_DISPNONE) > [role="complementary"] :is([href="/i/verified-choose"], [href="/i/premium_tier_switch"])`)?.hasClosest(`[role="complementary"]`).hide();
    }
    if (TUICPref.getPref("rightSidebar.trend")) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="trend"]`)?.hasClosest(":scope > * >  section").hide();
    }
    if (TUICPref.getPref("rightSidebar.osusumeUser") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"] [dir="auto"] > span:not([role="search"] *)`) == null) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"]:not([role="search"] *)`)?.hasClosest(":scope > * > aside").hide();
    }

    if (TUICPref.getPref("rightSidebar.relevantPeople") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"] [dir="auto"] > span`)) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"]`)?.hasClosest(`:scope > * > * > [data-testid="UserCell"]`).hide();
    }
    if (TUICPref.getPref("rightSidebar.links")) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) > nav`)?.parentElement.hide();
    }
    if (TUICPref.getPref("rightSidebar.searchBox")) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [role="search"]`)?.hasClosest(`:scope > * > * > * > [role="search"]`).hide();
    }
    if (TUICPref.getPref("rightSidebar.space")) {
        document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="pill-contents-container"]`)?.closest(`[data-testid="placementTracking"]`).parentElement.hide();
    }
}

function profile() {
    if (TUICPref.getPref("profileSetting.invisible.subscribe-profile")) {
        document.querySelector(`[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]:not(.TUIC_DISPNONE)`)?.hide();
    }

    if (TUICPref.getPref("profileSetting.invisible.profileHighlights")) {
        const tabs = document.querySelectorAll(`:not(.TUIC_DISPNONE) > [role="tab"][href$="/highlights"]`);
        for (const elem of tabs) {
            elem.parentElement.hide();
        }
    }

    if (TUICPref.getPref("profileSetting.invisible.profileAffiliates")) {
        const tabs = document.querySelectorAll(`:not(.TUIC_DISPNONE) > [role="tab"][href$="/affiliates"]`);
        for (const elem of tabs) {
            elem.parentElement.hide();
        }
    }

    if (TUICPref.getPref("profileSetting.invisible.verifiedFollowerTab")) {
        const nowURL = location.pathname;
        if (nowURL.endsWith("/followers") || nowURL.endsWith("/following") || nowURL.endsWith("/followers_you_follow") || nowURL.endsWith("/verified_followers")) {
            const tab = document.querySelector(`[role="presentation"]:not(.TUIC_DISPNONE) > [role="tab"][href$="/verified_followers"]`);
            if (tab) {
                tab.parentElement.hide();
                if (nowURL.endsWith("/verified_followers")) {
                    document.querySelector<HTMLAnchorElement>(`[role="presentation"] > [role="tab"][href$="/followers"]`)?.click();
                }
            }
            document.querySelector(`nav [data-testid="ScrollSnap-prevButtonWrapper"]:not(.TUIC_DISPNONE_PARENT > *)`)?.parentElement.classList.add("TUIC_DISPNONE_PARENT");
        }
    }
}

function osusumeUser() {
    if (TUICPref.getPref("timeline.osusume-user-timeline") && location.search.indexOf("f=user") == -1 && !location.href.includes("/settings/")) {
        const cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not(.TUICDidArticle):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *)`);
        for (const elem of cells) {
            if (
                elem.querySelector(`[data-testid="UserCell"]`) != null &&
                elem.previousElementSibling != null &&
                elem.querySelector(`[aria-live="polite"]`) == null &&
                (elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) != null || elem.previousElementSibling.querySelector(`h2`) != null)
            ) {
                elem.hide();
                if (elem.previousElementSibling.querySelector(`h2`) != null) {
                    elem.previousElementSibling.hide();
                }
            }
            if (elem.querySelector(`a[href*="&f=user"],a[href^="/i/connect_people?"]`) && elem.querySelector(`[aria-live="polite"]`) == null) {
                elem.hide();
            }
        }
    }
}
