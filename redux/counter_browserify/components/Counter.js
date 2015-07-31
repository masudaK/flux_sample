import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  // renderで描画するのはrefluxと変わらない。@connectでcounterを使いまわせるので、それを使いまわす。
  // ...bindActionCreators(CounterActions, dispatch)しているので、propsにincrementやdecrementが使える。
  // それらの定義はアクションを見ること。
  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
    );
  }
}
