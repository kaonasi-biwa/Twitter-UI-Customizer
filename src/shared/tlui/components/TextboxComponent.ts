import { Component } from "./Component";

export interface TextboxComponentInit {
    /**
     * テキストボックスの幅を最大にするかどうか（初期値: `true`）
     */
    fullWidth?: boolean;
    /**
     * リードオンリーかどうか（初期値: `false`）
     */
    readonly?: boolean;
    /**
     * デフォルトの行数+1（初期値: `2`）
     */
    rows?: number;
}

/**
 * テキストボックス
 */
export class TextboxComponent implements Component {
    public element: HTMLTextAreaElement;

    /**
     * @param text テキストボックスの中身
     * @param options オプション
     */
    constructor(text: string, options: TextboxComponentInit = {}) {
        this.element = new DOMParser().parseFromString(
            `
            <textarea class="full-width" />
            `,
            "text/html",
        ).body.children[0] as HTMLTextAreaElement;
        this.element.value = text;

        for (const [key, value] of Object.entries(Object.assign({}, options))) {
            this[key] = value;
        }
    }

    /**
     * テキストボックスの幅を最大にするかどうか（初期値: `true`）
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
     * リードオンリーかどうか（初期値: `false`）
     */
    public get readonly(): boolean {
        return this.element.hasAttribute("readonly");
    }
    public set readonly(value: boolean) {
        if (value) {
            this.element.setAttribute("readonly", "true");
        } else {
            this.element.removeAttribute("readonly");
        }
    }

    /**
     * 何行のテキストボックスなのか（初期値: 指定なし）
     */
    public get rows(): number {
        return Number(this.element.getAttribute("rows"));
    }
    public set rows(value: number) {
        if (value) {
            this.element.setAttribute("rows", value.toString());
        } else {
            this.element.removeAttribute("rows");
        }
    }
}
