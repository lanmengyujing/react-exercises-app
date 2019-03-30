import React, { Component } from 'react';
import './App.css';
import MousePosition from './MousePosition';
import Avatar from './Avatar/View';
import ImageViewer from './ImageViewer';
import Drawing from './Drawing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Drawing/>
        <Avatar/>
        <ImageViewer/>
        <MousePosition/>
        </header>
      </div>
    );
  }
}

export default App;
