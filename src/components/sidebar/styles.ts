import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  align-items: center;
`;

export const Image = styled.img`
  max-width: calc(100% - 10px);
`;