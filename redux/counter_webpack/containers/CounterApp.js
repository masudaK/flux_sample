import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

// containers/App.jsから呼ばれている。

// ここ定義すると、Counterタグでcounter={counter}として{}が使え、ステートを持たせることができる。
@connect(state => ({
  counter: state.counter,
}),
        state2 =>(
  counter2: state2.counter2
        )
        )
export default class CounterApp extends Component {
  render() {
    const { counter, dispatch, counter2 } = this.props;
    return (
      <div>
        <Counter counter={counter} counter2={counter2}
                 {...bindActionCreators(CounterActions, dispatch)} />
      </div>
    );
  }
}
