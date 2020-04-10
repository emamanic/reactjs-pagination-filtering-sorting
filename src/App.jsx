import React, { Component } from 'react';
import Movies from './components/Movies';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Movies />
      </div>
    );
  }
}

export default App;
