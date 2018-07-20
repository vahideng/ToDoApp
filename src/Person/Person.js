import React from "react";
import "./Person.css";

const person = props => (
  <div className={"Person"}>
    <ul className={"ul"}>
      <li className={"li"} onClick={props.delete}>
        {props.text}
      </li>
    </ul>
  </div>
);

export default person;
