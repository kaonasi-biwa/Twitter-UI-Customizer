import { Component } from "./Component";

export interface ButtonComponentInit {
    /**
     * ボタンの幅を最大にするかどうか（初期値: `true`）
     */
    fullWidth?: boolean;
    /**
     * ボタンの色を反転させるかどうか（初期値: `false`）
     */
    invertColor?: boolean;
}

type OnclickListener = GlobalEventHandlers["onclick"];

/**
 * Twitterのボタン風要素
 */
export class ButtonComponent implements Component {
    public element: HTMLButtonElement;

    /**
     * ボタンコンポーネントのクリックイベント
     */
    public onclick: OnclickListener;

    /**
     * @param text ボタンテキスト
     * @param onclick クリックイベント
     * @param options オプション
     */
    constructor(text: string, onclick: OnclickListener, options: ButtonComponentInit = {}) {
        this.element = new DOMParser().parseFromString(
            `
            <button type="button" class="full-width">${text}</button>
            `,
            "text/html",
        ).body.children[0] as HTMLButtonElement;
        this.onclick = onclick;

        this.element.onclick = onclick;

        for (const [key, value] of Object.entries(Object.assign({}, options))) {
            this[key] = value;
        }
    }

    /**
     * ボタンの幅を最大にするかどうか（初期値: `true`）
     */
    public get fullWidth(): boolean {
        return this.element.classList.contains("full-width");
    }
    public set fullWidth(value: boolean) {
        if (value) {
            this.element.classList.add("full-width");
        } else {
            this.element.classList.remove("full-width");
        }
    }

    /**
     * ボタンの色を反転させるかどうか（初期値: `false`）
     */
    public get invertColor(): boolean {
        return this.element.classList.contains("invert-color");
    }
    public set invertColor(value: boolean) {
        if (value) {
            this.element.classList.add("invert-color");
        } else {
            this.element.classList.remove("invert-color");
        }
    }
}
