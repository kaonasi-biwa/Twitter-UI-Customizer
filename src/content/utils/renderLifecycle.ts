import { createPinia } from "pinia";
import { createRoot, type JSX } from "solid-js";
import { insert, type MountableElement } from "solid-js/web";
import { Component, createApp } from "vue";

const renderedElements = new Map<Node, () => void>();

export function checkConnected() {
    renderedElements.forEach((dispose, element) => {
        //const elements = Array.isArray(element) ? element : [element];
        //if (elements.every((e) => !e.isConnected)) {
        if (!element.isConnected) {
            //console.log("Element is not connected, disposing:", element, dispose);
            try {
                dispose();
            } catch {
                // NOTE: 誰か（Twitter の React？）が DOM 要素を勝手に消す影響で、Vue 内部の nextSibling(node) における node が null になることがある？ような感じがしているので、例外を無視する (2026/06/06 by kotonefami)
                // @vue/runtime-dom: removeFragment https://github.com/vuejs/core/blob/9d92dbded20037a1142a08d554ea24969c35bb5c/packages/runtime-core/src/renderer.ts#L2319
                // ↓
                // @vue/runtime-dom: nextSibling(node) https://github.com/vuejs/core/blob/9d92dbded20037a1142a08d554ea24969c35bb5c/packages/runtime-dom/src/nodeOps.ts#L87
            }
            renderedElements.delete(element);
        }
    });
}

export function renderSolid(code: () => JSX.Element, parent: MountableElement, child?: Node) {
    const { element, dispose } = createRoot((dispose) => {
        const element = code();
        insert(parent, element, child ?? (parent.firstChild ? null : undefined));
        //console.log("Rendered element:", element);
        return { element, dispose };
    });
    if (!(element instanceof Element
    //|| (Array.isArray(element) && element.every((e) => e instanceof Element))
    )) {
        dispose();
        throw new TypeError("Rendered content is not an Element");
    }

    checkConnected();
    renderedElements.set(element, dispose);
}

export function renderVue(rootComponent: Component, rootContainer: string | MountableElement) {
    const app = createApp(rootComponent);
    app.use(createPinia());
    const element = app.mount(rootContainer as string | Element);
    //console.log("Mounted Vue app on:", element.$el);

    renderedElements.set(element.$el, app.unmount);
}
