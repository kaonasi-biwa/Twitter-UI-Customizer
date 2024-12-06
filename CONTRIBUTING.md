# Contributing

**パッケージマネージャーをpnpmに変更しました！**  
yarnを使用していた方は、pnpmをインストールして`node_modules`を削除した上で  
`pnpm i --frozen-lockfile`を実行してください。

**ビルドツール Vite導入により、デバッグ方法が変わりました！**  
ビルド及びデバッグ方法については、[docs/vite_build](./docs/vite_build.md)を御覧ください。  
この変更は[`41dff7b`](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/commit/41dff7b4e8c01c33ef04d05b8ff5e9e649f2719d) (2023年9月2日)からの適用です。

## いるかもわからぬ翻訳者の方へ

Crowdinで試験的にやってみています！  
<a href="https://crowdin.com/project/twiter-ui-customizer"><img alt="crowdin" width="175" height="50" src="https://badges.crowdin.net/badge/light/crowdin-on-dark@2x.png"></a>

### Twitter上でのTUICの翻訳

-   Twitterで使用できる言語は全て(ファイルだけでも)用意していて、一番最初の`@JapaneseLanguageName`に、言語名を書いています

#### 翻訳の仕方

1. `i18n/<言語タグ名>.json`を開く
2. `i18n/ja.json`をもとに翻訳する

### ポップアップなどTUIC自体の翻訳

[こちらの記事](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization)と[`_locales/ja/messages.json`](./_locales/ja/messages.json)を参照してください

## アドオンのデバッグ方法

**Chromium、またはFirefoxでのデバッグの詳細は [`docs/vite_build`](./docs/vite_build.md)を御覧ください。**

manifest.jsonなどのデバッグ・ソースコードの情報は[`docs/manifest_build`](./docs/manifest_build.md)を見てください！

**重要**: Firefox ブラウザーが事前にインストールされている必要があります。  
また、新しいプロファイルを "about:profiles" で "development" といった名前で作成する必要があります。  
プロファイルや環境によるバグを防ぐためにプロファイルは分けられます。

```bash

pnpm i --frozen-lockfile

## Firefox でデバッグする場合（引数なしの場合はデフォルトで Firefox でデバッグします）
pnpm debug

# or
pnpm debug:firefox

## Chrome または Chromium 系ブラウザー でデバッグする場合
pnpm debug:chromium

## Firefox または Firefox 系ブラウザーでデバッグする場合

# .env.local で `TUIC_WEBEXT_FIREFOX_EXECUTABLE`を使いたいFirefoxの経路に設定した後に
pnpm debug:firefox

# 例
# TUIC_WEBEXT_FIREFOX_EXECUTABLE="C:\Program Files\Firefox Developer Edition\firefox.exe"
# プロファイルでエラーが出る場合や直接指定したい場合
# TUIC_WEBEXT_FIREFOX_PROFILE="C:\Users\user\AppData\Roaming\Mozilla\Firefox\Profiles\h6jvvuqd.dev_tuic"
pnpm debug:firefox

```

デバッグでは web-ext を使用しているためデバッグ中に加えた変更はブラウザーをリロードしなくても反映されます。
