import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Outro from "./components/pages/Outro";
import './index.css';
import FlipPage from './components/flipPage/FlipPage.js';




class App extends Component {
  render() {
    return (
      <div className="container-fluid">

      <Router>
        <Route exact path="/outro" component={Outro} />
      </Router>

      <FlipPage />

      </div>
    );
  }
}

export default App;
