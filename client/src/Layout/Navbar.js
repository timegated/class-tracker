import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="main-menu">
           <ul className="main-menu__items">
               <li className="main-menu__item"><a href="#!">About</a></li>
               <li className="main-menu__item"><a href="#!">Home</a></li>
               <li className="main-menu__item"><a href="#!">Login</a></li>
           </ul> 
        </nav>
    );
};

export default Navbar;
