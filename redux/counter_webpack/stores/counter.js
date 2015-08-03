import { INCREMENT_COUNTER, DECREMENT_COUNTER, INITIALIZE_COUNTER } from '../constants/ActionTypes';

// stateを受け取って、次のstateを返している。
// メソッド名はなんでもよくて、必ず実行されてしまう。
// そのため、定数で分岐させるのが一般的らしい。
export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  case INITIALIZE_COUNTER:
    return 100;
  default:
    return state;
  }
}
