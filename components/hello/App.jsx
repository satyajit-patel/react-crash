import React from 'react'
import './App.css'

// global variable
let x = 10;
let y = 20;
let arr = ["Virat", "Ms", "Rohit", "Surya"];
let logedIn = true;

const App = (props) => {
  return (
    <div>
      {/* use of props */}
      <h1> {props.msg1} </h1> 
      <p>sum of {x} and {y} is {x + y}</p>
      <p>
        some cricketers' names are: <br />
        <ul>{arr.map((name) => (<li>{name}</li>))}</ul>
      </p>
      <p>
        {logedIn ? <h1>{ props.msg2 }</h1> : <h1>please log in</h1> }
      </p>
    </div>
  )
}

export default App


