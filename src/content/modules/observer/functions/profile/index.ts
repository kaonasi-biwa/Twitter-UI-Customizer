import { followersList } from "./followersListButton";
import { profileInitialTab } from "./initProfileTab";

export function profileModify(){
    // フォロワー一覧のボタンについての処理
    followersList()

    // プロフィール画面を最初に開いたときのタブについての処理
    profileInitialTab()
}