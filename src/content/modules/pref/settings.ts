// Objectの中身はこれに従ってください
type TUICSetting =
    /* eslint-disable style/indent, style/indent-binary-ops, style/no-multi-spaces */
    | { type: "order"; default: string[]; values: { id: string; i18n: string }[] } // 並び替え
    | { type: "select"; default: string; values: { id: string; i18n: string }[] } //ラジオボタンなどの一つのみ設定するやつ
    | { type: "boolean"; values: { id: string; i18n: string; default: boolean }[] }; //チェックボックスなどの一つ一つがboolean型の設定になるもの
/* eslint-enable style/indent, style/indent-binary-ops, style/no-multi-spaces */
export const TUICSettings = {
    // ツイート関連の設定
    visibleButtons: {
        type: "order",
        default: ["reply-button", "retweet-button", "like-button", "share-button", "tweet_analytics", "boolkmark", "url-copy"],
        values: [
            { id: "reply-button", i18n: "bottomTweetButtons-reply" },
            { id: "retweet-button", i18n: "bottomTweetButtons-retweet" },
            { id: "quoteTweet", i18n: "bottomTweetButtons-quoteTweet" },
            { id: "like-button", i18n: "bottomTweetButtons-like" },
            { id: "share-button", i18n: "bottomTweetButtons-share" },
            { id: "tweet_analytics", i18n: "bottomTweetButtons-tweetAnalytics" },
            { id: "boolkmark", i18n: "bottomTweetButtons-bookmark" },
            { id: "url-copy", i18n: "bottomTweetButtons-urlCopy" },
            { id: "userBlock", i18n: "bottomTweetButtons-userBlock" },
            { id: "userMute", i18n: "bottomTweetButtons-userMute" },
            { id: "deleteButton", i18n: "bottomTweetButtons-deleteButton" },
            { id: "sendDM", i18n: "bottomTweetButtons-sendDM" },
            { id: "likeAndRT", i18n: "bottomTweetButtons-likeAndRT" },
        ],
    },
    "tweetDisplaySetting.option": {
        type: "boolean",
        values: [
            { id: "likeToFavo", i18n: "bottomTweetButtons-setting-likeToFavo", default: false },
            { id: "bottomScroll", i18n: "bottomTweetButtons-setting-visibleScrollBar", default: false },
        ],
    },
    "tweetDisplaySetting.buttonsInvisible": {
        type: "boolean",
        values: [
            { id: "RTNotQuote", i18n: "bottomTweetButtons-setting-RTNotQuote", default: false },
            { id: "noModalbottomTweetButtons", i18n: "bottomTweetButtons-setting-noModal", default: false },
            { id: "noNumberBottomTweetButtons", i18n: "bottomTweetButtons-setting-noNumber", default: false },
        ],
    },
    "tweetDisplaySetting.linkCopyURL": {
        type: "select",
        default: "linkCopyURL_twitter",
        values: [
            { id: "linkCopyURL_twitter", i18n: "bottomTweetButtons-setting-linkCopyURL-twitter" },
            { id: "linkCopyURL_X", i18n: "bottomTweetButtons-setting-linkCopyURL-X" },
            { id: "linkCopyURL_vxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-vxTwitter" },
            { id: "linkCopyURL_fxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-fxTwitter" },
        ],
    },
    "tweetDisplaySetting.linkShareCopyURL": {
        type: "select",
        default: "linkShareCopyURL_twitter",
        values: [
            { id: "linkShareCopyURL_twitter", i18n: "bottomTweetButtons-setting-linkCopyURL-twitter" },
            { id: "linkShareCopyURL_X", i18n: "bottomTweetButtons-setting-linkCopyURL-X" },
            { id: "linkShareCopyURL_vxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-vxTwitter" },
            { id: "linkShareCopyURL_fxTwitter", i18n: "bottomTweetButtons-setting-linkCopyURL-fxTwitter" },
        ],
    },
    "timeline-discoverMore": {
        type: "select",
        default: "discoverMore_nomal",
        values: [
            { id: "discoverMore_nomal", i18n: "timeline-discoverMore-nomal" },
            { id: "discoverMore_detailOpen", i18n: "timeline-discoverMore-detailOpen" },
            { id: "discoverMore_detailClose", i18n: "timeline-discoverMore-detailClose" },
            { id: "discoverMore_invisible", i18n: "timeline-discoverMore-invisible" },
        ],
    },
    fixEngagements: {
        type: "order",
        default: ["likes", "retweets", "quotes"],
        values: [
            { id: "likes", i18n: "bottomTweetButtons-setting-placeEngagementsLink-likes-short" },
            { id: "retweets", i18n: "bottomTweetButtons-setting-placeEngagementsLink-retweets-short" },
            { id: "quotes", i18n: "bottomTweetButtons-setting-placeEngagementsLink-quotes-short" },
        ],
    },
    "engagementsLink.option": {
        type: "boolean",
        values: [
            { id: "placeEngagementsLink", i18n: "bottomTweetButtons-setting-placeEngagementsLink", default: false },
            { id: "placeEngagementsLinkShort", i18n: "fixEngagements-shortName", default: false },
        ],
    },
    showLinkCardInfo: {
        type: "boolean",
        values: [{ id: "showLinkCardInfo", i18n: "bottomTweetButtons-setting-showLinkCardInfo", default: false }],
    },
    tweetTopButton: {
        type: "order",
        default: ["moreMenu"],
        values: [
            { id: "moreMenu", i18n: "sidebarButtons-moremenu" },
            { id: "block", i18n: "bottomTweetButtons-userBlock" },
            { id: "mute", i18n: "bottomTweetButtons-userMute" },
            { id: "delete", i18n: "bottomTweetButtons-deleteButton" },
            { id: "list", i18n: "tweetMoreMenuItems-addMemberOfList" },
            { id: "report", i18n: "XtoTwitter-PostToTweet-reportTweet" },
            { id: "notInterested", i18n: "tweetMoreMenuItems-notInterested" },
        ],
    },
    tweetTopButtonBool: {
        type: "boolean",
        values: [{ id: "noModalbottomTweetButtons", i18n: "bottomTweetButtons-setting-noModal", default: false }],
    },
    "tweetDisplaySetting.tweetMoreMenuItems": {
        type: "boolean",
        values: [
            { id: "notHelpful", i18n: "tweetMoreMenuItems-notHelpful", default: false },
            { id: "notInterested", i18n: "tweetMoreMenuItems-notInterested", default: false },
            { id: "follow", i18n: "tweetMoreMenuItems-follow", default: false },
            { id: "deleteTweet", i18n: "bottomTweetButtons-deleteButton", default: false },
            { id: "highlighOnPin", i18n: "tweetMoreMenuItems-highlighOnPin", default: false },
            { id: "highlightUpsell", i18n: "tweetMoreMenuItems-highlightUpsell", default: false },
            { id: "addMemberOfList", i18n: "tweetMoreMenuItems-addMemberOfList", default: false },
            { id: "userMute", i18n: "bottomTweetButtons-userMute", default: false },
            { id: "muteTalk", i18n: "tweetMoreMenuItems-muteTalk", default: false },
            { id: "leaveTalk", i18n: "tweetMoreMenuItems-leaveTalk", default: false },
            { id: "block", i18n: "bottomTweetButtons-userBlock", default: false },
            { id: "whoCanReply", i18n: "tweetMoreMenuItems-whoCanReply", default: false },
            { id: "engagements", i18n: "tweetMoreMenuItems-engagements", default: false },
            { id: "analytics", i18n: "bottomTweetButtons-tweetAnalytics", default: false },
            { id: "embed", i18n: "XtoTwitter-PostToTweet-menu-embed", default: false },
            { id: "report", i18n: "XtoTwitter-PostToTweet-reportTweet", default: false },
            { id: "hiddenReply", i18n: "tweetMoreMenuItems-hiddenReply", default: false },
            { id: "requestCommunityNote", i18n: "tweetMoreMenuItems-requestCommunityNote", default: false },
            //{ id: "editWithTwitterBlue", i18n: "tweetMoreMenuItems-editWithTwitterBlue", default: false },
        ],
    },
    "tweetDisplaySetting.invisible": {
        type: "boolean",
        values: [
            { id: "bottomSpace", i18n: "bottomTweetButtons-setting-removeSpaceBottomTweet-v2", default: false },
            { id: "twitter-pro-promotion-btn", i18n: "invisibleItems-twitterProPromotionBtn", default: false },
            { id: "subscribe-tweets", i18n: "invisibleItems-subscribeTweets", default: false },
        ],
    },

    // Twitterアイコンの設定
    "twitterIcon.icon": {
        type: "select",
        default: "nomal",
        values: [
            { id: "nomal", i18n: "twitterIcon-normal" },
            { id: "invisible", i18n: "twitterIcon-invisible" },
            { id: "dog", i18n: "twitterIcon-dog" },
            { id: "twitter", i18n: "twitterIcon-twitter" },
            { id: "twitterIcon-X", i18n: "twitterIcon-X" },
            { id: "custom", i18n: "twitterIcon-custom" },
        ],
    },
    "twitterIcon.options": {
        type: "boolean",
        values: [
            { id: "faviconSet", i18n: "twitterIcon-favicon", default: false },
            { id: "roundIcon", i18n: "twitterIcon-roundIcon", default: true },
        ],
    },

    // サイドバーの設定
    sidebarButtons: {
        type: "order",
        default: ["home", "explore", "communities", "notifications", "messages", "lists", "bookmarks", "profile", "moremenu"],
        values: [
            { id: "home", i18n: "sidebarButtons-home" },
            { id: "explore", i18n: "sidebarButtons-explore" },
            { id: "communities", i18n: "sidebarButtons-communities" },
            { id: "notifications", i18n: "sidebarButtons-notifications" },
            { id: "messages", i18n: "sidebarButtons-messages" },
            { id: "bookmarks", i18n: "sidebarButtons-bookmarks" },
            { id: "profile", i18n: "sidebarButtons-profile" },
            { id: "moremenu", i18n: "sidebarButtons-moremenu" },
            { id: "topics", i18n: "sidebarButtons-topics" },
            { id: "lists", i18n: "sidebarButtons-lists" },
            { id: "drafts", i18n: "sidebarButtons-drafts" },
            { id: "connect", i18n: "sidebarButtons-connect" },
            { id: "communitynotes", i18n: "sidebarButtons-communitynotes" },
            { id: "verified-choose", i18n: "sidebarButtons-verified-choose" },
            { id: "display", i18n: "sidebarButtons-display" },
            { id: "muteAndBlock", i18n: "sidebarButtons-muteAndBlock" },
            { id: "premiumTierSwitch", i18n: "sidebarButtons-premiumTierSwitch" },
            { id: "settings", i18n: "sidebarButtons-settings" },
            { id: "spaces", i18n: "sidebarButton-moreMenuItems-spaces" },
            { id: "jobs", i18n: "sidebarButton-moreMenuItems-jobs" },
            { id: "grok", i18n: "sidebarButtons-grok", default: false },
        ],
    },
    "sidebarSetting.buttonConfig": {
        type: "boolean",
        values: [
            { id: "smallerSidebarContent", i18n: "sidebarButton-setting-narrowBetweenButtons", default: true },
            { id: "sidebarNoneScrollbar", i18n: "sidebarButton-setting-sidebarNoneScrollbar", default: false },
        ],
    },
    "sidebarSetting.homeIcon": {
        type: "select",
        default: "normal",
        values: [
            { id: "normal", i18n: "sidebarButton-homeIcon-normal" },
            { id: "birdGoBack", i18n: "sidebarButton-homeIcon-birdGoBack" },
            { id: "TUIC", i18n: "sidebarButton-homeIcon-TUIC" },
        ],
    },
    accountSwitcher: {
        type: "boolean",
        values: [
            { id: "icon", i18n: "sidebarButton-accountSwitcher-Icon", default: false },
            { id: "nameID", i18n: "sidebarButton-accountSwitcher-NameID", default: false },
            { id: "moreMenu", i18n: "sidebarButton-accountSwitcher-MoreMenu", default: false },
        ],
    },
    "sidebarSetting.moreMenuItems": {
        type: "boolean",
        values: [
            { id: "premium", i18n: "sidebarButton-moreMenuItems-premium", default: false },
            { id: "bookmarks", i18n: "sidebarButtons-bookmarks", default: false },
            { id: "communities", i18n: "sidebarButtons-communities", default: false },
            { id: "monetization", i18n: "sidebarButton-moreMenuItems-monetization", default: false },
            //{ id: "pro", i18n: "sidebarButton-moreMenuItems-pro", default: false },
            { id: "verifiedOrgsSignup", i18n: "sidebarButton-moreMenuItems-verifiedOrgsSignup", default: false },
            { id: "ads", i18n: "sidebarButton-moreMenuItems-ads", default: false },
            { id: "jobs", i18n: "sidebarButton-moreMenuItems-jobs", default: false },
            { id: "spaces", i18n: "sidebarButton-moreMenuItems-spaces", default: false },
            { id: "settings", i18n: "sidebarButton-moreMenuItems-settings", default: false },
            //{ id: "separator", i18n: "sidebarButton-moreMenuItems-separator", default: false },
            { id: "followerRequests", i18n: "sidebarButton-moreMenuItems-followerRequests", default: false },
        ],
    },

    // プロフィールの設定
    "profileSetting.tabs": { type: "boolean", values: [{ id: "pinnedTab", i18n: "profileSetting-tabs-pinnedTab", default: false }] },
    "profileSetting.profileInitialTab": {
        type: "select",
        default: "tweets",
        values: [
            { id: "tweets", i18n: "profileSetting-profileInitialTab-tweet" },
            { id: "replies", i18n: "profileSetting-profileInitialTab-reply" },
            { id: "media", i18n: "profileSetting-profileInitialTab-media" },
            { id: "likes", i18n: "profileSetting-profileInitialTab-likes" },
        ],
    },
    "profileSetting.invisible": {
        type: "boolean",
        values: [
            { id: "subscribe-profile", i18n: "invisibleItems-subscribeProfile", default: false },
            { id: "profileHighlights", i18n: "invisibleItems-profileHighlights", default: false },
            { id: "profileArticles", i18n: "invisibleItems-profileArticles", default: false },
            { id: "profileAffiliates", i18n: "invisibleItems-profileAffiliates", default: false },
            { id: "verifiedFollowerTab", i18n: "invisibleItems-verifiedFollowerTab", default: false },
            { id: "followersYouFollowTab", i18n: "invisibleItems-followersYouFollowTab", default: false },
            { id: "profilePagePremium", i18n: "invisibleItems-profilePagePremium", default: false },
        ],
    },
    "profileSetting.followersListButtons": {
        type: "order",
        default: ["followButton", "moremenuButton"],
        values: [
            { id: "followButton", i18n: "profileSetting-followersListButtons-followButton" },
            { id: "moremenuButton", i18n: "sidebarButtons-moremenu" },
            { id: "blockButton", i18n: "bottomTweetButtons-userBlock" },
            { id: "muteButton", i18n: "bottomTweetButtons-userMute" },
            { id: "reportButton", i18n: "profileSetting-followersListButtons-reportButton" },
            { id: "removeFollowerButton", i18n: "profileSetting-followersListButtons-removeFollowerButton" },
        ],
    },

    "profileSetting.followersListButtonsOptions": {
        type: "boolean",
        values: [{ id: "noModalbottomTweetButtons", i18n: "bottomTweetButtons-setting-noModal", default: false }],
    },

    // 非表示設定
    invisibleItems: {
        type: "boolean",
        values: [
            { id: "config-premium", i18n: "invisibleItems-configPremium", default: false },
            { id: "hideBelowDM", i18n: "invisibleItems-hideBelowDM", default: false },
            { id: "verifiedNotifications", i18n: "invisibleItems-verifiedNotifications", default: false },
        ],
    },

    // タイムラインの設定
    timeline: {
        type: "boolean",
        values: [
            { id: "osusume-user-timeline", i18n: "timeline-osusumeUsersOnTL", default: false },
            { id: "hideOhterRTTL", i18n: "timeline-hideOhterRTTL", default: false },
            { id: "hideReply", i18n: "timeline-hideReply", default: false },
            { id: "hideLockedTweet", i18n: "timeline-hideLockedTweet", default: false },
            { id: "accountStart", i18n: "timeline-accountStart", default: false },
        ],
    },

    // X → Twitterの設定
    XToTwitter: {
        type: "boolean",
        values: [
            { id: "XToTwitter", i18n: "XtoTwitter-XtoTwitter", default: false },
            { id: "PostToTweet", i18n: "XtoTwitter-PostToTweet", default: false },
        ],
    },

    // 右サイドバーの設定
    rightSidebar: {
        type: "boolean",
        values: [
            { id: "searchBox", i18n: "rightSidebar-searchBox", default: false },
            { id: "verified", i18n: "rightSidebar-rightSidebarVerified", default: false },
            { id: "space", i18n: "rightSidebar-space", default: false },
            { id: "relevantPeople", i18n: "rightSidebar-relevantPeople", default: false },
            { id: "trend", i18n: "rightSidebar-trend", default: false },
            { id: "osusumeUser", i18n: "rightSidebar-osusumeUser", default: false },
            { id: "links", i18n: "rightSidebar-links", default: false },
        ],
    },

    // ツイート投稿画面の設定
    composetweet: { type: "boolean", values: [{ id: "hideDraft", i18n: "composetweet-hideDraft", default: false }] },

    // DMの設定
    dmPage: { type: "boolean", values: [{ id: "showIcon", i18n: "dmPage-showIcon", default: false }] },

    // その他の設定
    uncategorizedSettings: { type: "boolean", values: [{ id: "disableBackdropFilter", i18n: "uncategorizedSettings-disableBackdropFilter", default: false }] },

    // その他の設定
    performanceSettings: { type: "boolean", values: [{ id: "removeDeletedTweets", i18n: "performanceSettings-removeDeletedTweets", default: true }] },

    // インポート・エクスポートのオプション
    inportExportOptions: { type: "boolean", values: [{ id: "includingCustomCSS", i18n: "inportExportOptions.includingCustomCSS", default: false }] },
} as const;
