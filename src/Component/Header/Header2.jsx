import React from 'react'
import { BsList } from 'react-icons/bs'

function Header2() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <div className="logo">
          <a href="../index.html">
            <h1 className="logo me-auto">City</h1><br/>
            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
          </a>
        </div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto" href="../index.html">Home</a></li>
            <li><a className="nav-link scrollto active" href="./departments.html">Departments</a></li>
            <li><a className="nav-link scrollto" href="./doctors.html">Doctors</a></li>
            <li><a className="nav-link scrollto" href="./about.html">About</a></li>
            <li><a className="nav-link scrollto" href="./contact.html">Contact</a></li>
          </ul>
          <BsList className="mobile-nav-toggle"/>
        </nav>

        <a href="./appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
          Appointment</a>

      </div>
    </header>
  )
}

export default Header2
