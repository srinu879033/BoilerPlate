
import { React, useState } from 'react'
import "./index.css"
 
function Counter() {
  const [counter , setCounter]  = useState(0);
   //increase counter
   const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count>0 ? count - 1:0);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
  return (
    <div className="counter">
    <h1>React Counter</h1>
    <div data-testid="counter" className="counter__output" >{counter}</div>
    <div className="btn__container">
      <button data-testid ="increment" className="control__btn" onClick={increase}>Increment</button>
      <button data-testid="decrement" className="control__btn" onClick={decrease}>Decrement</button>
      <button data-testid="reset" className="reset" onClick={reset}>Reset</button>
    </div>
  </div>
  );
}



export default Counter;