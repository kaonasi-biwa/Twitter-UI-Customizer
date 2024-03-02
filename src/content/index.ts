/**
 * Twitter UI Customizer
 * << Twitter を思いのままに。 >>
 */

import { TUICObserver } from "@modules/observer/index.ts";
import { TUICLibrary } from "@content/library.ts";
import { TUICI18N } from "@modules/i18n";
import { applySystemCss, addCssElement, applyDataCss, applyCustomIcon } from "@content/applyCSS.ts";
import { runSafemode } from "@modules/settings/safemode/safemode";
import { isSafemode } from "@modules/settings/safemode/isSafemode.ts";
import { startTluiObserver } from "@shared/tlui/observer.ts";
import { TUICPref } from "@modules/index.ts";
import { initIconObserverFunction } from "@modules/observer/functions/changeIcon.ts";
import { titleObserverFunction } from "@modules/observer/titleObserver.ts";
import { updateClasses } from "./modules/htmlClass/classManager";

(async () => {
    // I18Nを取得
    await TUICI18N.fetch();

    // Twitterの親要素を待機
    await TUICLibrary.waitForElement("#react-root");

    // 起動メッセージ
    console.log(
        `%cTwitter UI Customizer${isSafemode ? " (Safe Mode)" : ""}%cby kaonasi_biwa\n\nTwitter を思いのままに。⧸ Language: ${TUICI18N.get("@JapaneseLanguageName")}`,
        `font-family: system-ui, -apple-system, sans-serif, monospace; font-size: 1.2em; font-weight: bold; text-align: center; background: ${isSafemode ? "#5a9e1b" : "#1da1f2"}; color: #ffffff; padding: 0.5em 2em; margin-top: 0.5em; margin-left: 0.5em;`,
        `font-family: system-ui, -apple-system, sans-serif, monospace; margin: 0.5em; color: ${isSafemode ? "#5a9e1b" : "#1da1f2"};`,
    );

    // 旧バージョンからのPrefのアップデート
    await TUICPref.updatePref();
    // 前起動時のTUICの要素・Classが残っていればすべて削除
    updateClasses(true);
    for (const elem of document.querySelectorAll(".TUICOriginalContent")) {
        elem.remove();
    }

    // アップデート通知
    chrome.runtime.sendMessage({
        type: "update",
        updateType: "openTwitter",
    });

    // CSSの適用
    addCssElement();
    applyDataCss();
    applyCustomIcon();

    // 起動時のTwitterアイコンを変更
    if (document.querySelector(`#placeholder > svg`)) {
        initIconObserverFunction();
    }

    // タイトル変更のためのObserver
    await TUICLibrary.waitForElement("title");
    titleObserverFunction();

    // TLUI用のObserver
    startTluiObserver();

    // メインのObserver
    (TUICObserver.target = document.querySelector("body")), TUICObserver.observe();
    TUICObserver.callback();

    // フォントサイズ変更の検出のためのObserver
    const bodyAttributeObserver = new MutationObserver(applySystemCss);
    bodyAttributeObserver.observe(document.querySelector("body"), {
        childList: false,
        subtree: false,
        attributes: true,
    });

    // セーフモード
    if (isSafemode) runSafemode();
})();
