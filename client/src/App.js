import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index';
import FlipPage from './components/flipPage/FlipPage.js';
import AppDragDropDemo from './components/dragndrop/AppDragDropDemo';
import NamePage from './components/NamePage/NamePage';
import Intro from "./components/pages/Intro";
// import Page1 from "./components/pages/Page1";
// import Page2 from "./components/pages/Page2";
// import Page3 from "./components/pages/Page3";
import Outro from "./components/pages/Outro";




>>>>>>> logInPage

class App extends Component {
  render() {
    return (
      <div className="container-fluid">

{/* This is where routes where will go */}
      <Router>
        <Switch>
          <div className="routes">
          {/* 6 total routes with path and component */}
            <Route exact path="/" component={NamePage} />
            <Route exact path="/intro" component={Intro} />
            {/* <Route exact path="/page1" component={Page1} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/page3" component={Page3} /> */}
            <Route exact path="/outro" component={Outro} />
          </div>
        </Switch>  
      </Router>

 <FlipPage />
 <AppDragDropDemo />

     


      </div>
    );
  }
}

export default App;
