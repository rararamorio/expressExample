# expressExample
モック用のレスポンスサーバーを構築する
 
# 動作方法

checkout後に以下のコマンドを実行する

```
npm install
npm start
```
# app.js 内 の処理について調べた内容

## 異なるドメイン対策

ajaxでの処理を記述したときにドメインが異なる環境からアクセスがあるとデータの取得ができないので、
リクエストがあった環境のhostを設定して返すことで、内容を表示できるようにしている

```
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
```
参考にしたページ：https://qiita.com/s-kaoruko/items/2441e016cea947d190e6

## ルートを追加するときの処理

routes ディレクトリ配下にファイルを1つ作成する
app.js 内に URLの受け口(パス)を書く

```
var apiRouter = require('./routes/api');
app.use('/api', apiRouter);
```

# ルートを指定する場合

上2行とした1行はとりあえず使う定義として書く
router.get... 以降に自分のアクセスを受けたい情報を書く
下記の場合 localhost:3000/api/xxx/1234.json のような形式の場合にアクセスできる
（api の部分は app.js で定義している）


app.js
```
var express = require('express');
var router = express.Router();

router.get('/:id/:fname(\\d+).json', function(req, res, next) {
  const data = {"line_cd":24001,"line_name":"京王線","line_lon":139.53357685914875,"line_lat":35.67836429466227,"line_zoom":11,"station_l":[{"station_cd":2400101,"station_g_cd":1130208,"station_name":"新宿","lon":139.699187,"lat":35.690163},{"station_cd":2400104,"station_g_cd":2400104,"station_name":"笹塚","lon":139.667251,"lat":35.673758},{"station_cd":2400105,"station_g_cd":2400105,"station_name":"代田橋","lon":139.659413,"lat":35.671092},{"station_cd":2400106,"station_g_cd":2400106,"station_name":"明大前","lon":139.650352,"lat":35.668758},{"station_cd":2400107,"station_g_cd":2400107,"station_name":"下高井戸","lon":139.641372,"lat":35.66615},{"station_cd":2400108,"station_g_cd":2400108,"station_name":"桜上水","lon":139.63129,"lat":35.66768},{"station_cd":2400109,"station_g_cd":2400109,"station_name":"上北沢","lon":139.62329,"lat":35.668857},{"station_cd":2400110,"station_g_cd":2400110,"station_name":"八幡山","lon":139.614927,"lat":35.669982},{"station_cd":2400111,"station_g_cd":2400111,"station_name":"芦花公園","lon":139.608247,"lat":35.670479},{"station_cd":2400112,"station_g_cd":2400112,"station_name":"千歳烏山","lon":139.60067,"lat":35.667921},{"station_cd":2400113,"station_g_cd":2400113,"station_name":"仙川","lon":139.584908,"lat":35.662257},{"station_cd":2400114,"station_g_cd":2400114,"station_name":"つつじヶ丘","lon":139.575103,"lat":35.657936},{"station_cd":2400115,"station_g_cd":2400115,"station_name":"柴崎","lon":139.56658,"lat":35.653997},{"station_cd":2400116,"station_g_cd":2400116,"station_name":"国領","lon":139.558036,"lat":35.650087},{"station_cd":2400117,"station_g_cd":2400117,"station_name":"布田","lon":139.551557,"lat":35.649904},{"station_cd":2400118,"station_g_cd":2400118,"station_name":"調布","lon":139.543988,"lat":35.652181},{"station_cd":2400119,"station_g_cd":2400119,"station_name":"西調布","lon":139.529822,"lat":35.657169},{"station_cd":2400120,"station_g_cd":2400120,"station_name":"飛田給","lon":139.523666,"lat":35.660121},{"station_cd":2400121,"station_g_cd":2400121,"station_name":"武蔵野台","lon":139.511289,"lat":35.664159},{"station_cd":2400122,"station_g_cd":2400122,"station_name":"多磨霊園","lon":139.502615,"lat":35.666197},{"station_cd":2400123,"station_g_cd":2400123,"station_name":"東府中","lon":139.495257,"lat":35.668766},{"station_cd":2400124,"station_g_cd":2400124,"station_name":"府中","lon":139.479900,"lat":35.672245},{"station_cd":2400125,"station_g_cd":1130321,"station_name":"分倍河原","lon":139.468798,"lat":35.668493},{"station_cd":2400126,"station_g_cd":2400126,"station_name":"中河原","lon":139.457602,"lat":35.659549},{"station_cd":2400127,"station_g_cd":2400127,"station_name":"聖蹟桜ヶ丘","lon":139.446979,"lat":35.650814},{"station_cd":2400128,"station_g_cd":2400128,"station_name":"百草園","lon":139.431285,"lat":35.657362},{"station_cd":2400129,"station_g_cd":2400129,"station_name":"高幡不動","lon":139.412953,"lat":35.662361},{"station_cd":2400130,"station_g_cd":2400130,"station_name":"南平","lon":139.392008,"lat":35.654559},{"station_cd":2400131,"station_g_cd":2400131,"station_name":"平山城址公園","lon":139.379926,"lat":35.647371},{"station_cd":2400132,"station_g_cd":2400132,"station_name":"長沼","lon":139.365849,"lat":35.642788},{"station_cd":2400133,"station_g_cd":2400133,"station_name":"北野","lon":139.354489,"lat":35.644479},{"station_cd":2400134,"station_g_cd":2400134,"station_name":"京王八王子","lon":139.343851,"lat":35.657416}]}
  res.send(data)});

module.exports = router;
```
