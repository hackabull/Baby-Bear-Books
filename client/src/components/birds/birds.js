import React, { Component } from "react";
import "./birds.css";
import "./birds.scss";
// this component sets up the birds container for birds flying acros the screen.
class Birds extends Component {

    render() {
        return (
        <div className="container">

            <div className="bird-container bird-container--one">
                <div className="bird bird--one"></div>
            </div>

            <div className="bird-container bird-container--two">
                <div className="bird bird--two"></div>
            </div>

            <div className="bird-container bird-container--three">
                <div className="bird bird--three"></div>
            </div>

            <div className="bird-container bird-container--four">
                <div className="bird bird--four"></div>
            </div>
        </div>
      );
    }
}

export default Birds