import { tweetSettings, hideOsusumeTweets, replacePost, updateStyles, profileModify, sidebarButtons, dmPage, fixTwittersBugs, changeIcon, hideElements, sortPostingDialogButtons, composetweet } from "./functions";
import { catchError } from "./errorDialog";
import { placeDisplayButton } from "@content/modules/observer/functions/sidebarBtn/rightSidebarTexts";
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
                const removedElements = mutations.filter((m) => (Array.from(m.removedNodes) as Element[]).some((e) => (e as HTMLElement)?.tagName === "ARTICLE" && (e as HTMLElement)?.dataset.tuicProcessedArticle === ""));
                if (removedElements.length !== 0) {
                    for (const elem of removedElements) {
                        const removeElement = (elem.target as Element)?.closest<HTMLElement>(`[data-testid="cellInnerDiv"]`);
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
            if (mutationElements.some(
                (e) =>
                    (e as HTMLElement).dataset?.testid === "cellInnerDiv")
                || (
                    mutations
                        ? mutations.map((m) => m.target as Element).filter(
                                (e) => e?.closest(".TUICTweetButtomBarBase")
                                    || e?.querySelector(`button svg [d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"]`),
                            )
                        : []
                ).length !== 0
            ) tweetSettings();

            //  time += Date.now() - timeTemp;
            //  console.log(time);

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

            // プロフィール周りの処理
            profileModify();

            // ツイート画面下部のツールバーを並び替え
            sortPostingDialogButtons();

            // 右サイドバーに「表示」を配置
            placeDisplayButton();

            // Twitterのバグを修正(現在はDMに関するもののみ)
            fixTwittersBugs();

            // ツイート画面関係の設定
            composetweet();

            //throw new Error("エラー時のダイアログのテスト用です。");

            this.bind();
        } catch (e) {
            catchError(e, () => this.callback());
        }
    }
})();
