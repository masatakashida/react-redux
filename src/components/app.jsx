import React, { Component } from 'react';
// Componentはreactに入っているライブラリ

import Greeting from './greeting';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting name="jhon" />
        <Greeting name="Bob" />
      </div>
    );
  }
}

export default App;
// 外からインポートできるように
