import Test from './Test.jsx'
function App() {
  const name = "Ritik"

  return (
    //We can only return one element in this
    // so if we want to have multiple elements 
    // we can wrap all of them in an empty element.
    <>
    <Test />
    <h1>Hello Ritik</h1>
    <h1>Hello This is {name}</h1>
    </>
    
    
  )
}

export default App
