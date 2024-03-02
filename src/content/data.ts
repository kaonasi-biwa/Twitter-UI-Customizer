import { ColorData } from "@shared/sharedData.ts";

export const TUICData: {
    [key: string]: I18nAndAllContent;
} = {
    // 色の設定
    colors: ColorData.i18nAndAllContent,
    // ツイート関連の設定
    visibleButtons: {
        all: ["reply-button", "retweet-button", "quoteTweet", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy", "userBlock", "userMute", "deleteButton", "sendDM", "likeAndRT"],
        i18n: {
            "reply-button": "bottomTweetButtons-reply",
            "retweet-button": "bottomTweetButtons-retweet",
            "like-button": "bottomTweetButtons-like",
            "share-button": "bottomTweetButtons-share",
            tweet_analytics: "bottomTweetButtons-tweetAnalytics",
            boolkmark: "bottomTweetButtons-bookmark",
            "url-copy": "bottomTweetButtons-urlCopy",
            userBlock: "bottomTweetButtons-userBlock",
            userMute: "bottomTweetButtons-userMute",
            quoteTweet: "bottomTweetButtons-quoteTweet",
            deleteButton: "bottomTweetButtons-deleteButton",
            sendDM: "bottomTweetButtons-sendDM",
            likeAndRT: "bottomTweetButtons-likeAndRT",
        },
    },
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
    fixEngagements: {
        all: ["likes", "retweets", "quotes"],
        i18n: {
            likes: "bottomTweetButtons-setting-placeEngagementsLink-likes-short",
            retweets: "bottomTweetButtons-setting-placeEngagementsLink-retweets-short",
            quotes: "bottomTweetButtons-setting-placeEngagementsLink-quotes-short",
        },
    },
    tweetTopButton: {
        all: ["moreMenu", "block", "mute", "delete"],
        i18n: {
            moreMenu: "sidebarButtons-moremenu",
            block: "bottomTweetButtons-userBlock",
            mute: "bottomTweetButtons-userMute",
            delete: "bottomTweetButtons-deleteButton",
        },
    },
    "tweetDisplaySetting.tweetMoreMenuItems": {
        all: ["notHelpful", "notInterested", "follow", "deleteTweet", "highlighOnPin", "highlightUpsell", "addMemberOfList", "userMute", "muteTalk", "leaveTalk", "block", "whoCanReply", "engagements", "analytics", "embed", "report", "hiddenReply", "editWithTwitterBlue"],
        i18n: {
            notHelpful: "tweetMoreMenuItems-notHelpful",
            hiddenReply: "tweetMoreMenuItems-hiddenReply",
            notInterested: "tweetMoreMenuItems-notInterested",
            follow: "tweetMoreMenuItems-follow",
            deleteTweet: "bottomTweetButtons-deleteButton",
            highlighOnPin: "tweetMoreMenuItems-highlighOnPin",
            highlightUpsell: "tweetMoreMenuItems-highlightUpsell",
            addMemberOfList: "tweetMoreMenuItems-addMemberOfList",
            userMute: "bottomTweetButtons-userMute",
            muteTalk: "tweetMoreMenuItems-muteTalk",
            leaveTalk: "tweetMoreMenuItems-leaveTalk",
            block: "bottomTweetButtons-userBlock",
            whoCanReply: "tweetMoreMenuItems-whoCanReply",
            engagements: "tweetMoreMenuItems-engagements",
            analytics: "bottomTweetButtons-tweetAnalytics",
            embed: "XtoTwitter-PostToTweet-menu-embed",
            report: "XtoTwitter-PostToTweet-reportTweet",
            editWithTwitterBlue: "tweetMoreMenuItems-editWithTwitterBlue",
        },
    },
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
    sidebarButtons: {
        all: ["home", "explore", "communities", "notifications", "messages", "bookmarks", "profile", "moremenu", "topics", "lists", "drafts", "connect", "communitynotes", "verified-choose", "display", "muteAndBlock", "premiumTierSwitch", "settings"],
        i18n: {
            home: "sidebarButtons-home",
            explore: "sidebarButtons-explore",
            communities: "sidebarButtons-communities",
            notifications: "sidebarButtons-notifications",
            messages: "sidebarButtons-messages",
            bookmarks: "sidebarButtons-bookmarks",
            profile: "sidebarButtons-profile",
            moremenu: "sidebarButtons-moremenu",
            topics: "sidebarButtons-topics",
            lists: "sidebarButtons-lists",
            drafts: "sidebarButtons-drafts",
            connect: "sidebarButtons-connect",
            communitynotes: "sidebarButtons-communitynotes",
            "verified-choose": "sidebarButtons-verified-choose",
            display: "sidebarButtons-display",
            muteAndBlock: "sidebarButtons-muteAndBlock",
            premiumTierSwitch: "sidebarButtons-premiumTierSwitch",
            settings: "sidebarButtons-settings",
        },
    },
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
    "sidebarSetting.moreMenuItems": {
        all: ["premium", "bookmarks", "communities", "monetization", "pro", "ads", "settings", "separator"],
        i18n: {
            bookmarks: "sidebarButtons-bookmarks",
            monetization: "sidebarButton-moreMenuItems-monetization",
            separator: "sidebarButton-moreMenuItems-separator",
            creatorStudio: "sidebarButton-moreMenuItems-creatorStudio",
            professionalTool: "sidebarButton-moreMenuItems-professionalTool",
            settingsAndSupport: "sidebarButton-moreMenuItems-settingsAndSupport",
            communities: "sidebarButtons-communities",
            settings: "sidebarButton-moreMenuItems-settings",
            pro: "sidebarButton-moreMenuItems-pro",
            ads: "sidebarButton-moreMenuItems-ads",
            premium: "sidebarButton-moreMenuItems-premium",
        },
    },

    // プロフィールの設定
    "profileSetting.tabs": {
        all: ["pinnedTab"],
        i18n: {
            pinnedTab: "profileSetting-tabs-pinnedTab",
        },
    },
    "profileSetting.profileInitialTab": {
        all: ["tweets", "replies", "media", "likes"],
        i18n: {
            tweets: "profileSetting-profileInitialTab-tweet",
            replies: "profileSetting-profileInitialTab-reply",
            media: "profileSetting-profileInitialTab-media",
            likes: "profileSetting-profileInitialTab-likes",
        },
    },
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
        all: ["osusume-user-timeline", "hideOhterRTTL", "hideReply", "accountStart"],
        i18n: {
            "osusume-user-timeline": "timeline-osusumeUsersOnTL",
            hideOhterRTTL: "timeline-hideOhterRTTL",
            hideReply: "timeline-hideReply",
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
    dmPage: {
        all: ["showIcon"],
        i18n: {
            showIcon: "dmPage-showIcon",
        },
    },

    // その他の設定
    uncategorizedSettings: {
        all: ["disableBackdropFilter"],
        i18n: {
            disableBackdropFilter: "uncategorizedSettings-disableBackdropFilter",
        },
    },
};
