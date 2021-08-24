import React, { Component } from 'react';
// import React, { useState } from 'react';
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

  // switchNameHandler = () => { --------------- passed argument
  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = "maximilian";

    // ye sirf person ko hi change kare ga baqi jaise yahan ek otherState hai us ko or baqi jo bhi 
    // hongi un ko merge ker de ga
    this.setState({
      persons: [
        // { name: 'maximilian', age: 28 },
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


// // FUNCTIONAL COMPONENTS --> manipulate state of functional component using useState Hook...
// // useState() hook allows to manage state in the functional component
// const App = props => {

//   // useState returns an array of exactly 2 elements 
//   // store returned values using array distructing
//   const [personsState, setPersonsState] = useState({ // pass initial state
//     // personsState give access to this state means old state
//     persons: [
//       { name: 'max', age: 28 },
//       { name: 'manu', age: 23 },
//       { name: 'john', age: 26 }
//     ],
//     // otherState: 'some other value'
//     // is ko is liye comment ker diya q k ab is ki zaroorat nahi is k liye ek or useState hai
//   });

//   // using multiple useState to prevent over-write state problem
//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // jab hooks use kerte hain to new state old state ko over-write ker deti hai na k merge unchanged 
//     // content se. is problems k 2 sol hain ek manually data add ker dain old state se or ek useState 
//     // ko multiple times use karain ye recommended method hai useState wala
//     setPersonsState({
//       persons: [
//         { name: 'maximilian', age: 28 },
//         { name: 'manu', age: 23 },
//         { name: 'john', age: 27 }
//       ],
//       // otherState: personsState.otherState
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm React App</h1>
//       <p>This is really working!</p>

//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }


export default App;