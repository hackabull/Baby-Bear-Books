import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Outro from "./components/pages/Outro";
import './index.css';
import FlipPage from './components/flipPage/FlipPage.js';
import AppDragDropDemo from './components/dragndrop/AppDragDropDemo'



class App extends Component {
  render() {
    return (
      <div className="container-fluid">

{/* This is where routes where will go */}
      <Router>
        <Route exact path="/outro" component={Outro} />
      </Router>


 <AppDragDropDemo />
   
     


      </div>
    );
  }
}

export default App;
