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
    "share-button": '[aria-haspopup="menu"]:not([data-testid="retweet"]):not([data-testid="unretweet"]) [d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"]',
    tweet_analytics: '[href$="/analytics"],[d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"]',
    boolkmark: `[data-TUICButton="bookmark"],[data-testid="bookmark"]:not([data-testid*="UserAvatar-Container-"]),[data-testid="removeBookmark"]:not([data-testid*="UserAvatar-Container-"])`,
    "url-copy": `[data-TUICButton="url-copy"]`,
    userBlock: `[data-TUICButton="userBlock"]`,
    userMute: `[data-TUICButton="userMute"]`,
    quoteTweet: `[data-TUICButton="quoteTweet"]`,
    deleteButton: `[data-TUICButton="deleteButton"]`,
    sendDM: `[data-TUICButton="sendDM"]`,
    likeAndRT: `[data-TUICButton="likeAndRT"]`,
    grok: `[d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"]`,
};
