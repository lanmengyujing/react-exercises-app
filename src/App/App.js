import React, { Component } from 'react';
import './App.css';
import MousePosition from './MousePosition';
import Avatar from './Avatar/View';
import ImageViewer from './ImageViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Avatar/>
        <ImageViewer/>
        <MousePosition/>
        </header>
      </div>
    );
  }
}

export default App;
