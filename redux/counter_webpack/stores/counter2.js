import { INCREMENT_COUNTER2, DECREMENT_COUNTER2, INITIALIZE_COUNTER2 } from '../constants/ActionTypes';

// stores/counter.js同様stateを受け取って、次のstateを返している
// このファイルがないと、そもそもcomponent側で値が表示されない
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
