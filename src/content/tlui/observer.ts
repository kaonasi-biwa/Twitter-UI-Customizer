import { TUICLibrary } from "../library";

/**
 * TLUI のオブザーバーを開始します。
 */
export function startTluiObserver() {
    async function changedTheme() {
        document.documentElement.style.setProperty("--tlui-dialog-background", document.body.style.backgroundColor);
        document.documentElement.style.setProperty("--tlui-dialog-text", getComputedStyle((await TUICLibrary.waitForElement("span"))[0]).color);
    }

    new MutationObserver(changedTheme).observe(document.body, { attributes: true, attributeFilter: ["style"] });
    changedTheme();
}

/*

await TUICLibrary.waitForElement("#layers");
const dialog = new Dialog("Hello!");
dialog.addComponents([
    "こんな感じで簡単にダイアログを出せるようになりました。",
    "いい感じのAPIにしたつもりなのですが、もしここが使いにくいとかあれば言ってくださいね。",
    new ButtonComponent("ふぁみちゃんだいすき", () => dialog.close()),
    new ButtonComponent("閉じる", () => dialog.close(), {
        invertColor: true
    }),
    new ContainerComponent([
        new ButtonComponent("第三の選択肢！", () => dialog.close(), {
            invertColor: true
        })
    ])
]).open();

*/