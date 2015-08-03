import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER2, INITIALIZE_COUNTER, INITIALIZE_COUNTER2 } from '../constants/ActionTypes';
var request = require('superagent');

// componentsでpropTypesで定義されたのち、componentDidMountやJSXコード上で呼び出されているメソッドたち
// これらに応じて、storeのメソッドが戻り値を返している。
// storeのメソッドは必ず実行されてしまうので、定数を渡して、CASEで分岐しなければならない。
// そのために、ここで定数を渡している。
export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export function increment2() {
  console.log('in increment2 action')
  return {
    type: INCREMENT_COUNTER2
  };
}


export function initialize() {
  console.log('initialize action');
  return {
    type: INITIALIZE_COUNTER
  };
}

// AJAXで初期値を取得する場合
// コールバックを使って、戻り値をdispatchしている。
// その場合は、returnしなくていい模様。
export function initialize2() {
  console.log('initialize2 action');
  return dispatch => {
    request.get('./data.json').end((err, res) => {
      if (err || res.error) {
        // エラーの場合はvalue: 0でリターン
        dispatch(
          {
            type: INITIALIZE_COUNTER2,
            value: value
          }
        );
      }
      // うまくいったらストアに渡す
      console.log('ajax success');
      dispatch(
        {
          type: INITIALIZE_COUNTER2,
          value: res.body.count
        }
      );

    });
  };

}
