// compoent add kerne k liye function banana perta hai. Ek p component bana diya
import React from 'react';

import './Person.css';

// *********** show dynamic content ************
// const person = () => {
//   return <p>John is a Person and he is {Math.floor(Math.random() * 30)} years old</p>
// };

// *********** show dynamic content passed as attributes and get it in props object ************
// const person = (props) => {
//   return <p>My name is {props.name} and I'm {props.age} years old</p>
// };

// *********** also show content passed between opening and closing tags ************
const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old</p>
      {/* p k click event pe bhi wo func call ho jiska click prop ko refernce diya tha */}
      <p>{props.children}</p>
      {/* can access content between opening and closing tags using children property or 
      ye braces faltu hain comment mein */}

      {/* used for dynamically change the value */}
      {/* or jo value attr bhi de diya ye 2 way binding ho gayi q k current value hi display hogi  */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;



// ye component to ban gaya lekin 2 kaam or kerne honge
// 1. import react bcz jsx is transformed to react create element
// 2. export ker diya ye component 