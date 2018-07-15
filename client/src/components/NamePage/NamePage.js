import React from "react";
import "./NamePage.css";
import "./NamePage.scss";

class NamePage extends Component {
    render() {
        return
        <div clasName="container">
            <h1>My name is</h1>
            <div className="input-field col s6">
                {/* <input value="" id="first_name2" type="text" className="validate" style="text-align: center"> */}
            </div>
            <h1>and today I'm going to the Zoo!</h1>

            <div class="bird-container bird-container--one">
                <div class="bird bird--one"></div>
            </div>

            <div class="bird-container bird-container--two">
                <div class="bird bird--two"></div>
            </div>

            <div class="bird-container bird-container--three">
                <div class="bird bird--three"></div>
            </div>

            <div class="bird-container bird-container--four">
                <div class="bird bird--four"></div>
            </div>
        </div>
    }
}

export default NamePage