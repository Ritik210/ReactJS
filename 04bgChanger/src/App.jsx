import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
          onClick={() => setColor("red")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}  
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          >Green</button>
          <button 
          onClick={() => setColor("blue")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button 
          onClick={() => setColor("violet")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"violet"}}
          >violet</button>
          <button 
          onClick={() => setColor("grey")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"grey"}}
          >Grey</button>
          <button 
          onClick={() => setColor("cyan")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"cyan"}}
          >Cyan</button>
          <button 
          onClick={() => setColor("olive")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"olive"}}
          >Olive</button>
        </div>
      </div>
    </div>
  )
}

export default App
