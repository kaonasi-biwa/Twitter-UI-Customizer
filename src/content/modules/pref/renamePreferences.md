# 前提
これを読んでいるものとします。  
https://github.com/kaonasi-biwa/Twitter-UI-Customizer/issues/186  
また、i18nは`settings.<設定ID>`及び`settings.<設定ID>.<ラジオボタンなどの選択肢ID>`を考えています。  
以下、基本的に設定画面の順番に従って記述します。

# 色設定
## 共通
ボタンではないものの色の設定も増えていることを鑑み、buttonは個々の設定でつけることとします。
|現在|変更後|説明|
|---|---|---|
|buttonColor|colorBase|ダーク/ライトで色が指定されていないときの色。|
|buttonColorLight|colorLight|ライトモードのときの色。|
|buttonColorDark|colorDark|ダークモードのときの色。|

## 個々のID
接頭詞として上記の「共通」のものがつくと考えます。
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|unsent-tweet|ButtonTweetUnset|settingColors-editUnsetTweet|未送信ツイートを編集するボタン...のはず(なんか動いてない)|
|not-following||settingColors-notFollowingButton|フォローしていない人に対するフォローボタン|
|willFollow||settingColors-willFollowButton|フォローしていない人に対するフォローボタンをホバーしているとき|
|following||settingColors-followingButton|フォローしている人に対するフォローボタン|
|un-following||settingColors-unfollowButton|フォローしている人に対するフォローボタンをホバーしているとき|
|blocking||settingColors-blocking|ブロックしている人に対するフォローボタン|
|blocking-unlock||settingColors-blockingUnlock|ブロックしている人に対するフォローボタンをホバーしているとき|
|profile||settingColors-editProfile|プロフィール編集ボタン|
|profile-save||settingColors-saveProfile|プロフィール編集を保存するボタン|
|birthday||settingColors-finalDecideButton|誕生日設定・ログアウトなどの赤かったボタン|
|twitterIcon|IconLogo|settingColors-twitterIcon|サイドバーなどのアイコンの色|
|twitterIconFavicon|IconFavicon|settingColors-twitterIconFavicon|Faviconの色|
|tweetButton||settingColors-tweetButton|ツイートボタン|

# サイドバー
## 左サイドバー
### ボタンの順番 (リストボックス)
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|sidebarButtons||(sidebarButton-setting-LeftSidebar)|左サイドバーのボタンの順番(以下項目)|
|||||
|home||sidebarButtons-home|「ホーム」|
|explore||sidebarButtons-explore|「話題を検索」|
|communities||sidebarButtons-communities|「コミュニティ」|
|notifications||sidebarButtons-notifications|「通知」|
|messages||sidebarButtons-messages|「メッセージ」|
|bookmarks||sidebarButtons-bookmarks|「ブックマーク」|
|profile||sidebarButtons-profile|「プロフィール」|
|moremenu||sidebarButtons-moremenu|「もっと見る」|
|topics||sidebarButtons-topics|「トピック」|
|lists||sidebarButtons-lists|リスト|
|drafts||sidebarButtons-drafts|「下書き」|
|connect||sidebarButtons-connect|「移動する」おすすめユーザー一覧|
|communitynotes||sidebarButtons-communitynotes|「コミュニティーノート」|
|verified-choose||sidebarButtons-verified-choose|「プレミアム」|
|display||sidebarButtons-display|「表示」表示設定|
|muteAndBlock||sidebarButtons-muteAndBlock|「ミュートとブロック」|
|premiumTierSwitch||sidebarButtons-premiumTierSwitch|「認証済み組織」消滅？|
|settings||sidebarButtons-settings|「設定」|
|spaces||sidebarButton-moreMenuItems-spaces|「スペースを作成」|
|jobs||sidebarButton-moreMenuItems-jobs|「求人」|
|grok||sidebarButtons-grok|「Grok」|

### リストボックス直下の設定
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|sidebarSetting.buttonConfig.smallerSidebarContent||sidebarButton-setting-narrowBetweenButtons|サイドバーのボタン同士の幅が広いときに狭くする設定(現在はTwitter側で修正済み？)|
|sidebarSetting.buttonConfig.sidebarNoneScrollbar||sidebarButton-setting-sidebarNoneScrollbar|サイドバーの縦が広くなってもスクロールバーを出さないようにする|

