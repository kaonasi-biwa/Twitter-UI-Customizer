# manifest.jsonについて

このリポジトリ、拡張機能なのにmanifest.jsonが含まれていません  
なぜなら、chromiumとfirefoxではmanifest.jsonの中身が違うため、どちらかを拾ったらどちらかを捨てないといけないからです  
なので、manifest.jsonを召喚するコマンドがあります  
(Node.jsを使うので、Node.jsを宗教上の理由で使えないという方は`/manifest.config.js`を見て自力で合成してください)

## manifest.json生成スクリプト

`node ./manifestChange.mjs <引数>`  
で使います  
引数によってどのmanifest.jsonを使うかが変わります  
以下のとおりです  
`chrome`:Chromium系ブラウザ向けのmanifest.jsonです
`chromeCRX`:GitHubのReleaseで公開しているCRX用のmanifest.jsonです
`firefox`:firefox系ブラウザ向けのmanifest.jsonです

### しくみ

`/manifest.config.js`の中には、`common` `firefox` `chrome` `chromeCRX`というkeyが存在しています  
`common`には必ず使うmanifest.jsonの要素、それ以外には、何向けかによって内容が変わるmanifest.jsonの要素になっています  
第一引数によって、どのObjectを取得統合するかを変えています(`chromeCRX`だけは特殊で`chrome`も取得統合している)

## manifest.jsonの加え方

`.gitignore`にmanifest.jsonを入れているので、manifest.jsonの変更ではgitに適用できません  
ではどうするか。`/manifest.config.js`を変更します  
やり方は...見たらわかると思います(おい)  
上の「しくみ」も見ればわかりやすいと思います
