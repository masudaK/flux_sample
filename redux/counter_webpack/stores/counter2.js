import { INCREMENT_COUNTER2, DECREMENT_COUNTER2 } from '../constants/ActionTypes';

// このファイルがないと、そもそも値が表示されない
// stateを受け取って、次のstateを返している。ただそれだけ。
export default function counter2(state = 0, action) {
  console.log('in counter2 store') // これは呼ばれず、store1が呼ばれてる
  switch (action.type) {
  case INCREMENT_COUNTER2:
    return state + 1;
  case DECREMENT_COUNTER2:
    return state - 1;
  default:
    return state;
  }
}
