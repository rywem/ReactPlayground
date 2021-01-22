import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Max", age: 28 },
      { id: '2',  name: "Mike", age: 34 },
      { id: '3', name: "Jane", age: 30 }
    ], 
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find(p => {
      return p.id === id;
    });

    const person = personIndex;
 
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = [classes.Button]

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return (
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                 />
            )
          })}          
        </div>       
      );
      
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    
    
    return (      
        <div className={classes.App}>
          <h1>Hi, I'm React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>      
            {persons}
        </div>      
    );
  }
}

export default App;