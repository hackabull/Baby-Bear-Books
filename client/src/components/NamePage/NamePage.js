import React, { Component } from "react";
import "./NamePage.css";
import axios from "axios";

class NamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        console.log(this.state.value);
        event.preventDefault();

        //needs to receive it as an object
        axios({
            method: 'post',
            url: "user/signup",
            name: this.state.value
        })
        
    
    };
        
    render() {
        return (
        <div className="container">

            {/* <div className="input-field col s6">
                <input value="" id="first_name2" type="text" className="validate" />
            </div> */}

            <div className="container">
                <img src="../img/rightindex.png" width="100%" height="680px" />
                <p id="indexText">
                    This Book Belongs To: <br />
                    <form onSubmit={this.handleSubmit}>
                        <input id="nametext" type="text" value={this.state.value} onChange={this.handleChange} />
                        <input id="submit" type="submit" value="Submit" />
                    </form>
                </p>
            </div>

            {/* <div className="bird-container bird-container--one">
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
            </div> */}
        </div>
        );
    }
}

export default NamePage