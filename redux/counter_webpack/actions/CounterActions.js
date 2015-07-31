import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER2, INITIALIZE_COUNTER, INITIALIZE_COUNTER2 } from '../constants/ActionTypes';
var request = require('superagent');

// componentsで呼び出されているメソッドたち
// これらに応じて、storeのメソッドが呼ばれている。
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
