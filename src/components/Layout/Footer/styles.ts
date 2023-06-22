import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 80px 0;
  background-color: var(--secondary-black);
`;

export const FooterStack = styled.div`
  width: 20%;
  ${({ theme }) => theme.mixins.column};
  gap: 20px;
`;

export const Description = styled.p`
  ${({ theme }) => theme.mixins.fs14};
  color: var(--gray);
`;
