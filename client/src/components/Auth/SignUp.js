import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import styled from "styled-components";
import bgImgOne from "../../assets/images/bg-trees.jpg";

const SplitScreen = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 5rem auto;
    max-width: 1200px;
    border-radius: 30px;
`;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75vh;
    margin: 0 auto;
    flex: 1 0 50%;
    background: #000;
    border-radius: 30px 0px 0px 30px;
`;

const ImgContainer = styled.div`
    width:100%;
    height: 75vh;
    border-radius: 0 30px 30px 0;
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

const SignUp = props => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordAgain: ""
    });
    const authContext = useContext(AuthContext);
    // const alertContext = useContext(AlertContext);

    const { register, error, clearErrors, isAuthenticated } = authContext;
    const { name, email, password, passwordAgain } = user;

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
        if (name === "" || email === "" || password === "" || passwordAgain === "") {
            console.error('Passwords must match');
        } else if (password !== passwordAgain) {
            console.error("Error")
        } else {
            register({
                name,
                email,
                password
            });
        };
        e.preventDefault();
    };

    return (
        <>
            <SplitScreen>
                <ImgContainer>
                </ImgContainer>
                <SignUpContainer>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input onChange={onChange} type="text" htmlFor="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input onChange={onChange} type="text" htmlFor="password" name="password" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Enter Password Again</Label>
                            <Input onChange={onChange} type="text" htmlFor="password" name="passwordAgain" />
                        </FormGroup>
                        <Submit>Sign Up</Submit>
                    </Form>
                </SignUpContainer>
                
            </SplitScreen>
        </>
    );
};

export default SignUp;