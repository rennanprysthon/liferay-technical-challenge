import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;

  @media only screen and (max-width: 967px) {
    & {
      display: none;
    }
  }

`;

export const Image = styled.img`
  max-width: calc(100% - 30px);
`;
