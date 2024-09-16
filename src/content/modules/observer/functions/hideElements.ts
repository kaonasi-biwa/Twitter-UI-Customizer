import { hideElement, showElement, hasClosest } from "@modules/utils/controlElements";
import { getPref } from "@modules/pref";

// NOTE: 条件分岐とClass付与を一行にまとめる場合は、.? をつけるのを忘れないようにしましょう
export function hideElements() {
    document.querySelectorAll('a[href$="quick_promote_web/intro"]').forEach((e) => {
        if (getPref("tweetDisplaySetting.invisible.twitter-pro-promotion-btn")) {
            hideElement(e);
        } else {
            showElement(e);
        }
    });

    rightSidebar();
    profile();
    osusumeUser();

    if (getPref("timeline.accountStart") && location.search.indexOf("f=user") === -1 && !location.href.includes("/settings/") && document.querySelector(`[href="/settings/profile"]`)) {
        const cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not([data-tuic-processed-article]):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *) [aria-live="polite"]`);
        for (const elem of cells) {
            hideElement(elem.closest(`div[data-testid="cellInnerDiv"]`));
            hideElement(elem.closest(`div[data-testid="cellInnerDiv"]`).previousElementSibling);
        }
    }

    if (getPref("tweetDisplaySetting.invisible.subscribe-tweets") && window.location.pathname.includes("/status/") && /^\d+$/.test(new URL(location.href).pathname.split("/")[3])) {
        hideElement(document.querySelector(`*:not(.TUIC_DISPNONE) > [data-testid$="-subscribe"]`)?.parentElement);
    }

    if (getPref("accountSwitcher.icon") && getPref("accountSwitcher.nameID") && getPref("accountSwitcher.moreMenu")) {
        hideElement(hasClosest(document.querySelector(`:not(TUIC_DISPNONE) > * > [data-testid="SideNav_AccountSwitcher_Button"]`), `:scope > * > [data-testid="SideNav_AccountSwitcher_Button"]`));
    }

    document.querySelectorAll('[href="/settings/monetization"], [href="/i/premium_sign_up"], [href="/settings/manage_subscriptions"]').forEach((e) => {
        if (getPref("invisibleItems.config-premium")) {
            hideElement(e);
        } else {
            showElement(e);
        }
    });

    if (getPref("invisibleItems.verifiedNotifications") && location.pathname.includes("/notifications")) {
        hideElement(document.querySelector(`[href="/notifications/verified"][role="tab"]:not(.TUIC_DISPNONE > *)`)?.parentElement);
    }
}

function rightSidebar() {
    if (getPref("rightSidebar.verified")) {
        hideElement(hasClosest(document.querySelector(`*:not(.TUIC_DISPNONE) > [role="complementary"] :is([href="/i/verified-choose"], [href="/i/premium_tier_switch"], [href="/i/premium_sign_up"])`), `[role="complementary"]`));
    }
    if (getPref("rightSidebar.trend")) {
        hideElement(hasClosest(document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="trend"]`), ":scope > * >  section"));
    }
    if (getPref("rightSidebar.osusumeUser") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"] [dir="auto"] > span:not([role="search"] *)`) == null) {
        hideElement(hasClosest(document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"]:not([role="search"] *)`), ":scope > * > aside"));
    }

    if (getPref("rightSidebar.relevantPeople") && document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"] [dir="auto"] > span`)) {
        hideElement(hasClosest(document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="UserCell"]`), `:scope > * > * > [data-testid="UserCell"]`));
    }
    if (getPref("rightSidebar.links")) {
        hideElement(document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) > nav`)?.parentElement);
    }
    if (getPref("rightSidebar.searchBox")) {
        hideElement(hasClosest(document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [role="search"]`), `:scope > * > * > * > [role="search"]`));
    }
    if (getPref("rightSidebar.space")) {
        hideElement(document.querySelector(`[data-testid="sidebarColumn"] *:not(.TUIC_DISPNONE) [data-testid="pill-contents-container"]`)?.closest(`[data-testid="placementTracking"]`).parentElement);
    }
}

function profile() {
    if (getPref("profileSetting.invisible.subscribe-profile")) {
        hideElement(document.querySelector(`[data-testid="userActions"]+[style*="border-color"][style*="rgb(201, 54, 204)"]:not(.TUIC_DISPNONE)`));
    }

    if (getPref("profileSetting.invisible.profileHighlights")) {
        const tabs = document.querySelectorAll(`:not(.TUIC_DISPNONE) > [role="tab"][href$="/highlights"]`);
        for (const elem of tabs) {
            hideElement(elem.parentElement);
        }
    }

    if (getPref("profileSetting.invisible.profileArticles")) {
        const tabs = document.querySelectorAll(`:not(.TUIC_DISPNONE) > [role="tab"][href$="/articles"]`);
        for (const elem of tabs) {
            hideElement(elem.parentElement);
        }
    }

    if (getPref("profileSetting.invisible.profileAffiliates")) {
        const tabs = document.querySelectorAll(`:not(.TUIC_DISPNONE) > [role="tab"][href$="/affiliates"]`);
        for (const elem of tabs) {
            hideElement(elem.parentElement);
        }
    }

    if (getPref("profileSetting.invisible.profilePagePremium")) {
        const tabs = document.querySelectorAll(`[data-testid="primaryColumn"] :not(.TUIC_DISPNONE) > * [role="link"][href="/i/premium_sign_up"]`);
        for (const elem of tabs) {
            hideElement(elem.parentElement.parentElement);
        }
    }

    if (getPref("profileSetting.invisible.verifiedFollowerTab")) {
        const nowURL = location.pathname;
        if (nowURL.endsWith("/followers") || nowURL.endsWith("/following") || nowURL.endsWith("/followers_you_follow") || nowURL.endsWith("/verified_followers")) {
            const tab = document.querySelector(`[role="presentation"]:not(.TUIC_DISPNONE) > [role="tab"][href$="/verified_followers"]`);
            if (tab) {
                hideElement(tab.parentElement);
                if (nowURL.endsWith("/verified_followers")) {
                    document.querySelector<HTMLAnchorElement>(`[role="presentation"] > [role="tab"][href$="/followers"]`)?.click();
                }
            }
            document.querySelector(`nav [data-testid="ScrollSnap-prevButtonWrapper"]:not(.TUIC_DISPNONE_PARENT > *)`)?.parentElement.classList.add("TUIC_DISPNONE_PARENT");
        }
    }
    if (getPref("profileSetting.invisible.followersYouFollowTab")) {
        const nowURL = location.pathname;
        if (nowURL.endsWith("/followers") || nowURL.endsWith("/following") || nowURL.endsWith("/followers_you_follow") || nowURL.endsWith("/verified_followers")) {
            const tab = document.querySelector(`[role="presentation"]:not(.TUIC_DISPNONE) > [role="tab"][href$="/followers_you_follow"]`);
            if (tab) {
                hideElement(tab.parentElement);
                if (nowURL.endsWith("/followers_you_follow")) {
                    document.querySelector<HTMLAnchorElement>(`[role="presentation"] > [role="tab"][href$="/followers"]`)?.click();
                }
            }
            document.querySelector(`nav [data-testid="ScrollSnap-prevButtonWrapper"]:not(.TUIC_DISPNONE_PARENT > *)`)?.parentElement.classList.add("TUIC_DISPNONE_PARENT");
        }
    }
}

function osusumeUser() {
    if (getPref("timeline.osusume-user-timeline") && location.search.indexOf("f=user") == -1 && !location.href.includes("/settings/")) {
        const cells = document.querySelectorAll(`div[data-testid="cellInnerDiv"]:not([data-tuic-processed-article]):not([aria-labelledby="modal-header"] *):not([data-testid="primaryColumn"] > div > section *):not([data-testid="DMDrawer"] *):not([aria-live="polite"]+div *)`);
        for (const elem of cells) {
            if (
                elem.querySelector(`[data-testid="UserCell"]`) != null
                && elem.previousElementSibling != null
                && elem.querySelector(`[aria-live="polite"]`) == null
                && (elem.previousElementSibling.querySelector(`[data-testid="UserCell"]`) != null || elem.previousElementSibling.querySelector(`h2`) != null)
            ) {
                hideElement(elem);
                if (elem.previousElementSibling.querySelector(`h2`) != null) {
                    hideElement(elem.previousElementSibling);
                }
            }
            if (elem.querySelector(`a[href*="&f=user"],a[href^="/i/connect_people?"]`) && elem.querySelector(`[aria-live="polite"]`) == null) {
                hideElement(elem);
            }
        }
    }
}
