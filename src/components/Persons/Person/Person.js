import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Hi this is {props.name}. My age is { props.age }</p>
            <p>{props.children}</p>
            <input onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;