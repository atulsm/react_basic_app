import React, {Component} from 'react';
import './CharComponent.css'

class CharComponent extends Component {
    render(){
        return(
            <div className='CharComponent'>
                <p onClick={this.props.remove}>{this.props.char}</p>
            </div>
        );
    }
}

export default CharComponent;