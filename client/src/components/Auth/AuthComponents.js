import styled from 'styled-components';
import bgImgOne from "../../assets/images/bg-trees.jpg";

export const SplitScreen = styled.div`
    display: flex;
    align-items: center;
    margin: 8rem auto;
    max-width: 1200px;
    border-radius: 30px;
    box-shadow:2px 2px 2px var(--neutral-color-grey-1);
`;

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75vh;
    margin: 0 auto;
    flex: 1 0 50%;
    background: #000;
    border-radius: 0 30px 30px 0;
`;

export const ImgContainer = styled.div`
    width:100%;
    height: 75vh;
    border-radius: 30px 0 0 30px;
    background-color: var(--primary-color-yellow-1);
    background-image: url(${bgImgOne});
    background-position: center;
    background-size: cover;
    flex: 1 0 50%;
`;

export const Form = styled.form`
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

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Label = styled.label`
    font-size: 24px;
    font-weight: 500;
    color: #FFD102;
    margin: 0 auto;
    max-width: 50%;
`;

export const Input = styled.input`
  font-size: 24px;
  max-width: 50%;
  margin: .5rem auto;
  padding: .5rem;
  border: none;
  border-radius: 30px;
`;

export const Submit = styled.button`
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

export const CreateLink = styled.div`
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
