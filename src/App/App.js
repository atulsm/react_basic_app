import React, { Component } from 'react';
import './App.css';
import Person from '../Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Atul', age: 35, body: 'My hobbies include basketball'},
      {name: 'Anjana', age: 35},
      {name: 'Alen', age: 9},
      {name: 'Evan', age: 7}
    ],
    showNames: false
  };

  toggleNameHandler = () => {
    this.setState({showNames: !this.state.showNames});
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index,1);
    this.setState( {persons: persons});
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
    let persons = null;
    if(this.state.showNames){
      persons = (
        <div>     
          {this.state.persons.map( (person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              click = {() => this.deletePersonHandler(index)}
              change = {this.nameChangeHandler}>
              {person.body}
              </Person>
          })
          }
      </div>
      );
    }

    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={ this.toggleNameHandler }>Toggle Names</button>
        <button onClick={ () => this.switchNameHandler('Atul Soman!') }>Switch Name</button>
        { persons }
     </div>
    );
  }
}

export default App;
