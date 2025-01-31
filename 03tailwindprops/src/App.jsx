//import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)
  // let myObj = {
  //   user : "Ritik",
  //   age : 25
  // }

  // let myArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>
      {/* This is how we pass object and array as props in a component*/}
      {/* <Card newObj = {myObj} arr = {myArr} />  */}
      <Card username = "Ritik" btnText = "Click"/>
      <Card username= "Rohit"/>
    </>
  )
}

export default App
