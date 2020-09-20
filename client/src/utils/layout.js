import styled from 'styled-components';

export const Grid = styled.div`
  background-color: var(--neutral--color-grey-2);
`;

export const Row = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 800px) {
          flex-direction: column;
          justify-content: center;
          align-content: center;
      }
`;

export const Col = styled.div`
  text-align: center;
  background-color: var(--neutral-color-grey-1);
  margin: 0.4rem;
  /* border-radius: 15px; */
  border-top: 3px solid var(--primary-color-yellow-1);
  width: ${(props) => props.size / 12 * 100}vw;
  padding: 2rem;

  &.dark {
    background-color: var(--color-bg-1);
  }
  @media (min-width: 320px) and (max-width: 800px) {
    width: 100%;
  }
`;
