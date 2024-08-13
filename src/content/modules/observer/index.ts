import { tweetSettings, hideOsusumeTweets, replacePost, hideElements, updateStyles, profileInitialTab, sidebarButtons, dmPage, fixTwittersBugs, changeIcon } from "./functions";
import { catchError } from "./errorDialog";
import { placeDisplayButton } from "./functions/rightSidebarTexts";
import { followersList } from "./functions/followersList";
import { getPref } from "../pref/index";
import { hideElement } from "../utils/controlElements";

//let time = 0;

export const TUICObserver = new (class TUICObserver {
    /** 内部で使用される MutationObserver */
    public observer: MutationObserver = new MutationObserver((mutations) => this.callback(mutations));
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

    /** オブザーバーのコールバック
     * 引数がなし or undefinedの場合、要素チェックは行われません*/
    public callback(mutations: MutationRecord[] = undefined): void {
        const mutationElements = mutations ? mutations.flatMap((m) => Array.from(m.addedNodes) as Element[]) : [];
        if (mutations) {
            if (getPref("performanceSettings.removeDeletedTweets")) {
                const removedElements = mutations.filter((m) => (Array.from(m.removedNodes) as Element[]).some((e) => (e as HTMLElement)?.tagName === "ARTICLE" && (e as HTMLElement)?.dataset.processedArticle === ""));
                if (removedElements.length !== 0) {
                    for (const elem of removedElements) {
                        const removeElement = (elem.target as Element)?.closest(`[data-testid="cellInnerDiv"]`);
                        if (removeElement.nextElementSibling && !removeElement.nextElementSibling.querySelector("article")) {
                            removeElement.nextElementSibling.remove();
                            hideElement(removeElement);
                        } else {
                            if (removeElement.previousElementSibling && !removeElement.previousElementSibling.querySelector("article")) {
                                removeElement?.remove();
                            } else {
                                hideElement(removeElement);
                            }
                        }
                    }
                }
            }

            if (mutationElements.length === 0 || mutationElements.every((e) => e.nodeType === Node.TEXT_NODE || e.nodeName === "SCRIPT")) return;
            //mutationElements.forEach((e) => console.log(e));
        }
        this.unbind();
        try {
            // Twitterのアイコンに関する設定
            changeIcon();

            // サイドバーに関する設定
            sidebarButtons();

            //  ツイート関連の設定
            //  const timeTemp = Date.now();

            //tweetSettings();
            //if (mutationElements.some((e) => (e as HTMLElement).dataset?.testid === "cellInnerDiv")) tweetSettings();
            if (mutationElements.some((e) => (e as HTMLElement).dataset?.testid === "cellInnerDiv") || (mutations ? mutations.map((m) => m.target as Element).filter((e) => e?.closest(".TUICTweetButtomBarBase")) : []).length !== 0) tweetSettings();

            //  time += Date.now() - timeTemp;
            //  console.log(time);

            // おすすめユーザーを非表示 (かなり処理が特殊なので他の非表示から分離)
            hideOsusumeTweets();

            // フォロワー一覧にボタンを追加
            followersList();

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

            //throwTestError();

            this.bind();
        } catch (e) {
            catchError(e, () => this.callback());
        }
    }
})();
