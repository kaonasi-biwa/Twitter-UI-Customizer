export interface ArticleInfomation {
    elements: { buttonBarBase: Element; articleBase: Element; statusButton: Element };
    option: {
        isLockedAccount: boolean;
        cannotRT: boolean;
        cannotShare: boolean;
        isMe: boolean;
        isBigArticle: boolean;
    };
}
