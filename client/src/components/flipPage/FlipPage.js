import React, { Component } from "react";
import './FlipPage.css';
import NamePage from '../NamePage/NamePage.js'
import Birds from '../birds/birds.js'
import axios from "axios";

var right = document.getElementsByClassName("right");
var si = right.length;
var z = 1;

class FlipPage extends Component {
    props;
    constructor(props) {
        super(props);
        this.state = {
            nameOfUser: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({ nameOfUser: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.nameOfUser);
        //needs to receive it as an object
        axios.post("/user/signup", 
            { name: this.state.nameOfUser }
        ).then(
            () => this.signUpUser()
        );
        
      
    }

    turnRight = () => {
        this.props.pageTurn();
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
    turnLeft = () => {
        this.props.pageTurn();
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

    signUpUser = () => {
        axios.get("/user/signup")
    
        .then( (response)=> {
            // console.log("I get here");
            // console.log("this", this);
            // console.log("response", this.response)
            
        })
    };

    render() {
        return (
    
            <div className="book-section">
                <div className="container">
                    <div className="right">
                        <figure className="back" id="back-cover"></figure>
                        <figure className="front">
                            <div className="container">
                                <img src="../img/endpageright.png" width="100%" height="680px" alt="end-page-right" />
                                <p id="endpageRightText">
                                    Dummy Text
                                </p>
                            </div>
                        </figure>
                    </div>
                    <div className="right">
                        <figure className="back">
                            <div className="container">
                                <img src="../img/endpageleft.png" alt="endpage-left" width="100%" height="680px" />
                                <p id="endpageLeftText">
                                    Dummy Text
                                </p>
                            </div>
                        </figure>
                        {/* <figure className="front">
                            <div className="container">
                                <img src="../img/parrotright.png" width="100%" height="680px" />
                                <p id="parrotRightText">
                                    Dummy Text
                                </p>
                            </div>
                        </figure>
                    </div>
                    <div className="right">
                        <figure className="back">
                            <div className="container">
                                <img src="../img/parrotleft.png" width="100%" height="680px" />
                                <p id="parrotLeftText">
                                    Dummy Text
                                </p>
                            </div>
                        </figure> */}
                        <figure className="front">
                            <div className="container">
                                <img src="../img/lionright.png" alt="lion-right" width="100%" height="680px" />
                                <p id="lionRightText">
                                    Dummy Text
                                </p>
                            </div>
                        </figure>
                    </div>
                    <div className="right">
                        <figure className="back">
                            <div className="container">

                                <img src="../img/lionleft.png" alt="lion-left" width="100%" height="680px" />
                                <p id="lionLeftText">
                                    Dummy Text
                                </p>
                            </div>
                        </figure>
                        <figure className="front">
                            <div className="container">
                                <img src="../img/girafferight.png" alt="giraffe-right" width="100%" height="680px" />
                                <p id="giraffeRightText">
                                    Dummy Text
                                </p>
                            </div>
                        </figure>
                    </div>
                    <div className="right">
                        <figure className="back">
                            <div className="container">
                                <img src="../img/giraffeleft.png" alt="giraffe-left" width="100%" height="680px" />
                                <p id="giraffeLeftText">
                                    Dummy Text
                                </p>
                            </div>
                        </figure>
                        <figure className="front">
                            <div className="container">
                                <img src="../img/elephantright2.png" alt="elephant-right" width="100%" height="680px" />
                                <p id="elephantRightText">
                                    What fruit should we give these Elephants to eat?
                                </p>
                            </div>
                        </figure>
                    </div>
                    <div className="right">
                        <figure className="back">
                            <div className="container">
                                <img src="../img/elephantleft2.png" alt="elephant-left" width="100%" height="680px" />
                                <p id="elephantLeftText">
                                    Elephants are extremely intelligent creatures. With elongated tusks and trunks for high reaches. They sure do enjoy fruit as a treat.
                                </p>
                            </div>
                        </figure>
                        <figure className="front">
                            <div className="container">
                                <img src="../img/alligatorright.png" alt="alligator-right" width="100%" height="680px" />
                                <p id="flamingoRightText1">
                                    Flamingos stand tall with vibrant pink feathers, a color they get from this ocean dweller. For flamingos they are a delicious treat.
                                </p>
                                <p id="flamingoRightText2">
                                    Can you guess what kind of sea creature they eat?
                                </p>
                            </div>
                        </figure>
                    </div>
                    <div className="right">
                        <figure className="back">
                            <div className="container">
                                <img src="../img/alligatorleft.png" alt="alligator-left" width="100%" height="680px" />
                                <p id="alligatorLeftText1">
                                    Alligators are deadly with jaws of steel. They need them to catch every meal. What would they eat if they had one wish?
                                </p>
                                <p id="alligatorLeftText2">
                                    Hmmm, I don't know, maybe some fish!
                                </p>
                            </div>
                        </figure>
                        <figure className="front">
                            <div className="container">
                                <img src="../img/monkeyright.png" alt="monkey-right" width="100%" height="680px" />
                                <p id="monkeyRightText">
                                    But what in <br />the world <br />
                                    do Monkeys eat?
                                </p>
                            </div>
                        </figure>
                    </div>
                    <div className="right">
                        <figure className="back">
                            <div className="container">
                                <img src="../img/monkeyleft.png" alt="monkey-left" width="100%" height="680px" />
                                <p id="monkeyLeftText">
                                    One monkey was swinging high up above, another one picking and eating some bugs. Mom said "They look hungry, let's give them a treat!"
                                </p>
                            </div>
                        </figure>
                        <figure className="front">
                            <div className="container">
                                <img src="../img/entranceright3.png" alt="entrance-right" width="100%" height="680px" />
                                <p id="entranceRightText">
                                    The Zoo is so big with so much to see, <br />
                                    they decided to start with the Monkeys.
                            </p>
                            </div>
                        </figure>
                    </div>

                    <div className="right">
                        <figure className="back">
                            <div className="container">
                                <img src="../img/entranceleft3.png" alt="entrance-left" width="100%" height="680px" />
                                
                                <p id="entranceLeftText">
                                    {/* can now use this across component */}
                                   {this.state.nameOfUser}'s family was bored with nothing to do, <br />
                                    so they decided to go to the Zoo.
                            </p>
                            </div>
                        </figure>   
                        <figure className="front">
                            <div className="container">
                                <NamePage userName={this.state.nameOfUser} handleNameChange={this.handleNameChange} handleSubmit={this.handleSubmit} />
                                 
                                <Birds />
                            </div>
                        </figure>
                    </div>

                    <div className="right">
                        <figure className="back">
                            <div className="container">
                                <Birds />
                                <img src="../img/leftindex2.png" alt="left-index" width="100%" height="680px" />
                            </div>
                        </figure>
                        <figure className="front" id="cover">
                            <div className="container">
                                <img src="../img/cover2.png" alt="cover" width="100%" height="680px" />
                                <p id="coverText">
                                    A Day At The Zoo
                            </p>
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="btncontainer">
                    <button className="turnbtn" 
                        onClick={this.turnLeft} 
                    >Prev</button> <button className="turnbtn" onClick={this.turnRight}
                    >Next</button>
                </div>
                <div className="user-name">
                </div>
            </div>
        );
    }
}


export default FlipPage