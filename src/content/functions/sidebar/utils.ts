import { waitForElement } from "@content/utils/element";

export const buttonClickInMoreMenu = async (selector: string) => {
    // NOTE: 「もっと表示」ボタンをクリックして、ドロップダウンメニューを開く
    const moreMenuButton = (await waitForElement<HTMLAnchorElement>(`[data-testid="AppTabBar_More_Menu"]`))[0];
    if (!moreMenuButton) return false;
    moreMenuButton.click();

    // NOTE: 指定されたセレクターに一致する要素をクリックする
    const targetButton = (await waitForElement<HTMLAnchorElement>(`[role="menu"] [data-testid="Dropdown"] ${selector}`))[0];
    if (!targetButton) return false;
    targetButton.click();

    // NOTE: 「もっと表示」ボタンをクリックして、ドロップダウンメニューを閉じる
    moreMenuButton.click();

    return true;
};

export const setDynamicUrl = (id: string, selector: string, setURLWay: (arg0: HTMLElement) => string) => {
    const elem = document.querySelector<HTMLElement>(selector);
    if (elem) {
        return setURLWay(elem);
    } else {
        (async () => {
            await waitForElement(selector);
            const elem = document.querySelector<HTMLLinkElement>(`#TUICSidebar_${id}`);
            if (elem) {
                elem.href = setURLWay(document.querySelector(selector));
            }
        })();
        return "";
    }
};
