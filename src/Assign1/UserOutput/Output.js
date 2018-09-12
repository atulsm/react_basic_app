import React, {Component} from 'react';
import './Output.css';

class Output extends Component{
    render(){
        return (
            <div className='Output'>
                <p>{this.props.username}</p>
                <p>Para2</p>
            </div>
        );
    }

}

export default Output;