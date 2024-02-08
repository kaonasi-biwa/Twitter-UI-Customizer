interface ArticleInfomation {
    elements: { buttonBarBase: Element; articleBase: Element; statusButton: HTMLAnchorElement };
    option: {
        isLockedAccount: boolean;
        cannotRT: boolean;
        cannotShare: boolean;
        isMe: boolean;
        isBigArticle: boolean;
    };
}
