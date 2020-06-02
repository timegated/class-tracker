import React, { useState } from "react";
import "./Forms.css";
const SignUp = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        passwordOne: "",
        passwordTwo: ""
    });
    
    const { userName, email, passwordOne, passwordTwo } = user;
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className="form-container">
            <h1>SignUp</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" value={userName} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name="email" value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordone">Password</label>
                    <input type="password" name="passwordOne" value={passwordOne} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordTwo">Enter Password Again</label>
                    <input type="password" name="passwordTwo" value={passwordTwo} onChange={onChange} required />
                </div>
            </form>
        </div>
    );
};

export default SignUp;
