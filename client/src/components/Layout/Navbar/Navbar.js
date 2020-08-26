import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import styled from 'styled-components';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    position: fixed;
    width: 50%;
    z-index: 999;
    top: 0;
    overflow-x: visible;
    transition: left 0.6s ease;
    background: #000;
    align-items: center;
    width: 100%;
`
const NavItemList = styled.ul`
    list-style: none;
`
const NavItem = styled.li`
    display: inline-block;
    margin: 0 0.5rem 0 0;

    & > a {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1;
        text-decoration: none;
        color: #FFD100;
        padding: 0.25rem;
    }
    & > a:hover {
        border-bottom: 2px solid #ebebeb;
    }

    & > a:active {
        border-bottom: 2px solid #ebebeb;
    }
`
const NavLink = styled(Link)`
    &.current-page {
        border-bottom: 2px solid #ebebeb;
    }
`
const NavTitle = styled.h1`
    & a {
        text-decoration: none;
        color: #FFD100;
        font-size: 1.9rem
    }
`

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
            <NavItem>Hello {user && user.name}</NavItem>
            <NavItem>
                <NavLink activeClassName="current-page" to="/"> Home </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/priority">Priority</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/currentitems">Current Items</NavLink>
            </NavItem>
            <NavItem>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
            </NavItem>
        </>
    );

    const guestLinks = (
        <>
            <NavItem>
                <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
                <Link to="/signup">Sign Up</Link>
            </NavItem>
            <NavItem>
                <Link to="/login">Login</Link>
            </NavItem>
        </>
    );

    return (
        <header>
            <NavBar>
                <NavTitle>
                    <Link to="/">
                        Class Tracker
                    </Link>
                </NavTitle>
                <NavItemList>
                    {isAuthenticated ? authLinks : guestLinks}
                </NavItemList>
            </NavBar>

        </header>

    );
};

export default Navbar;