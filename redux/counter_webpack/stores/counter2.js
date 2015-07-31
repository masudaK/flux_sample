import { INCREMENT_COUNTER2, DECREMENT_COUNTER2, INITIALIZE_COUNTER2 } from '../constants/ActionTypes';

// このファイルがないと、そもそも値が表示されない
// stateを受け取って、次のstateを返している。ただそれだけ。
export default function counter2(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER2:
    return state + 1;
  case DECREMENT_COUNTER2:
    return state - 1;
  case INITIALIZE_COUNTER2:
    return action.value;
  default:
    return state;
  }
}
