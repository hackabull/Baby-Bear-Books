import React, { Component } from 'react';
import './components/dragndrop/App.css';
import './index';
import FlipPage from './components/flipPage/FlipPage.js';
import banana from "./components/image/banana.png"
import hotdog from "./components/image/hotdog.png"
import coffee from "./components/image/coffee.png"
import fish from "./components/image/fish.png"
import leaves from "./components/image/leaves.png"
import shrimp from "./components/image/shrimp.png"
import steak from "./components/image/steak.png"
import watermelon from "./components/image/watermelon.png"

const initialTasks = [
  { name: "fish", category: "readyItem", bgimage: fish },
  { name: "hotdog", category: "readyItem", bgimage: hotdog },
  { name: "banana", category: "readyItem", bgimage: banana },
  { name: "leaves", category: "readyItem", bgimage: leaves },
  { name: "shrimp", category: "readyItem", bgimage: shrimp },
  { name: "coffee", category: "readyItem", bgimage: coffee },
  { name: "steak", category: "readyItem", bgimage: steak },
  { name: "watermelon", category: "readyItem", bgimage: watermelon }
]

class App extends Component {
  state = {
    tasks: initialTasks,
  }

// sets event for dragging items
  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }
// makes items draggable
  onDragOver = (ev) => {
    ev.preventDefault();
  }
// on drop changes state of category to dropped
  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
        return task;
      });
      this.setState({
        ...this.state,
        tasks
      });
    }

// changes state back to readyItem of category when next or prev button clicked
  handleClick = () => {
    const tasks = this.state.tasks.map(t => {
      t.category = "readyItem";
        return t;
    })
    this.setState({tasks})
  };

  render() {
    var tasks = {
      readyItem: [],
      dropped: []
    }
// sets the state of dragged items 
    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          id={t.name}
        >
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h2 className="header">Baby Bear Books Presents:</h2>
          <div className="readyItem"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => { this.onDrop(e, "readyItem") }}>
            {tasks.readyItem}
          </div>
          <FlipPage pageTurn={this.handleClick} />
          <div className="droppable"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "dropped")}>
            <span className="task-header"></span>
            {tasks.dropped}
          </div>
      </div>
    );
  }
}

export default App;