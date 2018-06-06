import React, { Component } from 'react';
// Componentはreactに入っているライブラリ

import Greeting from './greeting';

class App extends Component {
  render() {
    return (<Greeting name="jhon" />);
  }
}

export default App;
// 外からインポートできるように
