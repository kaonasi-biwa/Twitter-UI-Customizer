import { Component } from "./Component";

/**
 * コンテナ
 */
export class ContainerComponent implements Component {
    public element: Element;

    /**
     * @param elements 内包する要素
     */
    constructor(elements: (Node | Component)[]) {
        this.element = document.createElement("div");
        this.element.classList.add("tlui-container");

        for (const element of elements) {
            if (element instanceof Node) {
                this.element.appendChild(element);
            } else {
                this.element.appendChild(element.element);
            }
        }
    }
}