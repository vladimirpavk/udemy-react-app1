import React, { Component } from 'react';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(){
    super();
      this.state = {
        persons: [
          { id: 'asfa1', name: 'Max', age: 28 },
          { id: 'vasdf1', name: 'Manu', age: 29 },
          { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }  
  }

  nameChangedHandler = ( value, personId ) => {
    //console.log(value, personId);
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === personId
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personId ) => {
    //const persons = this.state.persons.slice();
    const personIndex = this.state.persons.findIndex(
      (person)=>person.id === personId
    );
    /* console.log(personIndex); */

    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = <Persons 
        persons={this.state.persons}
        deleteHandler={this.deletePersonHandler}
        changedHandler={this.nameChangedHandler}
      />

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if ( this.state.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join( ' ' )}>This is really working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
