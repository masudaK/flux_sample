import React, { Component } from 'react';
import CounterApp from './CounterApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

// 特定のstoreではなく、「すべての」ストアを登録する
const redux = createRedux(stores);

// 大枠を作成
export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <CounterApp />}
      </Provider>
    );
  }
}
