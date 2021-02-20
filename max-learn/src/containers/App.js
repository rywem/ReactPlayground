import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Person from '../components/Persons/Person/Person';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: "Max", age: 28 },
      { id: '2',  name: "Mike", age: 34 },
      { id: '3', name: "Jane", age: 30 }
    ], 
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDervicedStateFromProps');
    return state;
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

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />;      
      
    }
    
    return (      
        <div className={classes.App}>
          <button onClick={() => {this.setState({showCockpit:false})}}>Remove Cockpit</button>
            {this.state.showCockpit ?  <Cockpit
                title={this.props.appTitle}
                persons={this.state.persons}
                showPersons={this.state.showPersons}
                clicked={this.togglePersonsHandler}
             />  : null}
            {persons}
        </div>      
    );
  }
}

export default App;