### ホームのアイコン (選択)
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|sidebarSetting.homeIcon||(sidebarButton-homeIcon-settingTitle)|左サイドバーの「ホーム」のアイコン(以下項目)|
|||||
|normal||sidebarButton-homeIcon-normal|デフォルト|
|birdGoBack||sidebarButton-homeIcon-birdGoBack|Twitterの頃のアイコン|
|TUIC||sidebarButton-homeIcon-TUIC|TUICのアイコン|

### 非表示設定 / 「もっと見る」メニュー
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|sidebarSetting.moreMenuItems.premium||sidebarButton-moreMenuItems-premium|「プレミアム」|
|sidebarSetting.moreMenuItems.bookmarks||sidebarButtons-bookmarks|「ブックマーク」|
|sidebarSetting.moreMenuItems.communities||sidebarButtons-communities|「コミュニティ」|
|sidebarSetting.moreMenuItems.monetization||sidebarButton-moreMenuItems-monetization|「収益化」|
|sidebarSetting.moreMenuItems.verifiedOrgsSignup||sidebarButton-moreMenuItems-verifiedOrgsSignup|「認証済み組織」|
|sidebarSetting.moreMenuItems.ads||sidebarButton-moreMenuItems-ads|「広告」|
|sidebarSetting.moreMenuItems.jobs||sidebarButton-moreMenuItems-jobs|「求人」|
|sidebarSetting.moreMenuItems.spaces||sidebarButton-moreMenuItems-spaces|「スペースを作成」|
|sidebarSetting.moreMenuItems.settings||sidebarButton-moreMenuItems-settings|「設定とプライバシー」|
|sidebarSetting.moreMenuItems.followerRequests||sidebarButton-moreMenuItems-followerRequests|「フォローリクエスト」|

### 非表示設定 / 左下のアカウントメニュー
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|accountSwitcher.icon||sidebarButton-accountSwitcher-Icon|アイコン|
|accountSwitcher.nameID||sidebarButton-accountSwitcher-NameID|名前・ID|
|accountSwitcher.moreMenu||sidebarButton-accountSwitcher-MoreMenu|三点|

## 右サイドバー
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|rightSidebar.searchBox||rightSidebar-searchBox|検索箱|
|rightSidebar.verified||rightSidebar-rightSidebarVerified|「認証する」|
|rightSidebar.space||rightSidebar-space|「進行中のスペースを開く」|
|rightSidebar.relevantPeople||rightSidebar-relevantPeople|「関連性の高いアカウント」|
|rightSidebar.trend||rightSidebar-trend|「いまどうしてる？」|
|rightSidebar.osusumeUser||rightSidebar-osusumeUser|おすすめユーザー|
|rightSidebar.links||rightSidebar-links|リンク集|

# ロゴ
可能であれば「ロゴ」と「アイコン」を統一したいが...できるかなぁ...
## Twitterのアイコン
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|twitterIcon.icon||(twitterIcon-settingTitle)|Xロゴの置き換え(以下項目)|
|||||
|nomal||twitterIcon-normal|デフォルトのアイコン|
|invisible||(twitterIcon-invisible)|非表示|
|dog||(twitterIcon-dog)|犬のアイコン|
|twitter||(twitterIcon-twitter)|Twitterロゴ|
|twitterIcon-X||(twitterIcon-X)|Xロゴ|
|custom||(twitterIcon-custom)|カスタムアイコン|

## その他設定
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|twitterIcon.options.faviconSet||twitterIcon-favicon|Faviconも変更する|
|twitterIcon.options.roundIcon||twitterIcon-roundIcon|アイコンを円形にする|

# 画面表示とテキスト
## Twitterの帰還
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|XToTwitter.XToTwitter||XtoTwitter-XtoTwitter|タブのタイトルをXからTwitterに変更|
|XToTwitter.PostToTweet||XtoTwitter-PostToTweet|「投稿」を「ツイート」に変更|

## パフォーマンス
|現在|変更後|旧i18n|説明|
|---|---|---|---|
|uncategorizedSettings.disableBackdropFilter||uncategorizedSettings-disableBackdropFilter|ぼかし効果を解除|