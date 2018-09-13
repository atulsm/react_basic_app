import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../../components/Persons/Persons'
import Cockpit from '../../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: '111', name: 'Atul', age: 35, body: 'My hobbies include basketball' },
      { id: '222', name: 'Anjana', age: 35 },
      { id: '333', name: 'Alen', age: 9 },
      { id: '444', name: 'Evan', age: 7 }
    ],
    showNames: false
  };

  toggleNameHandler = () => {
    this.setState({ showNames: !this.state.showNames });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
    if (this.state.showNames) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            change={this.nameChangeHandler}>
          </Persons>
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit click={this.toggleNameHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
