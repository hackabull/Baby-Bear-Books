import React, { Component } from "react";
import "./NamePage.css";
import "./NamePage.scss";

class NamePage extends Component {
    render() {
        return <div className="container">
           
            <div className="input-field col s6">
                {/* <input value="" id="first_name2" type="text" className="validate" style="text-align: center"> */}
            </div>
          

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
    }
}

export default NamePage