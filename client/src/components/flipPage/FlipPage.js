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
                    <figure className="front">Page 10</figure>
                </div>
                <div className="right">
                    <figure className="back">Page 9</figure>
                    <figure className="front">Page 8</figure>
                </div>
                <div className="right">
                    <figure className="back">Page 7</figure>
                    <figure className="front">Page 6</figure>
                </div>
                <div className="right">
                    <figure className="back">Page 5</figure>
                    <figure className="front">Page 4</figure>
                </div>

                <div className="right">
                    <figure className="back">Page 3
                    </figure>
                    <figure className="front">
                        <div className="container">
                            <img src="../img/rightindex.png" width="100%" height="680px" />
                            <p id="indexText">
                                This Book Belongs Too: <br />
                                <input value="" id="first_name2" type="text" className="validate" />
                                <NamePage />
                            </p>
                        </div>
                    </figure>
                </div>

                <div className="right">
                    <figure className="back">
                        <div className="container">
                            <img src="../img/leftindex.png" width="100%" height="680px" />
                        </div>
                    </figure>
                    <figure className="front" id="cover">
                        <div className="container">
                            <img src="../img/cover2.png" width="105%" height="680px" />
                            <p id="coverText">
                                A Day At The Zoo
                            </p>
                        </div>
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