import React, { Component } from 'react';
// Componentはreactに入っているライブラリ

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  render() {
    return (
      <div>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
// 外からインポートできるように
