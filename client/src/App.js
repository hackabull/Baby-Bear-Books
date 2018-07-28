import React, { Component } from 'react';
import './index';
import FlipPage from './components/flipPage/FlipPage.js';
import DragDrop from './components/dragndrop/DragDrop';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <FlipPage />
        <DragDrop />
      </div>
    );
  }
}

export default App;