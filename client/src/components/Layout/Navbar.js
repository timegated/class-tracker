import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import "./Navbar.css";

const Navbar = () => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout } = authContext;

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <>
            <li className="navbar__item">
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
            <li className="navbar__item">
                <Link to="/currentitems"> Current Items </Link>
            </li>
            <li className="navbar__item">
                <Link to="/priority">Priority</Link>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className="navbar__item">
                <Link to="/signup">Sign Up</Link>
            </li>
            <li className="navbar__item">
                <Link to="/login">Login</Link>
            </li>
        </>
    );

    return (
        <nav className="navbar">
            <h1 className="navbar__title">
                <Link to="/">
                    Class Tracker
                </Link>
            </h1>
            <ul className="navbar__items">
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </nav>
    );
};

export default Navbar;