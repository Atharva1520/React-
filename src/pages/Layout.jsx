import React from 'react'
import Header from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

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