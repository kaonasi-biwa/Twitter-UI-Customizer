import { i18nAndAllContent as tweetTopButton } from "@content/modules/observer/functions/tweetSettings/tweetTopButtons.ts";
import { i18nAndAllContent as fixEngagements } from "@content/modules/observer/functions/tweetSettings/placeEngagementsLink.ts";
import { i18nAndAllContent as tweetMoreMenuContent } from "@content/modules/observer/functions/tweetSettings/tweetMoreMenuContent.ts";
import { i18nAndAllContent as dmPage } from "@content/modules/observer/functions/fixDM.ts";
import { i18nAndAllContent as initProfileTab } from "@content/modules/observer/functions/initProfileTab.ts";
import { i18nAndAllContent as sidebarMoreMenuCont } from "@content/modules/observer/functions/sidebarBtn/moreMenuContent.ts";
import { i18nAndAllContent as visibleButtons } from "@content/modules/observer/functions/tweetSettings/index.ts";
import { i18nAndAllContent as sidebarButtons } from "@content/modules/observer/functions/sidebarBtn/index.ts";

import { I18nAndAllContent } from "@shared/types.ts";
import { ColorData } from "@shared/sharedData.ts";

export const TUICData: {
    [key: string]: I18nAndAllContent;
} = {
    // 色の設定
    colors: ColorData.i18nAndAllContent,
    // ツイート関連の設定
    visibleButtons,
    "tweetDisplaySetting.linkCopyURL": {
        all: ["linkCopyURL_twitter", "linkCopyURL_X", "linkCopyURL_vxTwitter", "linkCopyURL_fxTwitter"],
        i18n: {
            linkCopyURL_twitter: "bottomTweetButtons-setting-linkCopyURL-twitter",
            linkCopyURL_X: "bottomTweetButtons-setting-linkCopyURL-X",
            linkCopyURL_vxTwitter: "bottomTweetButtons-setting-linkCopyURL-vxTwitter",
            linkCopyURL_fxTwitter: "bottomTweetButtons-setting-linkCopyURL-fxTwitter",
        },
    },
    "tweetDisplaySetting.linkShareCopyURL": {
        all: ["linkShareCopyURL_twitter", "linkShareCopyURL_X", "linkShareCopyURL_vxTwitter", "linkShareCopyURL_fxTwitter"],
        i18n: {
            linkShareCopyURL_twitter: "bottomTweetButtons-setting-linkCopyURL-twitter",
            linkShareCopyURL_X: "bottomTweetButtons-setting-linkCopyURL-X",
            linkShareCopyURL_vxTwitter: "bottomTweetButtons-setting-linkCopyURL-vxTwitter",
            linkShareCopyURL_fxTwitter: "bottomTweetButtons-setting-linkCopyURL-fxTwitter",
        },
    },
    "timeline-discoverMore": {
        all: ["discoverMore_nomal", "discoverMore_detailOpen", "discoverMore_detailClose", "discoverMore_invisible"],
        i18n: {
            discoverMore_nomal: "timeline-discoverMore-nomal",
            discoverMore_detailOpen: "timeline-discoverMore-detailOpen",
            discoverMore_detailClose: "timeline-discoverMore-detailClose",
            discoverMore_invisible: "timeline-discoverMore-invisible",
        },
    },
    fixEngagements,
    tweetTopButton,
    "tweetDisplaySetting.tweetMoreMenuItems": tweetMoreMenuContent,
    tweetDisplaySetting: {
        all: ["bottomSpace", "twitter-pro-promotion-btn", "subscribe-tweets"],
        i18n: {
            bottomSpace: "bottomTweetButtons-setting-removeSpaceBottomTweet-v2",
            "twitter-pro-promotion-btn": "invisibleItems-twitterProPromotionBtn",
            "subscribe-tweets": "invisibleItems-subscribeTweets",
        },
    },

    // Twitterアイコンの設定
    "twitterIcon.icon": {
        all: ["nomal", "invisible", "dog", "twitter", "twitterIcon-X", "custom"],
        i18n: {
            nomal: "twitterIcon-normal",
            invisible: "twitterIcon-invisible",
            dog: "twitterIcon-dog",
            twitter: "twitterIcon-twitter",
            "twitterIcon-X": "twitterIcon-X",
            custom: "twitterIcon-custom",
        },
    },
    "twitterIcon.options": {
        all: ["faviconSet", "roundIcon"],
        i18n: { faviconSet: "twitterIcon-favicon", roundIcon: "twitterIcon-roundIcon" },
    },

    // サイドバーの設定
    sidebarButtons,
    "sidebarSetting.buttonConfig": {
        all: ["smallerSidebarContent", "sidebarNoneScrollbar"],
        i18n: {
            smallerSidebarContent: "sidebarButton-setting-narrowBetweenButtons",
            sidebarNoneScrollbar: "sidebarButton-setting-sidebarNoneScrollbar",
        },
    },
    "sidebarSetting.homeIcon": {
        all: ["normal", "birdGoBack", "TUIC"],
        i18n: {
            normal: "sidebarButton-homeIcon-normal",
            birdGoBack: "sidebarButton-homeIcon-birdGoBack",
            TUIC: "sidebarButton-homeIcon-TUIC",
        },
    },
    accountSwitcher: {
        all: ["icon", "nameID", "moreMenu"],
        i18n: { icon: "sidebarButton-accountSwitcher-Icon", nameID: "sidebarButton-accountSwitcher-NameID", moreMenu: "sidebarButton-accountSwitcher-MoreMenu" },
    },
    "sidebarSetting.moreMenuItems": sidebarMoreMenuCont,

    // プロフィールの設定
    "profileSetting.tabs": {
        all: ["pinnedTab"],
        i18n: {
            pinnedTab: "profileSetting-tabs-pinnedTab",
        },
    },
    "profileSetting.profileInitialTab": initProfileTab,
    "profileSetting.invisible": {
        all: ["subscribe-profile", "profileHighlights", "profileAffiliates", "verifiedFollowerTab"],
        i18n: {
            "subscribe-profile": "invisibleItems-subscribeProfile",
            profileHighlights: "invisibleItems-profileHighlights",
            profileAffiliates: "invisibleItems-profileAffiliates",
            verifiedFollowerTab: "invisibleItems-verifiedFollowerTab",
        },
    },

    // 非表示設定
    invisibleItems: {
        all: ["config-premium", "hideBelowDM", "verifiedNotifications"],
        i18n: {
            "config-premium": "invisibleItems-configPremium",
            hideBelowDM: "invisibleItems-hideBelowDM",
            verifiedNotifications: "invisibleItems-verifiedNotifications",
        },
    },

    // タイムラインの設定
    timeline: {
        all: ["osusume-user-timeline", "hideOhterRTTL", "accountStart"],
        i18n: {
            "osusume-user-timeline": "timeline-osusumeUsersOnTL",
            hideOhterRTTL: "timeline-hideOhterRTTL",
            accountStart: "timeline-accountStart",
        },
    },

    // X → Twitterの設定
    XToTwitter: {
        all: ["XToTwitter", "PostToTweet"],
        i18n: { XToTwitter: "XtoTwitter-XtoTwitter", PostToTweet: "XtoTwitter-PostToTweet" },
    },

    // 右サイドバーの設定
    rightSidebar: {
        all: ["searchBox", "verified", "space", "relevantPeople", "trend", "osusumeUser", "links"],
        i18n: {
            verified: "rightSidebar-rightSidebarVerified",
            trend: "rightSidebar-trend",
            osusumeUser: "rightSidebar-osusumeUser",
            links: "rightSidebar-links",
            searchBox: "rightSidebar-searchBox",
            space: "rightSidebar-space",
            relevantPeople: "rightSidebar-relevantPeople",
        },
    },

    // ツイート投稿画面の設定
    composetweet: {
        all: ["hideDraft"],
        i18n: {
            hideDraft: "composetweet-hideDraft",
        },
    },

    // DMの設定
    dmPage,

    // その他の設定
    uncategorizedSettings: {
        all: ["disableBackdropFilter"],
        i18n: {
            disableBackdropFilter: "uncategorizedSettings-disableBackdropFilter",
        },
    },
};
