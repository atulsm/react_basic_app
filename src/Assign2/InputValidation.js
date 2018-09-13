import React, {Component} from 'react';

class InputValidation extends Component {
    render(){
        let text = null;
        if (this.props.inputLength > 5) {
            text = "Length is too long";
        }else if (this.props.inputLength < 5){
            text = 'Length is too short';
        }

        return(
            <div className='InputValidation'>
                <p>{text}</p>
            </div>
        );
    }
}

export default InputValidation;