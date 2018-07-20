import React, { Component } from 'react';
import './App.css';


export default class AppDragDropDemo extends Component {
    state = {
        tasks: [
            {name:"animal",category:"readyItem", bgcolor: "yellow"},
            {name:"letters", category:"readyItem", bgcolor:"blue"},
            {name:"numbers", category:"readyItem", bgcolor:"green"}
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
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

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
                    style = {{backgroundColor: t.bgcolor}}
                >

                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">Baby Bear Books</h2>
                <div className="readyItem"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "readyItem")}}>
                    <span className="task-header">Drag Me!</span>
                    {tasks.readyItem}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "dropped")}>
                    <span className="task-header"></span>
                    {tasks.dropped}
                </div>
            </div>
        );
    }
}