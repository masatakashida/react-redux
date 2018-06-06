import React, { Component } from 'react';
// Componentはreactに入っているライブラリ
import SearchForm from './SearchForm';

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
        <SearchForm />
      </div>
    );
  }
}

export default App;
// 外からインポートできるように
