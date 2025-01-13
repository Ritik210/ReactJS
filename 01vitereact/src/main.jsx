import { StrictMode } from 'react'
//import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//I can use the normal function here as well instead of App.jsx
// function MyApp() {
//   return (
//     <>
//     <h1>Hello Luffy</h1>
//     </>
//   )
// }
// const newUser = "Ritik";
// const ReactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target: "_blank"},
//   'click to visit google',
//   newUser
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyApp /> */}
  </StrictMode>,
  
 // ReactElement
)
