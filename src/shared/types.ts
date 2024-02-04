interface I18n {
    [key: string]: string;
}

export interface I18nAndAllContent {
    all: Array<string>;
    i18n: I18n;
    [key: string]: unknown;
}
