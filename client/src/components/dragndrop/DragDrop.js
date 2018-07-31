import React, { Component } from 'react';
import './App.css';
import banana from "../image/banana.png"
import hotdog from "../image/hotdog.png"
import coffee from "../image/coffee.png"
import fish from "../image/fish.png"
import leaves from "../image/leaves.png"
import shrimp from "../image/shrimp.png"
import steak from "../image/steak.png"
import watermelon from "../image/watermelon.png"


export default class DragDrop extends Component {
    //lines 10-14 need to go in app.js & just called here
    state = {
        tasks: [
            {name:"fish", category:"readyItem", bgimage: fish},
            {name:"hotdog", category:"readyItem", bgimage: hotdog},
            {name:"banana",category:"readyItem", bgimage: banana},
            {name:"leaves", category:"readyItem", bgimage: leaves},
            {name:"shrimp", category:"readyItem", bgimage: shrimp},
            {name:"coffee", category:"readyItem", bgimage: coffee},
            {name:"steak", category:"readyItem", bgimage: steak},
            {name:"watermelon", category:"readyItem", bgimage: watermelon}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }
    
    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name === id) {
               task.category = cat;
           }
           return task;
       });

       //needs to go in app.js and passed as props this.props.nameOfFunction() -- in app.js they will be state
       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            readyItem: [],
            dropped: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    id = {t.name}
                >
                {/* <img src={hello1} alt="hello"/> */}
                </div>
            );
        });

        // return (
        //     <div className="container-drag">
        //         <h2 className="header">Baby Bear Books Presents:</h2>
        //         <div className="readyItem"
        //             onDragOver={(e)=>this.onDragOver(e)}
        //             onDrop={(e)=>{this.onDrop(e, "readyItem")}}>
        //             <span className="task-header" id="dragMe">Drag Me!</span>
        //             {tasks.readyItem}
        //         </div>
        //         <div className="droppable" 
        //             onDragOver={(e)=>this.onDragOver(e)}
        //             onDrop={(e)=>this.onDrop(e, "dropped")}>
        //             <span className="task-header"></span>
        //             {tasks.dropped}
        //         </div>
        //     </div>
        // );
    }
}
