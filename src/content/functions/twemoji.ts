import twemoji from "@twemoji/api";

let twemojiObserver: MutationObserver | null = null;

const twemojiClass = "TUICEmoji";
const twemojiOptions = {
    className: twemojiClass,
    attributes: () => ({
        // NOTE: https://github.com/jdecked/twemoji#inline-styles
        style: "height: 1em; width: 1em; margin: 0 .05em 0 .1em; vertical-align: -0.1em;",
    }),
};

/** 指定されたノードが textContent を含むかどうかを返します。 */
function hasText(node: Node): boolean {
    return node.textContent?.trim().length ? true : false;
}

/**
 * 追加されたノード群から、互いに子孫関係にない最上位のノードを抽出します。
 * @param nodes 追加されたノード群
 */
function getTopLevelNodesOf(nodes: Node[]): Node[] {
    const nodeSet = new Set(nodes);
    const topLevel: Node[] = [];

    for (const node of nodeSet) {
        let isDescendant = false;
        let current: Node | null = node.parentNode;

        // NOTE: 親をルートに向かって辿る
        while (current) {
            if (nodeSet.has(current)) {
                // NOTE: 祖先がリスト内に存在するので、自分は最上位ではない
                isDescendant = true;
                break;
            }
            current = current.parentNode;
        }

        if (!isDescendant) {
            topLevel.push(node);
        }
    }

    return topLevel;
}

/**
 * 指定された要素内の絵文字を Twemoji の <img> に置き換えます。
 * @param elem 処理対象の要素
 */
function processElement(elem: HTMLElement) {
    if (!hasText(elem)) return;
    twemoji.parse(elem, twemojiOptions);
}
/**
 * 指定されたノード内の絵文字を Twemoji の <img> に置き換えます。
 * @param node 処理対象のノード
 */
function processNode(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
        if (node.parentElement) processElement(node.parentElement);
    } else if (node instanceof HTMLElement) {
        processElement(node);
    }
}

export function startTwemojiObserver() {
    if (!twemojiObserver) {
        twemojiObserver = new MutationObserver((mutations) => {
            const nodes = mutations.flatMap((mutation) => Array.from(mutation.addedNodes));
            for (const root of getTopLevelNodesOf(nodes)) {
                processNode(root);
            }
        });
    }

    twemojiObserver.observe(document.body, {
        childList: true,
        subtree: true,
    });
}
export function stopTwemojiObserver() {
    twemojiObserver?.disconnect();
}

// NOTE: 設定OFF→ON の際に呼ばれる
export function onTwemojiEnabled() {
    processElement(document.body);
}
// NOTE: 設定ON→OFF の際に呼ばれる
export function onTwemojiDisabled() {
    for (const img of Array.from(document.querySelectorAll(`img.${twemojiClass}`))) {
        const text = document.createTextNode(img.getAttribute("alt") ?? "");
        img.replaceWith(text);
    }
}

