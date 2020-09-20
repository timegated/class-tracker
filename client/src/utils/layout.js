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
  /* border-radius: 15px; */
  width: ${(props) => props.size / 12 * 100}vw;

  &.dark {
    background-color: var(--color-bg-1);
  }
  @media (min-width: 320px) and (max-width: 800px) {
    width: 100%;
  }
`;
