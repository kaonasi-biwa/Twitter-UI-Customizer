# manifest.jsonについて

このリポジトリ、拡張機能なのにmanifest.jsonが含まれていません  
なぜなら、chromiumとfirefoxではmanifest.jsonの中身が違うため、どちらかを拾ったらどちらかを捨てないといけないからです  
なので、manifest.jsonを召喚するコマンドがあります  
(Node.jsを使うので、Node.jsを宗教上の理由で使えないという方は`/manifest.config.ts`を見て自力で合成してください)

## manifest.json生成スクリプト

`pnpm dlx tsx ./scripts/manifestChange.ts <引数>`  
で使います  
引数によってどのmanifest.jsonを使うかが変わります  
以下のとおりです  
`chromium`:Chromium系ブラウザ向けのmanifest.jsonです
`chromiumCRX`:GitHubのReleaseで公開しているCRX用のmanifest.jsonです
`firefox`:firefox系ブラウザ向けのmanifest.jsonです

### しくみ

`/manifest.config.ts`の中には、`common` `firefox` `chromium` `chromiumCRX`というkeyが存在しています  
`common`には必ず使うmanifest.jsonの要素、それ以外には、何向けかによって内容が変わるmanifest.jsonの要素になっています  
第一引数によって、どのObjectを取得統合するかを変えています(`chromiumCRX`だけは特殊で`chromium`も取得統合している)

## manifest.jsonの加え方

`.gitignore`にmanifest.jsonを入れているので、manifest.jsonの変更ではgitに適用できません  
ではどうするか。`/manifest.config.ts`を変更します  
やり方は...見たらわかると思います(おい)  
上の「しくみ」も見ればわかりやすいと思います
