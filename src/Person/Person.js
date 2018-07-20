import React from "react";


const person = props => <li onClick={props.delete}> {props.text} </li>


export default person;
