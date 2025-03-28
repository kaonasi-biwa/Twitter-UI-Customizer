import { getPref } from "@content/modules/pref";
import { followersList } from "./followersListButton";
import { profileInitialTab } from "./initProfileTab";
import { TUICI18N } from "@content/modules/i18n";

export function profileModify() {
    // フォロワー一覧のボタンについての処理
    followersList();

    // プロフィール画面を最初に開いたときのタブについての処理
    profileInitialTab();

    // 「返信」タブを「ツイートと返信」の名称に戻す
    if (getPref("profileSetting.tabs.changeNameReplies")) {
        const repliesTabElement = document.querySelector(`[role="navigation"] [href$="/with_replies"] span`);
        if (repliesTabElement) {
            repliesTabElement.textContent = TUICI18N.get("profileSetting-changeName-replies-oldName");
        }
    }
}
