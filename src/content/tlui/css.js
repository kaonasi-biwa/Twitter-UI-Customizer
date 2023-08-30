export const TLUI_CSS = document.createElement("style");

TLUI_CSS.id = "tlui-stylesheet";
TLUI_CSS.innerHTML = `
:root {
    --tlui-dialog-background: #000000;
    --tlui-dialog-text: #ffffff;
    --tlui-dialog-mask: rgba(91, 112, 131, 0.4);

    --tlui-button-background: rgba(0, 0, 0, 0);
    --tlui-button-text: #ffffff;
    --tlui-button-background-hover: rgba(239, 243, 244, 0.1);
    --tlui-button-background-invert: #ffffff;
    --tlui-button-text-invert: #0f1419;
    --tlui-button-background-invert-hover: rgb(215, 219, 220);
}

/* ダイアログ > マスク */
#layers .tlui-dialog {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--tlui-dialog-mask);
}

/* ダイアログ > 外枠 */
#layers .tlui-dialog > div {
    background-color: var(--tlui-dialog-background);
    color: var(--tlui-dialog-text);

    padding: 32px;
    border-radius: 16px;

    width: fit-content;
    min-width: 380px;
    max-width: 80vw;
    max-height: 80vh;
    margin: auto;

    font-family: "Segoe UI",Meiryo,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;

    overflow-y: auto;
}
#layers .tlui-dialog:not(.fit-content-width) > div {
    width: 380px;
}
/* ダイアログ > 外枠 > コンテナ > ヘッダー */
#layers .tlui-dialog h1 {
    margin: 0px;
    margin-bottom: 8px;
    line-height: 24px;
    font-size: 20px;
    font-weight: 700;
    word-wrap: break-word;
}
/* ダイアログ > 外枠 > コンテナ > 本文 */
#layers .tlui-dialog p {
    font-size: 15px;
    margin: 0px;
    color: rgb(113, 118, 123);
    line-height: 22px;
}
/* ダイアログ > 外枠 > コンテナ > ボタン */
#layers .tlui-dialog button {
    cursor: pointer;
    background: var(--tlui-button-background);
    color: var(--tlui-button-text);
    border: 1px solid rgb(83, 100, 113);
    border-radius: 100000px;

    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    padding-inline: 16px;
    margin-inline: auto;
    margin-top: 16px;
    height: 40px;
    color: currentColor;
    transition-duration: 0.2s;
}
#layers .tlui-dialog button.full-width {
    width: 100%;
}
#layers .tlui-dialog button.invert-color {
    background-color: var(--tlui-button-background-invert);
    color: var(--tlui-button-text-invert);
}
#layers .tlui-dialog button:hover {
    background-color: var(--tlui-button-background-hover);
}
#layers .tlui-dialog button.invert-color:hover {
    background-color: var(--tlui-button-background-invert-hover);
}

html.tlui-has-dialog {
    overflow: hidden !important;
    overscroll-behavior-y: none !important;
}

`;