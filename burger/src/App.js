import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Mike", age: 34 },
      { name: "Jane", age: 30 }
    ]
  }

  switchNameHandler = (naame) =>{
    this.setState({
      persons: [
        { name: naame, age: 28 },
        { name: "Mike", age: 34 },
        { name: "Jane", age: 30 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 34 },
        { name: "Jane", age: 25 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working!</p>
      <button 
        style={style}
       onClick={() => this.switchNameHandler("MAX!!")}>Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler}
        >My Hobbies: Racing</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
    </div>
    );
  }
}

/*
//class App extends Component {
const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Mike", age: 34 },
      { name: "Jane", age: 30 }
    ]
  });

  const [otherState, setOtherState] = useState({otherState: 'some other value'});

  const switchNameHandler = (newName) => {
    //this.state.persons[0].name = 'Joe';
    setPersonsState({persons: [
      { name: newName, age: 28 },
      { name: "Mike", age: 34 },
      { name: "Jane", age: 25 }
    ]});
  } 
*/
  
  /*
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 34 },
        { name: "Jane", age: 25 }
      ]
    })
  }*/
  /*
  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 34 },
        { name: "Jane", age: 25 }
      ]
    })
  }


  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working!</p>
      <button onClick={() => switchNameHandler('Maximilian')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        click={switchNameHandler.bind(this, 'Max!')}
        changed={nameChangedHandler}
        >My Hobbies: Racing</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
    </div>
  );
}
*/



export default App;

/*
state = {
  persons: [
    { name: "Max", age: 28 },
    { name: "Mike", age: 34 },
    { name: "Jane", age: 30 }
  ],
  otherState: 'some other value'
}*/


