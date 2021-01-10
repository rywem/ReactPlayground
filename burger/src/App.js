import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

//class App extends Component {
const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Mike", age: 34 },
      { name: "Jane", age: 30 }
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    //this.state.persons[0].name = 'Joe';
    setPersonsState({persons: [
      { name: "Maximilian", age: 28 },
      { name: "Mike", age: 34 },
      { name: "Jane", age: 25 }
    ]});
  } 

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}




export default app;

/*
state = {
  persons: [
    { name: "Max", age: 28 },
    { name: "Mike", age: 34 },
    { name: "Jane", age: 30 }
  ],
  otherState: 'some other value'
}*/


