## Viteの導入による変更

ビルドツール Vite の導入により、TypeScriptやSCSSなどコンパイルが必要なソースを使えるようになりました。  
これにより、ビルド方法が変わりました。
READMEにも書いたように、`yarn debug`でパッケージ、及びデバッグが実行されます。

参照：[PR #73](https://github.com/kaonasi-biwa/Twitter-UI-Customizer/pull/73) （2023年9月2日）

## ビルドコマンド一覧

### yarn debug系

    コードが変更されたときに自動反映されます。
    リソース及びbackground.tsの変更には対応していません。

[`.env.local.example`](../.env.local.example)で、他のFirefox系ブラウザ（Floorpなど）
またはChromium系ブラウザを指定することができます。  
また、必要な初期設定なども記載していますので、ぜひご参照ください。

-   `yarn debug` または `yarn debug:firefox`  
    Firefox または Firefox系ブラウザでのデバッグを実行します。

-   `yarn debug:chromium`  
    Chrome または Chromium系ブラウザでのデバッグを実行します。

    **Chromium系ブラウザでは設定無しではデバッグが正常作動しません。**  
    詳しくは[`.env.local.example`](../.env.local.example)をご参照ください。

`yarn build --watch` で、`yarn debug` と同じコマンドになります。

各コマンドに `--mode disable-web-ext` オプションを付け加えることで、ブラウザが立ち上がりません。  
既存のような手動でデバッグしたい時にご利用ください。

バージョンの違うFirefoxで作られたプロファイルは実行時にエラーが出る場合があります。  
例えばFirefox Developer Edition (aurora channel)で作られたプロファイルは
Firefox (Stable)で実行される時、Dev Editionより旧バージョンなため、互換性がないとエラーが出ます。  
デバッグの時実行されるFirefoxでプロファイルを作成してください。

デフォルトではデバッグは、元のプロファイルをコピーして行われるので、変更点が保存されません。  
予め "development"プロファイルでTwitterにログインして置くことをおすすめします。

### yarn build系

    自動反映はされません。
    zipファイルが生成されます。

-   `yarn build` または `yarn build:firefox`  
    Firefox 及び Firefox系ブラウザ向けのビルドをします。

-   `yarn build:chromium`  
    Chrome 及び Chromium系ブラウザ向けのビルドをします。

    Chromium CRXビルドに関しては、[`.github/workflows/packaging.yml`](../.github/workflows/packaging.yml)をご参照ください。
