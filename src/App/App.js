import React, { Component } from 'react';
import './App.css';
import MousePosition from './MousePosition';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <MousePosition/>
        </header>
      </div>
    );
  }
}

export default App;
