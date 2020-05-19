import React, { useState } from "react";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={onChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} required />
                </div>
            </form>
        </div>
    );
};

export default Login;
