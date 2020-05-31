import React, { useState } from "react";
import "./Login.css";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const { email, password } = user;
   

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    return (
        <div className="form-container">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
            </form>
        </div>
    );
};

export default Login;
