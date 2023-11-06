# <img width="32" height="32" src="./icon/newIcon_TUIC_C_Blue.svg"> Twitter UI Customizer

![ヘッダー](./icon/header.png)
[![Github Actions](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/workflows/Build/badge.svg)](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/actions/workflows/packaging.yml)
[![Lint](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/actions/workflows/lint.yml/badge.svg)](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/actions/workflows/lint.yml)
[![Version](https://img.shields.io/github/v/release/kaonasi-biwa/Twitter-UI-Customizer?label=Version)](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/releases/latest)
[![License](https://img.shields.io/github/license/kaonasi-biwa/Twitter-UI-Customizer?label=License&color=blue)](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/blob/main/LICENSE)  
[![Firefox Browser ADD-ONS](https://blog.mozilla.org/addons/files/2015/11/get-the-addon.png)](https://addons.mozilla.org/ja/firefox/addon/twitter-ui-customizer/)
[![Chrome WebStore](https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/UV4C4ybeBTsZt43U4xis.png)](https://chrome.google.com/webstore/detail/twitter-ui-customizer/hpmhdmlhnppmmipefebkhkbpdcjiidmh?hl=ja)
[![Crowdin](https://badges.crowdin.net/badge/light/crowdin-on-dark.png)](https://crowdin.com/project/twiter-ui-customizer)

[crxファイルでのインストール方法はこちら](https://gist.github.com/Hibi-10000/54d283e5e5deabc3c491ce16556b4390)  
[情報・設定・CSS集(TwitterのUIの色を公式Twitterに近くすることも出来ます！)](https://github.com/kaonasi-biwa/TUIC-Information-Prefs-and-CSSs/blob/main/README.md)

Firefoxの場合は自動で更新してくれるFirefox Browser ADD-ONSがおすすめです！

Chromiumの場合は、

-   更新の反映が遅いが自動更新してくれるChrome WebStore
-   手動だけどすぐに更新を適用できるzipファイル
-   初期設定が少し面倒だけどすぐに自動で更新を適用できるcrxファイル

の中のお好きなものをお選びください！

## 貢献者様へ

**ビルドツール Vite導入により、デバッグ方法が変わりました！**  
ビルド及びデバッグ方法については、このREADME下部及び[docs/vite_build](./docs/vite_build.md)を御覧ください。  
この変更は2023年9月2日からの適用です。

## Special Thanks (使い方あってるか知らんけど)

GitHub:

-   @irhdevel (すばらしきデザイン)
-   @GrapeApple0 (クライアント名表示)
-   @Taka005 (ソースコードの整理)
-   @Hibi-10000 (アメリカ英語の翻訳・CRXリリース)
-   @KotoneFami (機能追加・リファクタリング)
-   @nakasyou (デザインの改良・機能追加)
-   @surapunoyousei (デバッグしやすく)
-   @typeling1578 (リファクタリング)
-   @regularenthropy (リファクタリング・パフォーマンス向上)
-   @GreenDotBlue99 (タブの固定機能)

Crowdin:

-   @nyanrus (韓国語と英語の翻訳)
-   @loading_yt (中国語の翻訳)
-   @hibi_10000 (英語の翻訳)
-   @enthropyreg (ロシア語とウクライナ語の翻訳)
-   @teamolhuang (繁体中国語の翻訳)
-   @rosalindsun12 (簡体中国語の翻訳)
-   @truselya (ロシア語の翻訳)
-   @gok7ug (トルコ語の翻訳)
-   @saturnsoot (ドイツ語の翻訳)

その他:

-   @CutterKnife\_ / Twitter **(アイコン・ロゴの作成者)**
-   @PianoCat1010 / Twitter **(「いいねとリツイート」のアイコンの作成者)**

## 実装されている機能

-   「未送信ツイートの編集」「未フォローのフォローボタン」「フォロー中のフォローボタン」「フォロー解除ボタン」「ホバー時のフォローボタン」「ブロック中の人のフォローボタン」「ブロック解除時のフォローボタン」「プロフィール設定」「最終決定(ログアウト時のやつなど)」のボタンについて、それぞれ枠線色・背景色・文字色を設定できる
-   ツイートの下にあるボタンの順番をいじれる
-   ツイートの下にあるボタンに「ブックマークに追加」「ツイートのリンクをコピー」「引用ツイート」「ユーザーをブロック」「ユーザーをミュート」「ツイートを削除」「いいねとRT」「DMで送信」を追加できる
-   リツイートボタンを押したときに、メニューを出さずにリツイートすることができる
-   「ツイートを削除」「ユーザーをブロック」をツイート下ボタンからするときに、モーダルを出さずにできるように
-   ツイートの下のボタンが横に溢れたときににスクロールバーを表示できる
-   サイドバーの並び順を変更できる
-   サイドバーに「Twitter Circle」「トピック」「Twitterサークル」「トピック」「下書き」「移動する」「表示」「ミュートとブロック」を追加できる
-   サイドバーの縦の間隔が大きくにゃっているときに、それをちっちゃくできる
-   サイドバーのスクロールバーを非表示にできる
-   右サイドバーの「検索バー」「認証する」「どうしてる？」「進行中のスペースを聞く」「おすすめユーザー」「リンク集」を非表示にできる
-   Twitterの左上・起動時のアイコンを「デフォルト」「非表示」「犬」「鳥」「X」「カスタムアイコン(画像をアップロードできる)」から選べる
-   カスタムアイコンのみ、丸と四角から選べる
-   faviconを変更することもできる
-   Twitterアイコン・Xアイコンは色も変更することができる
-   タイムライン上のおすすめユーザー、Twitter Pro プロモーションボタンを非表示にできる
-   タイムラインのリツイートを非表示にできる
-   画面右下のメッセージを非表示を非表示にできる
-   ツイートの返信一覧の「もっと見つける」を非表示にすることができる
-   ツイートの右上にたまにある「購入する」非表示にすることができる
-   プロフィールに偶にあるサブスクリプションボタンを非表示にすることができる
-   プロフィールの「ハイライト」タブを消せるようになる
-   クライアント情報を表示できる
-   カスタムCSSを書くことができる
-   (設定のエクスポート/インポートもできる)

## いるかもわからぬ翻訳者の方へ

Crowdinで試験的にやってみています！  
[![Crowdin](https://badges.crowdin.net/badge/light/crowdin-on-dark.png)](https://crowdin.com/project/twiter-ui-customizer)

### Twitter上でのTUICの翻訳

-   Twitterで使用できる言語は全て(ファイルだけでも)用意していて、一番最初の`@JapaneseLanguageName`に、言語名を書いています

#### 翻訳の仕方

1. `i18n/<言語タグ名>.json`を開く
2. `i18n/ja.json`をもとに翻訳する

### ポップアップなどTUIC自体の翻訳

[こちらの記事](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization)と[`_locales/ja/messages.json`](./_locales/ja/messages.json)を参照してください

## アイコン画像の提供元

[System UIcons](https://www.systemuicons.com/)

-   Unlicenseの元で配布されています。

## アドオンのデバッグ方法

**Chromium、またはFirefoxでのデバッグの詳細は [`docs/vite_build`](./docs/vite_build.md)を御覧ください。**

manifest.jsonなどのデバッグ・ソースコードの情報は[Wiki](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/wiki/manifest.json%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)を見てください！

**重要**: Firefox ブラウザーが事前にインストールされている必要があります。  
また、新しいプロファイルを "about:profiles" で "development" という名前で作成する必要があります。  
プロファイルや環境によるバグを防ぐためにプロファイルは分けられます。

```bash

yarn

## Firefox でデバッグする場合（引数なしの場合はデフォルトで Firefox でデバッグします）
yarn debug

# or
yarn debug:firefox

## Chrome でデバッグする場合
yarn debug:chromium

## Firefox または Firefox 系ブラウザーでデバッグする場合

# .env.local で `TUIC_WEBEXT_FIREFOX_EXECUTABLE`を使いたいFirefoxの経路に設定した後に
yarn debug:firefox

# 例
# TUIC_WEBEXT_FIREFOX_EXECUTABLE="C:\Program Files\Firefox Developer Edition\firefox.exe"
# プロファイルでエラーが出る場合や直接指定したい場合
# TUIC_WEBEXT_FIREFOX_PROFILE="C:\Users\user\AppData\Roaming\Mozilla\Firefox\Profiles\h6jvvuqd.dev_tuic"
yarn debug:firefox

```

デバッグでは web-ext を使用しているためデバッグ中に加えた変更はリロードしなくても反映されます。
