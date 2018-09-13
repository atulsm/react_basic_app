import React, { Component } from 'react';

import Input from './Input';
import InputValidation from './InputValidation';
import CharComponent from './CharComponent';

class App extends Component {
    state = {
        inputVal: '',
        inputlength: 0
    }

    changeHandler(event) {
        this.setState({
            inputVal: event.target.value,
            inputlength: event.target.value.length
        });
    }

    removeChar(index) {
        const val = this.state.inputVal.split('');
        val.splice(index, 1);
        const updatedVal = val.join('');

        this.setState({
            inputVal: updatedVal,
            inputlength: updatedVal.length
        });
    }

    render() {
        let charComps = null;
        charComps = (
            this.state.inputVal.split('').map((char, index) => {
                return <CharComponent key={index} char={char} remove={this.removeChar.bind(this, index)} />
            })
        );

        return (
            <div>
                <Input inputVal={this.state.inputVal} change={this.changeHandler.bind(this)} />
                <InputValidation inputLength={this.state.inputlength} />
                {charComps}
            </div>
        );
    }
}

export default App;