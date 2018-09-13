import React, {Component} from 'react';

class Input extends Component {
    render(){
        return(
            <div className='Input'>
                <input onChange={this.props.change} value={this.props.inputVal}></input>
                <p>Length is {this.props.inputVal.length}</p>
            </div>
        );
    }
}

export default Input;