import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER2, DECREMENT_COUNTER2 } from '../constants/ActionTypes';

// stateを受け取って、次のstateを返している。ただそれだけ。
export default function counter(state = 0, action) {
  console.log('in counter store')
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}
