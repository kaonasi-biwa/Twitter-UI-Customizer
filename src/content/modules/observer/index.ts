import { tweetSettings, hideOsusumeTweets, replacePost, hideElements, updateStyles, profileInitialTab, sidebarButtons, dmPage, fixTwittersBugs, changeIcon } from "./functions.ts";
import { catchError } from "./errorDialog.ts";
import { placeDisplayButton } from "./functions/rightSidebarTexts.ts";

export const TUICObserver = new (class TUICObserver {
    /** 内部で使用される MutationObserver */
    public observer: MutationObserver = new MutationObserver(this.callback);
    /** 監視対象の要素 */
    public target: Element | null = null;

    /** オブザーバーを開始します。 */
    public bind(): void {
        if (!this.target) throw new TypeError("Target is null");
        this.observer.observe(this.target, {
            childList: true,
            subtree: true,
        });
    }

    /** オブザーバーを停止します。 */
    public unbind(): void {
        this.observer.disconnect();
    }

    /** オブザーバーのコールバック */
    public callback(): void {
        this.unbind();
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

            this.bind();
        } catch (e) {
            catchError(e, this.callback);
        }
    }
})();
