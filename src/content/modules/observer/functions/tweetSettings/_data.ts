export const TweetUnderButtonsData = {
    copyURL: {
        linkCopyURL_twitter: "twitter.com",
        linkCopyURL_X: "x.com",
        linkCopyURL_vxTwitter: "vxtwitter.com",
        linkCopyURL_fxTwitter: "fxtwitter.com",
    },
};

export const ButtonUnderTweetSelectors = {
    "reply-button": '[data-testid$="reply"]:not([data-testid*="UserAvatar-Container-"])',
    "retweet-button": '[data-testid$="retweet"]:not([data-testid*="UserAvatar-Container-"])',
    "like-button": '[data-testid$="like"]:not([data-testid*="UserAvatar-Container-"])',
    "share-button": '[aria-haspopup="menu"]:not([data-testid="retweet"]):not([data-testid="unretweet"])',
    tweet_analytics: '[href$="/analytics"],[d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"]',
    boolkmark: `[data-TUICButton="bookmark"],[data-testid="bookmark"]:not([data-testid*="UserAvatar-Container-"]),[data-testid="removeBookmark"]:not([data-testid*="UserAvatar-Container-"])`,
    "url-copy": `[data-TUICButton="url-copy"]`,
    userBlock: `[data-TUICButton="userBlock"]`,
    userMute: `[data-TUICButton="userMute"]`,
    quoteTweet: `[data-TUICButton="quoteTweet"]`,
    deleteButton: `[data-TUICButton="deleteButton"]`,
    sendDM: `[data-TUICButton="sendDM"]`,
    likeAndRT: `[data-TUICButton="likeAndRT"]`,
};
