import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { SplitScreen, AuthContainer, ImgContainer, Form, FormGroup, Label, Input, Submit } from './AuthComponents';


const SignUp = props => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        passwordAgain: ""
    });
    const authContext = useContext(AuthContext);
    // const alertContext = useContext(AlertContext);

    const { register, error, clearErrors, isAuthenticated } = authContext;
    const { email, password, passwordAgain } = user;

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
        console.group(email, password);
        if (email === "" || password === "" || passwordAgain === "") {
        } if (password !== passwordAgain) {
            console.error("Error")
        } else {
            register({
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
                        <h1>Sign Up</h1>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input onChange={onChange} type="text" htmlFor="email" name="email" autoComplete="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input onChange={onChange} type="password" htmlFor="password" name="password" autoComplete="new-password" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Enter Password Again</Label>
                            <Input onChange={onChange} type="password" htmlFor="password" name="passwordAgain" autoComplete="new-password" />
                        </FormGroup>
                        <Submit>Sign Up</Submit>
                    </Form>
                </AuthContainer>
            </SplitScreen>
    );
};

export default SignUp;