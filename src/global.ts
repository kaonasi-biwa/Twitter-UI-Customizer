type I18n = Record<string, string>;

interface I18nAndAllContent {
    all: string[];
    i18n: I18n;
    [key: string]: unknown;
}

interface ArticleInfomation {
    elements: { buttonBarBase: HTMLDivElement; articleBase: HTMLElement; statusButton: HTMLAnchorElement };
    option: {
        isLockedAccount: boolean;
        cannotRT: boolean;
        cannotShare: boolean;
        isMe: boolean;
        isBigArticle: boolean;
    };
}
