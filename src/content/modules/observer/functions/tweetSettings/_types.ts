interface ArticleInfomation {
    elements: { buttonBarBase: HTMLDivElement; articleBase: Element; statusButton: HTMLAnchorElement };
    option: {
        isLockedAccount: boolean;
        cannotRT: boolean;
        cannotShare: boolean;
        isMe: boolean;
        isBigArticle: boolean;
    };
}
