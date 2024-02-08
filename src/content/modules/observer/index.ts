import { tweetSettings, hideOsusumeTweets, replacePost, hideElements, updateStyles, profileInitialTab, sidebarButtons, dmPage, fixTwittersBugs, changeIcon } from "./functions.ts";
import { placeSettingPage } from "./functions/placeSettingPage.ts";
import { catchError } from "./errorDialog.ts";

export const TUICObserver = {
    observer: null,
    target: null,

    data: { buttonUnderTweetRunning: false },
    observerFunction: () => {
        TUICObserver.observer.disconnect();
        try {
            // Twitterのアイコンに関する設定
            changeIcon();

            // サイドバーに関する設定
            sidebarButtons();

            // ツイート関連の設定
            tweetSettings();

            // おすすめユーザーを非表示 (かなり処理が特殊なので他の非表示から分離)
            hideOsusumeTweets();

            // DMに関する設定
            dmPage();

            // ポストをツイートに修正
            replacePost();

            // 要素を非表示に
            hideElements();

            // 様々な要素のCSSを適切なものに変更
            updateStyles();

            // プロフィールページの初期タブの設定
            profileInitialTab();

            // Twitterのバグを修正(現在はDMに関するもののみ)
            fixTwittersBugs();

            // 設定画面の配置
            placeSettingPage();

            TUICObserver.observer.observe(TUICObserver.target, TUICObserver.config);
        } catch (e) {
            catchError(e, TUICObserver.observerFunction);
        }
    },
    config: {
        childList: true,
        subtree: true,
    },
};
TUICObserver.observer = new MutationObserver(TUICObserver.observerFunction);
