import React, { Component } from "react";
import './FlipPage.css';
import NamePage from '../NamePage/NamePage.js'


var right = document.getElementsByClassName("right");
var si = right.length;
var z = 1;



class FlipPage extends Component {
    turnRight() {
        if (si >= 1) {
            si--;
        }
        else {
            si = right.length - 1;
            function sttmot(i) {
                setTimeout(function () { right[i].style.zIndex = "auto"; }, 300);
            }
            for (var i = 0; i < right.length; i++) {
                right[i].className = "right";
                sttmot(i);
                z = 1;
            }
        }
        right[si].classList.add("flip");
        z++;
        right[si].style.zIndex = z;
    }   
    turnLeft() {
        if (si < right.length) {
            si++;
        }
        else {
            si = 1;
            for (var i = right.length - 1; i > 0; i--) {
                right[i].classList.add("flip");
                right[i].style.zIndex = right.length + 1 - i;
            }
        }
        right[si - 1].className = "right";
        setTimeout(function () { right[si - 1].style.zIndex = "auto"; }, 350);
    }


    render() {
        return <div className="book-section">
            <div className="container">
                <div className="right">
                    <figure className="back" id="back-cover"></figure>
                    <figure className="front"></figure>
                </div>
                <div className="right">
                    <figure className="back"></figure>
                    <figure className="front"></figure>
                </div>
                <div className="right">
                    <figure className="back"></figure>
                    <figure className="front"></figure>
                </div>
                <div className="right">
                    <figure className="back"></figure>
                    <figure className="front">
                    </figure>
                </div>

                <div className="right">
                    <figure className="back">
                        <br />
                        <NamePage />
                        <img className="gif1" src="https://img00.deviantart.net/31bf/i/2011/177/f/e/game_background_concept_by_legacyofpiracy-d3k3a4k.jpg" />
                        <h2>My name is</h2>
                        <h3>and today I'm going to the Zoo!</h3>
                    </figure>
                </div>

                <div className="right">
                    <figure className="back">
                        <h2>Book Heading</h2>
                    </figure>
                </div>

                <div className="right">
                    <figure className="back"></figure>
                    <figure className="front" id="cover">
                        {/* <img src="../img/coverpage.png" width="100%" height="100%" />  */}
                        <div className="container" id="coverPage">
                            <img src="../img/cover.png" width="105%" height="680px"/>
                            <p className="centered">
                                A Day At the
                            </p>
                        </div>
                    </figure>
                </div>


         <div className="right">
             <figure className="back">
             <br />
             <NamePage />
             <img className="gif1" src="https://img00.deviantart.net/31bf/i/2011/177/f/e/game_background_concept_by_legacyofpiracy-d3k3a4k.jpg" alt="welcome to the zoo" />
             <h2>My name is</h2>
             <h3>and today I'm going to the Zoo!</h3>
             </figure>
             
             <figure className="front">
             <h2>Book Heading</h2>
             
            </figure>
         </div>
         <div className="right">
             <figure className="back"></figure>
             <figure className="front" id="cover">
             <img src="../img/coverpage.png" width="100%" height="100%" alt="cover page zoo" /> 
         </figure>
         </div>
            </div>


            <div className="btncontainer">
                <button className="turnbtn" onClick={this.turnLeft}>Prev</button> <button className="turnbtn" onClick={this.turnRight}>Next</button>
            </div>
        </div>
    }
}
export default FlipPage