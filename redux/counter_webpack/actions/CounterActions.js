import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER2 } from '../constants/ActionTypes';

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
  console.log('in increment2 action') // これは呼ばれてた
  return {
    type: INCREMENT_COUNTER2
  };
}
