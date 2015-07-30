# flux_sample
There are a sample codes taken from upstream and some comment for well understanding but japanese.

## 動作確認

```
$ cd redux/counter
$ npm i
$ npm start

localhost:3000
で確認
```

## 学習
ソースコードを見る順番は、以下をオススメします。

### redux/counter
- containers/App.js
- containers/CounterApp.js
- components/Counter.js
- actions/CounterActions.js
- stores/counter.js

流れとしては、

- containerで大枠を作り、componentsでパーツを作る
- componentsのなかで、actionにあるメソッドが呼び出され、
- それらがストアにあるメソッドを呼び、stateを変えている
- containersで全storeを監視しているので、それらが反映される仕組みになっている

と理解しています。間違いがあれば、訂正頂けると助かります。

### より理解を深めるために
- [人気のFluxフレームワークReduxをさわってみた](http://amagitakayosi.hatenablog.com/entry/2015/07/30/000000
)
