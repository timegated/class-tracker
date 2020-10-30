import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import AuthContext from "../../context/auth/authContext";
import { SplitScreen, AuthContainer, ImgContainer, Form, FormGroup, Label, Input, Submit, CreateLink } from './AuthComponents';


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
    }, [error, isAuthenticated, props.history, clearErrors]);

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        if (email === "" || password === "") {
            console.error("email and password cannot be empty");
        } else {
            login({
                email,
                password
            });
        };
        e.preventDefault();
    };

    return (
        <SplitScreen>
            <ImgContainer>
            </ImgContainer>
            <AuthContainer>
                <Form onSubmit={onSubmit}>
                    <h1>Login</h1>
                    <FormGroup>
                    <Label>Email</Label>
                    <Input type="text" name="email" onChange={onChange} autoComplete="email" required />
                    </FormGroup>
                    <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" name="password" autoComplete="password" required />    
                    </FormGroup>
                    <Submit>Login</Submit>
                </Form>
                <CreateLink>
                <h4>Don't have an account?</h4> <Link to="/signup">Create One</Link>
            </CreateLink>
            </AuthContainer>
        </SplitScreen>
    );
};

export default Login;