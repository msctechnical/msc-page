import React from 'react'

import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="navbar">
        <h1><a href="/">MSC TEACHNICAL</a></h1>
        <ul>
          <li><Link to="msc-page/" href="#">Home</Link></li>
          <li><a href="#skills">Services</a></li>
          <li><Link to="/about" href="#">About Us</Link></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li><a href="#youtube">Youtube Channel</a></li>
          <li><Link to="/tutorials">Tutorials</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
