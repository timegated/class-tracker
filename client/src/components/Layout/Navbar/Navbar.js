import React, { useEffect, useContext } from "react";
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
    background: var(--neutral-color-grey-1);
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
        font-weight: 500;
        line-height: 1;
        text-decoration: none;
        color: var(--primary-color-yellow-2);
        padding: 0.25rem;
    }
    & > a.cta {
        border: 1px solid var(--primary-color-yellow-1);
        border-radius: 10px;
        padding: 0.5rem;
        font-weight: 600;
    }

    & > a.cta:hover {
        background: var(--primary-color-yellow-1);
        color: #000;
    }
    
    & > a:hover {
        border-bottom: 2px solid var(--primary-color-yellow-3);
    }

    & > a:active {
        border-bottom: 2px solid var(--primary-color-yellow-3);
    }
`
const NavLink = styled(Link)`
    &.current-page {
        border-bottom: 2px solid var(--primary-color-yellow-3);
    }
   
`   
const NavTitle = styled.h1`
    & a {
        text-decoration: none;
        color: var(--primary-color-yellow-1);
        font-size: 1.9rem
    }
`

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logOut, user, loadUser } = authContext;

    useEffect(() => {

        loadUser();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onLogout = () => {
        logOut();
    };

    const authLinks = (
        <>
            <NavItem>Hello {user && user.name}</NavItem>
            <NavItem>
                <NavLink activeClassName="current-page" to="/"> Characters </NavLink>
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
                <Link to="/login">Login</Link>
            </NavItem>
            <NavItem>
                <Link className="cta" to="/signup">Sign Up</Link>
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