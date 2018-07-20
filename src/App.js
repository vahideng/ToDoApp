import React, { Component } from "react";
import Container from "./container";

class App extends Component {
  state = {
    persons: [],
    showPerson: false
  };

  render() {
    return (
      <div className={'body'}>
        <Container />
      </div>
    );
  }
}

export default App;
