import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="main-menu">
           <ul className="main-menu__items">
               <li className="main-menu__item"><Link to="/" >Home</Link></li>
               <li className="main-menu__item"><Link to="/about">About</Link></li>
               <li className="main-menu__item"><Link to="/login">Login</Link></li>
               <li className="main-menu__item"><Link to="/signup">Sign Up</Link></li>
           </ul> 
        </nav>
    );
};

export default Navbar;
