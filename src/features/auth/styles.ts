import styled from 'styled-components';

export const Centered = styled.section`
  min-height: 100vh;
  ${({ theme }) => theme.mixins.fCenter};
`;

export const ContentWrapper = styled.div`
  width: 450px;
  background-color: var(--secondary-black);
`;
