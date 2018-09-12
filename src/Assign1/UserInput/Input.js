import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
    render(){
        return (
            <div className='Input'>
                <input onChange={this.props.change} value={this.props.username} />
            </div>
        );
    }

}

export default Input;