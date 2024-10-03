// import React from 'react'
import {Nav} from "../Navbar/Navbar"
import {Footer} from "../Footer/Footer";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
    <Nav/>
    <div className='content min-h-screen'>
    <Outlet/>
    </div>
    <Footer/>  
    </div>
  )
}
