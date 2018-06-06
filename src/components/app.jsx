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

  handleMouseOver() {
    this.setState({ name: 'Bob' });
  }

  handleMouseOut() {
    this.setState({ name: 'Mike' });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onFocus={() => undefined}
        onMouseOut={() => this.handleMouseOut()}
        onBlur={() => undefined}
      >
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
// 外からインポートできるように
