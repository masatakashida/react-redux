import React, { Component } from 'react';
// Componentはreactに入っているライブラリ

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
      </div>
    );
  }
}

export default App;
// 外からインポートできるように
