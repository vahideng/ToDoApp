import React, { Component } from "react";
import Person from "./Person/Person";
import "./container.css";
import "./Person.css";
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
    console.log(newArr);

    newArr.push(this.state.noteText);
    console.log(newArr, "dovomi");

    this.setState({ noteText: "", note: newArr });
  };

  deleteHandler = key => {
    const list = [...this.state.note];
    list.splice(key, 1);
    this.setState({ note: list });
  };

  toDos =()  => { 
    console.log(1);
    
    return this.state.note.map((val, key) => {
    return (
      <Person key={key} text={val} delete={() => this.deleteHandler(key)} />
    );
  })}

  render() {
    return (
      <div className={"Wrapper"}>
        React ToDo Application
        <input
          className={"TextInput"}
          type="text"
          value={this.state.noteText}
          onChange={this.eventHandler}
        />
        <button className={"Button"} type="submit" onClick={this.toDoAdd}>
          Add
        </button>
        <div className={"Person"}>
          <ul>
               {this.toDos()}
          </ul>
        </div>
      </div>
    );
  }
}

export default items;
