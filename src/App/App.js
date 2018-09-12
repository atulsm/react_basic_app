import React, { Component } from 'react';
import './App.css';
import Person from '../Person/Person'

class App extends Component {
  state = {
    persons: [
      {id:'111', name: 'Atul', age: 35, body: 'My hobbies include basketball'},
      {id:'222', name: 'Anjana', age: 35},
      {id:'333', name: 'Alen', age: 9},
      {id:'444', name: 'Evan', age: 7}
    ],
    showNames: false
  };

  toggleNameHandler = () => {
    this.setState({showNames: !this.state.showNames});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState( {persons: persons});
  }

  nameChangeHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState( {persons: persons});
  }

  render() {
    let persons = null;
    if(this.state.showNames){
      persons = (
        <div>     
          {this.state.persons.map( (person, index) => {
            return <Person 
              key={person.key}
              name={person.name} 
              age={person.age} 
              click = {() => this.deletePersonHandler(index)}
              change = {(event) => this.nameChangeHandler(event, index)}>
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
