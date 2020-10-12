import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import AuthContext from "../../context/auth/authContext";
import styled from "styled-components";
import bgImgOne from "../../assets/images/bg-trees.jpg";

const SplitScreen = styled.div`
    display: flex;
    align-items: center;
    margin: 5rem auto;
    max-width: 1200px;
    border-radius: 30px;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75vh;
    margin: 0 auto;
    flex: 1 0 50%;
    background: #000;
    border-radius: 0 30px 30px 0;
`;

const ImgContainer = styled.div`
    width:100%;
    height: 75vh;
    border-radius: 30px 0 0 30px;
    background-color: var(--primary-color-yellow-1);
    background-image: url(${bgImgOne});
    background-position: center;
    background-size: cover;
    flex: 1 0 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50vw;
  padding: 15px;
  border-radius: 30px;

  & h1 {
      color: #FFD102;
      text-align: center;
      margin-bottom: 1.75rem;
  }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Label = styled.label`
    font-size: 24px;
    font-weight: 500;
    color: #FFD102;
    margin: 0 auto;
    max-width: 50%;
`;

const Input = styled.input`
  font-size: 32px;
  max-width: 50%;
  margin: .5rem auto;
  padding: 5px;
  border: none;
  border-radius: 30px;
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
    padding: 15px;
    text-align: center;
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
                    <Submit onClick={onSubmit}>Login</Submit>
                </Form>
                <CreateLink>
                <h4>Don't have an account?</h4> <Link to="/signup">Create One</Link>
            </CreateLink>
            </LoginContainer>
        </SplitScreen>
    );
};

export default Login;