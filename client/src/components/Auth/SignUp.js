import React, { useState } from "react";

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
        <div>
            <h1>SignUp</h1>
            <form>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" value={userName} onChange={onChange} required />
                </div>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name="email" value={email} onChange={onChange} required />
                </div>
                <div>
                    <label htmlFor="passwordone">Password</label>
                    <input type="password" name="passwordone" value={passwordOne} onChange={onChange} required />
                </div>
                <div>
                    <label htmlFor="passwordTwo">Enter Password Again</label>
                    <input type="password" name="passwordtwo" value={passwordTwo} onChange={onChange} required />
                </div>
            </form>
        </div>
    );
};

export default SignUp;
