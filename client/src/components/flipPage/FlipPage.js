import React, { Component } from "react";
import './FlipPage.css';



var right = document.getElementsByClassName("right");
    var si = right.length;
    var z=1;



class FlipPage extends Component {
turnRight()
  {
      if(si>=1){
          si--;
      }
      else{
          si=right.length-1;
          function sttmot(i){
              setTimeout(function(){right[i].style.zIndex="auto";},300);
          }
          for(var i=0;i<right.length;i++){
              right[i].className="right";
              sttmot(i);
              z=1;
          }
      }
      right[si].classList.add("flip");
      z++;
      right[si].style.zIndex=z;
  }
   turnLeft()
  {
      if(si<right.length){
          si++;
      }
      else{
          si=1;
          for(var i=right.length-1;i>0;i--){
              right[i].classList.add("flip");
              right[i].style.zIndex=right.length+1-i;
          }
      }
      right[si-1].className="right";
      setTimeout(function(){right[si-1].style.zIndex="auto";},350);
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
             <figure className="front"></figure>
         </div>
         <div className="right">
             <figure className="back">
             <p>isn't that cool?</p>
             </figure>
             
             <figure className="front">
                <h2>Book Heading</h2>
            </figure>
         </div>
         <div className="right">
             <figure className="back"></figure>
             <figure className="front" id="cover">
                 <h1>Book Title</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, modi.</p>
             </figure>
         </div>
     </div>
     <button onClick={this.turnLeft}>Prev</button> <button onClick={this.turnRight}>Next</button>
     <br/>

 
 </div> 



  }
}

export default FlipPage
