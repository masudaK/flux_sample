import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

// containers/App.jsから呼ばれている。

// ここ定義すると、Counterタグでcounter={counter}として{}が使え、ステートを持たせることができる。
@connect(state => ({
  counter: state.counter
}))
export default class CounterApp extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <Counter counter={counter}
               {...bindActionCreators(CounterActions, dispatch)} />
    );
  }
}
