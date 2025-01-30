import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//simport viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
  //let counter = 5;
  const addVal = () => {
    //console.log("clicked", counter)
    counter++;
    if(counter > 20)
      counter = 20;
    
    setCounter(counter);
  }
  const removeVal = () => {
    counter--;
    if(counter < 0)
      counter = 0;

    setCounter(counter);
  }
  return (
    <>
      <h1>Hello There</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addVal}>Increase Value</button>
      <br />
      <button onClick={removeVal}>Decrease Value</button>
    </>
  )
}

export default App
