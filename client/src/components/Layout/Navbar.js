import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import classes from "./Navbar.module.css";

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logOut, user, loadUser } = authContext;

    useEffect(() => {

        loadUser();
        // eslint-disable-next-line

    }, []);

    const onLogout = () => {
        logOut();
    };

    const authLinks = (
        <>
            <li>Hello {user && user.name}</li>
            <li className={classes.NavbarItem}>
                <Link to="/"> Home </Link>
            </li>
            <li className={classes.NavbarItem}>
                <Link to="/priority">Priority</Link>
            </li>
            <li className={classes.NavbarItem}>
                <Link to="/currentitems">Current Items</Link>
            </li>
            <li className={classes.NavbarItem}>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className={classes.NavbarLogout}>Logout</span>
                </a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className={classes.NavbarItem}>
                <Link to="/about">About</Link>
            </li>
            <li className={classes.NavbarItem}>
                <Link to="/signup">Sign Up</Link>
            </li>
            <li className={classes.NavbarItem}>
                <Link to="/login">Login</Link>
            </li>
        </>
    );

    return (
        <header>
            <nav className={classes.Navbar}>
                <h1 className={classes.NavbarTitle}>
                    <Link to="/">
                        Class Tracker
                    </Link>
                </h1>
                <ul className={classes.NavbarItems}>
                    {isAuthenticated ? authLinks : guestLinks}
                </ul>
            </nav>

        </header>

    );
};

export default Navbar;