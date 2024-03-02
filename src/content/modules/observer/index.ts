import { tweetSettings, hideOsusumeTweets, replacePost, hideElements, updateStyles, profileInitialTab, sidebarButtons, dmPage, fixTwittersBugs, changeIcon } from "./functions.ts";
import { catchError } from "./errorDialog.ts";
import { placeDisplayButton } from "./functions/rightSidebarTexts.ts";

export const TUICObserver = {
    observer: <MutationObserver>null,
    target: <Element>null,
    observe: () => {
        TUICObserver.observer.observe(TUICObserver.target, {
            childList: true,
            subtree: true,
        });
    },
    callback: () => {
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

            // 右サイドバーに「表示」を配置
            placeDisplayButton();

            // Twitterのバグを修正(現在はDMに関するもののみ)
            fixTwittersBugs();

            TUICObserver.observe();
        } catch (e) {
            catchError(e, TUICObserver.callback);
        }
    },
};

TUICObserver.observer = new MutationObserver(TUICObserver.callback);
