import React from 'react'
import Logo from "../images/airbnb1.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
        <img src={Logo} width="100px" alt="air bnb logo" />
    </nav>
  )
}

export default Navbar