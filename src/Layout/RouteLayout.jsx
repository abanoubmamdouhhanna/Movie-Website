import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'

export default function RouteLayout({userData,setuserData}) {

  let navigate=useNavigate();
  function LOgOut()
  {
    localStorage.removeItem('userToken');
    setuserData(null);
    navigate('/login');
  }

  return (
    <>
    <Navbar LOgOut={LOgOut} userData={userData}/>
    <div className="container">
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
