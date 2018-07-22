import React, { Component } from "react";
import Person from "./Person/Person";
import "./container.css";

class items extends Component {
  state = {
    noteText: " ",
    note: []
  };

  eventHandler = event => {
    this.setState({ noteText: event.target.value });
  };

  toDoAdd = () => {
    if (this.state.noteText === " ") return;
    const newArr = [...this.state.note];
    newArr.push(this.state.noteText);
    this.setState({ noteText: "", note: newArr });
  };

  deleteHandler = key => {
    const list = [...this.state.note];
    list.splice(key, 1);
    this.setState({ note: list });
  };

  toDos = () => {
    if(this.state.note==="") return;
    return this.state.note.map((val, key) => {
      return (
        <Person key={key} text={val} delete={() => this.deleteHandler(key)} />
      );
    });
  };

  render() {
    return (
      <div>
         <nav>
          <a className="active" href="./"> Home</a>
          <a href="./"> To Do APP</a>
          <a  className={'float-right active'} href='./'>About </a>
        </nav>
        
        <div className={'Wrapper'}>React ToDo Application </div>
        <input
          className={"input-class"}
          type="text"
          value={this.state.noteText}
          onChange={this.eventHandler}
        />
        <button className={"button-class"} type="submit" onClick={this.toDoAdd}>
          Add
        </button>
          <div>{this.toDos()}</div>
        
      </div>
    );
  }
}

export default items;
