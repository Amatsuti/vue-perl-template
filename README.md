# README

フロントvue.js + サーバperl のテンプレ

## START

```
npm i
npm start #CGIサーバを起動
npm run serve #フロント用サーバを起動
```

http://localhost:8080/ にアクセス

## 構成

VueCLIにexpressを乗せて余計なものを消しただけ

* /dist: `npm run build`出力先
* /public: 公開ディレクトリ
* /src: Vueソース
  * /assets: 素材
  * /components: 各コンポーネント
  * /router: Vue Router
  * /store: Vuex
  * /views: Vue Router対象の各ページ
  * App.vue: メインのページ
  * main.js: メインの処理
* /tests: テスト
* /views: Perlソース
  * test.cgi: 固定のJSONをprintするCGI
* .env: 環境設定系
  * `VUE_APP_` で始まる変数はVueソース内で使えるって公式が
* app.js: express用設定（Perlサーバの設定）
  * `perlExpress.binPath`でperlコマンドのパスを書く PATHが通ってれば不要
* vue.config.js: Vue用設定
  * `devServer`: `/cgi`以下のアクセスはperlサーバに転送

## サーバに公開

```
npm run build
```
で`/dist`に吐き出されたクライアントと、`/views`をサーバにぽい

そのままだとサーバサイドにアクセスするパスがlocalhostのままなので、
.env.productionとか作って、`HOST_URL`とかを書き換えればうまくいくかもしれない
