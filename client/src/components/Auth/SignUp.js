import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
// import classes from './Auth.module.css';

const SignUp = props => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordAgain: ""
    });
    const authContext = useContext(AuthContext);
    // const alertContext = useContext(AlertContext);

    const { register, error, clearErrors, isAuthenticated } = authContext;
    const { name, email, password, passwordAgain } = user;

    useEffect(() => {
        if (isAuthenticated) {
            // redirect
            props.history.push("/");
        };
        if (error === "user already exists") {
            clearErrors();
        };
    }, [error, isAuthenticated, props.history, clearErrors]);



    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        if (name === "" || email === "" || password === "" || passwordAgain === "") {
            console.error('Passwords must match');
        } else if (password !== passwordAgain) {
            console.error("Error")
        } else {
            register({
                name,
                email,
                password
            });
        };
        e.preventDefault();
    };

    return (
        <div >
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <div >
                    <label  htmlFor="name">User Name</label>
                    <input type="text" name="name" onChange={onChange} required />
                </div>
                <div >
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name="email" onChange={onChange} required />
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onChange} required minLength="6" autoComplete="new password" />
                </div>
                <div >
                    <label htmlFor="passwordAgain">Enter Password Again</label>
                    <input type="password" name="passwordAgain" onChange={onChange} required minLength="6" autoComplete="current password" />
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUp;