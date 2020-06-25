import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
// import AlertContext from "../../context/alert/alertContext";
import "./Forms.css";

const SignUp = props => {
    const [user, setUser] = useState({
        email: "",
        passwordOne: "",
        passwordTwo: ""
    });
    const authContext = useContext(AuthContext);
    // const alertContext = useContext(AlertContext);

    const { register, error, clearErrors, isAuthenticated } = authContext;
    const { email, password, passwordTwo } = user;

    useEffect(() => {
        if (isAuthenticated) {
            // redirect
            props.history.push("/");
        };
        if (error === "user already exists") {
            clearErrors();
        };
    }, [error, isAuthenticated, props.history]);

   

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        console.log(register)
        if (email === "" || password === "" || passwordTwo === "") {
            // setAlert("All fields must contain an input");  
        } else if (password !== passwordTwo) {
            // setAlert("Passwords must match");
        } else {
            register({
                email,
                password
            });
        };
        e.preventDefault();
    };

    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name="email" onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordone">Password</label>
                    <input type="password" name="password" onChange={onChange} required minLength="6" autoComplete="new password" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordTwo">Enter Password Again</label>
                    <input type="password" name="passwordTwo" onChange={onChange} required minLength="6" autoComplete="current password" />
                </div>
                <input type="submit" value="Sign Up" className="btn btn-black btn-block" />
            </form>
        </div>
    );
};

export default SignUp;
