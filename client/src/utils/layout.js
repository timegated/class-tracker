import styled from 'styled-components';

export const Grid = styled.div`

`;

export const Row = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.8);
  display: flex;
  @media (min-width: 320px) and (max-width: 800px) {
          flex-direction: column;
          justify-content: center;
          align-content: center;
      }
`;

export const Col = styled.div`
  text-align: center;
  border: 0.2rem solid rgba(255, 255, 255, 0.8);
  width: ${(props) => props.size / 12 * 100}vw;
  padding: 2rem;
  @media (min-width: 320px) and (max-width: 800px) {
    width: 100%;
  }
`;
