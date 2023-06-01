import React from 'react'
import { BsList } from 'react-icons/bs'

function Header() {
  return (
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <div className="logo">
        <a href="index.html">
          <h1 className="logo me-auto">City</h1><br/>
          <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
        </a>
      </div>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="index.html">Home</a></li>
          <li><a className="nav-link scrollto" href="./pages/departments.html">Departments</a></li>
          <li><a className="nav-link scrollto" href="./pages/doctors.html">Doctors</a></li>
          <li><a className="nav-link scrollto " href="./pages/about.html">About</a></li>
          <li><a className="nav-link scrollto" href="./pages/contact.html">Contact</a></li>
        </ul>
        <BsList classNameName="mobile-nav-toggle"/>
      </nav>

      <a href="./pages/appointment.html" classNameName="appointment-btn scrollto"><span classNameName="d-none d-md-inline">Make an</span>
        Appointment</a>
        <a href="#" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Login/ Signup</span>
        </a>

    </div>
  </header>
  )
}

export default Header
