import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/ContactUs/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { gitHubInfoLoader } from './Components/Github/Github.jsx'

//There are 2 ways to create route
//-------------------------First Mtd ---------------------------
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
      
//     ]

//   }
// ])
//---------------------------------------------------------------

//------------------------- Second Mtd --------------------------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route 
      //loader started to fetch the data just when the cursor reaches that link before click
      // you can see a minor loading difference in both ways
      // first is commented in github.jsx file
      loader={gitHubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)
//---------------------------------------------------------------
//Creating a router provider and then creating a router for that which will follow layout formation.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
