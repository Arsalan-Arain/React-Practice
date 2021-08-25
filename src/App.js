import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'manu', age: 23 },
      { name: 'john', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'manu', age: 23 },
        { name: 'john', age: 27 }
      ]
    })
  }

  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'max', age: 28 },
        { name: event.target.value, age: 23 },
        { name: 'john', age: 27 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }); // agar true hoga to false ker dega or agar false hoga to true
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'max!')}
            changed={this.nameChangedHandler}>My hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>

        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>

        {persons}
      </div>
    );
  }
}

export default App;