import { Component } from "./Component";

export interface DivBoxComponentInit {
    /**
     * DivのID（初期値: `undefined`）
     */
    id?: string;
}

/**
 * Twitterのボタン風要素
 */
export class DivBoxComponent implements Component {
    public element: HTMLDivElement;

    /**
     * @param options オプション
     */
    constructor(options: DivBoxComponentInit = {}) {
        this.element = new DOMParser().parseFromString(
            `
            <div></div>
            `,
            "text/html",
        ).body.children[0] as HTMLDivElement;

        if (options.id) {
            this.element.id = options.id;
        }
    }

    /**
     * ボタンの幅を最大にするかどうか（初期値: `true`）
     */
    public get fullWidth(): string {
        return this.element.id;
    }
    public set fullWidth(value: string) {
        if (value) {
            this.element.id = value;
        } else {
            this.element.removeAttribute("id");
        }
    }
}
