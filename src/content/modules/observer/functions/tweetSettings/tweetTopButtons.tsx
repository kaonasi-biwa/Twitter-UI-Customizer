import type { JSX } from "solid-js";
import { render } from "solid-js/web";
import { waitForElement, hideElement, showElement, processElement } from "@modules/utils/controlElements";
import { getPref, getSettingIDs } from "@modules/pref";
import { tweetMoreMenuContent } from "./tweetMoreMenuContent";
import { ProcessedClass } from "@shared/sharedData";
import { backgroundColorClass } from "@content/modules/utils/color";
import { fontSizeClass } from "@modules/utils/fontSize";

const eventHandle = (elem: Element, func: () => void) => {
    elem.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            func();
        }
    });
    elem.children[0].addEventListener("click", () => {
        func();
    });
};

const _data = {
    all: getSettingIDs("tweetTopButton"),
    selector: {
        moreMenu: `[data-testid="caret"]`,
        block: `[data-tuic-tweet-top-button="block"]`,
        mute: `[data-tuic-tweet-top-button="mute"]`,
        delete: `[data-tuic-tweet-top-button="delete"]`,
        list: `[data-tuic-tweet-top-button="list"]`,
        report: `[data-tuic-tweet-top-button="report"]`,
        notInterested: `[data-tuic-tweet-top-button="notInterested"]`,
    },
    buttonElement: {
        /**
         * @param type ボタンのID
         * @param svg SVG
         * @param disable trueなら無効 (初期値:false)
         * @param redButton trueならボタンが赤くなる (初期値:false)
         */
        _base: function (type: string, svg: () => JSX.Element, eventFunc: () => void | undefined, disable = false, redButton = false) {
            return () => (
                <div
                    role="button"
                    tabindex={disable ? -1 : 0}
                    class={`css-175oi2r r-1777fci min-h-[20px] r-bztko3 r-lrvibr${
                        disable ? "" : " cursor-pointer"
                    } r-1ny4l3l TUICTweetTopButton TUICOriginalContent ${disable ? "r-icoktb" : "css-18t94o4"}`}
                    data-tuic-tweet-top-button={type}
                    onKeyDown={
                        eventFunc !== undefined
                            ? (e: KeyboardEvent) => {
                                    if (e.key === "Enter") {
                                        eventFunc();
                                    }
                                }
                            : undefined
                    }
                >
                    <div
                        dir="ltr"
                        class={`css-1rynq56 min-w-[0px] r-qvutc0 r-37j5jr ${
                            fontSizeClass("text-[14px]", "text-[14px]", "text-[15px]", "text-[17px]", "r-1i10wst")
                        } leading-[20px] font-normal r-1awozwy flex r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q`}
                        style={{ "text-overflow": "unset", color: "rgb(139, 152, 165)" }}
                        onClick={eventFunc}
                    >
                        <div class="css-175oi2r inline-flex">
                            <div class="css-175oi2r inline-flex bottom-[0px] left-[0px] absolute right-[0px] top-[0px] bg-transparent r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l TUIC_ButtonHover"></div>
                            <svg
                                viewBox="0 0 24 24"
                                class={`inline-block fill-current max-w-full relative r-1plcrui r-lrvibr h-[1.25em] r-1hdv0qi ${
                                    backgroundColorClass("r-1bwzh9t", "r-115tad6", "r-14j79pv")
                                } ${redButton ? "TUIC_DeleteButton" : ""}`}
                            >
                                <g>
                                    {svg()}
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            );
        },
        block: function (moremenu: HTMLButtonElement, info: ArticleInfomation) {
            const elem = _data.buttonElement._base(
                "block",
                () => (<path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" class="TUIC_USERBLOCK"></path>),
                !info.option.isMe
                    ? async () => {
                        moremenu.click();
                        (await waitForElement<HTMLButtonElement>(`[role="menuitem"][data-testid="block"]`))[0].click();

                        // NOTE: 押したあとに表示されるメニューをスキップ・閉じたときにもっと見るが残らないようにする
                        await waitForElement(`[data-testid="confirmationSheetConfirm"]`);
                        if (getPref("tweetTopButtonBool.noModalbottomTweetButtons")) {
                            document.querySelector<HTMLButtonElement>(`[data-testid="confirmationSheetConfirm"]`).click();
                        } else {
                            document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (e) => {
                                moremenu.click();
                            });
                            document.querySelector(`[data-testid="mask"]`).addEventListener("click", (e) => {
                                moremenu.click();
                            });
                        }
                    }
                    : undefined,
                info.option.isMe,
            );

            return elem;
        },
        mute: function (moremenu: HTMLButtonElement, info: ArticleInfomation) {
            const elem = _data.buttonElement._base(
                "mute",
                () => (<path d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z" class="TUIC_USERMUTE"></path>),
                !info.option.isMe
                    ? async () => {
                        moremenu.click();
                        (
                            await waitForElement<HTMLButtonElement>(
                                `[role="menuitem"] [d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"]`,
                            )
                        )[0]
                            .closest<HTMLElement>(`[role="menuitem"]`)
                            .click();
                    }
                    : undefined,
                info.option.isMe,
            );

            return elem;
        },
        delete: function (moremenu: HTMLButtonElement, info: ArticleInfomation) {
            const elem = _data.buttonElement._base(
                "delete",
                () => (<path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z" class="TUIC_DeleteButton"></path>),
                !info.option.isMe
                    ? async () => {
                        moremenu.click();
                        (
                            await waitForElement<HTMLButtonElement>(
                                `[role="menuitem"] [d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"]`,
                            )
                        )[0]
                            .closest<HTMLElement>(`[role="menuitem"]`)
                            .click();

                        // NOTE: 押したあとに表示されるメニューをスキップ・閉じたときにもっと見るが残らないようにする
                        const elems = await waitForElement<HTMLButtonElement>(`button[data-testid="confirmationSheetConfirm"]`);
                        if (getPref("tweetTopButtonBool.noModalbottomTweetButtons")) {
                            elems[0].click();
                        } else {
                            document.querySelector(`[data-testid="confirmationSheetCancel"]`).addEventListener("click", (_) => {
                                moremenu.click();
                            });
                            document.querySelector(`[data-testid="mask"]`).addEventListener("click", (_) => {
                                moremenu.click();
                            });
                        }
                    }
                    : undefined,
                !info.option.isMe,
                true,
            );

            return elem;
        },
        list: function (moremenu: HTMLButtonElement, info: ArticleInfomation) {
            const elem = _data.buttonElement._base(
                "list",
                () => (<path d="M5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5H12v2H5.5C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5V13h-2V4.5c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2zm10 7v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" class="TUIC_AddListButton"></path>),
                async () => {
                    moremenu.click();
                    (await waitForElement<HTMLButtonElement>(`[role="menuitem"][href="/i/lists/add_member"]`))[0].click();
                },
            );

            return elem;
        },
        report: function (moremenu: HTMLButtonElement, info: ArticleInfomation) {
            const elem = _data.buttonElement._base(
                "report",
                () => (<path d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z" class="TUIC_Report"></path>),
                !info.option.isMe
                    ? async () => {
                        moremenu.click();
                        (await waitForElement<HTMLButtonElement>(`[role="menuitem"][data-testid="report"]`))[0].click();
                    }
                    : undefined,
                info.option.isMe,
            );

            return elem;
        },
        notInterested: function (moremenu: HTMLButtonElement, info: ArticleInfomation) {
            const elem = _data.buttonElement._base(
                "notInterested",
                () => (<path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" class="TUIC_NotInterested"></path>),
                !info.option.isMe && location.pathname == "/home"
                    ? async () => {
                        moremenu.click();
                        (
                            await waitForElement<HTMLButtonElement>(
                                `[role="menuitem"] path[d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"]`,
                            )
                        )[0]
                            .closest<HTMLElement>(`[role="menuitem"]`)
                            .click();
                    }
                    : undefined,
                info.option.isMe || location.pathname != "/home",
            );

            return elem;
        },
    },
};

export function tweetTopButtons(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    const moreMenuButton = articleBase.querySelector<HTMLElement>(_data.selector.moreMenu + `:not(${ProcessedClass})`);
    if (moreMenuButton) {
        processElement(moreMenuButton);

        // もっと見るメニュー内を修正するためにEvent
        eventHandle(moreMenuButton, tweetMoreMenuContent);

        //ツイート上ボタンの並び替え
        placeTweetTopButtons(articleInfo);
    }
}

function placeTweetTopButtons(articleInfo: ArticleInfomation) {
    const articleBase = articleInfo.elements.articleBase;
    let isFirst = true;
    const tweetTopButtons: Record<string, HTMLDivElement> = {};
    const tweetTopParent = articleBase.querySelector(_data.selector.moreMenu).parentElement;
    const marginSize = fontSizeClass("20px", "20px", "20px", "20px", "20px");
    for (const i of _data.all) {
        const div = articleBase.querySelector<HTMLDivElement>(_data.selector[i]);
        if (div) {
            tweetTopButtons[i] = div;
        }
    }
    for (const i of getPref("tweetTopButton")) {
        let div: HTMLDivElement = null;
        if (i in tweetTopButtons) {
            div = tweetTopButtons[i];
            showElement(div);
            tweetTopParent.appendChild(div);
        } else if (i in _data.buttonElement) {
            const newdiv = _data.buttonElement[i](articleBase.querySelector(_data.selector.moreMenu), articleInfo);
            render(newdiv, tweetTopParent);
            div = tweetTopParent.querySelector<HTMLDivElement>(`[data-tuic-tweet-top-button]`);
            tweetTopButtons[i] = div;
        }
        if (!isFirst) {
            div.style.marginLeft = marginSize;
        } else {
            div.style.marginLeft = "";
        }
        isFirst = false;
    }

    for (const i of _data.all) {
        if (!getPref("tweetTopButton").includes(i) && i in tweetTopButtons) {
            hideElement(tweetTopButtons[i]);
        }
    }
}
