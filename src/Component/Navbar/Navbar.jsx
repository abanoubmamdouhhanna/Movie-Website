import React from 'react'
import { NavLink } from 'react-router-dom'
import navStyle from './Navbar.module.css'

export default function Navbar({userData , LOgOut}) {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark shadow">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home"><h3>TMDB</h3></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
    <NavLink className="nav-link" to="/movies">Movies</NavLink>
        </li>
        <li className="nav-item">
    <NavLink className="nav-link" to="/tv">Tv Shows</NavLink>
        </li>
        <li className="nav-item">
    <NavLink className="nav-link" to="/people">People</NavLink>
        </li>
        <li className="nav-item">
    <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
    <NavLink className="nav-link" to="/network">Network</NavLink>
        </li>
        
      </ul>:''}
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li> <i className='fab mx-2 mt-3 fa-facebook '></i></li>
        <li> <i className='fab mx-2 mt-3 fa-instagram '></i></li>
        <li> <i className='fab mx-2 mt-3 fa-twitter '></i></li>
        <li> <i className='fab mx-2 mt-3 fa-youtube '></i></li>
        <li> <i className='fab mx-2 mt-3 fa-spotify '></i></li>
       
      

        {userData?<>   <li className="nav-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
        <li className="nav-item ms-3">
          <span className={`${navStyle.span}`} onClick={LOgOut}>Logout <i className="fa-solid fa-right-from-bracket ps-2"></i></span>
        </li></>:<> <li className="nav-item ">
            <NavLink NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li></>}
        </ul>

    </div>
  </div>
</nav>


    </>
  )
}
