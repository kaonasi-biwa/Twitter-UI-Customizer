# Twitter-UI-Customizer
Firefox Browser ADD-ONS→https://addons.mozilla.org/ja/firefox/addon/twitter-ui-customizer/  
情報・設定・CSS集→https://github.com/kaonasi-biwa/TUIC-Information-Prefs-and-CSSs/blob/main/README.md  
<br>
デバッグするときは、`manifest.json`に`manifest_chrome.json`か`manifest.firefox`のうち適したものをコピーしてください  
<br>
## Special Thanks (使い方あってるか知らんけど)
- @GrapeApple0 (クライアント名表示)
- @irhdevel (すばらしきデザイン)
- @Taka005 (ソースコードの整理)
- @Hibi-10000 (アメリカ英語の翻訳者)

## 実装されている機能
- 「未送信ツイートの編集」「未フォローのフォローボタン」「フォロー中のフォローボタン」「フォロー解除ボタン」「プロフィール設定」「最終決定(ログアウト時のやつなど)」のボタンについて、それぞれ枠線色・背景色・文字色を設定できる
- ツイートの下にあるボタンの順番をいじれる
- ツイートの下にあるボタンに「ブックマークに追加」「ツイートのリンクをコピー」を追加できる
- ツイートの下のボタンが横に溢れたときににスクロールバーを表示できる
- サイドバーの並び順を変更できる
- サイドバーに「リスト」「Twitter Circle」「トピック」を追加できる
- サイドバーの縦の間隔が大きくにゃっているときに、それをちっちゃくできる
- Twitterの左上・起動時のアイコンを「デフォルト」「非表示」「犬」「鳥」「カスタムアイコン(画像をアップロードできる)」から選べる
- カスタムアイコンに関しては、丸と四角から選べる
- タイムライン上のおすすめユーザーを非表示にできる
- クライアント情報を表示できる
- カスタムCSSを書くことができる
- (設定のエクスポート/インポートもできる)

## いるかもわからぬ翻訳者の方へ
### Twitter上でのTUICの翻訳
- もとから(ファイルだけでも)用意してある言語は、一番最初の`@JapaneseLanguageName`に、言語名を書いています  
- それぞれのバージョンの追加IDは[addI18nTags.md](./addI18nTags.md)に書いています
- 言語のタグ名はこのGitHubのリポジトリ( https://github.com/fa0311/TwitterInternalAPIDocument/tree/master/docs/json/i18n )のディレクトリ名準拠で、全て小文字でお願いします(ja、en-gbなど)
#### 翻訳の仕方 (目的の言語のファイルがない場合)
1. `i18n/_langList.json`に言語のタグ名を追記する
2. i18nディレクトリに、`<言語タグ名>.json`という名前のファイルを配置する
#### 翻訳の仕方 (目的の言語のファイルがある場合)
1. `i18n/<言語タグ名>`を開く
#### 翻訳の仕方 (共通)
3. `i18n/ja.json`をもとに翻訳する
### ポップアップなどTUIC事態の翻訳
こちらの記事( https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization )と`_locales/ja/messages.json`を参照してください

## アイコン画像の提供元
[System UIcons](https://www.systemuicons.com/)
 - Unlicenseの元で配布されています。
