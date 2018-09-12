import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>Hi this is {props.name}. My age is { props.age }</p>
            <p>{props.children}</p>
            <input onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;