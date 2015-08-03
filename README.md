# flux_sample
There are a sample codes taken from upstream and some comment for well understanding but japanese.

FluxやReduxの理解のために、サンプルコードとその説明を載せています。初学者のかたに向けて、流れを理解できるように書いています。

browserifyでビルドしたものと、webpackでビルドしたものがあります。package.json等に多少差異があります。説明を読みたい方はwebpackのほうをお読み下さい。

※ このレポジトリにソースコードのベースは[https://github.com/gaearon/redux/tree/master/examples/counter](https://github.com/gaearon/redux/tree/master/examples/counter)から持ってきたので、時間が経つとupstreamと差が出てしまう可能性があります。ご了承下さい。

## 動作確認

```
$ cd redux/counter_browserify
$ npm i
$ npm run build
$ npm start

localhost:3000
で確認

OR

$ cd redux/counter_webpack
$ npm i
$ npm start

localhost:3000
で確認
```

## 学習

### redux/counter
ソースコードを見る順番は、以下をオススメします。

- containers/App.js
- containers/CounterApp.js
- components/Counter.js
- actions/CounterActions.js
- stores/counter.js

流れとしては、

- containerで大枠を作り、componentsでパーツを作る
- componentsのなかで、actionにあるメソッドが呼び出され、
- その後ストアにあるメソッドが呼ばれる。それでstateを変えている。
- containersで全storeを監視しているので、viewとしてのcontainerにそれらが反映される仕組みになっている

と理解しています。間違いがあれば、訂正頂けると助かります。


### より理解を深めるために
- [人気のFluxフレームワークReduxをさわってみた](http://amagitakayosi.hatenablog.com/entry/2015/07/30/000000
)
- [Webフロントエンド最前線 ── 流行に踊らされない技術動向
【第4回】Webフロントエンドのモジュール管理 ……話題のBrowserifyと，RequireJS，webpack，duoを一挙紹介, WEB+DB PRESS Vol.84](http://gihyo.jp/magazine/wdpress/archive/2015/vol84)
- [Emerging Web Technology研究室【第12回】Reactによるフロントエンド開発の変革, WEB+DB PRESS Vol.86](http://gihyo.jp/magazine/wdpress/archive/2015/vol86)
- [Emerging Web Technology研究室【第13回】Flux ……フロントエンド開発の新しいアーキテクチャ, WEB+DB PRESS Vol.87](http://gihyo.jp/magazine/wdpress/archive/2015/vol87)