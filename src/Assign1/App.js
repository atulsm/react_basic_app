import React, {Component} from 'react';

import Input from './UserInput/Input';
import Output from './UserOutput/Output';


class App extends Component {
    state = {
        users: [
            {username: 'atul', fullname: 'Atul Soman'},
            {username: 'anjana', fullname: 'Anjana Paulose'},
        ]
    }

    changeUserNameHandler(event){
        this.setState({
            users: [
                {username: event.target.value, fullname: 'Atul Soman'},
                {username: 'anjana', fullname: 'Anjana Paulose'},
            ]
        });
    }

    render(){
        return (
        <div>
            <p>Assignment</p>
            <Input username={this.state.users[0].username} change={this.changeUserNameHandler.bind(this)}/>
            <Output username={this.state.users[0].username}/>
            <Output username={this.state.users[1].username}/>

        </div>
        );
    }
}

export default App;