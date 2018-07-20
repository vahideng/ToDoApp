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
    const newArr = this.state.note;
    newArr.push(this.state.noteText);
    this.setState({ noteText: "" });
  };

  deleteHandler = key => {
    const list = [...this.state.note];
    list.splice(key, 1);
    this.setState({ note: list });
  };

  render() {
    let notes = this.state.note.map((val, key) => {
      return (
        <Person key={key} text={val} delete={() => this.deleteHandler(key)} />
      );
    });
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
        {notes}
      </div>
    );
  }
}

export default items;
