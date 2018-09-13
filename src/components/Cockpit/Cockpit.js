import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1 className="App-title">Welcome to React</h1>
            <button onClick={props.click}>Toggle Names</button>
        </div>
    );
}

export default cockpit;