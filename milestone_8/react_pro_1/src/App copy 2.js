import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}




function Counter(){
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increaseCount}>Increase</button> 
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
