import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

// This all can be done in app.jsx as well
// used for nesting your website pages
// This is used to fix the layout of the page like fixing 
// Header and Footer for all pages and changing the middle ones
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
