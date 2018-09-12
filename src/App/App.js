import React, { Component } from 'react';
import './App.css';
import App1 from '../App1/App1'
import Person from '../Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Atul', age: 35, body: 'My hobbies include basketball'},
      {name: 'Anjana', age: 35},
      {name: 'Alen', age: 9},
      {name: 'Evan', age: 7}
    ]
  };

  switchNameHandler = (newName) => {
    // Dont do this => this.state.persons[0].name = "NameSwitched";
    this.setState( {persons: [
      {name: newName, age: 35, body: 'My hobbies include basketball'},
      {name: 'Anjana', age: 35},
      {name: 'Alen', age: 8},
      {name: 'Evan', age: 7}
    ]});
  }

nameChangeHandler = (event) => {
    // Dont do this => this.state.persons[0].name = "NameSwitched";
    this.setState( {persons: [
      {name: 'Atul', age: 35, body: 'My hobbies include basketball'},
      {name: event.target.value, age: 35},
      {name: 'Alen', age: 8},
      {name: 'Evan', age: 7}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>

        <App1 />

        <button onClick={ () => this.switchNameHandler('Atul Soman!') }>Switch Name</button>
             
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Atul!')}>
          {this.state.persons[0].body}
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          change={this.nameChangeHandler}>
          {this.state.persons[1].body}
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
          {this.state.persons[2].body}
        </Person>
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age}>
          {this.state.persons[3].body}
        </Person>


     </div>
    );
  }
}

export default App;
