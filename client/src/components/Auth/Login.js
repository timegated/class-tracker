
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
// import AlertContext from "../../context/alert/alertContext";
import "./Forms.css";

const Login = props => {
    const [user, setUser] = useState({ email: "", password: "" });
    const { email, password } = user;

    const authContext = useContext(AuthContext);

    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            // redirect
            props.history.push("/");
        };
        if (error === "Invalid credentials") {
            // setAlert(error, "danger");
            clearErrors();
        };
    }, [error, isAuthenticated, props.history]);

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        if (email === "" || password === "") {
            console.log("email and password cannot be empty")
        } else {
            login({
                email,
                password
            });
        };
        e.preventDefault();
    };

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={onChange} required autoComplete="current-email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required autoComplete="current-password" />
                </div>
                <input type="submit" value="Login" className="btn btn-black btn-block" required />
            </form>
        </div>
    );
};

export default Login;