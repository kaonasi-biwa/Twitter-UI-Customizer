interface I18n {
    [key: string]: string;
}

interface I18nAndAllContent {
    all: Array<string>;
    i18n: I18n;
    [key: string]: unknown;
}

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
