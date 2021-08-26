import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'id1', name: 'max', age: 28 },
      { id: 'id2', name: 'manu', age: 23 },
      { id: 'id3', name: 'john', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // ye abhi original array ko hi change ker raha hai q k array bhi reference type hai or ye ek wrong practice hai
    // const persons = this.state.persons;
    // **** solution is that copy the array into new array ****
    // const persons = this.state.persons.slice(); // agar slice() mein koi arg na dain to ye array ko copy ker leta hai. Lekin is ki jaga ye use karain
    const persons = [...this.state.persons]; // use spread operator(ES6) instead of slice. But these both are same thing
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            // react mein key dena must hai agar nahi di thi to bhi chal raha tha lekin react future elements ko previous elements se
            // compare kerta hai or dekhta hai k kya change huwa hai
          })}
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