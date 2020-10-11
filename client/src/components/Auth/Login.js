import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import AuthContext from "../../context/auth/authContext";
import styled from "styled-components";

const SplitScreen = styled.div`
    display: flex;
    align-items: center;
    max-width: 1200px;
    border: 1px solid #FFFFFF;
    padding: 15px;
    margin: 5rem auto;
    border-radius: 30px;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10% auto;
    flex: 1 0 50%;
`;
const ImgContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 30px;
    margin-right: 10%;
    background-color: #FFD102;
    flex: 1 0 30%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50vw;
  border: 1px solid #FFFFFF;
  padding: 15px;
  border-radius: 30px;

  & h1 {
      color: #FFD102;
      text-align: center;
  }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
  font-size: 32px;
  max-width: 50%;
  margin: .5rem auto;
  padding: 5px;
  border: none;
  border-radius: 30px;
`;

const Label = styled.label`
    font-size: 24px;
    font-weight: 500;
    color: #FFD102;
    margin: 0 auto;
    max-width: 50%;
`;

const Submit = styled.button`
  display: block;
  background: #2c2c2c;
  color: #FFD102;
  border-radius: 30px;
  font-weight: bold;
  font-size: 24px;
  max-width: 30%;
  padding: 0.75rem;
  margin: 1.5rem auto;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #FFD100;
    color: #2c2c2c;
  }
`;

const CreateLink = styled.div`
    & h4 {
        color: #FFD102;
    }

    & a {
        text-decoration: none;
        font-weight: 500;
        color: #FFD102;
        padding: 0.6rem;
    }

    & a:hover {
        color: #000;
        background-color: #FFD102;
        border-radius: 30px;
    }
`;

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
        <SplitScreen>
            <ImgContainer>
            </ImgContainer>
            <LoginContainer>
                <Form onSubmit={onSubmit}>
                    <h1>Login</h1>
                    <FormGroup>
                    <Label>Email</Label>
                    <Input type="text" name="email" onChange={onChange} required />
                    </FormGroup>
                    <FormGroup>
                    <Label>Password</Label>
                    <Input type="text" name="password" required />    
                    </FormGroup>
                    <Submit onClick={onSubmit}>Sign Up</Submit>
                </Form>
                <CreateLink>
                <h4>Don't have an account?</h4> <Link to="/signup">Create One</Link>
            </CreateLink>
            </LoginContainer>
        </SplitScreen>
    );
};

export default Login;