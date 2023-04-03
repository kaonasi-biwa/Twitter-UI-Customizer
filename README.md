# Twitter-UI-Customizer
Firefox Browser ADD-ONS→https://addons.mozilla.org/ja/firefox/addon/twitter-ui-customizer/  
<br>
デバッグするときは、`manifest.json`に`manifest_chrome.json`か`manifest.firefox`のうち適したものをコピーしてください  
<br>
## Special Thanks (使い方あってるか知らんけど)
- @GrapeApple0 (クライアント名表示)
- @irhdevel (すばらしきデザイン)
- @Taka005 (ソースコードの整理)
- @Hibi-10000 (アメリカ英語の翻訳者)

## いるかもわからぬ翻訳者の方へ
### Twitter上でのTUICの翻訳
- もとから(ファイルだけでも)用意してある言語は、一番最初の`@JapaneseLanguageName`に、言語名を書いています  
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
