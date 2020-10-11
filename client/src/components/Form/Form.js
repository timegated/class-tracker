import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1 0 30%;
`;

const Submit = styled.button`
  display: block;
  background: #2c2c2c;
  color: #FFD100;

  &:hover {
    background: #FFD100;
    color: #2c2c2c;
  }
`;

const Form = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Input type={props.type} name={props.name} required />
    </Form>
  );
};

export default Form;
