import { TUICLibrary } from "@content/library";
import { TUICPref } from "@content/modules";
import { tweetMoreMenuContent } from "./tweetMoreMenuContent";
import { I18nAndAllContent } from "@shared/types";

export const i18nAndAllContent: I18nAndAllContent = {
    all: ["moreMenu", "block", "mute", "delete"],
    i18n: {
        moreMenu: "sidebarButtons-moremenu",
        block: "bottomTweetButtons-userBlock",
        mute: "bottomTweetButtons-userMute",
        delete: "bottomTweetButtons-deleteButton",
    },
};

const _data = {
    ...i18nAndAllContent,
    selector: {
        moreMenu: `[data-testid="caret"]`,
        block: `[TUICTweetTopButton="block"]`,
        mute: `[TUICTweetTopButton="mute"]`,
        delete: `[TUICTweetTopButton="delete"]`,
    },
    buttonElement: {
        _base: function (type, svg, disable = false, redButton = false) {
            return `
<div role="button" tabindex="${disable ? -1 : 0}" class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr${disable ? "" : " r-1loqt21"} r-1ny4l3l TUICTweetTopButton TUICOriginalContent ${disable ? "r-icoktb" : "css-18t94o4"}" TUICTweetTopButton="${type}">
<div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-37j5jr ${TUICLibrary.fontSizeClass("r-1b43r93", "r-1b43r93", "r-a023e6", "r-1inkyih", "r-1i10wst")} r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q" style="text-overflow: unset; color: rgb(139, 152, 165);">
    <div class="css-175oi2r r-xoduu5">
        <div class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l TUIC_ButtonHover"></div>
        <svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi ${TUICLibrary.backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")} ${redButton ? "TUIC_DeleteButton" : ""}">
            <g>
                ${svg}
            </g>
        </svg>
    </div>
</div>
</div>
            `;
        },
        block: function (moremenu, info) {
            const elem = TUICLibrary.HTMLParse(
                _data.buttonElement._base(
                    "block",
                    `<path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" class="TUIC_USERBLOCK"></path>`,
                    info.isMe,
                ),
            ).item(0) as HTMLDivElement;
            if (!info.isMe) {
                const eventFunc = async () => {
                    for (let i = 0; i <= 2; i++) {
                        const blockButton = document.querySelector<HTMLDivElement>(`[data-testid="block"][role="menuitem"]`);
                        if (blockButton == null) {
                            moremenu.click();
                        } else {
                            blockButton.click();
                            await TUICLibrary.waitForElement(`[data-testid="confirmationSheetConfirm"]`);
                            if (TUICPref.getPref("tweetTopButtonBool.noModalbottomTweetButtons")) {
                                document.querySelector<HTMLButtonElement>(`[data-testid="confirmationSheetConfirm"]`).click();
                            } else {
                                document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (e) => {
                                    moremenu.click();
                                });
                                document.querySelector(`[data-testid="mask"]`).addEventListener("click", (e) => {
                                    moremenu.click();
                                });
                            }
                            break;
                        }
                    }
                };

                elem.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        eventFunc();
                    }
                });
                elem.children[0].addEventListener("click", (e) => {
                    eventFunc();
                });
            }

            return elem;
        },
        mute: function (moremenu, info) {
            const elem = TUICLibrary.HTMLParse(
                _data.buttonElement._base(
                    "mute",
                    `<path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z" class="TUIC_USERMUTE"></path>`,
                    info.isMe,
                ),
            ).item(0) as HTMLDivElement;

            if (!info.isMe) {
                const eventFunc = async () => {
                    for (let i = 0; i <= 2; i++) {
                        const blockButton = document.querySelector(
                            `[role="menuitem"] [d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"]`,
                        );
                        if (blockButton == null) {
                            moremenu.click();
                        } else {
                            blockButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                            break;
                        }
                    }
                };

                elem.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        eventFunc();
                    }
                });
                elem.children[0].addEventListener("click", (e) => {
                    eventFunc();
                });
            }

            return elem;
        },
        delete: function (moremenu, info) {
            const elem = TUICLibrary.HTMLParse(
                _data.buttonElement._base(
                    "delete",
                    `<path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z" class="TUIC_DeleteButton"></path>`,
                    !info.isMe,
                    true,
                ),
            ).item(0) as HTMLDivElement;

            if (info.isMe) {
                const eventFunc = async () => {
                    for (const i of [0, 1, 2]) {
                        const blockButton = document.querySelector(
                            `[role="menuitem"] [d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"]`,
                        );
                        if (blockButton == null) {
                            moremenu.click();
                        } else {
                            blockButton.closest<HTMLElement>(`[role="menuitem"]`).click();
                            const elems = await TUICLibrary.waitForElement<HTMLButtonElement>(`button[data-testid="confirmationSheetConfirm"]`);
                            if (TUICPref.getPref("tweetTopButtonBool.noModalbottomTweetButtons")) {
                                elems[0].click();
                            } else {
                                document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (_) => {
                                    moremenu.click();
                                });
                                document.querySelector(`[data-testid="mask"]`).addEventListener("click", (_) => {
                                    moremenu.click();
                                });
                            }
                            break;
                        }
                    }
                };

                elem.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        eventFunc();
                    }
                });
                elem.children[0].addEventListener("click", (e) => {
                    eventFunc();
                });
            }

            return elem;
        },
    },
};

export function tweetTopButtons(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    if (articleBase.querySelector(_data.selector.moreMenu)) {
        // もっと見るメニュー内を修正するためにEvent
        const moreMenuButton = articleBase.querySelector<HTMLElement>(_data.selector.moreMenu);
        moreMenuButton.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                tweetMoreMenuContent();
            }
        });
        moreMenuButton.children[0].addEventListener("click", (e) => {
            tweetMoreMenuContent();
        });

        //ツイート上ボタンの並び替え
        placeTweetTopButtons(articleInfo);
    }
}

function placeTweetTopButtons(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    let isFirst = true;
    const tweetTopButtons: { [key: string]: HTMLDivElement } = {};
    const tweetTopParent = articleBase.querySelector(_data.selector.moreMenu).parentElement;
    const marginSize = TUICLibrary.fontSizeClass("20px", "20px", "20px", "20px", "20px");
    for (const i of _data.all) {
        const div = articleBase.querySelector(_data.selector[i]);
        if (div) {
            tweetTopButtons[i] = div;
        }
    }
    for (const i of TUICPref.getPref("tweetTopButton")) {
        let div: HTMLDivElement = null;
        if (i in tweetTopButtons) {
            div = tweetTopButtons[i];
            div.show();
        } else if (i in _data.buttonElement) {
            div = _data.buttonElement[i](articleBase.querySelector(_data.selector.moreMenu), articleInfo);
            tweetTopButtons[i] = div;
        }
        if (!isFirst) {
            div.style.marginLeft = marginSize;
        } else {
            div.style.marginLeft = "";
        }
        isFirst = false;
        tweetTopParent.appendChild(div);
    }

    for (const i of _data.all) {
        if (!TUICPref.getPref("tweetTopButton").includes(i) && i in tweetTopButtons) {
            tweetTopButtons[i].hide();
        }
    }
}
