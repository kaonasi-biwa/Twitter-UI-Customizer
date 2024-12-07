# 前提
これを読んでいるものとします。  
https://github.com/kaonasi-biwa/Twitter-UI-Customizer/issues/186  
また、i18nは`settings.<設定ID>`及び`settings.<設定ID>.<ラジオボタンなどの選択肢ID>`を考えています。

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