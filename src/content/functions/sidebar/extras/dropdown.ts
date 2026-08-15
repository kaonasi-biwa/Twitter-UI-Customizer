import { hideElement, waitForElement } from "@content/utils/element";
import { fontSizeClass } from "@content/utils/fontSize";
import { getPref, getSettingIDs } from "@content/settings";
import { SidebarHistory } from "../constants";

const _data = {
    all: getSettingIDs("sidebarSetting.moreMenuItems"),
    selectors: {
        lists: `[href$="/lists"]`,
        [SidebarHistory.legacyId]: SidebarHistory.link,
        monetization: `:is([href="/settings/monetization"],[href="/i/monetization"])`,
        separator: `[role="separator"]`,
        creatorStudio: `:is([aria-controls$="_0_content"], [href="/i/jf/creators/studio"])`,
        professionalTool: `[aria-controls$="_1_content"]`,
        settingsAndSupport: `[aria-controls$="_2_content"][data-testid="settingsAndSupport"]`,
        communities: `[href$="/communities"]`,
        communitynotes: `[href="/i/communitynotes"]`,
        settings: `[href="/settings"]`,
        pro: `[href="https://tweetdeck.twitter.com"]`,
        ads: `:is([href*="ads.twitter.com"],[href*="ads.x.com"])`,
        premium: `:is([href="/i/verified-choose"],[href="/i/premium_sign_up"])`,
        jobs: `[href="/jobs"]`,
        spaces: `[href="/i/spaces/start"]`,
        followerRequests: `[href="/follower_requests"]`,
        verifiedOrgsSignup: `[href="/i/verified-orgs-signup"]`,
        chat: `[href="/i/chat"]`,
    },
    type: {
        bookmarks: "menuitem",
        monetization: "menuitem",
        separator: "separator",
        creatorStudio: "menuitem",
        professionalTool: "menu",
        settingsAndSupport: "menu",
        communities: "menuitem",
        settings: "menuitem",
        pro: "menuitem",
        ads: "menuitem",
        premium: "menuitem",
        jobs: "menuitem",
        spaces: "menuitem",
        followerRequests: "menuitem",
        verifiedOrgsSignup: "menuitem",
        chat: "menuitem",
    },
};

/** サイドバーのドロップダウン中から、不要な要素を隠します。 */
export async function processDropdown() {
    const dropdownElement = (await waitForElement<HTMLDivElement>(`[role="menu"]:has([data-testid="Dropdown"])`))[0];

    // NOTE: ドロップダウンメニューの位置を下げるため、現在の位置を取得しておく
    let dropdownY = parseFloat(dropdownElement.style.top);
    const listItemHeights = {
        menu: fontSizeClass(46, 49, 52, 58, 62),
        menuitem: fontSizeClass(50, 53, 56, 62, 67),
        separator: 5,
    };

    // NOTE: すべてのアイテムに対し、隠す処理を行う
    for (const pref of _data.all) {
        if (!getPref(`sidebarSetting.moreMenuItems.${pref}`)) continue;

        const listItemElement = dropdownElement.querySelector(_data.selectors[pref])?.parentElement ?? null;
        if (listItemElement) {
            hideElement(listItemElement);

            // NOTE: ドロップダウンメニューの位置を下げる
            dropdownY += listItemHeights[_data.type[pref]];
        }
    }

    dropdownElement.style.top = dropdownY + "px";
}
